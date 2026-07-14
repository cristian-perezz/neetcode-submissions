class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isValid(s) {
        let stack = [];

    for (let i = 0; i < s.length; i++){
        let char = s[i];

        if (char === "(" || char === "[" || char === "{"){
            stack.push(char);
        }else{
            let lastOpen = stack.pop();

            if (char === ")" && lastOpen !== "(") {
                return false;
}

            if (char === "]" && lastOpen !== "[") {
                return false;
            }

            if (char === "}" && lastOpen !== "{") {
                return false;
            }
            if (lastOpen === undefined) {
                return false;
            }
        }
    }
    return stack.length === 0;
};
}

