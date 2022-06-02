import { Link, Route, Routes } from "react-router-dom";
import { useAuth } from "../route/Auth";
function Home() {
  // const dispatch = useDispatch()
  // const user = useSelector(selectCurrentUser)
  // const isAuthenticated = useSelector(selectIsAuthenticated)

  // const handleLogout = () => {
  //   dispatch(logout())
  // }

  const auth = useAuth();
 

  return (
    //   <h1>Welcome</h1>
    <nav className="header-wrapper">
      <div className="header">
    
        <div className="header-nav">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/login">
            Login
          </Link>
          <Link  className="link" to="/register">
            Register
          </Link>

          <Link className={auth.user ? "link" : "link-none"}  to="/todo">
            Todo
          </Link>
        </div>
        {/* {isAuthenticated && (
            <div className="header-info">
              <span>
                Name:{user?.first_name} {user?.last_name}
              </span>
              <span>Role:{user?.role}</span>
              <a className="link" onClick={handleLogout}>
                Logout
              </a>
            </div>
          )} */}
      </div>
    </nav>
  );
}

export default Home;
