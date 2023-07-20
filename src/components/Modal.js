import React from "react";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Modal from "react-bootstrap/Modal";
import Row from "react-bootstrap/Row";
import { useContext, useState } from "react";
import { RoomContext } from "../App";

function SelectRooms(props) {
  const data = useContext(RoomContext);
  const { roomsData } = data;
  const totalAC = roomsData.filter((room) => room.type === "AC");
  const totalNAC = roomsData.filter((room) => room.type === "NAC");
  const [bookRooms, setBookRooms] = useState([]);

  const onSelectRooms = (e) => {
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
                return (
                  <Col xs={3} key={room.roomNo} className="my-1">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={room.roomNo}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor={room.roomNo}
                    >
                      {room.roomNo}
                    </label>
                  </Col>
                );
              })}
            </Row>
            <Row>
              <h5>Select Non AC Rooms</h5>
              {totalNAC.map((room) => {
                return (
                  <Col xs={3} key={room.roomNo} className="my-1">
                    <input
                      type="checkbox"
                      className="btn-check"
                      id={room.roomNo}
                    />
                    <label
                      className="btn btn-outline-primary"
                      htmlFor={room.roomNo}
                    >
                      {room.roomNo}
                    </label>
                  </Col>
                );
              })}
            </Row>
          </form>
        </Container>
      </Modal.Body>
      <Modal.Footer>
        <Button
          variant="danger"
          onSelect={onSelectRooms}
          onClick={props.onSubmit}
        >
          Submit
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default SelectRooms;
