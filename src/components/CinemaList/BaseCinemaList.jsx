import { List, Divider } from "@mui/material";
import CinemaListItem from "./CinemaListItem";

const CinemaListAside = ({ cinemas, Header = null }) => {
  return (
    <List
      sx={{
        maxHeight: "calc(100vh - 112px)",
        overflowY: "auto",
        position: "relative",
      }}
    >
      <Header {...{ cinemas }} />
      {Header && <Divider />}
      {/* NOTE: potential future feature of adding frontend sorting */}
      {/* NOTE: this currently doesn't handle the case of cinemas array being empty
                (poential caused by manually manipulated url arguments) */}
      {cinemas.map((cinema, idx) => (
        <CinemaListItem
          key={idx}
          name={cinema.name}
          lat={cinema.lat}
          lng={cinema.lng}
          phoneNumber={cinema.phoneNumber}
          address={cinema.address}
          distance={cinema.distance}
        />
      ))}
    </List>
  );
};
export default CinemaListAside;
