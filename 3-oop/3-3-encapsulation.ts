{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    // public
    // private
    // protected
    class CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeBeanss: number = 0; // 0g  // instance(object) level

        private constructor(coffeBeanss: number) {
            this.coffeBeanss = coffeBeanss;
        }

        static makeMachine(coffeBeanss: number): CoffeeMaker {
            return new CoffeeMaker(coffeBeanss);
        }

        addCoffeeBeanss(beans: number) {
            if ( beans < 0 ) {
                throw new Error('value for beans should be greater than 0');
            }

            this.coffeBeanss += beans;
        }

        makeCoffee(shots: number): CoffeeCup {
            if(this.coffeBeanss < shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }
    
            this.coffeBeanss -= shots * CoffeeMaker.BEANS_GRAMM_PER_SHOT;
            // console.log(`Making ${shots} shots... current coffee beans: ${this.coffeBeanss}g`)
    
            return {
                shots, // if key and value are same, you can use only one
                hasMilk: false
            }
        }
    }

    class User {
        // private firstName: string;
        // private lastName: string;

        // constructor(firstName: string, lastName: string) {
        //     this.firstName = firstName;
        //     this.lastName = lastName;
        // }

        private internalAge = 4;
        get age(): number {
            return this.internalAge;
        }

        set age(num: number) {
            if (num < 0) {
                throw new Error('Age should be greater than 0');
            }
            this.internalAge = num;
        }

        constructor(private firstName: string, public lastName: string) {
        
        }

        get fullName(): string {
            return `${this.firstName} ${this.lastName}`;
        }
    }

    const maker = CoffeeMaker.makeMachine(3);
    // maker.addCoffeeBeanss(-34); // will throw an error
    maker.addCoffeeBeanss(100);
    console.log(maker.makeCoffee(2));

    const user = new User('Steve', 'Jobs');
    console.log(user);
    console.log(user.lastName);
    console.log(user.fullName);

    user.age = 6;
    console.log(user.age);
}