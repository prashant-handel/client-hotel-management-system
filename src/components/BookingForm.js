import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import { useState, useContext } from "react";
import SelectRooms from "../components/Modal";
import { RoomContext } from "../App";

const BookingForm = () => {
  const [modalShow, setModalShow] = useState(false);
  const [newOrder, setNewOrder] = useState({
    name: "",
    email: "",
    identity: "",
    checkIn: "25/07/2023",
    checkOut: "30/07/2023",
    roomNo: [],
    price: 0,
  });

  let [sum,setSum]= useState(0);

  const roomsData = useContext(RoomContext);
  const { totalRooms } = roomsData;

  const submitForm = (e) => {
    e.preventDefault();
    console.log(newOrder);
  };
  const handleOnChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setNewOrder((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const onSubmitModal = (newRooms) => {
    console.log(newRooms);
    setNewOrder((prev) => {
      return {
        ...prev,
        roomNo: [...newRooms],
      };
    });

    setNewOrder((prev) => {
      return {
        ...prev,
        price: prev.roomNo.map((num) => {
          for (const key in totalRooms) {
            if(totalRooms[key].roomNo === num){
              // console.log(`price = ${totalRooms[key].price}`);
              // setSum(sum+totalRooms[key].price)
              // console.log(sum);
            }
          }
        }),
      };
    });

    setModalShow(false);
  };

  return (
    <Form style={{ width: "25rem" }} onSubmit={submitForm}>
      <Form.Group>
        <Form.Label>Guest Name</Form.Label>
        <Form.Control
          type="name"
          name="name"
          placeholder="Enter name"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          name="email"
          placeholder="Enter email"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <Form.Label>Guest Identity Proof</Form.Label>
        <Form.Control
          type="Identity"
          name="identity"
          placeholder="Identity Proof Number"
          onChange={handleOnChange}
        />
      </Form.Group>
      <Form.Group className="mb-2">
        <h4>{`Total Price: Rs.${newOrder.price}`}</h4>
      </Form.Group>
      <Form.Group className="mb-2">
        <Button variant="danger" onClick={() => setModalShow(true)}>
          Select Rooms
        </Button>
        <SelectRooms
          show={modalShow}
          onHide={() => {
            setModalShow(false);
          }}
          onSubmitModal={onSubmitModal}
        />
      </Form.Group>
      <Form.Group className="d-grid">
        <Button variant="outline-success" size="lg" type="submit">
          Book Now
        </Button>
      </Form.Group>
    </Form>
  );
};

export default BookingForm;

// import Form from "react-bootstrap/Form";
// import { Button } from "react-bootstrap";
// import { useState } from "react";
// import SelectRooms from "../components/Modal";

// const BookingForm = () => {
//   const [modalShow, setModalShow] = useState(false);
//   const [newOrder, setNewOrder] = useState({
//     name: "",
//     email: "",
//     identity: "",
//     checkIn: "25/07/2023",
//     checkOut: "30/07/2023",
//     roomNo: [],
//     price: 1000,
//   });

//   const submitForm = (e) => {
//     e.preventDefault();
//     console.log(newOrder);
//   };
//   const handleOnChange = (e) => {
//     const name = e.target.name;
//     const value = e.target.value;

//     setNewOrder((prev) => {
//       return { ...prev, [name]: value };
//     });
//   };

//   return (
//     <Form style={{ width: "25rem" }} onSubmit={submitForm}>
//       <Form.Group>
//         <Form.Label>Guest Name</Form.Label>
//         <Form.Control
//           type="name"
//           name="name"
//           placeholder="Enter name"
//           onChange={handleOnChange}
//         />
//       </Form.Group>
//       <Form.Group className="mb-2">
//         <Form.Label>Email address</Form.Label>
//         <Form.Control
//           type="email"
//           name="email"
//           placeholder="Enter email"
//           onChange={handleOnChange}
//         />
//       </Form.Group>
//       <Form.Group className="mb-2">
//         <Form.Label>Guest Identity Proof</Form.Label>
//         <Form.Control
//           type="Identity"
//           name="identity"
//           placeholder="Identity Proof Number"
//           onChange={handleOnChange}
//         />
//       </Form.Group>
//       <Form.Group className="mb-2">
//         <h4>{`Total Price: Rs.${1000}`}</h4>
//       </Form.Group>
//       <Form.Group className="mb-2">
//         <Button variant="danger" onClick={() => setModalShow(true)}>
//           Select Rooms
//         </Button>
//         <SelectRooms
//           show={modalShow}
//           onHide={() => {
//             setModalShow(false);
//           }}
//           //  onSubmit={chooseRooms}
//         />
//       </Form.Group>
//       <Form.Group className="d-grid">
//         <Button variant="outline-success" size="lg" type="submit">
//           Book Now
//         </Button>
//       </Form.Group>
//     </Form>
//   );
// };

// export default BookingForm;
