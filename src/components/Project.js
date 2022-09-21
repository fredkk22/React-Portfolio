import React from 'react';

export default function Project() {
    const projArray = [
        {
            title: 'Git That Money',
            projImgAlt: 'Git That Money Screenshot',
            progImgSrc: 'Food',
            deployedLink: 'https://fredkk22.github.io/GitThatMoney/',
            gitRepo: 'https://github.com/fredkk22/GitThatMoney/'
        },
        {
            title: 'FoodFREQs',
            projImgAlt: 'FoodFREQs Screenshot',
            progImgSrc: 'Food',
            deployedLink: 'https://vast-sierra-04127.herokuapp.com/',
            gitRepo: 'https://github.com/fredkk22/foodFREQS/'
        },
        {
            title: 'The Tech Blog',
            projImgAlt: 'The Tech Blog Screenshot',
            progImgSrc: 'Food',
            deployedLink: 'https://afternoon-fortress-24190.herokuapp.com/',
            gitRepo: 'https://github.com/fredkk22/The-Tech-Blog/'
        },
        {
            title: 'Just Another Text Editor (J.A.T.E.)',
            projImgAlt: 'J.A.T.E. Screenshot',
            progImgSrc: 'Food',
            deployedLink: 'https://hidden-woodland-12119.herokuapp.com/',
            gitRepo: 'https://github.com/fredkk22/Just-Another-Text-Editor/'
        },
        {
            title: 'Workday Scheduler',
            projImgAlt: 'Git That Money Deployed App Homepage',
            progImgSrc: 'Food',
            deployedLink: 'https://fredkk22.github.io/Workday-Scheduler/',
            gitRepo: 'https://github.com/fredkk22/Workday-Scheduler/'
        },
        {
            title: 'Password Generator',
            projImgAlt: 'Password Generator Screenshot',
            progImgSrc: 'Food',
            deployedLink: 'https://fredkk22.github.io/Password-Generator/',
            gitRepo: 'https://github.com/fredkk22/Password-Generator'
        },
    ]

    return (
        <div>
            <div className="">
                <h2>{projArray[0].title}</h2>
                <img alt={projArray[0].projImgAlt} src={projArray[0].projImgSrc}></img>
                <br />
                <a href={projArray[0].deployedLink}>{projArray[0].deployedLink}</a>
                <br />
                <a href={projArray[0].gitRepo}>{projArray[0].gitRepo}</a>
            </div>
            <div className="">
                <h2>{projArray[1].title}</h2>
                <img alt={projArray[1].projImgAlt} src={projArray[1].projImgSrc}></img>
                <br />
                <a href={projArray[1].deployedLink}>{projArray[1].deployedLink}</a>
                <br />
                <a href={projArray[1].gitRepo}>{projArray[1].gitRepo}</a>
            </div>
            <div className="">
                <h2>{projArray[2].title}</h2>
                <img alt={projArray[2].projImgAlt} src={projArray[2].projImgSrc}></img>
                <br />
                <a href={projArray[2].deployedLink}>{projArray[2].deployedLink}</a>
                <br />
                <a href={projArray[2].gitRepo}>{projArray[2].gitRepo}</a>
            </div>
            <div className="">
                <h2>{projArray[3].title}</h2>
                <img alt={projArray[3].projImgAlt} src={projArray[3].projImgSrc}></img>
                <br />
                <a href={projArray[3].deployedLink}>{projArray[3].deployedLink}</a>
                <br />
                <a href={projArray[3].gitRepo}>{projArray[3].gitRepo}</a>
            </div>
            <div className="">
                <h2>{projArray[4].title}</h2>
                <img alt={projArray[4].projImgAlt} src={projArray[4].projImgSrc}></img>
                <br />
                <a href={projArray[4].deployedLink}>{projArray[4].deployedLink}</a>
                <br />
                <a href={projArray[4].gitRepo}>{projArray[4].gitRepo}</a>
            </div>
            <div className="">
                <h2>{projArray[5].title}</h2>
                <img alt={projArray[5].projImgAlt} src={projArray[5].projImgSrc}></img>
                <br />
                <a href={projArray[5].deployedLink}>{projArray[5].deployedLink}</a>
                <br />
                <a href={projArray[5].gitRepo}>{projArray[5].gitRepo}</a>
            </div>
        </div>
    )
}