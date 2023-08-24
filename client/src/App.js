import HomePage from "./features/homepage/HomePage";
import LoginPage from "./features/loginpage/LoginPage";
import ProfilePage from "./features/profilepage/ProfilePage";
import { createBrowserRouter,RouterProvider } from "react-router-dom";


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <HomePage/>
    },
    {
      path:"/profile",
      element: <ProfilePage/>
    },
    {
      path:"/login",
      element: <LoginPage/>
    },
  ])
  return (
    <div className="App">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
