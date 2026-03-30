import { useMemo } from "react";
import { useParams } from "react-router-dom";
import allCinemas from "../data/cinemas";
import { useMapContext } from "./Map/context";
import { useCinema } from "./CinemaContext";

const CinemaMarkers = () => {
  const { Marker } = useMapContext();
  const params = useParams();
  const { setSelectedCinema } = useCinema();
  const cinemas = useMemo(() => {
    if (params.franchiseId || params.countryCode) {
      const { franchiseId, countryCode } = params;
      return allCinemas.filter((cinema) => {
        return (
          (franchiseId === "all-cinemas" || cinema.franchise === franchiseId) &&
          cinema.countryCode === countryCode
        );
      });
    }

    return allCinemas;
  }, [params]);

  return cinemas.map((cinema, idx) => {
    return <Marker lat={cinema.lat} lon={cinema.lng} key={idx} 
    onClick={() => setSelectedCinema(cinema)}
    />;
  });
};

export default CinemaMarkers;
