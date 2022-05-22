import Home from "../pages/Home";
import Intro from "../pages/Intro";
import HomeEditor from "../pages/HomeEditor";
import Diary from "../pages/Diary";
import Day from "../pages/Day";
import NotFound from "../pages/NotFound";
import Profile from "../pages/Profile";
import Marathons from "../pages/Marathons";

export const publicRoutes = [
  { path: "/", element: Intro },
  { path: "*", element: NotFound },
];

export const privatesRoutes = [
  { path: "/", element: Intro },
  { path: "home", element: Home },
  { path: "homeeditor", element: HomeEditor },
  { path: "marathons", element: Marathons },
  { path: "diary", element: Diary },
  { path: "diary/:id", element: Day },
  { path: "profile", element: Profile },
  { path: "*", element: NotFound },
];
