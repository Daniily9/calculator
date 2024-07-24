function convert() {
    var from = document.getElementById('from').value;
    var to = document.getElementById('to').value;
    var value = document.getElementById('value').value;

    var conversionRates = {
        'байти': 1,
        'кілобайти': 1024,
        'мегабайти': Math.pow(1024, 2),
        'гігабайти': Math.pow(1024, 3),
        'терабайти': Math.pow(1024, 4)
    };

    var fromRate = conversionRates[from];
    var toRate = conversionRates[to];

    var result = value * fromRate / toRate;
    document.getElementById('result').value = result;
}