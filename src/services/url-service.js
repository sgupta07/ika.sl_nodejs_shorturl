const { URLs } = require('../models/db')
const {int2redix64, redix64toint} = require('../services/redix64-service')
 
//note: database and network operation can be on background thread although node is signle thread
async function createRandomShortCode(link) {
    const genCode = parseInt(Math.random() * 999999999999)

    const exist = await URLs.findOne({
        where: {
            id : genCode
        }
    })

    if(exist){
        // todo : race condition can come in the case of multipule servers and 1 db
      return await createRandomShortCode(link)
    }

    return await URLs.create({
        id:genCode,
        code: int2redix64(genCode),
        link: link

    })

}

async function createCustomShortCode(link, code) {
   
    const id = redix64toint(code)

    const exist = await URLs.findOne({
        where: {
            id : id
        }
    })

    if(exist){
      throw new Error('This short code is not available')
    }

    return await URLs.create({
        id:id,
        code: code,
        link: link

    })
   

}

function findLongUrl(code){
    const id = redix64toint(code)

    return await  URLs.findOne({
        where: {
            id : id
        }
    })
}

module.exports = {
    createCustomShortCode,
    createRandomShortCode,
    findLongUrl
}