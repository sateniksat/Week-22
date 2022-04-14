import ButtonAppBar from "./ButtonAppBar";
import "./styles.css";
import { CssBaseline } from "@mui/material";
import { Grid, Container } from "@mui/material";
import RecipeReviewCard from "./RecipeReviewCard";
import SimpleBottomNavigation from "./SimpleBottomNavigation";


export default function App() {
  return (
    <div className="App">
      <CssBaseline />
      <ButtonAppBar />
      <Container  sx={{ p: 2 }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(5)).map((_, index) => (
            <Grid item xs={2} sm={4} md={4} key={index}>
              <RecipeReviewCard />
            </Grid>
          ))}
        </Grid>
      </Container>
      <SimpleBottomNavigation/>
    </div>
  );
}
