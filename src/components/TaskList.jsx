import React from 'react';
import { Button, Table, TableBody, TableCell, TableHead, TableRow, Checkbox, styled, Pagination } from "@mui/material";
import { getTasks, deleteTask, editTask } from "../service/api";
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Container = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const StyledTable = styled(Table)`
  width: 90%;
  margin: 50px auto 0 auto;
  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
`;

const THead = styled(TableRow)`
  background: #2471a3;
  & > th {
    color: #fff;
    font-size: 18px;
    font-weight: bold;
  }
`;

const TCell = styled(TableRow)`
  & > td {
    font-size: 16px;
    padding: 12px;
  }

  &.highlighted {
    background-color: #e0f7fa;
  }
`;

const ActionButton = styled(Button)`
  margin-right: 10px;
`;



const StyledPagination = styled(Pagination)`
  margin-top: 10px; /* Remove any default margin */
`;


const CrudTasks = () => {
  const [tasks, setTasks] = useState([]);
  const [selectedRows, setSelectedRows] = useState([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(7);
  const [sortBy, setSortBy] = useState(null);
  const [sortOrder, setSortOrder] = useState("asc");
  const totalPages = Math.ceil(tasks.length / rowsPerPage);

  const navigate = useNavigate();

  useEffect(() => {
    getAllTasks();
  }, [page, rowsPerPage, sortBy, sortOrder]);

  

  const getAllTasks = async () => {
    try {
      console.log("Fetching tasks...");
      let response = await getTasks();
      console.log('Fetched task data:', response.data);
      const sortedTasks = sortTasks(response.data);
      setTasks(sortedTasks);
    } catch (error) {
      console.error("Error fetching task data:", error);
    }
  };

  const sortTasks = (tasksToSort) => {
    const comparator = (a, b) => {
      const priorityMap = { low: 0, medium: 1, high: 2 };
      const aValue = priorityMap[a.priority];
      const bValue = priorityMap[b.priority];

      return sortOrder === "asc" ? aValue - bValue : bValue - aValue;
    };

    return [...tasksToSort].sort(comparator);
  };

  const deleteTaskHandler = async (id) => {
    try {
      await deleteTask(id);
      getAllTasks();
    } catch (error) {
      console.error("Error deleting task:", error);
    }
  };

  const handleCheckboxChange = (taskId) => {
    const updatedSelection = selectedRows.includes(taskId)
      ? selectedRows.filter((id) => id !== taskId)
      : [...selectedRows, taskId];
    setSelectedRows(updatedSelection);
  };

 

  const handlePrevPage = () => {
    setPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNextPage = () => {
    setPage((prevPage) => Math.min(prevPage + 1, Math.ceil(tasks.length / rowsPerPage) - 1));
  };

  const handleSort = (criteria) => {
    setSortBy("priority");
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <Container>
      <StyledTable responsive>
        <TableHead>
          <THead>
            <TableCell>Task ID</TableCell>
            <TableCell>Status</TableCell>
            <TableCell>Task Name</TableCell>
            <TableCell>Task Description</TableCell>
            <TableCell onClick={() => handleSort("priority")}>Priority</TableCell>
            <TableCell>Actions</TableCell>
          </THead>
        </TableHead>
        <TableBody>
          {tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((task) => (
            <TCell
              key={task.taskId}
              className={selectedRows.includes(task.taskId) ? 'highlighted' : ''}
            >
              <TableCell>{task.taskId}</TableCell>
              <TableCell>
                <Checkbox
                  checked={selectedRows.includes(task.taskId)}
                  onChange={() => handleCheckboxChange(task.taskId)}
                />
              </TableCell>
              <TableCell>{task.taskName}</TableCell>
              <TableCell>{task.description}</TableCell>
              <TableCell>{task.priority.charAt(0).toUpperCase() + task.priority.slice(1)}</TableCell>
              <TableCell>
                <ActionButton
                  variant="contained"
                  onClick={() => deleteTaskHandler(task.taskId)}
                >
                  Delete
                </ActionButton>

                <ActionButton
                  variant="contained"
                  color="primary"
                  component={Link}
                  to={`/edittask/${task.taskId}`}
                >
                  Edit
                </ActionButton>
              </TableCell>
            </TCell>
          ))}
        </TableBody>
      </StyledTable>
      <StyledPagination
        count={totalPages}
        page={page + 1}
        onChange={(e, newPage) => setPage(newPage - 1)}
        shape="rounded"
      />
    </Container>
  );
};

export default CrudTasks;
