import { Typography, Box, Container, Grid, Card } from "@mui/material";
import ParticleWrapper from "../components/ParticleWrapper";

const StyledSkillItem = (props:any) => {
    return (
       <>
         
          <Card className="skill-item" sx={{paddingTop: 2}}>
               <img className="mb-2" src={props.image} alt={props.desc} loading="lazy" /> 
               <Typography sx={{padding:1}}>{props.desc}</Typography>
          </Card>
       </>
    )
}

const Home = () => {
    return (
        <>
            <section className="section banner">
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
                    <Typography sx={{fontSize: {xs: 20, md: 40}}} variant="h2" textAlign='center'>Tech which I used</Typography>
                    <Grid container justifyContent="center" columns={{ xs: 4, sm: 8, md: 10 }} sx={{marginTop: 2}} spacing={2}>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/html.jpeg" desc="HTML"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/css.jpeg" desc="CSS"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/js.jpeg" desc="JS"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/vue.jpeg" desc="Vue.js"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/react.jpeg" desc="React"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/redux.jpeg" desc="Redux"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/vuex.jpeg" desc="Vuex"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/git.png" desc="Git"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/bootstrap.jpeg" desc="Bootstrap 4/5"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/sass.jpeg" desc="SASS/SCSS"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/node.jpeg" desc="Node JS"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/apostrophe.jpeg" desc="Apostrophe CMS"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/mongo.jpeg" desc="MongoDB"></StyledSkillItem>
                        </Grid>
                        <Grid item xs={2}>
                            <StyledSkillItem image="/assets/docker.jpeg" desc="Docker"></StyledSkillItem>
                        </Grid>
                    </Grid>
                </Container>
            </Box>
            
        </>
    )
}

export default Home;