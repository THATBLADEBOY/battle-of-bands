let bandNumber = 0

const takeNumber = function (bandName)  {
    /*
        Write your awesome code here. See comments
        below for what should be returned.
    */
   return `${bandNumber += 1}. ${bandName} `
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console