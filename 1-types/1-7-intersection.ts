/**
 * Intersection types
 */

type Student ={
    name: string;
    score: number;
};

type Worker2 = {
    employeeId: number;
    work: () => void;
};

function internWork(person: Student & Worker2) {
    console.log(`${person.name} ${person.employeeId} ${person.work()}`);
}

internWork({
    name: 'ellie', 
    score: 1,
    employeeId: 123,
    work: () => {},
});