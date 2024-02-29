(function(window, document, undefined) {
    let result = document.getElementById('result');
    const buttons = document.querySelectorAll('#calculator input[type="button"]');
    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            handle(button.value);
        });
    });

    function handle(value) {
        switch(value) {
            case '=':
                calcResult();
                break;
            case 'c':
                clearResult();
                break;
            default:
                appendResult(value);
                break;
        }
    }

    function appendResult(value) {
        result.value += value;
    }

    function clearResult() {
        result.value = '';
    }

    function calcResult() {
        try {
            const expressionResult = eval(result.value);
            if (!isFinite(expressionResult)) {
                throw new Error('Результат не определен');
            }
            result.value = expressionResult.toString();
        } catch (error) {
            result.value = 'Ошибка';
        }
    }
})(window, document);
