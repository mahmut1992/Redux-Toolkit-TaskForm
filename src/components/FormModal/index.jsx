import React from "react";
import { Button, Form, Modal } from "react-bootstrap";
import { inputs } from "../../Constants/constants";
import { useDispatch } from "react-redux";
import { addTask, updateTask } from "../../redux/slices/crudSlice";

const FormModal = ({ show, handleClose, task }) => {
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();
    // FormData klasından örnek

    const formData = new FormData(e.target);
    const taskData = Object.fromEntries(formData.entries());

    // Eğer task varsa bu modal düzenle update modal dır

    if (!task) {
      dispatch(addTask(taskData));
    } else {
      // Güncelleme işlemi
      taskData.id = task.id;
      dispatch(updateTask(taskData));
    }

    handleClose();
  };

  return (
    <Modal
      className="text-black"
      show={show}
      onHide={handleClose}
      backdrop="static"
      keyboard={false}
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title>
          {task ? "Görevi Güncelle" : "Yeni Görev Ekle"}{" "}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          {inputs.map((item, key) => (
            <Form.Group key={key}>
              <Form.Label className="my-2">{item.label} </Form.Label>
              <Form.Control
                name={item.name}
                type={item.type}
                placeholder="İsim giriniz"
                className="shadow"
                required
                defaultValue={task ? task[item.name] : ""}
              />
            </Form.Group>
          ))}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Vazgeç
            </Button>
            <Button type="submit" variant="primary">
              {task ? "Kaydet" : "Oluştur"}
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default FormModal;
