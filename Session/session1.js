//function declaration : support is hoisting  which means you can call the function before it is defined
//Scope: function scope
/*function testBlockScoping(){
    console.log("BlockScoping ");

        if(true){
            var functionScopeVar = "function scope";
            let blockScopeVar = "block scope";
            const blockScopeConst = "block scope const";

            console.log("Block scope var: " + functionScopeVar);
            console.log("Block scope let: " + blockScopeVar);
            console.log("Block scope const: " + blockScopeConst);
        }
        console.log("Function scope var: " + functionScopeVar);  
        //console.log("Function scope let: " + blockScopeVar); 
}
testBlockScoping();*/

//function expression
//var_Containing_Function();


 /*console.log("BlockScoping ");

        if(true){
            var functionScopeVar = "function scope";
            let blockScopeVar = "block scope";
            const blockScopeConst = "block scope const";

            console.log("Block scope var: " + functionScopeVar);
            console.log("Block scope let: " + blockScopeVar);
            console.log("Block scope const: " + blockScopeConst);
        }
        console.log("Function scope var: " + functionScopeVar);  
        //console.log("Function scope let: " + blockScopeVar); 
    */

        //Arrow Function : 
        //back tick is used to create template literals which can be used to create multi-line strings and string interpolation
       /*const area_of_triangle = (base, height) => {
        const area = 0.5 * base * height;
          console.log(`The area of triangle is ${area}`);
          return area;
       } 
       console.log("Area of triangle: " + area_of_triangle(10, 5));*/

       //Destructuring : allows you to extract values from arrays or properties from objects and assign them to variables
       /*const colors =["magenta ", "teal", "turquoise"];
       const [firstColor, thirdColor] = colors;
       console.log("Array destructuring: " , firstColor , thirdColor);

       const settings = {
        theme: "dark",
        timeout: 500};

        const {theme: appTheme, timeout = 1000, language = "Spanish"} = settings;

        console.log("Theme: " + appTheme);
        console.log("Timeout: " + timeout);
        console.log("Language: " + language);*/

        //Deep copy : JSON.parse(JSON.stringify(obj)) is a common way to create a deep copy of an object in JavaScript. It works by converting the object to a JSON string and then parsing that string back into a new object. This method is simple and effective for objects that can be represented in JSON format, but it has some  limitations, such as not being able to copy functions or handling circular references.
        //Shallow copy : A shallow copy of an object is a new object that has the same top-level properties as the original object, but it does not create copies of nested objects or arrays. Instead, it copies references to those nested objects or arrays. This means that if you modify a nested object in the shallow copy, it will also affect the original object.

        //Shallow copy: the modifiactions of which we will make are going to effect the original object as well because we are copying the reference of the original object to the new object.
        
        /*const originalObject = {
            name: "John",
            details: {
                version:1.0 ,
                active:  true
    }
}

const shallowCopy = {...originalObject}; // shallow copy using spread operator
shallowCopy.name = "Jane"; // modifying the shallow copy
shallowCopy.details.version = 2.0; // modifying the nested object in the shallow copy

console.log("Original Object:", originalObject);
console.log("Shallow Copy:", shallowCopy);*/


//Deep Copy
const originalObject = {
            name: "John",
            details: {
                version:1.0 ,
                active:  true
    }
}

const deepCopy = JSON.parse(JSON.stringify(originalObject)); // deep copy using JSON methods
deepCopy.name = "Jane"; // modifying the deep copy
deepCopy.details.version = 5.0; // modifying the nested object in the deep copy

console.log("Original Object:", originalObject);
console.log("Deep Copy:", deepCopy);
    