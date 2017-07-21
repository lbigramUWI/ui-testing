//
// global debug options for tests
//
module.exports = {
    url:  process.env.FOLIO_UI_URL || 'http://folio-testing.aws.indexdata.com',
    username: process.env.FOLIO_UI_USERNAME || 'diku_admin',
    password: process.env.FOLIO_UI_PASSWORD || 'admin',
    debug_sleep: process.env.FOLIO_UI_DEBUG_SLEEP || 4000,
    select: {
      username: 'input[name=username]',
      password: 'input[name=password]',
      submit: 'button[type=submit]',
      logout: '#clickable-logout',
      settings: 'a[href="/settings"]'
    },

    nightmare: process.env.FOLIO_UI_DEBUG == 2 ? {
        typeInterval: 50,
        openDevTools: {
            mode: 'detach'
        },
        width: 800,
        height: 600,
        show: true
    } : process.env.FOLIO_UI_DEBUG == 1 ? {
        width: 1600,
        height: 1200,
        typeInterval: 50,
        show: true
    } : { typeInterval: 50 }
}
