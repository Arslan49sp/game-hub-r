import usePlatforms from "./usePlatforms";

const usePlatform = (id?: number) => {
  const { data } = usePlatforms();
  return data?.results.find((g) => g.id === id);
};

export default usePlatform;
