{
    type CoffeeCup = {
        shots: number;
        hasMilk?: boolean;
        hasSugar?: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    /**
     * In the case that there is only one instance of a class, we commonly use 'Impl' suffix.
     */
    class CoffeeMachine implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeBeanss: number = 0; // 0g  // instance(object) level

        public constructor(coffeBeanss: number) {
            this.coffeBeanss = coffeBeanss;
        }

        clean(): void {
            throw new Error("Method not implemented.");
        }

        static makeMachine(coffeBeanss: number): CoffeeMachine {
            return new CoffeeMachine(coffeBeanss);
        }

        fillCoffeeBeanss(beans: number) {
            if ( beans < 0 ) {
                throw new Error('value for beans should be greater than 0');
            }

            this.coffeBeanss += beans;
        }

        private extract(shots: number) {
            console. log(`Pulling ${shots} shots...`);
            return {
                shots,
                hasMilk: false
            }
        }

        private preheat() {
            console.log('heating up...');
        }

        private grindBeanss(shots: number) {
            console.log(`grinding beans for ${shots}`);
            if( this.coffeBeanss < shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }

            this.coffeBeanss -= shots * CoffeeMachine.BEANS_GRAMM_PER_SHOT;
        }

        /**
         * @param shots how many shots of coffee you want
         * @returns CoffeeCup object with shots and hasMilk
         */
        makeCoffee(shots: number): CoffeeCup {
            this.grindBeanss(shots);
            this.preheat();
            return this.extract(shots);
        }
    }

    class CaffeLatteMachine extends CoffeeMachine {
        constructor(coffeBeanss: number, public readonly serialNumber: string) {
            super(coffeBeanss);
        }

        private steamMilk() {
            console.log('Steaming some milk...');
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.steamMilk();
            return {
                ...coffee,
                hasMilk: true
            }
        }
    }

    class SweetCoffeeMachine extends CoffeeMachine {
        constructor(coffeBeanss: number) {
            super(coffeBeanss);
        }

        private addSugar() {
            console.log('Adding sugar...');
        }

        makeCoffee(shots: number): CoffeeCup {
            const coffee = super.makeCoffee(shots);
            this.addSugar();
            return {
                ...coffee,
                hasSugar: true
            }
        }
    }

    const maker: CoffeeMachine = CoffeeMachine.makeMachine(32);
    
    // maker.addCoffeeBeanss(-34); // will throw an error
    console.log(maker.makeCoffee(2));

    const latteMaker = new CaffeLatteMachine(23, 'abc123');
    console.log(latteMaker.makeCoffee(1));
    console.log(latteMaker.serialNumber);

    const machines: CoffeeMaker[] = [
        new CoffeeMachine(16),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMachine(16),
        new CoffeeMachine(18),
        new CaffeLatteMachine(16, '1'),
        new SweetCoffeeMachine(16)
    ];

    machines.forEach( it => {
        console.log('-----------------');
        it.makeCoffee(1);
    })
} 