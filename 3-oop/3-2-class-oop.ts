{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    class CoffeeMaker {
        static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        coffeBeanss: number = 0; // 0g  // instance(object) level

        constructor(coffeBeanss: number) {
            this.coffeBeanss = coffeBeanss;
        }

        static makeMachine(coffeBeanss: number): CoffeeMaker {
            return new CoffeeMaker(coffeBeanss);
        }

        makeCoffee(shots: number): CoffeeCup {;
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

    const coffeeMaker = new CoffeeMaker(32);
    const coffe: CoffeeCup = coffeeMaker.makeCoffee(2);
    console.log(coffe);

    const coffeeMaker2 = CoffeeMaker.makeMachine(3);
    const coffe2: CoffeeCup = coffeeMaker2.makeCoffee(2);
    console.log(coffe2);
    
}