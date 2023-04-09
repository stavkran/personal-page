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
                <Typist avgTypingDelay={10}>
                    <span className="intro-title">
                    {"hi, it's "}
                    <span className="intro-name">{"Stavriana"}</span>
                    {"."}
                    </span>
                </Typist>
                <FadeInSection>
                    <div className="intro-subtitle">Good seeing you here.</div>
                    <div className="intro-desc">
                        I'm a student at the Department of Digital Systems at 
                        the University of Piraeus. My interests vary from software development, 
                        to Data Science and everything in between.
                    </div>
                    <a
                        href="mailto:stavkraniti01@gmail.com"
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
