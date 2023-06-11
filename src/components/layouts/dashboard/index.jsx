import { Outlet } from "react-router-dom"
import Header from "../../header"
import "./index.css"

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <Header />
      <div className="content-wrapper">
        <Outlet />
      </div>
    </div>
  )
}

export default Dashboard