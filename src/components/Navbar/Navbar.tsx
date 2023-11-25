import { AppBar, Toolbar } from "@mui/material";
import { Link, useLocation } from "react-router-dom";
import { COLORS } from "../../constants/Colors";

const styles = {
  container: {
    backgroundColor: COLORS.BLACK,
    boxShadow: "none",
  },
  toolbar: {
    display: "flex",
    alignItems: "center",
  },
  logo: {
    fontSize: "20px",
    fontFamily: "Poppins",
    fontWeight: 600,
    color: COLORS.PINK,
    marginLeft: "20px",
    textDecoration: "none",
  },
  menu: { marginLeft: "20px" },
  menuItem: {
    fontFamily: "Poppins",
    fontWeight: 400,
    color: COLORS.WHITE,
    marginLeft: "20px",
    textDecoration: "none",
  },
  activeMenuItem: {
    fontFamily: "Poppins",
    fontWeight: 600,
    color: COLORS.WHITE,
    marginLeft: "20px",
    textDecoration: "none",
  },
  logout: {
    marginRight: "20px",
  },
};

export const Navbar = () => {
  const location = useLocation();

  return (
    <div>
      {location.pathname === "/" ? null : (
        <AppBar position="static" style={styles.container}>
          <Toolbar
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div style={styles.toolbar}>
              <Link to="/dashboard" style={styles.logo}>
                HOT DOGS
              </Link>
              <div style={styles.menu}>
                <Link
                  to="/dashboard"
                  style={
                    location.pathname.includes("/dashboard")
                      ? styles.activeMenuItem
                      : styles.menuItem
                  }
                >
                  MATCH
                </Link>
                <Link
                  to="/profile"
                  style={
                    location.pathname.includes("/profile")
                      ? styles.activeMenuItem
                      : styles.menuItem
                  }
                >
                  PROFILE
                </Link>
                <Link
                  to="/chat"
                  style={
                    location.pathname.includes("/chat")
                      ? styles.activeMenuItem
                      : styles.menuItem
                  }
                >
                  CHAT
                </Link>
              </div>
            </div>
            <div style={styles.logout}>
              <Link to="/" style={styles.activeMenuItem}>
                LOGOUT
              </Link>
            </div>
          </Toolbar>
        </AppBar>
      )}
    </div>
  );
};
