import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Main skills",
        tab3 = "Experience",
        tab4 = "Education & Certification";
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
                                                    <strong>Stacks and Frameworks Experience</strong><br/>
                                                    jQuery, Bootstrap, Firebase, node.js, MySQL, MongoDB, Express, Handlebars
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>Sr. Front-end Engineer<span> - Google</span></a> 2018 - Current
                                               </li>
                                               <li>
                                                   <a>Front-end Engineer<span> - Microsoft</span></a> 2017 - 2018
                                               </li>
                                               <li>
                                                   <a>Software Engineer<span> - Alibaba </span></a> 2013- 2014
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>

                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a>BSc In CSE<span> - ABC University, Los Angeles, CA</span></a> 2010
                                               </li>
                                               <li>
                                                   <a>Diploma in Computer Science<span> - Gamma Technical Institute</span></a> 2009
                                               </li>
                                               <li>
                                                   <a>Graphic Designer<span> - ABC Institute, Los Angeles, CA</span></a> 2007
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