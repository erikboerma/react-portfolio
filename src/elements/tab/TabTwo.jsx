import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Major Projects",
        tab3 = "Education & Certifications";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab3}</Tab>
                                    </TabList>

                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <strong>Core Technology Experience</strong><br/>
                                                    HTML5, CSS3, JavaScript, React
                                                </li>
                                                <li>
                                                    <strong>Stacks and Framework Experience</strong><br/>
                                                    jQuery, Bootstrap, Firebase, node.js, MySQL, MongoDB, Express, Handlebars
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                    
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <strong>Gym Tracker - Technologies Used</strong> <br/>HTML, CSS, Javascript, Bootstrap, jQuery, Firebase, 2 API’s are called using AJAX
                                               </li>
                                               <li>
                                                   <strong>Point of Sale System - Technologies Used</strong> <br/>HTML, CSS, Javascript, handlebars, jQuery, express, and MySQL with sequalize. This was deployed to Heroku with JawsDB
                                               </li>
                                               <li>
                                                   <strong>LetsPlayHockey - Technologies Used</strong> <br/>HTML, CSS, Javascript, ReactJS, MySQL, express, passport, sequalize. Deployed to Heroku with JawsDB
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Certificate of Completion, Full Stack Developer<span><br/> University of Pennsylvania, Philadelphia, PA</span></a> 2020
                                               </li>
                                               
                                               <li>
                                                   <a>B.S. Business Management<span><br/> Plymouth State University, Plymouth, NH</span></a> 2006
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>
                                    
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;