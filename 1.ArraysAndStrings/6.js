/*
String Compression: Implement a method to perform basic string compression using 
the counts of repeated characters. For example, the string aabcccccaaa would 
become a2b1c5a3. If the "compressed" string would not be smaller than the original 
string, your method should return the original string. You can assume the string has 
only uppercase and lowercase letters (a-z).
`*/

const stringCompression = (string) => {
    //even indexes are letters, odd indexes are letter counts
    compressed = [string[0],1]
    //j is index value for compressed array
    let j=0 
    for (let i=1; i< string.length; i++) {
        if (string[i]===compressed[j]) {
            compressed[j+1] +=1
        } else {
            j+=2
            compressed[j]= string[i]
            compressed[j+1]=1
        }
        //if compressed version is longer, returns original
        if (j+1 >= (string.length)) {
            return string
        }
    }
    return compressed.join("")
}


let result = stringCompression("aavvekkkdddoow")
console.log(result)
result = stringCompression("thiswillreturntheoriginalstring")
console.log(result)
result = stringCompression("andtttttthhhhhiiiiiiiisssssswillllllnoooooottt")
console.log(result)