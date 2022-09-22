import React from 'react';
import github from './images/github-icon.png'
import linkedIn from './images/linkedin-icon.png'
import stack from './images/768px-Stack_Overflow_icon.png'

export default function Footer() {
    return (
        <div className="footer">
            <div className="container mt-5">
                <div className="row">
                    <div className="col">
                        <a href="https://github.com/fredkk22"><img alt="Freddy's Github Profile" src={github} className="img-fluid img-thumbnail footericons my-5"></img></a>
                    </div>
                    <div className="col">
                        <a href="https://www.linkedin.com/in/freddy-kwak-a3aa551a6/"><img alt="Freddy's LinkedIn Profile" src={linkedIn} className="img-fluid img-thumbnail footericons my-5"></img></a>
                    </div>
                    <div className="col">
                        <a href="https://stackoverflow.com/users/19371103/freddy-kwak/"><img alt="Freddy's Stack Overflow Profile" src={stack} className="img-fluid img-thumbnail footericons my-5"></img></a>
                    </div>
                </div>
            </div>
        </div>
    )
}