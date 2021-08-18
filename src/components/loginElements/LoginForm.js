import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import validator from 'validator';

import '../../styles/main.scss';

const LoginForm = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [emailWarn, setEmailWarn] = useState("");
    const [PasswordWarn, setPasswordWarn] = useState("")
    const [warnBorderEmail, setWarnBorderEmail] = useState("");
    const [warnBorderPassword, setWarnBorderPassword] = useState("");
    const [passwordValid, setPasswordValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);

    const handleBlurEmail = () => {
        if (validator.isEmail(email)) {
            setEmailWarn("")
            setWarnBorderEmail("")
            setEmailValid(true)
        }
        else {
            setEmailWarn("Błędny email")
            setWarnBorderEmail("err-border")
            setEmailValid(false)
        }
    }

    const handleBlur = () => {
        if (password < 6) {
            setPasswordWarn("Hasło jest za krótkie")
            setWarnBorderPassword("err-border")
        }
        else {
            setPasswordWarn("")
            setWarnBorderPassword("")
            setPasswordValid(true)
        }
    }

    return (
        <div className="login-container">
            <h1>Zaloguj się</h1>
            <div className="deco" />
            <div className="form-container">
                <form>
                    <div className="login-inputs">
                        <label for="email">Email</label>
                        <input
                            id={warnBorderEmail}
                            onChange={e => setEmail(e.target.value)}
                            type="email"
                            name="email"
                            value={email}
                            onBlur={handleBlurEmail} />
                        <span className="err-txt">{emailWarn}</span>
                        <label for="password" name="password">Hasło</label>
                        <input
                            id={warnBorderPassword}
                            onChange={e => setPassword(e.target.value)}
                            type="password"
                            name="password"
                            value={password}
                            onBlur={handleBlur} />
                        <span className="err-txt">{PasswordWarn}</span>
                    </div>
                    <div className="form-buttons">
                        <div className="login-button">
                            <Link to="/Register" className="register butt">
                                Załóż konto
                            </Link>
                        </div>
                        <div className="login-button">
                            <input className="butt" type="submit"
                                value="Zaloguj się" />
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default LoginForm;