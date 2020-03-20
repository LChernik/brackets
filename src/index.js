module.exports = function check(str, bracketsConfig) {
    // your solution
    let brackets = str;

    if(brackets.length % 2 > 0) {
        return false;
    }
    function checkBrackets() {
        for (let i=0; i <= brackets.length / 2 - 1; i++){
            let openBracket = brackets[i];
            let closedBracket;
            bracketsConfig.forEach(element => {
                if (element.includes(openBracket)) {
                    closedBracket = element[1];
                }
            });
            if (brackets[i+1] === closedBracket) {
                if (brackets.length === 2) {
                    return true;
                }
                else {
                    brackets = brackets.slice(0, i) + brackets.slice(i + 1 + 1);
                    i = -1;
                    return checkBrackets()
                }
            }
        }
        return false;
    }
    return checkBrackets();
}
