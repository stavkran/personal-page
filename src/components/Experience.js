import React from "react";
import FadeInSection from "./FadeInSection";
import ExperienceList from "./ExperienceList";
import "../styles/Experience.css";

class Experience extends React.Component {
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
        return (
        <div id="experience">
            <FadeInSection>
            <div className="section-header ">
                <span className="section-title">/ experience</span>
            </div>
            <ExperienceList></ExperienceList>
            </FadeInSection>
        </div>
        );
    }
}

export default Experience;
