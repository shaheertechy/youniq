import React, { useState } from 'react';
import Footer from './common/Footer';
import Header from './common/Header';
import { useTranslation, withTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";

const ContactUs = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();


    const onSubmit = (data) => {
        alert(JSON.stringify(data));
    }; // your form submit function which will invoke after successful validation


    const { t, i18n } = useTranslation();
    const [currentLanguageVersion, setCurrentLanguageVersion] = useState('English Version');
    const [lng, setLng] = useState('en');
    const changeLanguage = (lng) => {
        i18n.changeLanguage(lng);
        if (lng == 'en') {
            setCurrentLanguageVersion('Germen Version');
            setLng('ger');
        } else {
            setCurrentLanguageVersion('English Version');
            setLng('en');
        }
    }
    return (
        <React.Fragment>
            <section className="container-fluid w1">
                <Header changeLanguage={changeLanguage} currentLanguageVersion={currentLanguageVersion} lng={lng} />
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="theory">
                                <h1>Make it Youniq</h1>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid w2">
                <section className="container">
                    <div className="row">
                        <div className="col-md-3">
                        </div>
                        <div className="col-md-9">
                            <div className="arrow">
                                <i className="fa fa-angle-left" />
                                <h1>Zurück</h1>
                            </div>
                            <div className="theory2">
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid w3">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="form trouble">
                                <h1>kontaktangaben</h1>
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    <div className="inner-form">
                                        <input className="form1"
                                            placeholder="Vorname"
                                            {...register("name", {
                                                required: true,
                                                maxLength: 20,
                                                pattern: /^[A-Za-z]+$/i
                                            })}
                                        />
                                        {errors.name && <p className="alert alert-danger">This field is required</p>}
                                        {errors?.name?.type === "maxLength" && (
                                            <p className="alert alert-danger">First name cannot exceed 20 characters</p>
                                        )}
                                        {errors?.name?.type === "pattern" && (
                                            <p className="alert alert-danger">Alphabetical characters only</p>
                                        )}

                                        <input
                                            id="email"
                                            className="form1"
                                            placeholder="Nachname"
                                            {...register("email", {
                                                required: "required",
                                                pattern: {
                                                    value: /\S+@\S+\.\S+/,
                                                    message: "Entered value does not match email format"
                                                }
                                            })}
                                            type="email"
                                        />
                                        {errors.email && <p className="alert alert-danger">{errors.email.message}</p>}

                                        <input
                                            id="phone"
                                            className="form1"
                                            placeholder="E-Mail"
                                            {...register("phone", {
                                                required: "required",
                                                minLength: 6, maxLength: 12
                                            })}
                                            type="tel"
                                        />
                                        {errors.phone && <p className="alert alert-danger">{errors.phone.message}</p>}

                                        <input
                                            id="comments"
                                            className="form1"
                                            placeholder="Telefonummer"
                                            {...register("comments", {
                                                required: "required",
                                            })}
                                            type="text"
                                        />
                                        {errors.comments && <p className="alert alert-danger">{errors.comments.message}</p>}
                                        {/* <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Nachname" required className="form5" />
                                        <input type="text" pattern="[A-Za-z0-9.@ ]{3,}" placeholder="  E-Mail" name="wasi" required className="form3" />
                                        <input type="text"  placeholder="  Telefonnummer" required className="form2" />
                                        <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Strasse / Hausnummer" required className="form6" />
                                        <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  PLZ / Stadt" required className="form4" />
                                        <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Land" required className="form4" />
                                        <br />
                                        <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" className="cbox" />
                                        <label htmlFor="vehicle1">lch akzeptiere die <span className="agb">AGBs</span></label><br /> */}
                                        <div className="ankr"><input type={'submit'} value="Anfrage abschicken" /></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid theory3 contain-trouble">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                </section>
            </section>
            <Footer t={t} />
        </React.Fragment>
    )
}

export default ContactUs;