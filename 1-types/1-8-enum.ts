{
    /**
     * Enum
     */
    // JavaScript에서는 Enum이라는 것이 없다.
    const MAX_NUM = 6;
    const MAX_STUDENT_PER_CLASS = 10;
    const MONDAY = 0;
    const TUESDAY = 1;
    const WEDNESDAY = 2;
    const DAYS_ENUM = Object.freeze({"MONDAY": 0, "TUESDAY": 1, "WEDNESDAY": 2});
    const dayOfToday = DAYS_ENUM.WEDNESDAY;

    // TypeScript 💩 - enum을 가능하면 사용하지 않는 것이 좋다
    // Typescript에서는 enum을 사용할 수 있지만, union type을 사용하는 것이 더 좋다.
    enum Days {
        MONDAY,     // 0
        TUESDAY,    // 1
        WEDNESDAY,
        THURSDAY,
        FRIDAY,
        SATURDAY,
        SUNDAY,
    };

    // union type으로 enum을 대신할 수 있다. union string literal type을 사용하면 더 좋다.
    type DaysOfWeek = 'Monday' | 'Tuesday' | 'Wednesday';

    console.log(Days.MONDAY);

    let day: Days = Days.MONDAY;
    day = Days.TUESDAY;
    day = 3;    // 3이라는 숫자를 할당할 수 있다. 이는 유지보수에 좋지 않다.

    let dayOfWeek = 'Monday';
}