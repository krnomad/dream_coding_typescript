{
    function move(direction) {
        console.log(direction);
    }
    move('down');
    var tile = 16;
    // function: login -> success, fail
    function login2(id, password) {
        return 'password_error';
    }
    function Login() {
        return {
            response: {
                body: 'logged in!'
            }
        };
    }
    // printLoginState(state)
    // success -> 🎉 body
    // fail -> 😭 reason
    function printLoginState(state) {
        if (state instanceof SuceessState) {
            console.log("\uD83C\uDF89 ".concat(state.response.body));
        }
        else {
            console.log("\uD83D\uDE2D ".concat(state.reason));
        }
        if ('response' in state) {
            console.log("\uD83C\uDF89 ".concat(state.response.body));
        }
        else {
            console.log("\uD83D\uDE2D ".concat(state.reason));
        }
        // if( state == SuceessState ) {
        //     console.log(`🎉 ${state.response.body}`);
        // }
    }
}
