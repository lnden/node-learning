'use strict';
module.exports = {
    port: 8088,
    url: 'mongodb://localhost:27017/elm',
    session: {
        name: 'SID',
        secret: 'SID',
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: 24*60*60*1000*365
        }
    }
}