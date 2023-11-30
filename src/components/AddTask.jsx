import { useState } from "react";
import { FormControl, FormGroup, InputLabel, Input, Select, MenuItem, Typography, styled, Button, TextareaAutosize } from "@mui/material";
import { addTask } from "../service/api"; // Assuming you have a function for adding tasks
import { useNavigate } from "react-router-dom";



const Container = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  padding: '20px',
  maxWidth: '600px', 
  margin: '20px auto 0', 
  boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
  borderRadius: '8px',
  backgroundColor: '#fff',
});

const Title = styled(Typography)({
  fontSize: '24px',
  fontWeight: 'bold',
  marginBottom: '20px',
  color: '#333',
});

const StyledFormControl = styled(FormControl)({
  margin: '10px',
  width: '100%',
});


const StyledInputLabel = styled(InputLabel)({
  fontSize: '16px',
  marginTop:'10px',
  color: '#333',
});

const StyledInputLabel1 = styled(InputLabel)(({ isFocused, hasText }) => ({
  fontSize: '16px',
  marginTop: '30px',
  marginLeft:'15px',
  color: isFocused || hasText ? 'transparent' : '#333',
  transform: isFocused || hasText ? 'translate(0, -20px)' : 'translate(0, 0)',
  transition: 'transform 0.3s ease, color 0.3s ease', // Change color when focused
}));

const StyledInput = styled(Input)({
  width: '100%',
  padding: '10px',
  border: '1px solid #ccc',
  borderRadius: '4px',
});

const StyledTextareaAutosize = styled(TextareaAutosize)(({ isFocused }) => ({
  
  padding: '8px',
  fontSize: '16px',
  marginTop: '8px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  background: isFocused ? 'transparent' : '#fff',
  fontFamily: 'inherit', // Inherit font from the parent container
  transition: 'background 0.3s ease',
  
}));

const StyledSelect = styled(Select)({
  width: '30%',
  padding: '1px',
  border: '1px solid #ccc',
  borderRadius: '4px',
  fontSize: '16px',
  marginLeft:'auto',
  marginRight:'45%',
});

const StyledMenuItem = styled(MenuItem)({
  fontSize: '16px',
});

const StyledButton = styled(Button)({
  marginTop: '10px',
  padding: '8px 16px',
  fontSize: '14px',
});


const defaultTask = {
  taskName: '',
  description: '',
  priority: 'low', // Default priority
};

const AddTask = () => {
  const [task, setTask] = useState(defaultTask);
  const [isDescriptionFocused, setIsDescriptionFocused] = useState(false);
  const navigate = useNavigate();

  const onValueChange = (e) => {
    setTask({ ...task, [e.target.name]: e.target.value });
  };

  const handleFocus = () => {
    setIsDescriptionFocused(true);
  };

  const handleBlur = () => {
    setIsDescriptionFocused(false);
  };

  const addTaskData = async () => {
    if (task.taskName.trim() === '') {
      alert('Task name is required.');
      return;
    }

    await addTask(task);
    localStorage.setItem('task', JSON.stringify(task));
    navigate("/crudtasks");
  };

  return (
    <Container>
      <Title>Add Task</Title>
      <StyledFormControl>
        <StyledInputLabel>Task Name</StyledInputLabel>
        <StyledInput onChange={(e) => onValueChange(e)} name="taskName" />
      </StyledFormControl>
      <StyledFormControl>
        <StyledInputLabel1 isFocused={isDescriptionFocused} hasText={task.description.trim().length > 0}>Task Description</StyledInputLabel1>
        <StyledTextareaAutosize
          minRows={3}
          onChange={(e) => onValueChange(e)}
          onFocus={handleFocus}
          onBlur={handleBlur}
          name="description"
        />
      </StyledFormControl>
      <StyledFormControl><StyledInputLabel>Priority Level</StyledInputLabel></StyledFormControl>
        <StyledSelect onChange={(e) => onValueChange(e)} name="priority" value={task.priority}>
          <StyledMenuItem value="low">Low</StyledMenuItem>
          <StyledMenuItem value="medium">Medium</StyledMenuItem>
          <StyledMenuItem value="high">High</StyledMenuItem>
        </StyledSelect>
      
      <StyledFormControl>
        <StyledButton variant="outlined" onClick={() => addTaskData()}>Add Task</StyledButton>
      </StyledFormControl>
    </Container>
  );
};

export default AddTask;
