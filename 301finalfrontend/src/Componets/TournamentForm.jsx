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
            <br/>
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
                <MenuItem value={6}>6</MenuItem>
                <MenuItem value={8}>8</MenuItem>
                <MenuItem value={10}>10</MenuItem>
                <MenuItem value={12}>12</MenuItem>
                <MenuItem value={14}>14</MenuItem>
                <MenuItem value={16}>16</MenuItem>
                <MenuItem value={18}>18</MenuItem>
                <MenuItem value={20}>20</MenuItem>
                <MenuItem value={22}>12</MenuItem>
                <MenuItem value={24}>14</MenuItem>
                <MenuItem value={26}>16</MenuItem>
                <MenuItem value={28}>18</MenuItem>
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
            <br/>
            <Button type="button" onClick={handleAddCompetitor}>
              add competitor
            </Button>
            <br/>
            <ol>
              <h3>Tournament Roster</h3>
              {competitorsList.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ol>
            <br/>
            <ol>
              <h3>Roster Competitor Replacement</h3>
              {replacementList.map((name, index) => (
                <li key={index}>{name}</li>
              ))}
            </ol>
            <br />
            <FormControlLabel control={<Switch />} label="double elimination" />
            <br/>
            <Button type="submit">Submit</Button>
            <br/>
          </FormControl>
        </form>
      </Modal>
    </>
  );
}

export default TournamentForm;
