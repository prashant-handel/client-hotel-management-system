import axios from "axios";
import React, { useEffect, useState } from "react";
import Table from 'react-bootstrap/Table';

const Orders = () => {
  const [ordersData, setOrdersData] = useState([]);

  const fetchOrdersData = () => {
    axios.get("http://localhost:5000/orders").then((response) => {
      setOrdersData(response.data.data.ordersData);
      // console.log(response.data.data.ordersData);
    });
  };

  useEffect(() => fetchOrdersData, []);
  return (
    <div>
      <Table striped responsive bordered hover variant="warning">
      <thead>
        <tr>
          <th>S.No.</th>
          <th>Guest Name</th>
          <th>Email Id</th>
          <th>Identity</th>
          <th>Check In</th>
          <th>Check Out</th>
          <th>AC Rooms</th>
          <th>Non AC Rooms</th>
          <th>Price</th>
          <th>Invoice</th>
        </tr>
      </thead>
      <tbody>
        {ordersData.map((order,index)=>{
          return (
          <tr key={order._id}>
          <td>{index+1}</td>
          <td>{order.name}</td>
          <td>{order.email}</td>
          <td>{order.identity}</td>
          <td>{order.checkIn}</td>
          <td>{order.checkOut}</td>
          <td>{order.acRooms?order.acRooms:0}</td>
          <td>{order.NonAcRooms?order.NonAcRooms:0}</td>
          <td>{order.price}</td>
          <td>Link</td>
        </tr>)
        })}
      </tbody>
    </Table>
    </div>
  );
};

export default Orders;
