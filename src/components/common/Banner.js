import React from 'react';

const Banner = () => {
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="hero-section-banner">
                        <h2>Gebe Kunst Auftrag <br /><span style={{ color: '#207d2094' }}>Genau nach deinem Stil</span></h2>
                        <p>Unsere Künstler:innen erstellen ein eigenes Kunstwerk nur für dich. Du wählst den Style und was drauf sein soll.</p> <a href="#">Finde deinen stil</a> </div>
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