type SuceessState = {
    result: 'success'; // Discriminated Union - 공통적으로 result를 갖게함
    response: {
        body: string;
    };
};

type FailState = {
    result: 'fail';
    reason: string;
};

type LoginState = SuceessState | FailState;

function Login(): LoginState {
    return {
        result: 'success',
        response: {
            body: 'logged in!'
        }
    };
}

// printLoginState(state)
// success -> 🎉 body
// fail -> 😭 reason
function printLoginState(state: LoginState): void {
    if ( state.result == 'success' ) { // can resolve by Discriminated Union
        console.log('🎉 ${state.response.body}');
    } else {
        console.log('😭 ${state.reason}');
    }
}

