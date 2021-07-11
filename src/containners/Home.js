import React from 'react';
import Banner from '../components/common/Banner';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';

import HowItWorksSection from './HowItWorksSection';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <React.Fragment>
            <section className="wrapp1">
                <div className="container-fluid ten1">
                    <Header />
                    <Banner />
                </div>
            </section>
            <div style={{ clear: 'both' }} />
            <HowItWorksSection />
            <div className="divider" />
            <Testimonials />
            <Footer />
        </React.Fragment>
    )
}

export default Home;