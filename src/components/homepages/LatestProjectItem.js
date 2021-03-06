import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { zoomOutAnimation } from "../animation";
import { colorKey } from "../GlobalStyle";

const { black, main } = colorKey;

const LatestProjectItem = ({ id }) => {
  const { projects } = useSelector((state) => state.projectData);
  const project = projects[id];

  return (
    <ProjectItemContainer>
      <Content>
        <Link to={`/project/${id}`}>
          <ImageContainer variants={zoomOutAnimation}>
            <img src={project.image} alt="project" />
          </ImageContainer>
          <h3>{project.name}</h3>
          <motion.hr variants={zoomOutAnimation} />
        </Link>
      </Content>
    </ProjectItemContainer>
  );
};
const ProjectItemContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  margin: 0 10px;
  width: 350px;
  @media screen and (max-width: 680px) {
    width: 250px;
  }
`;
const Content = styled(motion.div)`
  hr {
    border: 2px solid ${main};
    width: 50%;
    transition: all 0.5s linear;
  }
  h3 {
    font-weight: normal;
    transition: ease all 0.25s;
    margin: 10px 0 0 0;
  }
  a {
    text-decoration: none;
    color: ${black};
  }
  &:hover {
    hr {
      width: 100%;
    }
    img {
      padding: 5px;
    }
  }
  @media screen and (max-width: 550px) {
    margin: 25px 0 0 0;
    h3 {
      margin: 0;
    }
  }
`;
const ImageContainer = styled(motion.div)`
  min-height: 230px;
  overflow: hidden;
  img {
    transition: ease all 0.25s;
    width: 300px;
    background: ${main};
    padding: 10px;
    border-radius: 5px;
  }
  @media screen and (max-width: 680px) {
    min-height: 190px;
    img {
      width: 240px;
    }
  }
`;

export default LatestProjectItem;
