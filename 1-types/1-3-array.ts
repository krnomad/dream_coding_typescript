{
    // Array
    const fruits: string[] = ['🍎', '🍌'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {
        // readonly string[] - 배열을 수정할 수 없음
        
    }

    // Not allowed
    // function printArray(fruits: readonly Arrary<number) {
    // }

    // Tuple -> 💩 - 데이터타입이 고정되어 있지 않아 interface, type alias, class를 사용하는 게 권장
    // 고정된 사이즈의 서로다른 type을 담을 수 있는 배열
    let student: [string, number]; // 
    student = ['name', 123];
    student[0] // name
    student[1] // 123

    const [name, age] = student; // object destructuring

}