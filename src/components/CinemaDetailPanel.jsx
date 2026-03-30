import {
  Box,
  Typography,
  Divider,
  Chip,
  Avatar,
  Rating,
  Skeleton,
  IconButton,
  Card,
  CardMedia,
  CardContent,
  Grid,
} from "@mui/material";
import { MdArrowBack, MdLocationOn, MdStar } from "react-icons/md";
import { useCinema } from "./CinemaContext";
import useTMDB, { TMDB_IMG_BASE } from "./useTMDB";

// Mock reviews — realistic fake data
const MOCK_REVIEWS = [
  {
    id: 1,
    name: "Sarah M.",
    avatar: "S",
    rating: 5,
    date: "2 days ago",
    text: "Amazing experience! Great sound system and the seats are super comfortable. Will definitely come back.",
  },
  {
    id: 2,
    name: "James T.",
    avatar: "J",
    rating: 4,
    date: "1 week ago",
    text: "Good cinema overall. Concession prices are a bit steep but the screen quality makes up for it.",
  },
  {
    id: 3,
    name: "Priya K.",
    avatar: "P",
    rating: 3,
    date: "2 weeks ago",
    text: "Decent cinema. Can get crowded on weekends. Recommend booking in advance.",
  },
];

// Fake showtimes
const SHOWTIMES = [
  "10:00 AM",
  "12:30 PM",
  "3:00 PM",
  "5:45 PM",
  "8:15 PM",
  "10:30 PM",
];

const MovieCard = ({ movie }) => (
  <Card
    sx={{
      backgroundColor: "#1a1a22",
      border: "1px solid rgba(245,200,66,0.1)",
      borderRadius: 2,
      transition: "transform 0.2s ease, border-color 0.2s ease",
      "&:hover": {
        transform: "translateY(-4px)",
        borderColor: "rgba(245,200,66,0.4)",
      },
    }}
  >
    <CardMedia
      component="img"
      height="160"
      image={
        movie.poster_path
          ? `${TMDB_IMG_BASE}${movie.poster_path}`
          : "https://via.placeholder.com/500x750?text=No+Image"
      }
      alt={movie.title}
      sx={{ objectFit: "cover" }}
    />
    <CardContent sx={{ p: 1.5 }}>
      <Typography
        variant="caption"
        sx={{
          color: "#f5c842",
          fontWeight: 700,
          display: "block",
          mb: 0.5,
          whiteSpace: "nowrap",
          overflow: "hidden",
          textOverflow: "ellipsis",
        }}
      >
        {movie.title}
      </Typography>
      <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mt: 0.5 }}>
        {SHOWTIMES.slice(0, 3).map((time) => (
          <Chip
            key={time}
            label={time}
            size="small"
            sx={{
              fontSize: "0.6rem",
              height: 18,
              backgroundColor: "rgba(245,200,66,0.1)",
              color: "rgba(255,255,255,0.7)",
              border: "1px solid rgba(245,200,66,0.2)",
            }}
          />
        ))}
      </Box>
    </CardContent>
  </Card>
);

const ReviewCard = ({ review }) => (
  <Box
    sx={{
      p: 2,
      backgroundColor: "#1a1a22",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 2,
      mb: 1.5,
    }}
  >
    <Box sx={{ display: "flex", alignItems: "center", gap: 1.5, mb: 1 }}>
      <Avatar
        sx={{
          width: 32,
          height: 32,
          backgroundColor: "rgba(245,200,66,0.2)",
          color: "#f5c842",
          fontSize: "0.85rem",
          fontWeight: 700,
        }}
      >
        {review.avatar}
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Typography variant="caption" sx={{ fontWeight: 700, color: "white" }}>
          {review.name}
        </Typography>
        <Typography
          variant="caption"
          sx={{ color: "rgba(255,255,255,0.4)", display: "block" }}
        >
          {review.date}
        </Typography>
      </Box>
      <Rating
        value={review.rating}
        readOnly
        size="small"
        sx={{ "& .MuiRating-iconFilled": { color: "#f5c842" } }}
      />
    </Box>
    <Typography
      variant="body2"
      sx={{ color: "rgba(255,255,255,0.7)", lineHeight: 1.6 }}
    >
      {review.text}
    </Typography>
  </Box>
);

