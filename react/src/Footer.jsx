
import './Footer.css';

import LogoWhite from "./assets/LogoWhite.png";
import social_yt from "./assets/social_yt.png";
import social_in from "./assets/social_in.png" ;
import social_gl from "./assets/social_gl.png";
import social_tw from  "./assets/social_tw.png";
import social_fb from "./assets/social_fb.png";


function Footer() {
  return (
    <div className="Footer">


<div className="footer_cont"> 
            <div className="footer_cont_in">

                <div className="footer_links_cont"> 
                    <div className="foter_top_title"> Contacts</div>   
                    <div className="foter_subtop_title"> About us </div> 
                    <div className="foter_subtop_title"> How it works </div> 
                    <div className="foter_subtop_title"> Pricing</div>  

                </div>
                <div className="footer_links_cont"> 
                    <div className="foter_top_title"> Plans & Pricing</div>   
                    <div className="foter_subtop_title"> About us </div> 
                    <div className="foter_subtop_title"> How it works </div> 
                    <div className="foter_subtop_title"> Pricing</div>  

                </div>
                <div className="footer_links_cont"> 
                    <div className="foter_top_title"> Social</div>   
                    <div className="foter_subtop_title"> About us </div> 
                    <div className="foter_subtop_title"> How it works </div> 
                    <div className="foter_subtop_title"> Pricing</div>  
                </div>
                <div className="footer_links_cont"> 
                    <div className="foter_top_title"> Course</div>   
                    <div className="foter_subtop_title"> About us </div> 
                    <div className="foter_subtop_title"> How it works </div> 
                    <div className="foter_subtop_title"> Pricing</div>  
                </div>

                <div  className="footer_links_cont footer_links_cont_last"> 

                    <img src={LogoWhite}  className="LogoWhite" />

                    <div className="social_cont">
                        <img src={social_yt}  className="social"/>
                        <img src={social_in} className="social"/>
                        <img src={social_gl}  className="social"/>
                        <img src={social_tw} className="social"/>
                        <img src={social_fb}  className="social"/>

                    </div>

                   <div className="footer_rights"> © Matte Engine, all rights reserved. </div>

                </div>


            </div>

        </div>
     
    </div>
  );
}

export default Footer;
