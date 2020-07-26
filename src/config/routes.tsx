import { InfoCircleOutlined, LikeOutlined } from "@ant-design/icons"
import React from "react"

export interface Route {
  children?: Route[]
  icon?: React.ReactNode
  key: string
  url?: string
  name: string
}

const basicRoutes: Array<Route> = [
  {
    icon: <LikeOutlined />,
    key: "hello-world",
    name: "HelloWorld",
  },
  {
    icon: <InfoCircleOutlined />,
    key: "version",
    name: "版本",
    children: [
      {
        key: "16.13",
        name: "v16.13",
      },
    ],
  },
]

function getRoutes(routes: Array<Route>, parentPath = "") {
  return routes.map((route) => {
    let result: Route = {
      ...route,
      url: `${parentPath}/${route.key}`,
    }
    if (route.children) {
      result.children = getRoutes(route.children, result.url)
      return result
    }
    return result
  })
}

export default getRoutes(basicRoutes)
