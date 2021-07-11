import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <React.Fragment>
            <div className="row">
              <div className="col-md-12">
                <header className="header">
                  <nav className="navbar">
                    <div className="top_nav">
                      <div className="logo"><Link to={'/'} className="nav_logo">Youniq.Art</Link></div>
                      <div className="nav">
                        <ul className="nav_item">
                          <li className="list_item"><Link to={'/find-your-style'} className="nav_link">Finde deinen Style</Link></li>
                          <li className="list_item"><Link to={'/how-it-works'} className="nav_link">Wie’s funktioniert</Link></li>
                          <li className="list_item"><Link to={'/contact-us'} className="nav_link">Über Uns</Link></li>
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