const CinemaDetailPanel = () => {
  const { selectedCinema, setSelectedCinema } = useCinema();
  const { movies, loading } = useTMDB();

  if (!selectedCinema) return null;

  return (
    <Box>
      {/* Header */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 2 }}>
        <IconButton
          size="small"
          onClick={() => setSelectedCinema(null)}
          sx={{
            color: "#f5c842",
            border: "1px solid rgba(245,200,66,0.3)",
            borderRadius: "8px",
            "&:hover": { backgroundColor: "rgba(245,200,66,0.1)" },
          }}
        >
          <MdArrowBack />
        </IconButton>
        <Typography
          variant="h6"
          sx={{ fontWeight: 700, color: "white", fontSize: "1rem" }}
        >
          {selectedCinema.name || selectedCinema.franchise || "Cinema"}
        </Typography>
      </Box>

      {/* Location */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mb: 2 }}>
        <MdLocationOn style={{ color: "#f5c842", fontSize: "1rem" }} />
        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)" }}>
          {selectedCinema.countryCode?.toUpperCase()} ·{" "}
          {selectedCinema.lat?.toFixed(4)}, {selectedCinema.lng?.toFixed(4)}
        </Typography>
      </Box>

      {/* Overall rating */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          gap: 1,
          mb: 2,
          p: 1.5,
          backgroundColor: "rgba(245,200,66,0.05)",
          borderRadius: 2,
          border: "1px solid rgba(245,200,66,0.15)",
        }}
      >
        <MdStar style={{ color: "#f5c842", fontSize: "1.2rem" }} />
        <Rating
          value={4}
          readOnly
          size="small"
          sx={{ "& .MuiRating-iconFilled": { color: "#f5c842" } }}
        />
        <Typography variant="caption" sx={{ color: "rgba(255,255,255,0.5)" }}>
          4.0 · {MOCK_REVIEWS.length} reviews
        </Typography>
      </Box>

      <Divider sx={{ borderColor: "rgba(245,200,66,0.15)", mb: 2 }} />

      {/* Now Showing */}
      <Typography
        variant="overline"
        sx={{
          color: "#f5c842",
          fontWeight: 700,
          letterSpacing: "0.12em",
          display: "block",
          mb: 1.5,
        }}
      >
        🎬 Now Showing
      </Typography>

      {loading ? (
        <Grid container spacing={1}>
          {[1, 2, 3, 4].map((i) => (
            <Grid item xs={6} key={i}>
              <Skeleton
                variant="rectangular"
                height={160}
                sx={{
                  borderRadius: 2,
                  backgroundColor: "rgba(255,255,255,0.05)",
                }}
              />
            </Grid>
          ))}
        </Grid>
      ) : (
        <Grid container spacing={1}>
          {movies.map((movie) => (
            <Grid item xs={6} key={movie.id}>
              <MovieCard movie={movie} />
            </Grid>
          ))}
        </Grid>
      )}

      <Divider sx={{ borderColor: "rgba(245,200,66,0.15)", my: 2 }} />

      {/* Customer Reviews */}
      <Typography
        variant="overline"
        sx={{
          color: "#f5c842",
          fontWeight: 700,
          letterSpacing: "0.12em",
          display: "block",
          mb: 1.5,
        }}
      >
        ⭐ Customer Reviews
      </Typography>

      {MOCK_REVIEWS.map((review) => (
        <ReviewCard key={review.id} review={review} />
      ))}
    </Box>
  );
};

export default CinemaDetailPanel;
