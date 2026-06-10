import style from "./defaultLayout.module.css";
// import { useDispatch } from "react-redux";
// import { setSearchQuery, getFilteredTasks } from "../../redux/taskSlide";
import { NavLink } from "react-router-dom";
const DefaultLayout = (props) => {
    // const dispatch = useDispatch();

    const showMenuHandler = () => {
        document.getElementById(style.sidebar).classList.toggle(style.show);
    };

    // const searchHandle = (e) => {
    //     const query = e.target.value;
    //     dispatch(setSearchQuery(query));
    //     dispatch(getFilteredTasks());
    // };

    return (
        <>
            <aside className={style.sidebar} id={style.sidebar}>
                <div className="px-4 mb-4" onClick={showMenuHandler}>
                    <h2 className="h4 mb-0 fw-bold text-primary">G-Scores</h2>
                </div>
                <nav className="nav flex-column mb-auto">
                    <NavLink to="/" className={style.nav}>
                        {({ isActive }) => {
                            return (
                                <div
                                    className={`${style.nav_link} ${isActive ? style.active : null}`}
                                >
                                    <span className="material-symbols-outlined">
                                        dashboard
                                    </span>
                                    <span>Dashboard</span>
                                </div>
                            );
                        }}
                    </NavLink>
                    <NavLink to="/search" className={style.nav}>
                        {({ isActive }) => {
                            return (
                                <div
                                    className={`${style.nav_link} ${isActive ? style.active : null}`}
                                >
                                    <span className="material-symbols-outlined">
                                        search
                                    </span>
                                    <span>Search Scores</span>
                                </div>
                            );
                        }}
                    </NavLink>
                    <NavLink to="/top" className={style.nav}>
                        {({ isActive }) => {
                            return (
                                <div
                                    className={`${style.nav_link} ${isActive ? style.active : null}`}
                                >
                                    <span className="material-symbols-outlined">
                                        align_vertical_top
                                    </span>
                                    <span>Top</span>
                                </div>
                            );
                        }}
                    </NavLink>
                </nav>
            </aside>
            <div className={`${style.main_wrapper} `}>
                <header
                    className={`${style.top_navbar} d-flex align-items-center px-4`}
                >
                    <div className="container-fluid d-flex justify-content-between align-items-center p-0">
                        <div className="d-flex align-items-center gap-3">
                            <button
                                className="btn d-lg-none p-0 me-2"
                                onClick={showMenuHandler}
                            >
                                <span className="material-symbols-outlined">
                                    menu
                                </span>
                            </button>
                            <span
                                className={`h4 mb-0 fw-bold text-primary ${style.title}`}
                            >
                                G-Scores
                            </span>
                            {/* <div
                                className={`search-wrapper ${style.search_wrapper}`}
                            >
                                <span
                                    className="material-symbols-outlined"
                                    id={style.material_symbols_outlined}
                                >
                                    search
                                </span>
                                <input
                                    className={`form-control ${style.search_input}`}
                                    placeholder="Search tasks..."
                                    type="text"
                                    onChange={searchHandle}
                                />
                            </div> */}
                        </div>
                    </div>
                </header>
                <div>{props.children}</div>
            </div>
        </>
    );
};
export default DefaultLayout;
