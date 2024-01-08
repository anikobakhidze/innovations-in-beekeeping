import route from "../constants/route";
import Home from "../pages/home/Home";
import Service from "../pages/service/Service";
import About from "../pages/about/About";
import Contact from "../pages/contact/Contact";
import InvertSyrup from "../pages/invertSyrup/InvertSyrup";
import Invertase from "../pages/invertase/Invertase";
import HoneyNaturalness from "../pages/honeyNaturalness/HoneyNaturalness";
import Candy from "../pages/candy/Candy";
import BeeBread from "../pages/beeBread/BeeBread";
import JamsAndPurees from "../pages/jamsAndPurees/JamsAndPurees";
import Churchkhela from "../pages/churchkhela/Churchkhela";
export const routes = [
  {
    path: route.HOME,
    Component: Home,
  },
  {
    path: route.SERVICE,
    Component: Service,
  },
  {
    path: route.ABOUT,
    Component: About,
  },
  {
    path: route.INVERTSYRUP,
    Component: InvertSyrup,
  },
  {
    path: route.INVERTASE,
    Component: Invertase,
  },
  {
    path: route.HONEYNATURALNESS,
    Component: HoneyNaturalness,
  },
  {
    path: route.CANDY,
    Component: Candy,
  },
  {
    path: route.BEEBREAD,
    Component: BeeBread,
  },
  {
    path: route.JAMSANDPUREES,
    Component: JamsAndPurees,
  },
  {
    path: route.CHURCHKHELA,
    Component: Churchkhela,
  },
  {
    path: route.CONTACT,
    Component: Contact,
  },
];
