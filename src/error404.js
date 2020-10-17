import React from 'react';
import './error404.css';

const url = "https://s3-us-west-2.amazonaws.com/s.cdpn.io/4424790/Mirror.png";

class error404 extends React.Component {
    render(){
        return (
            <div className="div">
            <aside className="aside"><img src={url} alt="404 Error" />
            </aside>
            <main className="main">
                <h1 className="h1">Sorry!</h1>
                <p className="p">
                Either you aren't cool enough to visit this page or it doesn't exist <em className="em">. . . like your social life.</em>
                </p>
                <button className="button">You can go now!</button>
            </main>
            </div>
        )
    } 
}

export default error404;