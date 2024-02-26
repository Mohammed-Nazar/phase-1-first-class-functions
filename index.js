function receivesAFunction(callback) {
    callback();
}

function returnsANamedFunction() {
    return function lala(){

    };
}

function returnsAnAnonymousFunction () {
    return function(){

    }
}