
const host="example.com"  //production domain

// Disable console log on production

if (location.hostname === host) {
    console.log = function () {};
}

//replace malicious chars in url
function redirect() {
    window.location.href=location.href.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/javascript:/g,'');
}
redirect()
