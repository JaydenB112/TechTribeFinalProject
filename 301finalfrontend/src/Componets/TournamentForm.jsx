import React, { useState } from "react";
import { Modal, Button, FormControl,FormGroup,FormControlLabel,TextField,Switch  } from "@mui/material";

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
        {/* <FormControl>
        <FormControlLabel control={<Switch defaultChecked />} label="double elimination" />
            <TextField id="outlined-basic" label="competitor name" variant="outlined" />
        </FormControl> */}
            <Button type="submit">Submit</Button>
          </form>
      </Modal>
    </>
  );
}

export default TournamentForm;
