import HomePage from "./features/homepage/HomePage";
import LoginPage from "./features/loginpage/LoginPage";
import ProfilePage from "./features/profilepage/ProfilePage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useSelector } from "react-redux";
import { useMemo } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from "theme";
import { ModeEditOutlineSharp } from "@mui/icons-material";

function App() {
  const mode = useSelector((state)=>state.mode);
  const theme = useMemo(()=>createTheme(themeSettings(mode)),[ModeEditOutlineSharp])
  const router = createBrowserRouter([
    {
      path:"/home",
      element: <HomePage/>
    },
    {
      path:"/profile",
      element: <ProfilePage/>
    },
    {
      path:"/",
      element: <LoginPage/>
    },
  ])
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <RouterProvider router={router}/>
      </ThemeProvider>
     
    </div>
  );
}

export default App;
