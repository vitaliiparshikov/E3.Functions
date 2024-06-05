function numbers(a, b) {
    let pro = a;

    let timerId = setInterval(function() {
        console.log(pro);
        if (pro == b) {
            clearInterval(timerId);
        }
        pro++;
    }, 1000);
}

numbers(5, 15);