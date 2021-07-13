import React from 'react';
import { useTranslation } from 'react-i18next';

const Banner = () => {

    const {t, i18n} = useTranslation();
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="hero-section-banner">
                        <h2>{t("Gebe Kunst Auftrag")}<br /><span style={{ color: '#207d2094' }}>{t("Genau nach deinem Stil")}</span></h2>
                        <p>{t("Unsere Künstler innen erstellen ein eigenes Kunstwerk nur für dich. Du wählst den Style und was drauf sein soll.")}</p> <a href="#">{t("Finde deinen stil")}</a> </div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-3">
                    <div className="btm-image"> <img src="images/old.PNG" /> </div>
                </div>
                <div className="col-md-6">
                    <div className="btm-image more"> <img src="images/black.PNG" /> </div>
                </div>
                <div className="col-md-3">
                    <div className="btm-image"> <img src="images/sctrach.PNG" /> </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;