import react from 'react'
import Menu from "../Menu/Menu";
import ReactDOM from "react-dom/client";
import Button from "../Button/Button";

function Header() {
    return(
        <header>
          <div className="logo">
              <a href="#">OnePage</a>
          </div>
              <nav>
                  <ul>
                      <Menu text={'Home'}/>
                      <Menu text={'About'}/>
                      <Menu text={'Services'}/>
                      <Menu text={'Portfolio'}/>
                      <Menu text={'Team'}/>
                      <Menu text={'Pricing'}/>
                      <Menu text={'Drop Down'}/>
                      <Menu text={'Contact'}/>
                  </ul>
                  <Button textButton={'Get Started'} myClass={'button'}/>

              </nav>
        </header>
    )
}


export default Header