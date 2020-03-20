module.exports = function check(str, bracketsConfig) {
    let stack = [];
    let openBracketsChart = {};
    let closingBracketsChart = {};
    for (let i = 0; i < bracketsConfig.length; i++) {
        openBracketsChart[bracketsConfig[i][0]] = i;
        closingBracketsChart[bracketsConfig[i][1]] = i;
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i] in closingBracketsChart && str[i] === stack[stack.length - 1]) {
            stack.pop();
        } else {
            if (str[i] in openBracketsChart) {
                stack.push(str[i])
            } else {
                if (closingBracketsChart[str[i]] === openBracketsChart[stack[stack.length - 1]]) {
                    stack.pop()
                } else {
                    return false;
                }


            }
        }
    }

    return stack.length !== 0 ? false : true;

}

