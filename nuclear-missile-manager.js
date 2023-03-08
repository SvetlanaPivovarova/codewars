function launchAll(launchMissile) {
    function wrap(x) {
        return function () {launchMissile(x)};
    }
    for(var i = 0; i < 5; i++) {
        setTimeout(wrap(i), i * 1000);
    }
}

launchAll(console.log)
