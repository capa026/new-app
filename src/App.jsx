import styled from "@emotion/styled";
import { Settings } from "@mui/icons-material";
import { Button } from "@mui/material";

function App() {
  return (
    <div>
      <Button
        startIcon={<Settings />}
        variant="contained"
        color="primary"
        sx={{
          "&:hover": {
            backgroundColor: "#000",
          },
        }}
      >
        Create
      </Button>

      <Button variant="contained" color="secondary">
        New btn
      </Button>
    </div>
  );
}

export default App;
