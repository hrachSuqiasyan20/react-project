import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarcode } from '@fortawesome/free-solid-svg-icons';
function  FooterItem(props){
    return(
          <div className={'footer-item'}>
              <div className="logo-foot">
                  <img src={props.img} alt=""/>
              </div>

              <div className="foot-title">
              <p>{props.title}</p>
              </div>

              <div className="foot-info">
                  <p>{props.info}</p>
              </div>
          </div>
    )
}

export default FooterItem