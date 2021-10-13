import { Container, Stack, Box } from "@mui/material";
import Shelf from "./Shelf";

const Home = () => {
  return (
    <Container maxWidth="xl">
      <Box sx={{ height: { xs: 56, sm: 64 } }} />
      <Stack direction="column" spacing={2}>
        <Shelf title="Currently Reading" />
        <Shelf title="Want to Read" />
        <Shelf title="Read" />
      </Stack>
    </Container>
  );
};

export default Home;
