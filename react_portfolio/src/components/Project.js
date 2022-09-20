import React from 'react';

export default function Project({ projTitle, projImgAlt, projImgSrc, deployedLink, gitRepo }) {
    return (
        <div>
            <h2>{projTitle}</h2>
            <img alt={projImgAlt} src={projImgSrc}></img>
            <p>{deployedLink}</p>
            <p>{gitRepo}</p>
        </div>
    )
}