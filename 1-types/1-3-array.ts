{
    // Array
    const fruits: string[] = ['π', 'π'];
    const scores: Array<number> = [1, 3, 4];
    function printArray(fruits: readonly string[]) {
        // readonly string[] - λ°°μ΄μ μμ ν  μ μμ
        
    }

    // Not allowed
    // function printArray(fruits: readonly Arrary<number) {
    // }

    // Tuple -> π© - λ°μ΄ν°νμμ΄ κ³ μ λμ΄ μμ§ μμ interface, type alias, classλ₯Ό μ¬μ©νλ κ² κΆμ₯
    // κ³ μ λ μ¬μ΄μ¦μ μλ‘λ€λ₯Έ typeμ λ΄μ μ μλ λ°°μ΄
    let student: [string, number]; // 
    student = ['name', 123];
    student[0] // name
    student[1] // 123

    const [name, age] = student; // object destructuring

}