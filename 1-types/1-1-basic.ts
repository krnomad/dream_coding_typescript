{
    /**
     * JavaScript
     * Primitive: number, string, boolean, bigint, symbol, null, undefined
     * Object: function, array...
     */
    
    // number
    const num: number = -6; // Type 'string' is not assignable to type 'number'.

    // string
    const str: string = 'hello';

    // boolean
    const boal: boolean = false;

    // undefined - 데이터타입이 있거나 아직 정해지지 않은 상태
    let name: undefined; // 💩
    let age: number | undefined;
    function find2(): number | undefined {
        return undefined;
    }

    // null - 데이터가 있거나 없는 상태
    let person: string | null; // 💩
    person = null;
    person = '1';
}