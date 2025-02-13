import { Grid, GridItem, Show, Box, HStack } from "@chakra-ui/react";
import Gameheading from "../components/Gameheading";
import GamesGrid from "../components/GamesGrid";
import GenreList from "../components/GenreList";
import NavBar from "../components/NavBar";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}
    >
      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area="main">
        <Box paddingLeft={2}>
          <Gameheading />
          <HStack marginBottom={5} spacing={5}>
            <PlatformSelector />
            <SortSelector />
          </HStack>
        </Box>
        <GamesGrid />
      </GridItem>
    </Grid>
  );
};

export default HomePage;
