import React, { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useTranslation, withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const { t, i18n } = useTranslation();
  const [lng, setLng] = useState('en')
  const changeLanguageButton = () => {

    if (i18n.language == 'en') {
      var lngSet = 'ger';
      setLng('ger');
    }

    if (i18n.language == 'ger') {
      var lngSet = 'en';
      setLng('en')
    }


    i18n.changeLanguage(lngSet);

    var lngParam = lng === 'en' ? 'en' : 'de';
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
      })
    };

    fetch(process.env.REACT_APP_BASE_URL + 'data/language?language=' + lngParam, requestOptions)
      .then(response => {
        if (response.status == 200) {

        }

      })
      .then(data => {
        console.log(data);
      })
      .catch(error => {

      });



  }

  //i18n.changeLanguage('en');

  return (
    <React.Fragment>
      <div className="row">
        <div className="col-md-12">
          <header className="header">
            <Navbar bg="light" expand="lg">
            <div className="top_nav">
              <div className="logo"><Link to={'/'} className="nav_logo">{t("Youniq.Art")}</Link></div>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                  <Nav className="me-auto">
                  <li className="list_item"><Link to={'/find-your-style'} className="nav_link">{t("Finde deinen stil")}</Link></li>
                    <li className="list_item"><Link to={'/how-it-works'} className="nav_link">{t("Wie’s funktioniert")}</Link></li>
                    <li className="list_item"><Link to={'/about-us'} className="nav_link">{t("Über Uns")}</Link></li>
                    <li className="list_item"><button onClick={() => changeLanguageButton()} className="nav_link">{i18n.language == 'en' ? 'German Version' : 'English Version'}</button></li>
                  </Nav>
                </Navbar.Collapse>
                </div>
            </Navbar>
            {/* <nav className="navbar">
              <div className="top_nav">
                <div className="logo"><Link to={'/'} className="nav_logo">{t("Youniq.Art")}</Link></div>
                <div className="nav">
                  <ul className="nav_item">
                    <li className="list_item"><Link to={'/find-your-style'} className="nav_link">{t("Finde deinen stil")}</Link></li>
                    <li className="list_item"><Link to={'/how-it-works'} className="nav_link">{t("Wie’s funktioniert")}</Link></li>
                    <li className="list_item"><Link to={'/about-us'} className="nav_link">{t("Über Uns")}</Link></li>
                    <li className="list_item"><button onClick={() => changeLanguageButton()} className="nav_link">{i18n.language == 'en' ? 'German Version' : 'English Version'}</button></li>
                  </ul>
                </div>
                <div className="icon"> <a href="#" className="login_btn_icon"><i className="fas fa-sign-in-alt" /></a>
                  <button className="nav_toggle"> <span className="icon_bar bar_1" /> <span className="icon_bar bar_2" /> <span className="icon_bar bar_3" /> </button>
                </div>
              </div>
            </nav> */}
          </header>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Header;