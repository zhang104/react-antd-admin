import { message } from "antd"
import React from "react"
import { renderRoutes } from "react-router-config"
import { BrowserRouter } from "react-router-dom"
import SiderBar from "layouts/SiderBar"
import routes from "./routes"

message.config({
  maxCount: 1,
})

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <SiderBar>{renderRoutes(routes)}</SiderBar>
    </BrowserRouter>
  )
}

export default App
