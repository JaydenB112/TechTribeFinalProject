import React, { useState } from "react";
import { Modal, Button, FormControl,FormControlLabel,TextField,Switch  } from "@mui/material";

function TournamentForm() {
    const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = () => {
    alert("Form submitted!");
  };
  
  return (
    <>
        <Button color="success" onClick={handleOpenModal}> make tournament</Button>
      <Modal open={isModalOpen} onClose={handleCloseModal}>
        <form className="form-container"  onSubmit={handleSubmit}>
        <FormControl>
            <h2>Tournament Form</h2>
            <br/>
            <TextField id="outlined-basic" label="competitor name" variant="outlined" />
            <ul>
                <li></li>
            </ul>
            <br/>
            <FormControlLabel control={<Switch/>} label="double elimination" />
            <br/>
            <Button type="submit">Submit</Button>
        </FormControl>
          </form>
      </Modal>
    </>
  );
}

export default TournamentForm;
