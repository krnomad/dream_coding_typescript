{
    /**
     * Type Aliases
     */
    
    type Text = string;
    const name: Text = 'jong';
    const address: Text = 'korea';
    type Num = number;
    type Student = {
        name: string;
        age: number;
    };

    const student: Student = {
        // animal: string = 'dog'; // not allowed
        name : 'jong',
        age: 30
    };

    /**
     * String Literal Types - Type을 문자열로도 지정할 수 있다
     * 값을 
     */
    type Name = 'name';
    let ellieName: Name;
    ellieName = 'name';
    type JSON = 'json';
    const json: JSON = 'json';
}