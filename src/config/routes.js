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
    id: 10,
    path: route.HOME,
    Component: Home,
  },
  {
    id: 11,
    path: route.SERVICE,
    Component: Service,
  },
  {
    id: 12,
    path: route.ABOUT,
    Component: About,
  },
  {
    id: 13,
    equal: 1,
    searchNav: 34,
    path: route.INVERTSYRUP,
    Component: InvertSyrup,
  },
  {
    id: 14,
    equal: 2,
    searchNav: 35,
    path: route.INVERTASE,
    Component: Invertase,
  },
  {
    id: 15,
    equal: 3,
    searchNav: 36,
    path: route.HONEYNATURALNESS,
    Component: HoneyNaturalness,
  },
  {
    id: 16,
    equal: 4,
    searchNav: 37,
    path: route.CANDY,
    Component: Candy,
  },
  {
    id: 17,
    equal: 5,
    searchNav: 38,
    path: route.BEEBREAD,
    Component: BeeBread,
  },
  {
    id: 18,
    equal: 6,
    searchNav: 39,
    path: route.JAMSANDPUREES,
    Component: JamsAndPurees,
  },
  {
    id: 19,
    equal: 7,
    searchNav: 40,
    path: route.CHURCHKHELA,
    Component: Churchkhela,
  },
  {
    id: 20,
    path: route.CONTACT,
    Component: Contact,
  },
];
