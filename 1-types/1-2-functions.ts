{
    // JavaScript 💩
    function jsAdd(numb1, numb2) {
        return numb1 + numb2;
    }

    // Typescript ✨ 
    function add(numb1: number, numb2: number): number {
        return numb1 + numb2;
    }

    // JavaScript 💩
    function jsFetchNum(id) {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // Typescript ✨
    function tsFetchNum(id: string): Promise<number> {
        // code ...
        // code ...
        // code ...
        return new Promise((resolve, reject) => {
            resolve(100);
        });
    }

    // JavaScript ✨ => TypeScript
    // Optional parameter
    function printName(firstName: string, lastName?: string) {
        console.log(firstName);
        console.log(lastName);
    }
    printName('Steve', 'Jobs');
    printName('Jong');
    printName('Jong', undefined);

    // Default parameter
    function printMessage(message: string = 'default message') {
        console.log(message);
    }
    printMessage();

    // Rest parameter
    function addNumbers(...numbers: number[]): number {
        return numbers.reduce((a,b) => a+b)
    }
}