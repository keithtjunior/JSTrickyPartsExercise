function createAccount(pin, amount=0) {
    return {
        checkBalance(enteredPin){
            return enteredPin === pin ? `Current balance: $${amount}.` : 'Invalid PIN.';
        },
        deposit(enteredPin, deposit){
            if(enteredPin !== pin) return 'Invalid PIN.';
            amount += deposit;
            return `Succesfully deposited $${deposit}. Current balance: $${amount}.`;
        },
        withdraw(enteredPin, withdrawal){
            if(enteredPin !== pin) return 'Invalid PIN.';
            if(withdrawal > amount) return 'Withdrawal amount exceeds account balance. Transaction cancelled.';
            amount -= withdrawal;
            return `Succesfully withdrew $${withdrawal}. Current balance: $${amount}.`;
        },
        changePin(enteredPin, newPin){
            if(enteredPin !== pin) return 'Invalid PIN.';
            pin = newPin;
            return 'PIN successfully changed!';
        }
    }
}

module.exports = { createAccount };
