import Cookies from 'js-cookie'

export const getCooksFromReq = (req, cookName) => {
    let cooksList = {}
    let cookValue

    const rhc = req.headers.cookie

    rhc ?
    rhc.split(';').forEach((cookie) => {
        const sections = cookie.split('=')
        cooksList[ sections.shift().trim() ] = decodeURI(sections.join('='))
    })
    : null

    if(cookValue = cooksList[`${cookName}`]) {
        return cookValue
    } else {
        return undefined
    }
}

export const getCookies = (req) => {
    let cooks

    if(process.browser) {
        cooks = Cookies.get('x-jwt')
    } else {
        cooks = getCooksFromReq(req, 'x-jwt')
    }

    return cooks
}