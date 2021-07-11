import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import ProductTabs from './ProductTabs';

const FindYourStyle = () => {
    return (
        <React.Fragment>
            <section className="wrapp1">
                <div className="container-fluid ten5">
                    <Header />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12">
                              
                                <div className="hero-section-banner-tabs">
                                    <h2>Über 100 Styles <br /><span style={{ color: '#207d2094' }}>Finde deinen. Und lass dir passende Kunst anfertigen.</span></h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <div style={{ clear: 'both' }} />
           <div className="container-fluid ten6">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="tabs-main">
                                <div className="site-wrapper">
                                    <section className="tabs-wrapper">
                                       <ProductTabs />
                                   
                                    </section>
                                    <footer> </footer>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </React.Fragment> 
    )
}

export default FindYourStyle;