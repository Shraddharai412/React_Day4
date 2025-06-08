import { useAuth } from "./AuthContext";
import { useTheme } from "./ThemeContext";
import './dashboard.css';

const Dashboard = () => {
    const { user, Login, Logout } = useAuth();
    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`dashboard ${theme}`}>
            <h1>Dashboard</h1>
            <p className="theme-info">Current Theme: <strong>{theme}</strong></p>
            <button className="toggle-btn" onClick={toggleTheme}>Toggle Theme</button>
            <hr />
            {user ? (
                <>
                    <p>Welcome, <strong>{user.name}</strong></p>
                    <button className="logout-btn" onClick={Logout}>Logout</button>
                </>
            ) : (
                <>
                    <p>No user logged in</p>
                    <button className="login-btn" onClick={() => Login('Shraddha Rai')}>Login</button>
                </>
            )}
        </div>
    );
};

export default Dashboard;
