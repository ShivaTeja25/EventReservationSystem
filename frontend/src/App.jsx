import { Container, Typography } from "@mui/material";

import Checkout from "./components/EventForm";

function App() {
  return (
    <Container>
      <Typography mt={"5vh"} variant="h2" align="center" gutterBottom>
        Event Support Form 
      </Typography>
      <Checkout />
    </Container>
  );
}

export default App;
