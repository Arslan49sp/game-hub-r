import { Heading } from "@chakra-ui/react";
import { GameQuery } from "../App";
import useGenre from "../hooks/useGenre";
import usePlatforms from "../hooks/usePlatforms";

interface Props {
  gameQuery: GameQuery;
}
const Gameheading = ({ gameQuery }: Props) => {
  const { data } = useGenre();
  const currentGenre = data?.results.find((g) => g.id === gameQuery.genreId);
  const { data: platforms } = usePlatforms();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId
  );
  const heading = `${selectedPlatform?.name || ""} ${
    currentGenre?.name || ""
  } Games`;
  return (
    <Heading as="h1" marginBottom={5} fontSize="5xl">
      {heading}
    </Heading>
  );
};

export default Gameheading;
