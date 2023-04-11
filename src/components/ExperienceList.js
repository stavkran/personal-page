import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import FadeInSection from "./FadeInSection";

const isHorizontal = window.innerWidth < 600;

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    if (isHorizontal) {
        return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
        );
    } else {
        return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`vertical-tabpanel`}
            {...other}
        >
            {value === index && (
            <Box p={3}>
                <Typography>{children}</Typography>
            </Box>
            )}
        </div>
        );
    }
    }

    TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired
    };

    function a11yProps(index) {
    if (isHorizontal) {
        return {
        id: `full-width-tab-${index}`,
        "aria-controls": `full-width-tabpanel-${index}`
        };
    } else {
        return {
        id: `vertical-tab-${index}`
        };
    }
    }

    const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: "theme.palette.background.paper",
        display: "flex",
        height: 300
    },
    tabs: {
        borderRight: `1px solid ${theme.palette.divider}`
    }
    }));

    const ExperienceList = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const experienceItems = {
        "Cyber Noesis": {
        jobTitle: "Software Development Intern @",
        duration: "APR 2023 - JUN ",
        desc: [
            "Collaborated with the software development team to develop, test, and maintain software applications and systems used in cybersecurity.",
            "Gained hands-on experience working with cutting-edge technologies and contributing to the development of software products.",
            "Participated in code reviews and provided constructive feedback to improve code quality. Helped identify and resolve software defects and issues. Also, assisted in conducting research and development activities to support new product development or enhancements to existing products."
        ]
        },
        "University of Piraeus": {
        jobTitle: "student @",
        duration: "OCT 2019 - FEB 2024",
        desc: [
            "Worked on various hand-on projects involving coding assignments, software development projects, data analysis, and other practical exercises."
        ]
        }
    };

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
        <Tabs
            orientation={!isHorizontal ? "vertical" : "null"}
            variant={isHorizontal ? "fullWidth" : "scrollable"}
            value={value}
            onChange={handleChange}
            className={classes.tabs}
        >
            {Object.keys(experienceItems).map((key, i) => (
            <Tab label={isHorizontal ? `0${i}.` : key} {...a11yProps(i)} />
            ))}
        </Tabs>
        {Object.keys(experienceItems).map((key, i) => (
            <TabPanel value={value} index={i}>
            <span className="joblist-job-title">
                {experienceItems[key]["jobTitle"] + " "}
            </span>
            <span className="joblist-job-company">{key}</span>
            <div className="joblist-duration">
                {experienceItems[key]["duration"]}
            </div>
            <ul className="job-description">
                {experienceItems[key]["desc"].map(function (descItem, i) {
                return (
                    <li key={i}>{descItem}</li>
                    // <FadeInSection delay={`${i + 1}00ms`}>
                    // <li key={i}>{descItem}</li>
                    // </FadeInSection>
                );
                })}
            </ul>
            </TabPanel>
        ))}
        </div>
    );
};

export default ExperienceList;
