import { motion } from "framer-motion";
import styled from "styled-components";
import { fadeAnimation, zoomOutAnimation } from "../animation";
import pentagon from "../../assets/pentagon.svg";
import profileImage from "../../assets/profile-image.png";

const ProfileImage = () => {
  return (
    <ImageWrapper>
      <PentagonSVG variants={fadeAnimation} src={pentagon} alt="pentagon" />
      <Image variants={zoomOutAnimation}>
        <img src={profileImage} alt="profile" />
      </Image>
    </ImageWrapper>
  );
};

const ImageWrapper = styled(motion.div)`
  position: relative;
  height: 500px;
  @media screen and (max-width: 900px) {
    height: 400px;
  }
  @media screen and (max-width: 680px) {
    height: 247px;
  }
  @media screen and (max-width: 550px) {
    height: 350px;
  }
`;
const PentagonSVG = styled(motion.img)`
  display: block;
  width: 400px;
  margin: 94px 0 0 0;
  @media screen and (max-width: 900px) {
    width: 300px;
    margin: 94px 0 0 0;
  }
  @media screen and (max-width: 680px) {
    width: 250px;
    margin: -8px 0 0 0;
  }
  @media screen and (max-width: 550px) {
    width: 250px;
    margin: 95px auto 0 auto;
    left: 0;
    right: 0;
  }
`;

const Image = styled(motion.div)`
  position: absolute;
  bottom: 0;
  img {
    transition: all ease 0.5s;
    width: 400px;
  }
  @media screen and (max-width: 900px) {
    img {
      width: 300px;
    }
  }
  @media screen and (max-width: 680px) {
    img {
      width: 250px;
    }
  }
  @media screen and (max-width: 550px) {
    img {
      margin: 10px auto 0 auto;
      width: 250px;
      left: 0;
      right: 0;
    }
  }
`;

export default ProfileImage;
