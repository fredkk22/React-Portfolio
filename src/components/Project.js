import React from 'react';
import gitthatmoney from './images/GitThatMoney_SS.PNG';
import foodfreqs from './images/foodfreqs_ss.png';
import thetechblog from './images/thetechblog_ss.png';
import jate from './images/jate_ss.png';
import workday from './images/workdayscheduler_ss.png';
import pwgenerator from './images/passwordgenerator_ss.PNG';

export default function Project() {
    const projArray = [
        {
            title: 'Git That Money',
            projImgAlt: 'Git That Money Screenshot',
            deployedLink: 'https://fredkk22.github.io/GitThatMoney/',
            gitRepo: 'https://github.com/fredkk22/GitThatMoney/'
        },
        {
            title: 'FoodFREQs',
            projImgAlt: 'FoodFREQs Screenshot',
            deployedLink: 'https://vast-sierra-04127.herokuapp.com/',
            gitRepo: 'https://github.com/fredkk22/foodFREQS/'
        },
        {
            title: 'The Tech Blog',
            projImgAlt: 'The Tech Blog Screenshot',
            deployedLink: 'https://afternoon-fortress-24190.herokuapp.com/',
            gitRepo: 'https://github.com/fredkk22/The-Tech-Blog/'
        },
        {
            title: 'Just Another Text Editor (J.A.T.E.)',
            projImgAlt: 'J.A.T.E. Screenshot',
            deployedLink: 'https://hidden-woodland-12119.herokuapp.com/',
            gitRepo: 'https://github.com/fredkk22/Just-Another-Text-Editor/'
        },
        {
            title: 'Workday Scheduler',
            projImgAlt: 'Git That Money Deployed App Homepage',
            deployedLink: 'https://fredkk22.github.io/Workday-Scheduler/',
            gitRepo: 'https://github.com/fredkk22/Workday-Scheduler/'
        },
        {
            title: 'Password Generator',
            projImgAlt: 'Password Generator Screenshot',
            deployedLink: 'https://fredkk22.github.io/Password-Generator/',
            gitRepo: 'https://github.com/fredkk22/Password-Generator'
        },
    ]

    return (
        <div className="m-3">
            <div className="container">
                <div className="row mb-5">
                    <div className="col">
                        <h2 className="allheaders">{projArray[0].title}</h2>
                        <a href={projArray[0].deployedLink} target="blank"><img alt={projArray[0].projImgAlt} src={gitthatmoney} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[0].gitRepo}><button className="btn btn-primary">Git That Money Github Repository</button></a>
                    </div>
                    <div className="col">
                        <h3 className="allheaders">{projArray[1].title}</h3>
                        <a href={projArray[1].deployedLink} target="blank"><img alt={projArray[1].projImgAlt} src={foodfreqs} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[1].gitRepo}><button className="btn btn-primary">foodFREQs Github Repository</button></a>
                    </div>
                    <div className="col">
                        <h4 className="allheaders">{projArray[2].title}</h4>
                        <a href={projArray[2].deployedLink} target="blank"><img alt={projArray[2].projImgAlt} src={thetechblog} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[2].gitRepo}><button className="btn btn-primary">The Tech Blog Github Repository</button></a>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row my-5">
                    <div className="col">
                        <h5 className="allheaders">{projArray[3].title}</h5>
                        <a href={projArray[3].deployedLink} target="blank"><img alt={projArray[3].projImgAlt} src={jate} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[3].gitRepo}><button className="btn btn-primary">J.A.T.E. Github Repository</button></a>
                    </div>
                    <div className="col">
                        <h6 className="allheaders">{projArray[4].title}</h6>
                        <a href={projArray[4].deployedLink} target="blank"><img alt={projArray[4].projImgAlt} src={workday} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[4].gitRepo}><button className="btn btn-primary">Workday Scheduler Github Repository</button></a>
                    </div>
                    <div className="col">
                        <h7 className="allheaders">{projArray[5].title}</h7>
                        <a href={projArray[5].deployedLink} target="blank"><img alt={projArray[5].projImgAlt} src={pwgenerator} className="projImg img-fluid"></img></a>
                        <br />
                        <a href={projArray[5].gitRepo}><button className="btn btn-primary">Password Generator Github Repository</button></a>
                    </div>
                </div>
            </div>
        </div>
    )
}