function generate() {
    var count = document.getElementById('count').value;
    var fib = fibonacci(count);
    document.getElementById('result').value = fib.join(', ');
}

function fibonacci(n) {
    var fib = [0, 1];
    for (var i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[i - 2];
    }
    return fib.slice(0, n);
}