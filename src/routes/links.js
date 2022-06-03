
const { Router } = require('express')

const route = Router()

/**
 * POST /api/links
 * BODY
 *    link:  http://xxxx.xx/xxx
 *   -----optional----
 *    code: xxxxx        
 * 
 * 
 */

route.post('/', (req, res) => {
    
})


/** 
 * GET /api/links/xxxxx
 *  RESPONSE
 *       link: 
 * 
 * 
*/
route.get('/:code', (req, res) => {

} )

module.exports = route




