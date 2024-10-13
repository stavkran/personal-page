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
                        I'm a Junior Software Engineer and a student at the Department of Digital Systems @<a href="https://www.ds.unipi.gr/" target="_blank"  style={{ fontWeight: "bold" }}>University of Piraeus</a>. 
                        I'm also an active member of the <a href="https://greek.nss.org/" target="_blank"  style={{ fontWeight: "bold" }}>Greek NewSpace Society</a>, where I host the organization's podcast and contribute to fostering a community of space enthusiasts. My interests vary from software development, human-computer interactions and a passion for exploring the cosmos.
                    </div>
                    <a
                        href="mailto:stavkraniti01@gmail.com"
                        className="intro-contact"
                    >
                        <SendRoundedIcon></SendRoundedIcon>
                        {"  " + "get in touch"}
                    </a>
                </FadeInSection>
            </div>
        );
    }
}

export default Intro;
