{
    /**
     * Union Types: OR
     * 타입을 여러개 지정할 수 있다
     */
    type Direction = 'left' | 'right' | 'up' | 'down';
    function move(direction: Direction) {
        console.log(direction);
    }

    move('down');

    type TileSize = 8 | 16 | 32;
    const tile: TileSize = 16;

    type LoginResult = 'sucees' | 'password_error' | 'unknown_error';
    // function: login -> success, fail
    function login2(id: string, password: string): LoginResult {
        return 'password_error';
    }

    type SuceessState = {
        response: {
            body: string;
        };
    };

    type FailState = {
        reason: string;
    };

    type LoginState = SuceessState | FailState;

    function Login(): LoginState {
        return {
            response: {
                body: 'logged in!'
            }
        };
    }

    // printLoginState(state)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state: LoginState): void {
        if ( 'response' in state ) { // can resolve by Discriminated Union
            console.log('🎉 ${state.response.body}');
        } else {
            console.log('😭 ${state.reason}');
        }
    }
}