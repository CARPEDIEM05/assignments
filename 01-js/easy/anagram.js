/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(s, t) {
  if(s.length!=t.length)return false;
    let myMap = new Map();
    for(let i=0;i<s.length;i++){
        if(!myMap.has(s[i])){
            myMap.set(s[i],1);
        }
        else{
           myMap.set(s[i],myMap.get(s[i])+1);
        }
    }
    for(let i=0;i<t.length;i++){
        if(myMap.has(t[i])){
            myMap.set(t[i],myMap.get(t[i])-1);
            if(myMap.get(t[i])==0)myMap.delete(t[i]);
        }
        else{
            return false;
        }
    }
    return true;

}

module.exports = isAnagram;
