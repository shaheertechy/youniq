import React from 'react';
import { useTranslation, withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const {t, i18n} = useTranslation();
  const changeLanguageButton = () => {
    props.changeLanguage(props.lng);
  }
  
  //i18n.changeLanguage('en');
 
    return (
        <React.Fragment>
            <div className="row">
              <div className="col-md-12">
                <header className="header">
                  <nav className="navbar">
                    <div className="top_nav">
                      <div className="logo"><Link to={'/'} className="nav_logo">{t("Youniq.Art")}</Link></div>
                      <div className="nav">
                        <ul className="nav_item">
                          <li className="list_item"><Link to={'/find-your-style'} className="nav_link">{t("Finde deinen stil")}</Link></li>
                          <li className="list_item"><Link to={'/how-it-works'} className="nav_link">{t("Wie’s funktioniert")}</Link></li>
                          <li className="list_item"><Link to={'/contact-us'} className="nav_link">{t("Über Uns")}</Link></li>
                          <li className="list_item"><button onClick={changeLanguageButton} className="nav_link">{props.currentLanguageVersion}</button></li>
                        </ul>
                      </div>
                      <div className="icon"> <a href="#" className="login_btn_icon"><i className="fas fa-sign-in-alt" /></a>
                        <button className="nav_toggle"> <span className="icon_bar bar_1" /> <span className="icon_bar bar_2" /> <span className="icon_bar bar_3" /> </button>
                      </div>
                    </div>
                  </nav>
                </header>
              </div>
            </div>
        </React.Fragment>
    )
}

export default Header;