import Home from "../pages/Home";
import Intro from "../pages/Intro";
import HomeEditor from "../pages/HomeEditor";
import Diary from "../pages/Diary";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";

export const publicRoutes = [
  { path: "/", element: Intro },
  { path: "*", element: NotFound },
];

export const privatesRoutes = [
  { path: "/", element: Home },
  { path: "homeeditor", element: HomeEditor },
  { path: "diary", element: Diary },
  { path: "profile", element: Profile },
  { path: "*", element: NotFound },
];
