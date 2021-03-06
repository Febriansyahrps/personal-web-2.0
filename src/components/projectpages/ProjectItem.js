import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { colorKey } from "../GlobalStyle";

const { black, main } = colorKey;

const ProjectItem = ({ id }) => {
  const { projects } = useSelector((state) => state.projectData);
  const project = projects[id];

  return (
    <ProjectItemContainer>
      <Link to={`/project/${id}`}>
        <ImageContainer>
          <img src={project.image} alt="project" />
        </ImageContainer>
        <DescriptionContainer>
          <p>{project.date}</p>
          <h3>{project.name}</h3>
        </DescriptionContainer>
      </Link>
      <hr />
    </ProjectItemContainer>
  );
};

const ProjectItemContainer = styled(motion.div)`
  cursor: pointer;
  width: fit-content;
  margin: 0 50px 50px 50px;
  a {
    text-decoration: none;
    color: ${black};
  }
  hr {
    border: 2px solid ${main};
    width: 50%;
    transition: all 0.5s linear;
  }
  &:hover {
    img {
      padding: 5px;
    }
    hr {
      width: 100%;
    }
    h3 {
      transition: all linear 0.25s;
    }
  }
  @media screen and (max-width: 1200px) {
    margin: 0 30px 30px 30px;
  }
  @media screen and (max-width: 900px) {
    margin: 0 25px 25px 25px;
  }
`;
const ImageContainer = styled(motion.div)`
  min-height: 300px;
  img {
    transition: all ease 0.25s;
    width: 400px;
    padding: 10px;
    border-radius: 10px;
    background: ${main};
  }

  @media screen and (max-width: 900px) {
    min-height: 230px;
    img {
      width: 300px;
    }
  }
  @media screen and (max-width: 680px) {
    min-height: 180px;
    img {
      width: 240px;
    }
  }
`;
const DescriptionContainer = styled(motion.div)`
  p {
    font-size: 12px;
  }
  h3 {
    margin: 15px 0 0 0;
    font-weight: normal;
  }
  @media screen and (max-width: 550px) {
    p {
      font-size: 10px;
    }
    h3 {
      margin: 10px 0 0 0;
    }
  }
`;

export default ProjectItem;
