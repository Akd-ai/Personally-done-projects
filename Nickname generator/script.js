let nicknames = ["BeautifulCynthia","NovaStar","ZeeBoss","Sparky","RavenBlack","Frostbite","sunnySide","AceVentura","LunaLove","BlazeWild","Gizmo",
    "MuffinTop","SweetCheeks","HoneyBee","CuddleBear","Fluffball","Sugarplum","Snookies",];

function nickGen(nicknames) {
let random = Math.floor(Math.random() * nicknames.length);
document.getElementById('gen').innerHTML = nicknames[random];
} 
nickGen(nicknames);

