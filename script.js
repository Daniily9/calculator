function addToDisplay(value) {
    document.getElementById('display').value += value;
}
// Эта функция очищает дисплей, устанавливая его значение в пустую строку.
function clearDisplay() {
    document.getElementById('display').value = '';
}
// Эта функция вычисляет результат выражения на дисплее с помощью функции 'eval'.
// Она обрабатывает ошибки и выводит сообщение 'Error', если выражение недопустимо.
function calculateResult() {
    try {
        var result = eval(document.getElementById('display').value);
        if (isNaN(result)) {
            throw new Error('Результат не є числом');
        }
        document.getElementById('display').value = result;
    } catch (error) {
        document.getElementById('display').value = 'Помилка: ' + error.message;
    }
}

function convert() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var value = document.getElementById('value').value;

    var conversionRates = {
        'кілометри': 1000,
        'метри': 1,
        'сантиметри': 0.01,
        'дециметри': 0.1,
        'міліметри': 0.001
    };

    var fromRate = conversionRates[from];
    var toRate = conversionRates[to];

    var result = value * fromRate / toRate;
    document.getElementById('result').value = result;
}