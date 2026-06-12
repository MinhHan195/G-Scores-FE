import style from "./searchScores.module.css";
import DefaultLayout from "../../layouts/defaultLayout/defaultLayout";
import scoreService from "../../service/scoreService";
import Toast from "../../components/Elements/Toast/Toast";
import { useSelector, useDispatch } from "react-redux";
import { setDetailScores, setSearchString } from "../../redux/scoresSlide";
import { useState } from "react";
const SearchScores = () => {
    const dispatch = useDispatch();
    const [registrationNumber, setRegistrationNumber] = useState("");
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const detailScores = useSelector((state) => state.score.detailScores);
    const defaultSearchString = useSelector(
        (state) => state.score.searchString,
    );

    // Validate: chỉ chứa chữ số, không có ký tự chữ hay ký tự đặc biệt
    const validateRegistrationNumber = (value) => {
        // Trường hợp 1: Input trống
        if (!value || value.trim() === "") {
            return {
                valid: false,
                message: "Please enter your exam registration number.",
            };
        }
        if (/[a-zA-Z]/.test(value)) {
            return {
                valid: false,
                message:
                    "The exam registration number must not contain any letters.",
            };
        }
        if (!/^\d+$/.test(value)) {
            return {
                valid: false,
                message:
                    "The exam registration number must not contain any special characters.",
            };
        }
        if (value.length > 20) {
            return {
                valid: false,
                message:
                    "The exam registration number must not exceed 20 digits.",
            };
        }
        return { valid: true, message: "" };
    };

    const fetchData = async () => {
        try {
            // Gọi validate và lấy kết quả
            setLoading(true);
            const validation = validateRegistrationNumber(registrationNumber);

            // Nếu không hợp lệ, hiển thị lỗi
            if (!validation.valid) {
                setLoading(false);
                // console.log(validation.message);
                setError(validation.message);
                return;
            }

            // Clear lỗi trước khi fetch
            setError("");

            // Fetch dữ liệu
            const result =
                await scoreService.getDetailScores(registrationNumber);
            if (result) {
                setLoading(false);
                dispatch(setDetailScores(result));
                dispatch(setSearchString(registrationNumber));
            }
        } catch (error) {
            setError("Lỗi khi lấy dữ liệu. Vui lòng thử lại!");
            console.log(error);
        }
    };

    const handleInputChange = (e) => {
        const value = e.target.value;
        setRegistrationNumber(value.trim());
        setError("");
    };

    return (
        <>
            <DefaultLayout>
                <main className="container-fluid p-4 p-lg-5">
                    <section>
                        <div className="row justify-content-center mt-5 mb-5">
                            <div className="col-md-6">
                                <div
                                    className={`w-100 ${style.search_wrapper}`}
                                >
                                    <input
                                        className={`form-control w-100 ${style.search_input}`}
                                        placeholder="Enter registraion number"
                                        type="text"
                                        defaultValue={
                                            defaultSearchString
                                                ? defaultSearchString
                                                : null
                                        }
                                        onChange={handleInputChange}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") {
                                                fetchData();
                                            }
                                        }}
                                    />
                                    <span
                                        className="material-symbols-outlined"
                                        id={style.material_symbols_outlined}
                                        onClick={fetchData}
                                    >
                                        search
                                    </span>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`${style.result_container} text-center`}
                        >
                            {loading ? (
                                <div
                                    className={`w-100 d-flex justify-content-center`}
                                >
                                    <div
                                        className="spinner-border text-primary"
                                        role="status"
                                    >
                                        <span className="visually-hidden">
                                            Loading...
                                        </span>
                                    </div>
                                </div>
                            ) : !detailScores ||
                              Object.keys(detailScores).length === 0 ? (
                                <div>
                                    <h2 className="text-primary">
                                        Detail Scores
                                    </h2>
                                    <p className="text-secondary">
                                        Detailed view of search scores here!
                                    </p>
                                </div>
                            ) : (
                                <div className={`${style.result_dialog}`}>
                                    {Object.entries(detailScores).map(
                                        ([key, value], idx) => {
                                            return (
                                                <div key={idx}>
                                                    <b className="me-2">
                                                        {key}:
                                                    </b>
                                                    {value}
                                                </div>
                                            );
                                        },
                                    )}
                                </div>
                            )}
                        </div>
                    </section>
                </main>
            </DefaultLayout>
            {/* <Toast msg={"errorsssssssssssssssssssssssssssss"} /> */}
            {error ? <Toast msg={error} /> : null}
        </>
    );
};
export default SearchScores;
