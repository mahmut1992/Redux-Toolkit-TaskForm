import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { FaEdit, FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { deleteTask } from "../../redux/slices/crudSlice";
import FormModal from "../FormModal";

const TaskRow = ({ task, index }) => {
  const [isShow, setIsShow] = useState(false);

  const dispatch = useDispatch();
  const formatDate = (date) => {
    const formattedDate = new Date(date).toLocaleDateString("tr", {
      day: "numeric",
      month: "numeric",
      year: "numeric",
    });
    return formattedDate;
  };
  const handleDelete = (id) => {
    const res = confirm("Task ı silmek istediğinizden emin misiniz ?");
    if (!res) return;

    dispatch(deleteTask(id));
  };
  return (
    <>
      <tr>
        <td>{index + 1}</td>
        <td>{task.title} </td>
        <td>{task.author} </td>
        <td>{task.assigned} </td>
        <td>{formatDate(task.end_date)} </td>
        <td className="d-flex gap-1">
          <Button
            onClick={() => handleDelete(task.id)}
            size="sm"
            variant="danger"
          >
            <FaTrash />
          </Button>
          <Button onClick={() => setIsShow(true)} size="sm">
            <FaEdit />
          </Button>
        </td>
      </tr>
      <FormModal
        show={isShow}
        handleClose={() => setIsShow(false)}
        task={task}
      />
    </>
  );
};

export default TaskRow;
