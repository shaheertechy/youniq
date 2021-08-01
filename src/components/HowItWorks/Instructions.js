import React from 'react';
import { useTranslation } from 'react-i18next';

const Instructions = () => {
    const {t, i18n} = useTranslation();
    return (
        <React.Fragment>
            <div className="container-fluid for-background">
                    <div className="container for-section-2-padding">
                        <div className="row second-section">
                            <div className="col-md-2">
                                <div className="col-img">
                                    <img src="img/Capture.PNG" alt="" />
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="col-img-heading-text">
                                    <h1 className="col-img-heading-h">{t('Finde Deinen Stil')}</h1>
                                    <p className="col-img-heading-p for-pera-color">{t('Lass Dich aus unserer Auswahl an bereits existierenden')} <br /> {t('Kunstwerken inspirieren und suche eines aus,welches Deinem')} <br /> 
                                    {t('Stil und Deinen Preisvorstellungen entspricht.')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row second-section">
                            <div className="col-md-2">
                                <div className="col-img">
                                    <img src="img/Capture1.PNG" alt="" />
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="col-img-heading-text">
                                    <h1 className="col-img-heading-h">{t('Make It Younique')}</h1>
                                    <p className="col-img-heading-p for-pera-color">{t('Definiere das Format,das Motiv und erfahre sofort,wie viel Dien')} <br />{t('persönliches Kunstwerk kosten wird.Bist Du interessiert,dann')}
                                        <br />{t('sende uns eine unverbindliche Anfrage.')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row second-section">
                            <div className="col-md-2">
                                <div className="col-img">
                                    <img src="img/Capture2.PNG" alt="" />
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="col-img-heading-text ">
                                    <h1 className="col-img-heading-h">{t('Erhalte eine Offerte')}</h1>
                                    <p className="col-img-heading-p for-pera-color">{t('Wir schicken Dir eine Offerte mit definitivem preis und die')} <br />{t('geschätzte Herstellungszeit.Mit nur einem Klick kunnst Du')} <br />
                                        {t("bezahlen und Youniq.Art lässt Deine Wünsche mit unseren")} <br />{t('Künstler*innen zu Realität werden!')}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row second-section">
                            <div className="col-md-2">
                                <div className="col-img">
                                    <img src="img/Capture3.PNG" alt="" />
                                </div>
                            </div>
                            <div className="col-md-10">
                                <div className="col-img-heading-text for-padding">
                                    <h1 className="col-img-heading-h">{t('Erfreue Dich an Deiner Kunst!')}</h1>
                                    <p className="col-img-heading-p for-pera-color">{t('Sobald Dein Werk fertiggestellt ist,informieren wir Dich über die')} <br />{t('Zustellung und schon kannst Du Dein ganz persönliches')}
                                        <br />{t('Kunstwerk aufhängen')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    )
}

export default Instructions;