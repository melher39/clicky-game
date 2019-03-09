import React from "react";

function Instructions(props) {

    if (props.highScore === 0) {
        return (
            // simple instructions, may change delivery later
            <div className="container center">
                <h4>Instructions:</h4>
                <p>Select an image to get a point, just don't click on any one image twice!</p>
                <p>If you do, you will lose all your points and the game will restart.</p>
                <p>Try to beat the high score!</p>
            </div>
        );

    }

    else {
        return (
            <div className="container center">
                <div className="row">
                    <div className="col s6">
                        <h4>Score: {props.score}</h4>
                    </div>
                    <div className="col s6">
                        <h4>High Score: {props.highScore}</h4>
                    </div>
                </div>
            </div>
        )
    }

}

export default Instructions;