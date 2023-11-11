import React from "react";
import { Sidenav } from "rsuite";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

import "../styles/NavBar.css";
import "react-typist/dist/Typist.css";
import FadeInSection from "./FadeInSection";

const isMobile = window.innerWidth < 600;

class NavBar extends React.Component {
    constructor() {
    super();
    this.state = {
        expanded: true,
        activeKey: "1"
    };
    this.handleSelect = this.handleSelect.bind(this);
    }
    handleSelect(eventKey) {
    this.setState({
        activeKey: eventKey
    });
    }
    render() {
    const { expanded } = this.state;

    const links = [
        <a href="#intro">/home</a>,
        <a href="#about">/about</a>,
        <a href="#experience">/experience</a>,
        <a href="#projects">/personal-projects</a>
    ]; 

    return (
        <div className="sidebar-nav">
            <div className="sidebar-logos" href="/">
            <a href="mailto:stavkraniti01@gmail.com">
            <EmailRoundedIcon style={{ fontSize: 20 }}></EmailRoundedIcon>
            </a>
            <a href="https://github.com/stavkran" target="_blank">
            <GitHubIcon style={{ fontSize: 19 }}></GitHubIcon>
            </a>
            <a href="https://www.linkedin.com/in/stavriana-kraniti/" target="_blank">
            <LinkedInIcon style={{ fontSize: 21 }}></LinkedInIcon>
            </a>
            </div>
            {!isMobile && (
                <Sidenav
                expanded={expanded}
                defaultOpenKeys={["3", "4"]}
                activeKey={this.state.activeKey}
                onSelect={this.handleSelect}
                appearance={"subtle"}
                >
                <Sidenav.Body>
                    <div className="sidebar-links">
                    {links.map((link, i) => (
                        <FadeInSection delay={`${i + 1}00ms`}>
                            <div>{link}</div>
                        </FadeInSection>
                    ))}
                    </div>
                </Sidenav.Body>
                </Sidenav>
            )}
        
        </div>
    );
    }
}

export default NavBar;
