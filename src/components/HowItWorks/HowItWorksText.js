import React from 'react';
import { useTranslation } from 'react-i18next';

const HowItWorksText = () => {
    const {t, i18n} = useTranslation();
    return (
        <React.Fragment>
             <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="col-text">
                                    <div className="col-text-a">
                                        <h1 className="col-heading">
                                            <span className="col-text-span">
                                                {t("Wie's funktioniert")}: <br />
                                            </span>
                                            {t('Verständins von kunst ist')} <br />
                                            {t('individuell,darum sollte Deine')} <br />
                                            {t('Kunst auch persönlich sein.')}
                                        </h1>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    )
}

export default HowItWorksText;