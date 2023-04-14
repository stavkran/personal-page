import React from "react";
import GitHubIcon from '@mui/icons-material/GitHub';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

class Links extends React.Component {
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
        <span className="external-links">
            <a className="github-icon" href={this.props.githubLink}>
            <GitHubIcon
                style={{
                fontSize: 20,
                color: "var(--lightest-slate)"
                }}
            ></GitHubIcon>
            </a>
            {this.props.openLink && (
            <a className="open-icon" href={this.props.openLink}>
                <OpenInBrowserIcon
                style={{
                    fontSize: 25,
                    color: "var(--lightest-slate)"
                }}
                ></OpenInBrowserIcon>
            </a>
            )}
        </span>
        );
    }
}

export default Links;
