{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    interface CoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
    }

    interface CommercialCoffeeMaker {
        makeCoffee(shots: number): CoffeeCup;
        fillCoffeeBeanss(beans: number): void;
        clean(): void;
    }

    /**
     * In the case that there is only one instance of a class, we commonly use 'Impl' suffix.
     */
    class CoffeeMakerImpl implements CoffeeMaker, CommercialCoffeeMaker {
        private static BEANS_GRAMM_PER_SHOT: number = 7; // class level
        private coffeBeanss: number = 0; // 0g  // instance(object) level

        private constructor(coffeBeanss: number) {
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
            console.log(`Pulling ${shots} shots...`);
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

    const maker: CoffeeMaker = CoffeeMakerImpl.makeMachine(32);
    // maker.addCoffeeBeanss(-34); // will throw an error
    console.log(maker.makeCoffee(2));

    const maker2: CommercialCoffeeMaker = CoffeeMakerImpl.makeMachine(32);
    maker2.fillCoffeeBeanss(32);
    maker2.makeCoffee(2);
    maker2.clean();

    class AmateurUser {
        constructor(private machine: CoffeeMaker) {}

        makeCoffee(): CoffeeCup {
            return this.machine.makeCoffee(2);
        }
    }

    class ProBarista {
        constructor(private machine: CommercialCoffeeMaker) {}

        makeCoffee(): CoffeeCup {
            let coffee = this.machine.makeCoffee(2);
            this.machine.fillCoffeeBeanss(32);
            this.machine.clean();
            return coffee;
        }
    }

    const amateurUser: AmateurUser = new AmateurUser(maker);
    const proBarista: ProBarista = new ProBarista(maker2);

    amateurUser.makeCoffee();
    proBarista.makeCoffee();
}