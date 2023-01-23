{
    // Type Assertions - type을 강요하는 하나의 방법
    /**
     * Type Assertions 💩
     * JavaScript에서는 type을 강제할 수 없다. 이경우 TypeScript에서는 type을 강제해 사용할 수 있다.
     */

    function jsStrFunc(): any {
        return 'hello';
    }

    const result = jsStrFunc();
    // result.length;  // result는 any type이기 때문에 length를 사용할 수 없다.
    console.log(`${(result as string).length}`); // 5
    console.log(`${(<string>result).length}`); // 5

    const wrong: any = 5;
    console.log(`${(wrong as Array<number>).push(1)}`); // will throw a runtime exception 💩

    function findNumbers(): number[] | undefined {
        return undefined;
    }

    const numbers = findNumbers();
    // numbers.push(2);   // numbers가 undefined일 수 있기 때문에 push를 사용할 수 없다.
    numbers!.push(2);  // numbers가 undefined일 수 있지만, push를 사용할 수 있다.

    const button = document.querySelector('class');
    if (button) {
        button.nodeValue;
    }

    // cf
    const button2 = document.querySelector('class')!;
    button2.nodeValue;
}