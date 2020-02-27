import React, { Component } from "react";

const PortfolioListContent = [
    {
        image: '/assets/images/ProjectOneSS.jpeg',
        category: 'Class Project 1',
        title: 'Gym Tracker',
        live: 'https://erikboerma.github.io/ProjectOne/',
        gitHub: 'https://github.com/erikboerma/ProjectOne'
    },
    {
        image: '/assets/images/ProjectTwoSS.jpeg',
        category: 'Class Project 2',
        title: 'Point of Sale System',
        live: 'https://stark-beach-24424.herokuapp.com/',
        gitHub: 'https://github.com/erikboerma/project-2'
    },
    {
        image: '',
        category: 'Class Project 3',
        title: 'Lets Play Hockey',
        live: 'https://lets-play-hockey.herokuapp.com/',
        gitHub: 'https://github.com/erikboerma/LetsPlayHockey'
    },
    {
        image: '/assets/images/gifSS.jpeg',
        category: 'Homework Assignment',
        title: 'Giftastic',
        live: 'https://erikboerma.github.io/giftastic/',
        gitHub: 'https://github.com/erikboerma/giftastic'
    },
    {
        image: '/assets/images/bamazon_demo.mov',
        category: 'Homework Assignment',
        title: 'bAmazon',
        live: 'https://github.com/erikboerma/bamazon/blob/master/bamazon_demo.mov',
        gitHub: 'https://github.com/erikboerma/bamazon'
    },
    {
        image: '/assets/images/triviaSS.jpeg',
        category: 'Homework Assignment',
        title: 'Trivia Game',
        live: 'https://erikboerma.github.io/TriviaGame/',
        gitHub: 'https://github.com/erikboerma/TriviaGame'
    }
]

class PortfolioList extends Component{
    render(){
        const {column , styevariation } = this.props;
        const list = PortfolioListContent.slice(0 , this.props.item);
        return(
            <React.Fragment> 
                {list.map((value , index) => (
                    <div className={`${column}`} key={index}>
                        <div className={`portfolio ${styevariation}`}>
                            <div className="thumbnail-inner">
                                <img className="w-100" src={value.image} alt="Portfolio Images"/>

                                {/* <div className={`thumbnail ${value.image}`}></div>
                                <div className={`bg-blr-image ${value.image}`}></div> */}
                            </div>
                            <div className="content">
                                <div className="inner">
                                    <p>{value.category}</p>
                                    <h4>{value.title}</h4>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.gitHub} target='_blank'>GitHub Repo</a>
                                    </div>
                                    <div className="portfolio-button">
                                        <a className="rn-btn" href={value.live} target='_blank'>Live Application</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
               
            </React.Fragment>
        )
    }
}
export default PortfolioList;