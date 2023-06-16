import './App.css';
import React, { useState } from 'react';
import axios from 'axios';




function App() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const addNewNumber = () => {
    axios.post("http://localhost:8080/new-phone", { name, phone })
      .then((response) => {
        console.log("New Number Added");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const updateNumber = () => {
    axios.put("http://localhost:8080/update-phone", { name, phone })
      .then((response) => {
        console.log("Number Updated");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteNumber = () => {
    axios.delete("http://localhost:8080/delete-phone", { data: { name, phone } })
      .then((response) => {
        console.log("Number Deleted");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getNumber = () => {
    axios.get("http://localhost:8080/get-phone")
      .then((response) => {
        console.log("Get Number");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleAddNumber = async () => {
    try {
      await addNewNumber();
      // Handle success or update UI
    } catch (error) {
      // Handle error or show error message
    }
  };

  const handleUpdateNumber = async () => {
    try {
      await updateNumber();
      // Handle success or update UI
    } catch (error) {
      // Handle error or show error message
    }
  };

  const handleDeleteNumber = async () => {
    try {
      await deleteNumber();
      // Handle success or update UI
    } catch (error) {
      // Handle error or show error message
    }
  };

  const handleGetNumbers = async () => {
    try {
      await getNumber();
      // Handle the received numbers or update UI
    } catch (error) {
      // Handle error or show error message
    }
  };

  return (
    <div className="App">
      <center>
        <h1>Phone Book</h1>
      </center>
      <div className="form-container">
        <form>
          <div className="input-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Enter name" />
          </div>
          <div className="input-group">
            <label htmlFor="phone">Phone:</label>
            <input type="text" id="phone" onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" />
          </div>
          <div className="button-group">
            <button className="add-button" onClick={handleAddNumber}>Add</button>
            <button className="update-button" onClick={handleUpdateNumber}>Update</button>
            <br /><br />
            <div className="button-space" />
            <button className="delete-button" onClick={handleDeleteNumber}>Delete</button>
            <button className="get-button" onClick={handleGetNumbers}>Get</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
