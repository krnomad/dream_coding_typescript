{
    type CoffeeCup = {
        shots: number;
        hasMilk: boolean;
    }

    const BEANS_GRAMM_PER_SHOT: number = 7; // 1 shot = 7g
    let coffeBeanss: number = 0; // 0g

    function makeCoffee(shots: number): CoffeeCup {;
        if(coffeBeanss < shots * BEANS_GRAMM_PER_SHOT) {
            throw new Error('Not enough coffee beans!');
        }

        coffeBeanss -= shots * BEANS_GRAMM_PER_SHOT;
        // console.log(`Making ${shots} shots... current coffee beans: ${coffeBeanss}g`)

        return {
            shots, // if key and value are same, you can use only one
            hasMilk: false
        }
    }

    coffeBeanss += 3 * BEANS_GRAMM_PER_SHOT;
    const coffe: CoffeeCup = makeCoffee(2);
    console.log(coffe);
}