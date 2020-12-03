function makeid(length) {
    var result           = '';
    var characters       = '123456789';
    var charactersLength = characters.length;
    for ( var i = 0; i < length; i++ ) {
       result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
 }
 let n = 0
    let inter = setInterval(()=>{
    console.log("\x1b[32m[Robux Code]   \x1b[0m" +makeid(3)+"-"+makeid(3)+"-"+makeid(4))
    n++
}, 1)