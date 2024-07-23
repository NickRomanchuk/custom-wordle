import { useContext } from "react";
import "./dashboard.css"
import { UserContext } from "App";

function Dashboard() {
    const user = useContext(UserContext)
    return (
        <div className="dashboard d-flex flex-column justify-content-center">
            {user ? <h1>Logged in data</h1> 
            :
            <>
                <p className="guestDashboard">CREATE ACCOUNT</p>
                <p className="guestDashboard">TO SEE STATS</p>
            </>
            }
        </div>
    )
}

export default Dashboard;