//const sentence = "hello there from lighthouse labs";

const animation = function (sentence) {
    for (let i = 0; i < sentence.length; i++) {
        const delay = 50 * (i+1);
        setTimeout (() => {process.stdout.write(sentence[i])}, delay);
   }
   setTimeout(() => {process.stdout.write("\n");}, 1000);
}

animation("I am mahdieh")