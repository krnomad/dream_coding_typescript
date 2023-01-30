{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    /**
     * In the case that there is only one instance of a class, we commonly use 'Impl' suffix.
     */
    class CoffeeMakerImpl implements CoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeBeanss: number = 0; // 0g  // instance(object) level

        protected constructor(coffeBeanss: number) {
            this.coffeBeanss = coffeBeanss;
        }

        clean(): void {
            throw new Error("Method not implemented.");
        }

        static makeMachine(coffeBeanss: number): CoffeeMakerImpl {
            return new CoffeeMakerImpl(coffeBeanss);
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
            if( this.coffeBeanss < shots * CoffeeMakerImpl.BEANS_GRAMM_PER_SHOT) {
                throw new Error('Not enough coffee beans!');
            }

            this.coffeBeanss -= shots * CoffeeMakerImpl.BEANS_GRAMM_PER_SHOT;
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

    class CaffeLatteMaker extends CoffeeMakerImpl {
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

    const maker: CoffeeMaker = CoffeeMakerImpl.makeMachine(32);
    // maker.addCoffeeBeanss(-34); // will throw an error
    console.log(maker.makeCoffee(2));

    const latteMaker = new CaffeLatteMaker(23, 'abc123');
    console.log(latteMaker.makeCoffee(1));
    console.log(latteMaker.serialNumber);
}