import Head from "next/head";
import Image from "next/image";
import Landing from "../components/Landing";
import NavBar from "../components/NavBar";
import styles from "../styles/Home.module.css";
import AboutMe from "../components/AboutMe";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import { DataContext, EnvContext } from "../context";
import Stack from "../components/Languages/Stack";
import SocialLinks from "../components/Socials/SocialLinks";
const Home = (props: any) => {
  return (
    <DataContext.Provider
      value={{
        projects: props.projects,
        skills: props.skills,
        stack: props.stack,
        user: props.user,
      }}
    >
      <EnvContext.Provider
        value={{ projectId: props.projectId, dataset: props.dataset }}
      >
        <div className=" bg-[url('../assets/img/bg-hero.jpg')] h-screen bg-cover">
          <Head>
            <title>alex magwe Next App</title>
            <meta name="description" content="alex magwe" />
            <link rel="icon" href="/favicon.ico" />
          </Head>

          <main className=" text-secondary  ">
            <div className="relative w-full ">
              <div className="h-screen absolute inset-0 z-20"></div>
              <div className="relative z-50 bg-gradient-to-r from-hero-gradient-from to-hero-gradient-to h-screen">
                <NavBar />
                <Landing />
              </div>
            </div>
            <div>
              <AboutMe />
              {/* <Skills /> */}
              <Stack />
              <Projects />
            </div>
          </main>

          <footer className={styles.footer}>
           <SocialLinks/>
          </footer>
        </div>
      </EnvContext.Provider>
    </DataContext.Provider>
  );
};

export default Home;

export const getServerSideProps = async () => {
  //  const query = encodeURIComponent(`*`)
  const projectId = process.env.PROJECT_ID;
  const dataset = process.env.PROJECT_DATASET;

  const projectQuery = encodeURIComponent(
    `*[_type=="project"]{...,technology[]->}`
  );
  const projectUrl = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${projectQuery}`;
  const projectResp = await fetch(projectUrl).then((res) => res.json());

  const userQuery = encodeURIComponent(
    `*[_type=="user"]{name,bio,about,profilePicture,socials[]->}`
  );
  const usersUrl = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${userQuery}`;
  const userResp = await fetch(usersUrl).then((res) => res.json());

  const stackQuery = encodeURIComponent(
    `*[_type=="stack"]{...,category->{title}}`
  );
  const stackUrl = `https://${projectId}.api.sanity.io/v1/data/query/${dataset}?query=${stackQuery}`;
  const stackResp = await fetch(stackUrl).then((res) => res.json());
  return {
    props: {
      projects: projectResp.result,
      stack: stackResp.result,
      user: userResp.result,
      projectId,
      dataset,
    },
  };
};
