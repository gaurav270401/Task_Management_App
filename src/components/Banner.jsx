import { Box, Typography, styled } from "@mui/material";

const Image = styled(Box)`
  background: linear-gradient(rgba(36, 113, 163, 0.8), rgba(36, 113, 163, 0.8)), url('https://img.freepik.com/free-photo/abstract-grunge-decorative-relief-navy-blue-stucco-wall-texture-wide-angle-rough-colored-background_1258-28311.jpg?w=2000') center/cover no-repeat;
  width: 100%;
  height: 50vh;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
`;

const Heading = styled(Typography)`
  color: #FFFFFF;
  font-size: 3rem;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
  margin-bottom: 20px;
`;

const Subtitle = styled(Typography)`
  color: #FFFFFF;
  font-size: 1.5rem;
  text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.5);
`;

const Banner = () => {
  return (
    <Image>
      <Heading>Task Manager</Heading>
      <Subtitle>Your Ultimate Solution for Efficient Task Management</Subtitle>
    </Image>
  );
}

export default Banner;