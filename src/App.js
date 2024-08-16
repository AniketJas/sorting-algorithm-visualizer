import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Visualizer from "./component/Visualizer";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#000000",
    },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <Visualizer />
      </ThemeProvider>
    </div>
  );
}

export default App;
