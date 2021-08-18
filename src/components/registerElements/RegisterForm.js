import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';
import { newUserProfile } from '../jsonComponents';
import '../../styles/main.scss';

const RegisterForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [repeatPassword, setRepeatPassword] = useState("")
    const [emailWarn, setEmailWarn] = useState("");
    const [passwordWarn, setPasswordWarn] = useState("")
    const [repeatPasswordWarn, setRepeatPasswordWarn] = useState("");
    const [warnBorderEmail, setWarnBorderEmail] = useState("");
    const [warnBorderPassword, setWarnBorderPassword] = useState("");
    const [warnBorderRepeatPassword, setWarnBorderRepeatPassword] = useState("");
    const [formValid, setFormValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);

    const validateEmail = () => {
        if (validator.isEmail(email)) {
            setEmailWarn("")
            setWarnBorderEmail("")
            setEmailValid(true)
        }
        else {
            setEmailValid(false)
            setEmailWarn("Błędny email")
            setWarnBorderEmail("err-border")
        }
    };

    const handleBlur = () => {
        if (password.length < 6) {
            setPasswordWarn("Hasło jest za krótkie")
            setWarnBorderPassword("err-border")
        }
        else if (password.length > 36) {
            setPasswordWarn("Hasło nie może być dłuższe niż 36 znaków")
            setWarnBorderPassword("err-border")
        }
        else if (repeatPassword !== password) {
            setPasswordWarn("")
            setRepeatPasswordWarn("Hasła są różne")
            setWarnBorderPassword("")
            setWarnBorderRepeatPassword("err-border")
        }
        else{
            setPasswordWarn("")
            setRepeatPasswordWarn("")
            setWarnBorderPassword("")
            setWarnBorderRepeatPassword("")
            setFormValid(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid === true && emailValid === true) {
            const newUser = {
                userEmail: email,
                userPassword: password
            };
            newUserProfile(newUser)

        }
    }

    return (
        <div className="register-container">
            <h1>Zarejestruj się</h1>
            <div className="deco" />
            <div className="form-container">
                <form onSubmit={handleSubmit}>
                    <div className="inputs">
                        <label for="email">Email</label>
                        <input 
                            id={warnBorderEmail}
                            onChange={e => setEmail(e.target.value)}
                            type="email" 
                            name="email" 
                            value={email}
                            onBlur={validateEmail} 
                        />
                        <span className="err-txt">{emailWarn}</span>
                        <label for="password" name="password">Hasło</label>
                        <input 
                            id={warnBorderPassword} 
                            type="password" 
                            name="password" 
                            onChange={e => setPassword(e.target.value)}
                            onBlur={handleBlur}
                        />
                        <span className="err-txt">{passwordWarn}</span>
                        <label 
                            for="password" 
                            name="password"
                        >
                            Powtórz hasło
                        </label>
                        <input 
                            id={warnBorderRepeatPassword}
                            type="password" 
                            name="password" 
                            onChange={e => setRepeatPassword(e.target.value)}
                            onBlur={handleBlur}
                        />
                        <span className="err-txt">{repeatPasswordWarn}</span>
                    </div>
                    <div className="buttons">
                        <div className="button">
                            <Link to="/Login" className="login butt">
                                Zaloguj się
                            </Link>
                        </div>
                        <div className="button">
                            <input className="butt" type="submit"
                                value="Załóż konto" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisterForm;