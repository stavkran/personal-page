import React from "react";

import "../styles/Intro.css";
import Typist from "react-typist";
import "react-typist/dist/Typist.css";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import FadeInSection from "./FadeInSection";

class Intro extends React.Component {
    constructor() {
        super();
        this.state = {
            expanded: true,
            activeKey: "1",
            visible: true
        };
        this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
        this.setState({
        activeKey: eventKey
    });
    }
    render() {
        return (
            <div id="intro">
                <Typist avgTypingDelay={50}>
                    <span className="intro-title">
                    {"hi, it's "}
                    <span className="intro-name">{"Stavriana"}</span>
                    {"."}
                    </span>
                </Typist>
                <FadeInSection>
                    <div className="intro-subtitle">Good seeing you here.</div>
                    <div className="intro-desc">
                        I'm an MSc Computer Science student @<a href="https://www.uva.nl/en" target="_blank">University of Amsterdam</a>, specialising in Parallel Computing, Distributed Systems, and Cloud Infrastructure. Beyond my core focus, I am also interested in Software Development, Systems Engineering, and the design of scalable computing environments.
                    </div>
                    <a
                        href="mailto:stkraniti@gmail.com"
                        className="intro-contact"
                    >
                        <SendRoundedIcon></SendRoundedIcon>
                        {"  " + "Contact me"}
                    </a>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;
