import React, { useContext } from "react";
import Card from "react-bootstrap/Card";
import BookingForm from "../components/BookingForm";
import { RoomContext } from "../App";


const RoomsAvailable = () => {
  const roomsData = useContext(RoomContext);
  const {availAC, availNAC } = roomsData;
  return (
    <div>
    <div>
      Check In and Check Out Component
      </div>

      <div style={{ margin: "2vh auto" }}>
        <Card className="container" style={{ width: "25rem" }}>
          <Card.Body>
            <Card.Title>
              Total AC Rooms Available:{" "}
              <span className="float-end fw-bold">
                {availAC[0].values.length}
              </span>
            </Card.Title>
            <Card.Title>
              Total Non AC Rooms Available:{" "}
              <span className="float-end fw-bold">
                {availNAC[0].values.length}
              </span>
            </Card.Title>
          </Card.Body>
        </Card>
      </div>
      <div className="d-flex justify-content-evenly">
        <BookingForm />
      </div>

    </div>
  );
};

export default RoomsAvailable;
