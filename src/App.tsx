import Container from "@mui/material/Container";
import Box from "@mui/material/Box";

import { Main, AddTask } from "./pages";

import { ThemeProvider } from "@mui/material/styles";

import { AppProvider } from "./context";

import { appTheme } from "./utils/theme";
import "./App.css";
import { TaskProvider } from "./context/TaskContext";
import { Header } from "./components";
import { Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AppProvider>
        <TaskProvider>
          <ThemeProvider theme={appTheme}>
            <Container maxWidth="sm">
              <Box
                minHeight="100vh"
                bgcolor="#222222"
                px={3}
                py={2}
                borderRadius={8}
              >
                <Header />
                <Routes>
                  <Route path="/" element={<Main />} />
                  <Route path="/add" element={<AddTask />} />
                </Routes>
              </Box>
            </Container>
          </ThemeProvider>
        </TaskProvider>
      </AppProvider>
    </QueryClientProvider>
  );
}

export default App;
