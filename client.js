const {twit} = require('twit');

const client = new twit({
    consumer_key: 'ybVtTaXlOYvblGB99jLKbiYvv',
    consumer_secret: 'dhwNlcGPLdrU8dl5mFBvij5zxVzAbh58Z1SYVR9KGwUF6a2WIk',
    access_token: '1561822140332216320-zMiITTBbrQO1MkWSlmmUjzH0rU9MA7',
    access_token_secret: 'ZvSWEzhAMCBXiisKU7zn8DzefQYvq3fK7fkEmq4iokhKd'
})

module.exports = client;