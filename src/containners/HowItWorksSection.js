import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';

const HowItWorksSection = () => {
    const {t, i18n} = useTranslation();
    
    return (
        <React.Fragment>
            <div className="container-fluid ten2-title">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="title">
                                <h2>{t("Wie's funktionert")}</h2> </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid ten3">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="second-section">
                                <div className="image-round"><img src="images/round1.PNG" /></div>
                                <div className="text-round">
                                    <h5>{t("Wähle deinen Style")}</h5>
                                    <p>{t("Wie soll das nur für dich erschaffene Kunstwerk aussehen? Lass dich von bereits existierenden Kunstwerken inspirieren und finde deinen Style.")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="second-section">
                                <div className="image-round"><img src="images/round3.PNG" /></div>
                                <div className="text-round">
                                    <h5>{t("Erhalte eine Offerte")}</h5>
                                    <p>{t("Wähle jetzt noch das Format. Wir sagen dir, was dein Kunstwerk kostet und wann du es bekommst. Bezahlen kannst du mit nur einem Klick.")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid ten7">
                <div className="container">
                    <div className="row">
                        <div className="col-md-6">
                            <div className="second-section">
                                <div className="image-round"><img src="images/round2.PNG" /></div>
                                <div className="text-round">
                                    <h5>{t("Make it Youniq")}</h5>
                                    <p>{t("Was soll konkret drauf sein? Unsere Künstler:innen setzen dein gewünschtes Motiv um. Bist du mutig drauf? Dann lass dich überraschen.")}</p>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-6">
                            <div className="second-section">
                                <div className="image-round"><img src="images/round4.PNG" /></div>
                                <div className="text-round">
                                    <h5>{t("Erfreue dich an deiner Kunst")}</h5>
                                    <p>{t("Gratulation, du bist jetzt Kunstsammleri in. Schon bald kannst du dein persönliches Kunstwerk aufhängen. Einfach Youniq!")}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    );
}

export default HowItWorksSection;