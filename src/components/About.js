import React from "react";
import "../styles/About.css";
import FadeInSection from "./FadeInSection";

class About extends React.Component {
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
        const one = (
        <p>
            I graduated in Digital Systems from the <a href="https://www.ds.unipi.gr/" target="_blank"> University of Piraeus</a> and I’m now pursuing an MSc in Computer Science at the <a href="https://www.uva.nl/en" target="_blank">University of Amsterdam</a>, where I focus on Distributed Systems and Parallel Computing. I’m especially interested in full-stack development, low-level programming, and building scalable systems that bring ideas to life.
        </p>
    );
    const desc_items = [one];

    const tech_stack = [
        "Java",
        "Spring Boot",
        "C",
        ".NET",
        "Javascript",
        "Python",
        "Django",
        "React.js",
        "SQL",
        "MongoDB",
        "Docker",
    ];

    const tech_items = tech_stack.map(stack => <li>{stack}</li>);

    return (
        <div id="about">
        <FadeInSection>
            <div className="section-header ">
            <span className="section-title">/ about-me</span>
            </div>
            <div className="about-content">
            <div className="about-description">
                {[one]}
                {"Some technologies I've been working with:"}
                <ul className="tech-stack">
                {tech_stack.map(function (tech_item, i) {
                    return (
                    <FadeInSection delay={`${i + 1}00ms`}>
                        <li>{tech_item}</li>
                    </FadeInSection>
                    );
                })}
                </ul>
            </div>
            <div className="about-image">
                <img src={"/personal-page/assets/me.jpg"} alt=""/>
            </div>
            </div>
        </FadeInSection>
        </div>
    );
    }
}

export default About;
