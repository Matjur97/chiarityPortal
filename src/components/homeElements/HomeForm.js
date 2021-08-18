import React, { useState } from 'react';
import { newUserMessage } from '../jsonComponents';
import validator from 'validator';
import '../../styles/main.scss';

const HomeForm = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        message: ""
    });
    const [warnName, setWarnName] = useState("");
    const [warnEmail, setWarnEmail] = useState("");
    const [warnMessage, setWarnMessage] = useState("")
    const [warnBorderName, setWarnBorderName] = useState("");
    const [warnBorderEmail, setWarnBorderEmail] = useState("");
    const [warnBorderMessage, setWarnBorderMessage] = useState("");
    const [succesInfo, setSuccesInfo] = useState("")
    const [formValid, setFormValid] = useState(false);
    const [emailValid, setEmailValid] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevState => {
            return {
                ...prevState,
                [name]: value
            }
        })
    };

    const validateEmail = (e) => {
        if (validator.isEmail(form.email)) {
            setWarnEmail("")
            setWarnBorderEmail("")
            setEmailValid(true)
        }
        else {
            setEmailValid(false)
            setWarnEmail("Błędny email")
            setWarnBorderEmail("err-border")
        }
    };

    const handleBlur = () => {
        const space = ' ';
        setSuccesInfo("")
        if (form.name.length < 3) {
            setWarnName("Imię jest za krótkie")
            setWarnMessage("")
            setWarnBorderName("err-border")
            setWarnBorderMessage("")
        }
        else if (form.name.indexOf(space) >0) {
            setWarnName("Imię nie może zawierać spacji")
            setWarnMessage("")
            setWarnBorderName("err-border")
            setWarnBorderMessage("")
        }
        else if (form.message.length < 10) {
            setWarnName("")
            setWarnMessage("Wiadomość powinna zawierać minimum 160 znaków")
            setWarnBorderName("")
            setWarnBorderMessage("err-border")
        }
        else {
            setWarnName("")
            setWarnMessage("")
            setWarnBorderName("")
            setWarnBorderMessage("")
            setFormValid(true)
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formValid === true && emailValid === true) {
            const newMessage = {
                name: form.name,
                email: form.email,
                message: form.message
            };
        newUserMessage(newMessage)
        setSuccesInfo("Wiadomość została wysłana! Wkrótce się skontaktujemy.")
        setForm({
            name: "",
            email: "",
            message: ""
        })
        }
    }

    return (
        <section className="contact-form">
            <div className="picture">
                <div className="transp">
                    <div className="empty" />
                    <div className="form-container">
                        <h1>Skontaktuj się z nami</h1>
                        <div className="deco" />
                        <div className="succes-send">
                            <p>
                                {succesInfo}
                            </p>
                        </div>
                        <div className="form">
                            <form>
                                <div className="contact">
                                    <div className="contact-input">
                                        <label for="name">Podaj swoje imię</label>
                                        <input
                                            id={warnBorderName}
                                            type="text"
                                            name="name"
                                            value={form.name}
                                            onChange={handleChange}
                                            onBlur={handleBlur}
                                        />
                                        <span className="err">{warnName}</span>
                                    </div>
                                    <div className="contact-input">
                                        <label for="email">Podaj swój email</label>
                                        <input
                                            id={warnBorderEmail}
                                            type="email"
                                            name="email"
                                            value={form.email}
                                            onChange={handleChange}
                                            onBlur={validateEmail}
                                        />
                                        <span className="err">{warnEmail}</span>
                                    </div>
                                </div>
                                <div className="textarea">
                                    <label for="message">
                                        Wpisz swoją wiadomość
                                    </label>
                                    <textarea
                                        id={warnBorderMessage}
                                        rows="4"
                                        type="text"
                                        name="message"
                                        value={form.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                    />
                                    <span className="err">{warnMessage}</span>
                                    <div className="send">
                                        <input className="butt" type="submit"
                                            value="Wyślij" onClick={handleSubmit} />
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeForm;