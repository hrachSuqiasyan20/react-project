import react from "react";
import FooterItem from "./Footer-item";

function Footer(){
   return (
       <div className={'Footer'}>
         <FooterItem
             title={'Lorem Ipsum'}
             img={'/images/layer.png'}
             info={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, magnam.'}
         />

           <FooterItem
               title={'Sed ut perspiclatis'}
               img={'/images/art.png'}
               info={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, magnam.'}
           />

           <FooterItem
               title={'Magni Dolares'}
               img={'/images/command.png'}
               info={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, magnam.'}
           />

           <FooterItem
               title={'Nemo Enim'}
               img={'/images/finger.png'}
               info={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam, magnam.'}
           />

        </div>
   )
}

export default Footer