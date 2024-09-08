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
                    <p>👋 Hi there! I'm Gaurav, a dedicated frontend developer with a love for crafting engaging and user-centric web experiences. With expertise in React.js, Vue.js, JavaScript, HTML, and CSS, I bring over 4 years of hands-on experience in building responsive and dynamic web applications. </p>
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
            <Box component="section" className="section experience">
            <Container>
                <Typography variant="h2" textAlign="center">Experience</Typography>
            </Container>
            </Box>

        </>
    )
}

export default Home;