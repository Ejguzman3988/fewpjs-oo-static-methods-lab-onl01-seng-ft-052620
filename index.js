class Formatter {
  //add static methods here
  static capitalize(str){
    let newString = str.split("");
    newString[0] = newString[0].toUpperCase()
    return newString.join("")
  }

  static sanitize(str){
    return str.replace(/[^A-Za-z0-9- ']+/g, '');
  }

  static titleize(str){
    const exceptions = ['the', 'a', 'an', 'but', 'of', 'and', 'for', 'at', 'by', 'from']

    let newStr = str.split(" ")
    let finalStr = []
    for(const index in newStr){
      if (exceptions.includes(newStr[index]) && index != 0){
        finalStr.push(newStr[index])
      }else{
        let capitalW = newStr[index].charAt(0).toUpperCase() + newStr[index].slice(1);
        finalStr.push(capitalW)
      }
    }

    return finalStr.join(" ")

  }
}