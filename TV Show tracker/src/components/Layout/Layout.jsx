import {NavLink, Outlet} from "react-router-dom";
import styles from "./Layout.module.css";
import {ROUTES} from "../../constants/routes";

const Layout = () => {
    return (
        <>
            <header className={styles.header}>
                <nav className={styles.nav}>
                    <NavLink to={ROUTES.HOME} className={({isActive}) => isActive ? styles.active : ""}>
                        Home
                    </NavLink>
                    <NavLink to={ROUTES.WATCHLIST} className={({isActive}) => isActive ? styles.active : ""}>
                        Watchlist
                    </NavLink>
                </nav>
            </header>
            <main className={styles.main}>
                <Outlet/>
            </main>
        </>
    );
};

export default Layout;