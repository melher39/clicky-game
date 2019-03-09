import React from "react";

function Header(props) {
    return (
        // basic navbar to be used as header
        <nav>
            <div className="nav-wrapper container">
                <a href="/" className="brand-logo center">Hip Hop Memory</a>
                {/* <span>Click Any Image To Begin!</span>
                <span className="right">Score: {props.score} | Top Score: {props.highScore}</span> */}
            </div>
        </nav>
    );
}

export default Header;