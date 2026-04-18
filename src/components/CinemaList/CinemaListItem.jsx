import { useState } from "react";
import {
  Chip,
  Collapse,
  IconButton,
  ListItem,
  ListItemButton,
  ListItemText,
  Typography,
} from "@mui/material";
import {
  MdCall,
  MdOutlineLocationOn,
  MdExpandMore,
  MdExpandLess,
} from "react-icons/md";
import { format } from "d3-format";

const dispatchMapSnapTo = (lat, lng) => {
  console.log(
    "triggering `map.snapTo` event with args: ",
    `lat: ${lat}, lng: ${lng}`
  );
  dispatchEvent(new CustomEvent("map.snapTo", { detail: { lat, lng } }));
};

const CinemaListItem = ({
  name,
  lat,
  lng,
  phoneNumber,
  address,
  distance,
  ...otherProps
}) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <>
      <ListItem
        disablePadding
        secondaryAction={
          <>
            {phoneNumber && (
              <IconButton component="a" href={`tel:${phoneNumber}`}>
                <MdCall />
              </IconButton>
            )}
            <IconButton
              onClick={() => {
                dispatchMapSnapTo(lat, lng);
                setExpanded(true);
              }}
            >
              <MdOutlineLocationOn />
            </IconButton>
            <IconButton onClick={() => setExpanded((e) => !e)}>
              {expanded ? <MdExpandLess /> : <MdExpandMore />}
            </IconButton>
          </>
        }
      >
        <ListItemButton onClick={() => setExpanded((e) => !e)}>
          <ListItemText
            primary={name}
            secondary={distance ? `${format(",.1f")(distance)} km away` : null}
          />
        </ListItemButton>
      </ListItem>

      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <ListItem sx={{ pl: 3, pt: 0, pb: 1 }}>
          <ListItemText
            secondary={
              <>
                {address && (
                  <Typography
                    variant="body2"
                    component="span"
                    display="block"
                    sx={{ whiteSpace: "pre-line" }}
                  >
                    {address}
                  </Typography>
                )}
                {phoneNumber && (
                  <Typography
                    variant="body2"
                    component="span"
                    display="block"
                    sx={{ mt: 0.5 }}
                  >
                    {phoneNumber}
                  </Typography>
                )}
              </>
            }
          />
        </ListItem>
      </Collapse>
    </>
  );
};

export default CinemaListItem;
