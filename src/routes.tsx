import loadable from "@loadable/component"
import { RouteConfig } from "react-router-config"

import options from "config/@loadable__component"

const routes: Array<RouteConfig> = [
  {
    path: "/",
    exact: true,
    component: loadable(() => import("pages/home"), options),
  },
  {
    path: "/hello-world",
    component: loadable(() => import("pages/hello-world"), options),
  },
  {
    path: "/version/:version",
    component: loadable(() => import("pages/version"), options),
  },
]

export default routes
