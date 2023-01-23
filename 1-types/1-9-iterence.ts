/**
 * Type Inference
 */

let text = 'hello';
text = 'hi';
// text = 1;   // Type '1' is not assignable to type 'string'.
function print(message: string = 'hello') {
    console.log(message);
}

print('hello');
// print(1);   // Argument of type '1' is not assignable to parameter of type 'string'.


function add(x: number, y: number) {
    return x + y; // return type is number - type inference
}

const result = add(1,2);    // result is number - type inference
// In the case of primitive type, it is okay to use type inference.
