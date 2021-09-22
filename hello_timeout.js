const string = ["4311o", "th3r3", "w0r1d"]
 const hello = function () {  
for (let i = 0; i < string.length; i++) {
    const delay = 1000 * (i+1);
    setTimeout (() => {console.log(string[i])}, delay)
  } 
};

setTimeout(() => {console.log("4311o", "th3r3", "w0r1d")}, 3000)
hello()


