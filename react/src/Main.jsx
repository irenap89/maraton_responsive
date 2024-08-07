
import './main_s.css';

import logo_black from "./assets/logo_black.png"
import yellow_right_menu from "./assets/yellow_right_menu.png";
import left_top_menu from "./assets/left_top_menu.png"
import right_top_menu from "./assets/right_top_menu.png" ;
import logo_right from "./assets/logo_right.png";
import menu_mobile from "./assets/menu_mobile.png";
import top_girl from "./assets/top_girl.png";
import top_girl_m from "./assets/top_girl_m.png";
import center_white from "./assets/center_white.png";
import center_black from "./assets/center_black.png";
import dots from "./assets/dots.png";
import icon_1 from "./assets/icon_1.png";
import icon_2 from "./assets/icon_2.png";
import icon_3 from "./assets/icon_3.png";
import program_img_m from  "./assets/program_img_m.png";
import program_img from  "./assets/program_img.png";
import girl_2 from "./assets/girl_2.png";
import girl_2_m from "./assets/girl_2_m.png";
import white_v from "./assets/white_v.png" ;
import black_x from "./assets/black_x.png" ;

import black_v from "./assets/black_v.png";
import form_img from  "./assets/form_img.png" ;
import form_img_m from  "./assets/form_img_m.png" ;

import Footer from './Footer';



