import React from "react";

function Footer() {
    return (
        // footer with my name and GitHub repo link
        <footer className="page-footer red darken-2">
            <div className="container">
            </div>
            <div className="footer-copyright">
                <div className="container white-text">
                    ©2019 Melvin Hernandez <a className="white-text" href="https://github.com/melher39/clicky-game" target="_blank" rel="noopener noreferrer">GitHub Repo</a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;