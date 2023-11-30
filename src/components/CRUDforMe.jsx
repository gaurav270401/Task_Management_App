import { Box, Typography, styled } from "@mui/material";
import Banner from "./Banner";

const Container = styled(Box)`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`;

const SectionTitle = styled(Typography)`
  font-size: 36px;
  font-weight: bold;
  margin-bottom: 20px;
`;

const SubHeading = styled(Typography)`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 10px;
`;

const Content = styled(Typography)`
  text-align: justify;
  line-height: 1.6;
  margin-bottom: 20px;
`;

const Feature = styled(Typography)`
  padding: 10px;
  text-align: left;
`;

const CRUDforMe = () => {
  return (
    <>
      <Banner />
      <Container>
        <SectionTitle>Task Management with CRUD</SectionTitle>
        <SubHeading>What is CRUD?</SubHeading>
        <Content>
          CRUD stands for Create, Read, Update, and Delete. In ReactJS, components are organized to handle each aspect of CRUD operations. React is a powerful library for frontend development, and effective task management often relies on implementing CRUD functionality.
        </Content>

        <Feature>Create: Add a new task or entry to your task list.</Feature>
        <Feature>Read: View and retrieve data from the web page.</Feature>
        <Feature>Update: Edit and update existing task details.</Feature>
        <Feature>Delete: Remove a task or entry from your task list.</Feature>
      </Container>
    </>
  );
};

export default CRUDforMe;