function Main() {
  return (
    <div className="Main">
               <div className="header">
            <img src={logo_black} />
            <div className="menu_top">
                    <div className="menu_out">
                        <div  className="menu_in">
                             Courses   
                        </div>
                        <img src={yellow_right_menu} />
                    </div>

                    <div className="menu_out_middle">
                        <img src={left_top_menu} />
                        <div  className="menu_in_middle">
                             Program   
                        </div>
                        <img src={right_top_menu} />
                    </div>

                    <div className="menu_out_middle">
                        <img src={left_top_menu}  />
                        <div  className="menu_in_middle">
                             About   
                        </div>
                        <img src={right_top_menu}  />
                    </div>

                    <div className="menu_out_middle">
                        <img src={left_top_menu} />
                        <div  className="menu_in_middle">
                             Tools   
                        </div>
                        <img src={right_top_menu}  />
                    </div>

                    <div className="menu_out_middle menu_out_last">
                        <img src={left_top_menu} />
                        <div  className="menu_in_middle menu_in_middle_last">
                             Pricing   
                        </div>
                        
                    </div>





            </div>    

            <img src={logo_right}  />

        </div>


        <div className="top_area">
            <img src={menu_mobile}  className="menu_mobile" />

                <div className="top_area_title"> The Matte Engine
                    Product Design
                    Courses
                </div>
                <img src={top_girl}  className="top_girl"/>
                <img src={top_girl_m}  className="top_girl_m"/>

                <button className="register_btn"> Register </button>
        </div>


        <div className="product_cont">

            <div className="product_cont_in">
                <img src={center_white}   className="center_white"/>

                <div className="product_cont_text"> Product Design Fundamentals </div> 
                
                <div className="product_cont_yellow">
                    <img src={center_black}   className="center_white"/>

                    <div className="yellow_cont">
                        <div className="dots_img_cont">
                            <img src={dots}  />
                        </div>
                        <div className="yellow_cont_box">
                            <div className="yellow_cont_title"> Join the Path
                                to Greatness </div>

                               <div className="yellow_cont_subtitle"> This course is designed to help you materialize your game-changing 
                                idea and transform it into a product that you can build a business around. 
                                Product Design blends theory and practice to teach you product validation.
                            </div>
                            
                            <div className="product_cont_yellow_in">
                                <div className="product_cont_yellow_in_box">
                                    <img src={icon_1}  />
                                    <div>
                                        <div className="product_cont_yellow_in_box_num"> 120 </div>
                                        <div className="product_cont_yellow_in_box_text"> Exercises </div>
                                    </div>
                                </div>

                                <div className="product_cont_yellow_in_box">
                                    <img src={icon_2}  />
                                    <div>
                                        <div className="product_cont_yellow_in_box_num"> 60 </div>
                                        <div className="product_cont_yellow_in_box_text"> Practice days </div>
                                    </div>
                                </div>

                                <div className="product_cont_yellow_in_box product_cont_yellow_in_box_no_border">
                                    <img src={icon_3} />
                                    <div>
                                        <div className="product_cont_yellow_in_box_num"> 40 hr </div>
                                        <div className="product_cont_yellow_in_box_text"> Fully online </div>
                                    </div>
                                </div>



                            </div>

                        </div>

                    </div>

                </div>

            </div>


        </div>

        <div className="program_cont">
            <div className="program_cont_in">
                    <div className="program_img_cont">
                        <img src={program_img}  className="program_img"/> 
                    </div>


                    <div className="program_text_cont">
                        <div className="program_title_small">
                            Program
                        </div>

                        <div className="program_title">
                            Product Design Program
                            details In this program
                        </div>

                            <img src={program_img_m}  className="program_img_m" />

                        <div className="program_desc">
                            <div className="program_desc_in">
                            Learn all of the skills, tools, and processes
                            </div>
                        </div>

                        <div className="program_desc">
                            <div className="program_desc_in">
                            Work with an expert mentor and tutor
                            </div>
                        </div>

                        <div className="program_desc">
                            <div className="program_desc_in">
                            Receive tailored coaching from our Career
                            </div>
                        </div>

                        <div className="program_desc">
                            <div className="program_desc_in">
                            Build an impressive portfolio
                            </div>
                        </div>

                        <div className="program_desc">
                            <div className="program_desc_in">
                            Land a job as a UX designer
                            </div>
                        </div>
                        
                    </div>


            </div>



        </div>


        <div className="text_block">
                <span className="white_text"> If you're looking to take your design career to the next level, this course is for you. </span>
                <span  className="gray_text">We'll cover design management patterns that have been proven by real-world experience, and you'll have the opportunity to network with other experienced professionals.  </span>
                <span className="white_text">This is an essential course for anyone who wants to stay on the cutting edge of the design industry. </span>

                <button className="register_btn text_block_btn"> Register </button>

        </div>


        <div className="tools_cont">

            <div className="tools_cont_in">
                <div className="program_title_small">
                    Tolls
                </div>

                <div className="tools_title">
                    The tool helps to enhance
                    designers’ expertise
                </div>


                <div className="tools_cont_boxes">

                    <img src={girl_2}  className="girl_2" />
                    <img src={girl_2_m}  className="girl_2_m" />
                    <div className="top_line">
                        <div className="box box_analytics">
                            <div className="box_title"> Analytics </div>
                            <div className="box_desc">Understanding the subject area and the market. Define and track front-end and product metrics.Building and testing product hypotheses)
                                Statistics, big data analysis. </div>
                        </div>    
                        <div className="box box_general">
                            <div className="box_title"> General </div>
                            <div className="box_desc">  Structure and navigation design. Designing interface screens and their interactive prototypes (including the specifics of Android, iOS platforms, etc.). </div>

                        </div>
                    </div>

                    <div className="bottom_line">
                        <div className="box box_front">
                            <div className="box_title"> Front-end </div>
                            <div className="box_desc"> Layout (HTML, CSS, JavaScript) and interface animation. Working with data sources. Setting up a working environment for testing and running services. </div>
                        </div>    
                        <div className="box">
                            <div className="box_title"> Visual design </div>
                            <div className="box_desc">Composition and grids, typography, color science
                                Iconography and illustrations
                                Interface animation. </div>
                        </div>
                        <div className="box box_researches">

                            <div className="box_title"> Researches </div>
                            <div className="box_desc">Understanding and describing users. Verification of design solutions. Expert review.</div>
                        </div>
                    </div>

                </div>

            </div>

        </div>

        <div className="pricing_cont">
            <div className="pricing_cont_in">
                <div className="program_title_small text_white">
                    Pricing
                </div>

                <div className="tools_title text_white">
                    Select a membership level
                    the right price for you.
                </div>


                <div className="pricing_table_cont">

                    <div className="pricing_colomn"> 
                        
                        <div className="pricing_box_text pricing_box_text_pricing_num">
                            <div className="pricing_text_top_price">
                                
                                <span className="num_price"> <sup className="dolar"> $ </sup> 99 </span>
                                <span className="per_m"> per/m </span>
                            </div>
                             <div className="pricing_text_top">
                                Premium lectures with
                                    the main teachers
                                    of the course
                             </div>   

                        </div>

                        <div className="pricing_box_text border_top_white border_top_white_top"><img src={white_v}  className="black_x"/></div>
                        <div className="pricing_box_text pricing_box_text_yellow"> <img src={black_x}  className="black_x"/> </div>
                        <div className="pricing_box_text"><img src={white_v} className="black_x"/> </div>
                        <div className="pricing_box_text"><img src={white_v} className="black_x"/> </div>
                        <div className="pricing_box_text border_bottom_white border_bottom_white_bottom"> <img src={white_v} className="black_x"/> </div>
                    </div>

                    <div className="pricing_colomn"> 

                        
                        <div className="pricing_box_text pricing_box_text_pricing_num pricing_box_text_yellow">
                            <div className="pricing_text_top_price text_black">
                               
                                <span className="num_price"> <sup className="dolar"> $ </sup> 99 </span>
                                <span className="per_m"> per/m </span>
                            </div>
                             <div className="pricing_text_top text_black">
                                Premium lectures with
                                    the main teachers
                                    of the course
                             </div>   

                        </div>


                        <div className="pricing_box_text pricing_box_text_yellow "><img src={black_v}  className="black_x"/></div>
                        <div className="pricing_box_text pricing_box_text_yellow"><img src={black_v} className="black_x"/></div>
                        <div className="pricing_box_text pricing_box_text_yellow"><img src={black_v} className="black_x"/></div>
                        <div className="pricing_box_text pricing_box_text_yellow"><img src={black_v} className="black_x"/></div>
                        <div className="pricing_box_text pricing_box_text_yellow"><img src={black_v} className="black_x"/></div>

                        <div className="pricing_box_text pricing_box_text_yellow join_btn_cont"> <button className="pricing_box_text_yellow join_btn"> Join </button></div>
                    </div>

                    <div className="pricing_colomn">
                        
                        <div className="pricing_box_text pricing_box_text_pricing_num">
                            <div className="pricing_text_top_price">
                       
                                <span className="num_price"> <sup className="dolar"> $ </sup> 99 </span>
                                <span className="per_m"> per/m </span>
                            </div>
                             <div className="pricing_text_top">
                                Premium lectures with
                                    the main teachers
                                    of the course
                             </div>   

                        </div>


                        <div className="pricing_box_text border_top_white"><img src={white_v}  className="black_x"/></div>
                        <div className="pricing_box_text pricing_box_text_yellow"><img src={black_v} className="black_x"/></div>
                        <div className="pricing_box_text"><img src={white_v}  className="black_x"/></div>
                        <div className="pricing_box_text"><img src={white_v}  className="black_x"/></div>
                        <div className="pricing_box_text border_bottom_white"><img src={white_v}  className="black_x"/></div>
                    </div>

                    <div className="pricing_colomn"> 
                        <div className="pricing_box_text pricing_box_text_pricing_num">
                            <div className="pricing_text_top_price">
                                
                                <span className="num_price"> <sup className="dolar"> $ </sup> 99 </span>
                                <span className="per_m"> per/m </span>
                            </div>
                             <div className="pricing_text_top">
                                Premium lectures with
                                    the main teachers
                                    of the course
                             </div>   

                        </div>


                        <div className="pricing_box_text border_top_white"><img src={white_v} className="black_x"/></div>
                        <div className="pricing_box_text pricing_box_text_yellow"><img src={black_v}  className="black_x"/></div>
                        <div className="pricing_box_text"><img src={white_v}  className="black_x"/></div>
                        <div className="pricing_box_text"><img src={white_v} className="black_x"/></div>
                        <div className="pricing_box_text border_bottom_white"><img src={white_v}  className="black_x"/> </div>
                    </div>

                    <div className="pricing_colomn pricing_colomn_text"> 

                        <div className="pricing_box_text pricing_box_text_pricing_num">
                      

                        </div>


                        <div className="pricing_box_text bg_white border_radius_top">Video conference</div>
                        <div className="pricing_box_text pricing_box_text_yellow">Lecture package</div>
                        <div className="pricing_box_text bg_white">General information</div>
                        <div className="pricing_box_text bg_white">Introduction to specialty</div>
                        <div className="pricing_box_text bg_white border_radius_bottom">Main teachers </div>
                 
                    </div>

                   

                </div>

                <button className="register_btn text_block_btn text_block_btn_join_mobile"> Join </button>


               

            </div>
        </div>



        <div className="form_cont">
                    <div className="form_cont_text"> 
                        <div className="program_title_small">
                            Get started
                        </div>
        
                        <div className="tools_title">
                            Let's start the
                            first conversation
                        </div>

                        <img src={form_img_m} className="form_img_m" />   

                        <div className="input_cont">
                                <div className="input_box_cont">
                                    <div className="input_top_title"> Your name </div>
                                    <input type="text" placeholder="John Terner" className="input_elment"/>
                                </div> 

                                <div className="input_box_cont">
                                    <div className="input_top_title"> Your E-Mail </div>
                                    <input type="text" placeholder="info@the18.design" className="input_elment"/>
                                </div> 

                        </div>
                        
                        <button className="join_form_btn"> Join </button>


                    </div>

                    <div className="form_cont_img">
                        <img src={form_img} className="form_img" />    
                    </div>

        </div>



            <Footer></Footer>
        
     
    </div>
  );
}

export default Main;
