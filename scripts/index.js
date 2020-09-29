
const host="example.com"  //production domain

// Disable console log on production

if (location.hostname === host) {
    console.log = function () {};
}


function redirect() {
      //check for untrusted domain
      //replace 127.0.0.1 with your domain name
      if(!location.href.match(/^http:\/\/(www\.)?127.0.0.1/i)){
        location.href="http://127.0.0.1" //if regex doesnt match browser wil redirect to default location
      }

      //replace malicious chars in url
      window.location.href=location.href.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/"/g, '&quot;').replace(/javascript:/g,'');

}
redirect()
