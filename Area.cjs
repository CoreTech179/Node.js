// Now we are using file based modules and we need to export whatever we are writting such that we can use this file methods by importing its functionalities on our main file (i.e. index.js)
// For that we need to write ( export default functionDefination )


// here we are exporting this area & perimeter function using "exports.functionDefination" way

// exports.Area = (a)=>{
//     return (a*a);
// }

// exports.perimeter = (a)=>{
//     return (4*a);
// }



// Using module.exports.functionName = customName; 

// Note --> CustomName can be anything but the condition is that we have to use the same custom name in our main index.cjs file also otherwise it will give an error.


const Area = (a)=>{
    return (a*a);
}

const perimeter = (a)=>{
    return (4*a);
}

module.exports.Area = Area;
module.exports.perimeter = perimeter;
