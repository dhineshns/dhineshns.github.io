var badwords =[
    "biatch",
    "bitch",
    "chinaman",
    "chinamen",
    "chink",
    "crip",
    "cunt",
    "dago",
    "daygo",
    "dego",
    "dick",
    "douchebag",
    "dyke",
    "fag",
    "fatass",
    "fatso",
    "gash",
    "gimp",
    "golliwog",
    "gook",
    "gyp",
    "homo",
    "hooker",
    "jap",
    "kike",
    "kraut",
    "lardass",
    "lesbo",
    "negro",
    "nigger",
    "paki",
    "pussy",
    "raghead",
    "retard",
    "shemale",
    "skank",
    "slut",
    "spic",
    "tard",
    "tits",
    "titt",
    "trannies",
    "tranny",
    "twat",
    "wetback",
    "whore",
    "wop"
];
var randomizerButton = document.getElementById("randomizer");
var textArea = document.getElementById("textArea");

  var item = badwords[Math.floor(Math.random()*badwords.length)];
  textArea.innerHTML = item;

randomizerButton.onclick = function(){
  
  var item = badwords[Math.floor(Math.random()*badwords.length)];
  textArea.innerHTML = item;


}