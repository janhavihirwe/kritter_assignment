function normalizeString(input) {
    let trimmedStr = input.trim();
    let cleanedStr = trimmedStr.replace(/[^a-zA-Z0-9 ]/g, "");
    let singleSpaceStr = cleanedStr.replace(/\s+/g, " ");
    let camelCaseStr = singleSpaceStr.split(" ").map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(" ");
    return camelCaseStr;
}
  

let input = "Hello! World@ This is a Test!. ";
let output = normalizeString(input);
console.log(output);  
  