import React, { useState, useEffect } from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import { useTranslation, withTranslation } from 'react-i18next';
import { useForm } from "react-hook-form";
import { useHistory } from 'react-router-dom';

const ArtDetailStepThree = (props) => {
    const history = useHistory();
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors }
    } = useForm();

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

    const onSubmit = (data) => {
        // alert(JSON.stringify(data));

        // delete data['address1'];
        // delete data['address2'];
        // delete data['productId'];
        // delete data['artImage'];
        // delete data['artImage'];
        // data.address = 'abcds';
        // data.frameType = 'frame1';
     
         var order = {...data, ...props.location.state};
         console.log("Order", order);
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': '*/*',
                'Accept': 'application/json'                                                    
            },
            body: JSON.stringify({
                "acceptedAgbs":true,
                "address": order.address1+ ' '+ order.address2,
                "comments": order.comments,
                "country":order.country,
                "email":order.email,
                "frameType":order.frameType,
                "height":order.height,
                "name":order.name,
                "phone":order.phone,
                "postalCode":"08000",
               // "customImage": order.customImage,
                "productId":order.productId,
                "surname":order.surname,
                "useCustomImage":order.useCustomImage,
                "width":order.height,
                "wouldLikeToBeSurprised":order.wouldLikeToBeSurprised
              })
        };

        alert(JSON.stringify(requestOptions));
        fetch('https://stg.youniq.art/api/action/order', requestOptions)
            .then(response => {
                alert(response.status);
                if (response.status == 200) {   // *** This can be just `if (response.ok) {`
                    console.log(response);      // *** This is premature
                    return response.json();
                }
                else
                {
                    throw `error with status ${response.status}`;
                }
                console.log(response.json());
            })
            .then(data => {
                console.log(data);
            })
            .catch(error => {
                alert(error)
                console.log(error);
            });
    }; // your form submit function which will invoke after successful validation




    console.log("-----------------------");
    console.log(props);
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
                                <i className="fas fa-angle-left" />
                                <h1 onClick={() => history.goBack()}>Zurück</h1>
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
                            <div className="form">
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
                                            <p className="alert alert-danger"> Name cannot exceed 20 characters</p>
                                        )}
                                        {errors?.name?.type === "pattern" && (
                                            <p className="alert alert-danger">Alphabetical characters only</p>
                                        )}

                                        <input className="form1"
                                            placeholder="Nach name"
                                            {...register("surname", {
                                                required: true,
                                                maxLength: 20,
                                                pattern: /^[A-Za-z]+$/i
                                            })}
                                        />
                                        {errors.name && <p className="alert alert-danger">This field is required</p>}
                                        {errors?.name?.type === "maxLength" && (
                                            <p className="alert alert-danger">Surname cannot exceed 20 characters</p>
                                        )}
                                        {errors?.name?.type === "pattern" && (
                                            <p className="alert alert-danger">Alphabetical characters only</p>
                                        )}

                                        <input
                                            id="email"
                                            placeholder="E-Mail"
                                            className="form1"
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
                                            placeholder="Telefonnummer"
                                            {...register("phone", {
                                                required: "required",
                                                minLength: 6, maxLength: 12
                                            })}
                                            type="tel"
                                        />
                                        {errors.phone && <p className="alert alert-danger">{errors.phone.message}</p>}

                                        <input
                                            id="address1"
                                            placeholder="Strasse / Hausnummer"
                                            className="form1"
                                            {...register("address1", {
                                                required: "required",
                                            })}
                                            type="text"
                                        />
                                        {errors.address1 && <p className="alert alert-danger">{errors.address1.message}</p>}
                                        <input
                                            id="address2"
                                            placeholder="PLZ / Stadt"
                                            className="form1"
                                            {...register("address2", {
                                                required: "required",
                                            })}
                                            type="text"
                                        />
                                        {errors.address2 && <p className="alert alert-danger">{errors.address2.message}</p>}

                                        <input
                                            id="country"
                                            placeholder="Country"
                                            className="form1"
                                            {...register("country", {
                                                required: "required",
                                            })}
                                            type="text"
                                        />
                                        {errors.country && <p className="alert alert-danger">{errors.country.message}</p>} 
                                        {/* <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Nachname" required className="form5" />
                                    <input type="text" pattern="[A-Za-z0-9.@ ]{3,}" placeholder="  E-Mail" name="wasi" required className="form3" />
                                    <input type="text"  placeholder="  Telefonnummer" required className="form2" />
                                    <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Strasse / Hausnummer" required className="form6" />
                                    <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  PLZ / Stadt" required className="form4" />
                                    <input type="text" pattern="[A-Za-z ]{3,}" placeholder="  Land" required className="form4" />
                                    <br />
                                    <input type="checkbox" id="vehicle1" name="vehicle1" defaultValue="Bike" className="cbox" />
                                    <label htmlFor="vehicle1">lch akzeptiere die <span className="agb">AGBs</span></label><br /> */}
                                        <div className="ankr"><input type={'submit'} /></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
            <section className="container-fluid theory3">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                        </div>
                    </div>
                </section>
            </section>
            <Footer t={t} />

        </React.Fragment>
    );
}

export default ArtDetailStepThree;