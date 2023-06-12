import React, { useState } from "react";
import {
  Modal,
  Button,
  FormControl,
  FormControlLabel,
  TextField,
  Switch,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";

function TournamentForm() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tournamentName, setTournamentName] = useState("");
  const [maxCompetitors, setMaxCompetitors] = useState("");
  const [competitorName, setCompetitorName] = useState("");
  const [competitorsList, setCompetitorsList] = useState([]);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Form submitted!");
  };

  const handleAddCompetitor = () => {
    if (competitorName.trim() !== "") {
      if (competitorsList.length >= maxCompetitors) {
        // Add the competitor to the replacement list if the roster is full
        setReplacementList([...replacementList, competitorName]);
      } else {
        // Add the competitor to the roster list if there is still space
        setCompetitorsList([...competitorsList, competitorName]);
      }
      setCompetitorName("");
    }
  };

  const handleChange = (event) => {
    setMaxCompetitors(event.target.value);
  };

  const [replacementList, setReplacementList] = useState([]);

  return (
    <>
      <Button color="success" onClick={handleOpenModal}>
        make tournament
      </Button>

      <Modal open={isModalOpen} onClose={handleCloseModal} fullWidth>
        <form className="form-container" onSubmit={handleSubmit}>
          <FormControl>
            <h2>Tournament Form</h2>
            <TextField
              id="outlined-basic"
              label="tournament name"
              variant="outlined"
              value={tournamentName}
              onChange={(e) => setTournamentName(e.target.value)}
            />
            <br />
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                number of competitors
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={maxCompetitors}
                label="number of competitors"
                onChange={handleChange}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={40}>40</MenuItem>
              </Select>
            </FormControl>
            <br />
            <TextField
              id="outlined-basic"
              label="competitor name"
              variant="outlined"
              value={competitorName}
              onChange={(e) => setCompetitorName(e.target.value)}
            />
            <Button type="button" onClick={handleAddCompetitor}>
              add competitor
            </Button>
            <ul>
              <h3>Tournament Roster</h3>
              {competitorsList.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
            <ul>
              <h3>Roster Competitor Replacement</h3>
              {replacementList.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ul>
            <br />
            <FormControlLabel control={<Switch />} label="double elimination" />
            <br />
            <Button type="submit">Submit</Button>
          </FormControl>
        </form>
      </Modal>
    </>
  );
}

export default TournamentForm;
