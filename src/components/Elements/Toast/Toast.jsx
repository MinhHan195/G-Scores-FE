import style from "./Toast.module.css";
const Toast = ({ msg }) => {
    return (
        <div className={style.toast_container} id="toast-container">
            <div className={`${style.toast} ${style.error}`}>
                <span style={{ fontWeight: "700", fontSize: "14px" }}>
                    error
                </span>{" "}
                {msg}
            </div>
        </div>
    );
};
export default Toast;
