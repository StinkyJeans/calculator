function addToInputs(value) {
    document.getElementById('inputs').value += value;
}

function clearInput() {
    document.getElementById('inputs').value = '';
}

function calculate() {
    var expression = document.getElementById('inputs').value;
    try {
        var result = eval(expression);
        document.getElementById('inputs').value = result;
    } catch (error) {
        document.getElementById('inputs').value = 'Error';
    }
}