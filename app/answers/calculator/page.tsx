'use client';

import classes from './calculator.module.css';
import { useState } from 'react';


type InputFieldProps = {
    id: string;
    label: string;
    value: number;
    onChange: (value: number) => void;
};

const InputField: React.FC<InputFieldProps> = ({ id, label, value, onChange }) => {
    return (
        <div className={classes.inputGroup}>
            <label htmlFor={id}>{label}</label>
            <input
                id={id}
                type="number"
                placeholder={label}
                value={value}
                onChange={(event) => onChange(+event.target.value)}
                aria-label={label}
                min={0} // Avoid negative numbers if not needed
            />
        </div>
    );
};

const Calculator = () => {
    const [firstNumber, setFirstNumber] = useState<number>(0);
    const [secondNumber, setSecondNumber] = useState<number>(0);
    const [total, setTotal] = useState<number>(0);

    const handleTotal = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setTotal(firstNumber + secondNumber);
    };

    const handleClear = () => {
        setFirstNumber(0);
        setSecondNumber(0);
        setTotal(0);
    };

    return (
        <div className={classes.calculatorWrapper}>
            <div className={classes.wrapper}>
                <h1>Adding Two Numbers</h1>
                <div className={classes.calculatorSection}>
                    <div className={classes.calculatorInputs}>
                        <form onSubmit={handleTotal}>
                            <InputField
                                id='firstNumber'
                                label='First Number'
                                value={firstNumber}
                                onChange={setFirstNumber}
                            />
                            <InputField
                                id='secondNumber'
                                label='Second Number'
                                value={secondNumber}
                                onChange={setSecondNumber}
                            />
                            <div className={classes.footerButtons}>
                                <button className={classes.submitButton} type='submit'>Add Two Numbers</button>
                                <button className={classes.clearButton} type='button' onClick={handleClear}>Clear</button>
                            </div>
                            <div className={classes.totalWrapper}>
                                <p>Total:</p>
                                <div className={classes.answer} aria-live="polite">{total}</div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Calculator;
