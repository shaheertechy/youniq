import React from 'react';
import { useTranslation } from 'react-i18next';

const Portfolio = () => {
    const {t, i18n} = useTranslation();
    return (
        <React.Fragment>
            <div className="container-fluid">
                    <div className="container for-section-3-padding">
                        <div className="row section-3-inner-padding">
                            <div className="col-md-5 inner-heading">
                                <h1 className="col-section-3-headeing">{t('Onlineportfilio')}</h1>
                            </div>
                            <div className="col-md-7">
                                <p className="col-section-3-pera for-pera-color">{t('portfolio-content')}</p>
                            </div>
                        </div>
                        <div className="row section-3-inner-padding">
                            <div className="col-md-5 inner-heading">
                                <h1 className="col-section-3-headeing">{t('Unsere Talente')}</h1>
                            </div>
                            <div className="col-md-7">
                                <p className="col-section-3-pera for-pera-color">{t('talent-content')}</p>
                            </div>
                        </div>
                        <div className="row section-3-inner-padding">
                            <div className="col-md-5 inner-heading">
                                <h1 className="col-section-3-headeing">{t('Massgeschneidert')}</h1>
                            </div>
                            <div className="col-md-7">
                                <p className="col-section-3-pera for-pera-color">{t('message-content')}</p>
                            </div>
                        </div>
                    </div>
                </div>
        </React.Fragment>
    );
}

export default Portfolio;