import MyForm from "./Components/myForms/MyForm";
import Home from "./Components/Home/Home";
import Development from "./Components/Development/Development";
import Transitions from "./Components/Transitions/Transitions";
import Technologies from "./Components/Tech/Technologies";
import Requests from "./Components/Requests/Requests";

export const routes = [
  {path: '', component: Home},
  {path: '/forms', component: MyForm},
  {path: '/development', component: Development},
  {path: '/transition', component: Transitions},
  {path: '/technologies', component: Technologies},
  {path: '/requests', component: Requests},
];

