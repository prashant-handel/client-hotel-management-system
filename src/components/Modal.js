import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useContext, useState } from "react";
import { RoomContext } from "../App";

function SelectRooms(props) {
  const roomsData = useContext(RoomContext);
  const { totalRooms } = roomsData;
  const totalAC = totalRooms.filter((room) => room.type === "AC");
  const totalNAC = totalRooms.filter((room) => room.type === "NAC");
  const [bookRooms, setBookRooms] = useState([]);
  const [checkboxValues, setCheckboxValues] = useState([]);

  // const handleCheckboxChange = (e) => {
  //   const { name, value } = e.target;
  //   setCheckboxValues((prev) => {
  //     return { ...prev, [name]: value };
  //   });
  // };

  const handleCheckboxChange = (e) => {
    const { name, value, checked } = e.target;
    if (checkboxValues.includes(+name)) {
      setCheckboxValues(
        checkboxValues.filter((checkValues)=>{
          return checkValues !== +name
        }));
    }
    else{
      setCheckboxValues([...checkboxValues, +name]);
    }
  };

  return (
    <Modal {...props} aria-labelledby="contained-modal-title-vcenter">
      <Modal.Header closeButton onClick={props.onHide}>
        <Modal.Title id="contained-modal-title-vcenter">
          Select Rooms of your choice
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="grid-example">
        <Container>
          <form>
            <Row>
              <h5>Select AC Rooms</h5>
              {totalAC.map((room) => {
                if (room.status === true) {
                  return (
                    <Col xs={3} key={room.roomNo} className="my-1">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id={room.roomNo}
                        disabled
                        checked={
                          checkboxValues.includes(room.roomNo) ? true : false
                        }
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor={room.roomNo}
                      >
                        {room.roomNo}
                      </label>
                    </Col>
                  );
                } else if (room.status === false) {
                  if (checkboxValues.includes(room.roomNo)) {
                    return (
                      <Col xs={3} key={room.roomNo} className="my-1">
                        <input
                          type="checkbox"
                          className="btn-check"
                          name={room.roomNo}
                          id={room.roomNo}
                          onChange={handleCheckboxChange}
                          checked={
                            checkboxValues.includes(room.roomNo) ? true : false
                          }
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor={room.roomNo}
                        >
                          {room.roomNo}
                        </label>
                      </Col>
                    );
                  } else {
                    return (
                      <Col xs={3} key={room.roomNo} className="my-1">
                        <input
                          type="checkbox"
                          className="btn-check"
                          name={room.roomNo}
                          id={room.roomNo}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor={room.roomNo}
                        >
                          {room.roomNo}
                        </label>
                      </Col>
                    );
                  }
                }
              })}
            </Row>
            <Row>
              <h5>Select Non AC Rooms</h5>
              {totalNAC.map((room) => {
                if (room.status === true) {
                  return (
                    <Col xs={3} key={room.roomNo} className="my-1">
                      <input
                        type="checkbox"
                        className="btn-check"
                        id={room.roomNo}
                        disabled
                        checked={
                          checkboxValues.includes(room.roomNo) ? true : false
                        }
                        onChange={handleCheckboxChange}
                      />
                      <label
                        className="btn btn-outline-primary"
                        htmlFor={room.roomNo}
                      >
                        {room.roomNo}
                      </label>
                    </Col>
                  );
                } else {
                  if (checkboxValues.includes(room.roomNo)) {
                    return (
                      <Col xs={3} key={room.roomNo} className="my-1">
                        <input
                          type="checkbox"
                          className="btn-check"
                          name={room.roomNo}
                          id={room.roomNo}
                          onChange={handleCheckboxChange}
                          checked={
                            checkboxValues.includes(room.roomNo) ? true : false
                          }
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor={room.roomNo}
                        >
                          {room.roomNo}
                        </label>
                      </Col>
                    );
                  } else {
                    return (
                      <Col xs={3} key={room.roomNo} className="my-1">
                        <input
                          type="checkbox"
                          className="btn-check"
                          name={room.roomNo}
                          id={room.roomNo}
                          onChange={handleCheckboxChange}
                        />
                        <label
                          className="btn btn-outline-primary"
                          htmlFor={room.roomNo}
                        >
                          {room.roomNo}
                        </label>
                      </Col>
                    );
                  }
                }
              })}
            </Row>
          </form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onClick={() => props.onSubmitModal(checkboxValues)}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectRooms;
