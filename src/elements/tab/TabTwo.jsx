import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab2 = "Current Work",
        tab3 = "Major Projects",
        tab4 = "Education";
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
                                        <Tab>{tab4}</Tab>
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
                                                   <strong>Eavis Garage Doors- Technologies Used</strong> <br/>HTML, CSS, Javascript, ReactJS.
                                                   <hr/> <strong>Current status:</strong> After a hiatus, getting back up and running!  Jumping back into the fundamentals and reviewing my JavaScript knowledge as well as building a new website.
                                                   <hr/><strong>Completing an online course to perfect my React knowledge</strong>
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
                                                   <strong>Certificate of Completion, Full Stack Developer</strong><br/> University of Pennsylvania, Philadelphia, PA 2020
                                               </li>
                                               
                                               <li>
                                                   <strong>B.S. Business Management</strong><br/> Plymouth State University, Plymouth, NH 2006
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