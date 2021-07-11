import React from 'react';
import Footer from '../common/Footer';
import Header from '../common/Header';
import HowItWorksText from './HowItWorksText';
import Testimonials from '../../containners/Testimonials';
import Instructions from './Instructions';
import Portfolio from './Portfolio';

const HowItWorks = () => {
    return (
        <React.Fragment>
            <section className="main">
                <div className="container-fluid">
                    <Header />
                    <HowItWorksText />
                </div>
                <Instructions />
                <Portfolio />
            </section>
            <Footer />
        </React.Fragment>
    )
}

export default HowItWorks;