import React from 'react';

const Footer = (props) => {
    return (
        <React.Fragment>
              <section className="container-fluid w5">
                <section className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="foot"> <div className="logo2">
                                <img src="/images/logo.png" />
                            </div></div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-2">
                            <div className="number">
                                <h1>+41 34 810 03 49
                                    contect@youniq.com
                                </h1>
                            </div>
                        </div>
                        <div className="col-md-8" />
                        <div className="col-md-2">
                            <div className="number">
                                <h1><span className="underline"> {props.t("kontakt")}<br />
                                    {props.t("Datenschutzerklarung")}<br />
                                    {props.t("Impressum")}
                                </span></h1>
                            </div>
                        </div>
                    </div>
                </section>
            </section>
        </React.Fragment>
    )
}

export default Footer;