import { Typography, Box, Container, Grid, Card } from "@mui/material";
import ParticleWrapper from "../components/ParticleWrapper";
import { motion, Variants } from "framer-motion";
import { useEffect, useState, ReactNode } from "react";

interface Skill {
    url: string,
    desc: string
}

type skillProps = {
    image: string,
    desc: string,
    children?: ReactNode,
    url?: string
}

type Experience = {
    timePeriod: string,
    position: string,
    companyName: string,
    description: string,
    bgColor: string
}

const StyledSkillItem = (props: skillProps) => {
    return (
        <>
            <Card className="skill-item" sx={{ paddingTop: 2 }}>
                <img className="mb-2" src={props.image} alt={props.desc} loading="lazy" />
                <Typography sx={{ padding: 1 }}>{props.desc}</Typography>
                {props.children}
            </Card>
        </>
    )
}

const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    onscreen: {
        y: 50,
        rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
        }
    }
};

const Home = () => {
    const [skills, setSkills]:[[], Function] = useState([]);
    const experienceData:Experience[] = [
        {
            timePeriod: 'July 2024 - Present',
            position: 'Vue.js Developer',
            companyName: 'Harjai Computers Pvt Ltd',
            description: 'Working on as third party payroll for Bajaj Allianz where I work on deployment and feature implementaion for different category of policies. ', 
            bgColor: '#2a2850'
        },
        {
            timePeriod: 'June 2022 - Apr 2024',
            position: 'Software Engineer (Vue.js)',
            companyName: 'Chetu India Pvt Ltd',
            description: 'I built a CMS for admins to create pages and add content like sliders and widgets. I developed REST APIs using Node.js for a third-party service and integrated them into the CMS. Additionally, I worked on a crypto social app with React/Redux and modified a library for Vue 3 to support GraphQL.', 
            bgColor: '#4a243c'
        },
        {
            timePeriod: 'July 2020 - Jun 2022',
            position: 'Frontend Developer',
            companyName: 'Netling Digital Pvt Ltd',
            description: 'I developed a web application using Vue.js and Vuex to manage rental spaces for meetings and offices. I also built a React.js app that allows users to compare home appliances based on features. Additionally, I worked in Agile methodology and created web pages using HTML, CSS, SCSS, JavaScript, Bootstrap, and jQuery.', 
            bgColor: '#13504b'
        },
        {
            timePeriod: 'Sep 2019 - Dec 2019',
            position: 'Digital Marketing Intern',
            companyName: 'Acube Digital',
            description: 'I used WordPress templates to create professional websites, implemented SEO and SMO techniques to improve search rankings, and deployed WordPress sites on HostGator.', 
            bgColor: '#262937'
        },
    ]

    useEffect(() => {
        fetch("../data/skills.json")
            .then(async (skill) => {
                const res:Skill[] = await skill.json();
                setSkills(res)
            });
    }, [])

    return (
        <>
            <section className="banner">
                <ParticleWrapper />
                <div className="content">
                    <h2>Gaurav Kumar</h2>
                    <p>👋 Hi there! I'm Gaurav, a dedicated full stack developer with a love for crafting engaging and user-centric web experiences. With expertise in React.js, Vue.js, JavaScript, Java, Spring Boot, HTML, and CSS, I bring over 5 years of hands-on experience in building responsive and dynamic web applications. </p>
                    <ul className="list-unstyled social-icons mt-4">
                        <li><a href="https://www.linkedin.com/in/gaurav-kumar-3ba537170/" target="_blank" className="fa fa-linkedin"></a></li>
                        <li><a href="https://github.com/gkumar9891" target="_blank" className="fa fa-github"></a></li>
                        <li><a href="https://x.com/gauravk9891" target="_blank" className="fa fa-x-twitter">
                            <svg width="15px" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                                <path d="M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z"></path>
                            </svg></a></li>
                        <li><a href="Gaurav_Resume.pdf" target="_blank" className="btn btn-secondary rounded-pill">Resume</a></li>
                    </ul>
                </div>
            </section>
            <Box component="section" className="section skills" style={{ minHeight: '100dvh' }}>
                <Container>
                    <Typography sx={{ fontSize: { xs: 30, md: '3.75rem' } }} variant="h2" textAlign='center'>Tech which I used</Typography>
                    <Grid container justifyContent="center" columns={{ xs: 4, sm: 8, md: 10 }} spacing={2}>
                        {skills.map((skill:skillProps) =>
                        <Grid item xs={2}>
                            <motion.div
                                initial="offscreen"
                                whileInView="onscreen"
                                viewport={{ once: true, amount: 0.8 }}
                            >
                                <motion.div variants={cardVariants}>
                                    <StyledSkillItem image={`/assets/${skill.url}`} desc={skill.desc}></StyledSkillItem>
                                </motion.div>
                            </motion.div>
                        </Grid>)
                        }
                    </Grid>
                </Container>
            </Box>
            <Box component="section" className="section experience pb-0">
                <Container>
                    <Typography variant="h2" textAlign="center" sx={{ fontSize: { xs: 30, md: '3.75rem' }, marginBottom: { xs: '20px', md: '40px' } }}>Experience</Typography>
                </Container>
                {experienceData.map(experience => 
                    <Box component="div" className="item" sx={{minHeight: '100vh', background: experience.bgColor, display: "flex", alignItems: 'center'}}>
                        <Container>
                            <Typography className="time-period" textAlign="right" sx={{ fontSize: {xs: 20, md: 30}, color: '#fff', marginBottom: { xs: '20px', md: '40px'} }}>{experience.timePeriod}</Typography>
                            <Typography sx={{ fontSize: {xs: 20, md: 30}, color: '#fff', marginBottom: '5px' }} variant="h5" className="position">{experience.position} @</Typography>
                            <Typography sx={{ fontSize: {xs: 40, md: 60}, color: '#fff', marginBottom: { xs: '20px', md: '40px' } }} variant="h4" className="company-name">{experience.companyName}</Typography>
                            <Box className="desc-wrap"  sx={{padding: { md: '0 200px 0' }}}>
                                <Typography className="description" sx={{ fontSize: 20, color: '#fff' }}>{experience.description}</Typography>
                            </Box>
                        </Container>
                    </Box>    
                )}
            </Box>

        </>
    )
}

export default Home;