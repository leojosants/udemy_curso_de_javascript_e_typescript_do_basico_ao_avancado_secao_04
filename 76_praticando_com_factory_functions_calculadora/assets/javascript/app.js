function createCalculator() {
    return {
        display: document.querySelector('[data_display]'),

        start() {
            this.clickButtons();
            this.pressEnter();
        },

        clickButtons() {
            document.addEventListener('click', (event) => {
                const element_target = event.target;

                if (element_target.getAttribute('data_button_number') === '') this.displayButtons(element_target.innerText);

                if (element_target.getAttribute('data_button_clear') === '') this.clearDisplay();

                if (element_target.getAttribute('data_button_del') === '') this.removeOneDigit();

                if (element_target.getAttribute('data_button_equal') === '') this.calculate();
            });
        },

        displayButtons(value) {
            this.display.value += value;
        },

        clearDisplay() {
            this.display.value = '';
        },

        removeOneDigit() {
            this.display.value = this.display.value.slice(0, -1);
        },

        calculate() {
            let operation = this.display.value;

            try {
                operation = eval(operation);

                if (!operation) {
                    alert('Operação inválida!');
                    return;
                };

                this.display.value = String(operation);
            }
            catch (error) {
                alert('Operação inválida!');
                this.clearDisplay();
                return;
            };
        },

        pressEnter() {
            this.display.addEventListener('keyup', (event) => {
                if (event.keyCode === 13) this.calculate();
            });
        },
    };
};

const calculate = createCalculator();
calculate.start();