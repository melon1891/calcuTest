function isNumeric(value: string): boolean {
    return !isNaN(Number(value));
}

function calculate(a: number, b: number, operator: string): number | string {
    switch (operator) {
        case '+':
            return a + b;
        case '-':
            return a - b;
        case '*':
            return a * b;
        case '/':
            return a / b;
        default:
            return '🙅';
    }
}

function main() {
    const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    rl.question('Enter first number: ', (firstInput: string) => {
        if (!isNumeric(firstInput)) {
            console.log('🙅');
            rl.close();
            return;
        }

        rl.question('Enter second number: ', (secondInput: string) => {
            if (!isNumeric(secondInput)) {
                console.log('🙅');
                rl.close();
                return;
            }

            rl.question('Enter operator (+, -, *, /): ', (operator: string) => {
                const a = Number(firstInput);
                const b = Number(secondInput);
                const result = calculate(a, b, operator);
                console.log(`Result: ${result}`);
                rl.close();
            });
        });
    });
}

main();
