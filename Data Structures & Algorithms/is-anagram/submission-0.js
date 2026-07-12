class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if (s.length !== t.length)
        {
            return false;
        }

        const first = new Map();
        const second = new Map();

    for (let i = 0; i < s.length; i++)
    {
        if(first.has(s[i]))
        {
            first.set(s[i], first.get(s[i]) + 1);
        }
        else
        {
            first.set(s[i],1);
        }
    }

    for (let i = 0; i < t.length; i++)
    {
        if(second.has(t[i]))
        {
            second.set(t[i], second.get(t[i]) + 1);
        }
        else
        {
            second.set(t[i],1);
        }
    }

    for (let [key, value] of first)
    {
        if (!second.has(key) || second.get(key) !== value)
        {
            return false;
        }
    }
    return true;
}
}
