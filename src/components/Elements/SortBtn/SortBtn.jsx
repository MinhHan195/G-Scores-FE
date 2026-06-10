import style from "./SortBtn.module.css";
import { useDispatch, useSelector } from "react-redux";
import { setType } from "../../../redux/scoresSlide";
const SortBtn = () => {
    const dispatch = useDispatch();
    const type = useSelector((state) => state.score.type);
    return (
        <div className="dropdown">
            <button
                className="btn btn-light border bg-white px-4 py-2 rounded-pill fw-semibold d-flex align-items-center gap-2 "
                data-bs-toggle="dropdown"
                type="button"
            >
                <span className="material-symbols-outlined fs-6">sort</span>{" "}
                {type}
            </button>
            <ul
                className={`dropdown-menu dropdown-menu-end rounded-3 shadow border-0 mt-2 ${style.dropdown_menu}`}
            >
                <li
                    onClick={() => {
                        dispatch(setType("Group A"));
                    }}
                >
                    <a className="dropdown-item py-2" href="#">
                        Group A
                    </a>
                </li>
                <li
                    onClick={() => {
                        dispatch(setType("Group A1"));
                    }}
                >
                    <a className="dropdown-item py-2" href="#">
                        Group A1
                    </a>
                </li>
                <li
                    onClick={() => {
                        dispatch(setType("Group B"));
                    }}
                >
                    <a className="dropdown-item py-2" href="#">
                        Group B
                    </a>
                </li>
                <li
                    onClick={() => {
                        dispatch(setType("Group C"));
                    }}
                >
                    <a className="dropdown-item py-2" href="#">
                        Group C
                    </a>
                </li>
                <li
                    onClick={() => {
                        dispatch(setType("Group D"));
                    }}
                >
                    <a className="dropdown-item py-2" href="#">
                        Group D
                    </a>
                </li>
            </ul>
        </div>
    );
};
export default SortBtn;
