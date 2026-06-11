/* eslint-disable react-hooks/exhaustive-deps */
import DefaultLayout from "../../layouts/defaultLayout/defaultLayout";
import style from "./dashBoard.module.css";
import scoreService from "../../service/scoreService";
import { useSelector, useDispatch } from "react-redux";
import { setSatistics } from "../../redux/scoresSlide";
import { useEffect, useState } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";

import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
const DashBoard = () => {
    const dispatch = useDispatch();
    const statistics = useSelector((state) => state.score.statistics);
    const [listStatistics, setListStatistics] = useState([]);
    const option = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom",
                labels: {
                    usePointStyle: true,
                    font: { family: "Inter", size: 14 },
                },
            },
        },
        cutout: "55%",
    };
    const fetchData = async () => {
        try {
            if (statistics.length > 0) return;
            const result = await scoreService.getReports();
            dispatch(setSatistics(result));
        } catch (err) {
            console.log(err);
        }
    };

    const updateChart = () => {
        const newList = [];
        Object.keys(statistics).forEach((key) => {
            const data = {
                labels: ["gte8", "gte6", "gte4", "lt4"],
                datasets: [
                    {
                        label: "Studens",
                        data: [
                            statistics[key].gte8,
                            statistics[key].gte6,
                            statistics[key].gte4,
                            statistics[key].lt4,
                        ],
                        backgroundColor: [
                            "#0056D2",
                            "#10b981",
                            "#a0b910",
                            "#e2e8f0",
                        ],
                        borderWidth: 1,
                    },
                ],
            };

            // Sắp xếp lại ds theo thứ tự dễ coi
            if (statistics[key].subject == "toan")
                newList[0] = {
                    subject: "TOÁN",
                    data: data,
                    option: option,
                };
            else if (statistics[key].subject == "ngu_van")
                newList[1] = {
                    subject: "NGỮ VĂN",
                    data: data,
                    option: option,
                };
            else if (statistics[key].subject == "ngoai_ngu")
                newList[2] = {
                    subject: "NGOẠI NGỮ",
                    data: data,
                    option: option,
                };
            else if (statistics[key].subject == "vat_li")
                newList[3] = {
                    subject: "VẬT LÝ",
                    data: data,
                    option: option,
                };
            else if (statistics[key].subject == "hoa_hoc")
                newList[4] = {
                    subject: "HÓA HỌC",
                    data: data,
                    option: option,
                };
            else if (statistics[key].subject == "sinh_hoc")
                newList[5] = {
                    subject: "SINH HỌC",
                    data: data,
                    option: option,
                };
            else if (statistics[key].subject == "lich_su")
                newList[6] = {
                    subject: "LỊCH SỬ",
                    data: data,
                    option: option,
                };
            else if (statistics[key].subject == "gdcd")
                newList[8] = {
                    subject: "GIÁO DỤC CÔNG DÂN",
                    data: data,
                    option: option,
                };
            else if (statistics[key].subject == "dia_li")
                newList[7] = {
                    subject: "ĐỊA LÍ",
                    data: data,
                    option: option,
                };
        });
        setListStatistics(newList);
    };

    useEffect(() => {
        console.log(listStatistics);
    }, [listStatistics]);

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        updateChart();
    }, [statistics]);

    return (
        <DefaultLayout>
            <main className="container-fluid p-4 p-lg-5">
                <section>
                    <div className="mb-5">
                        <p
                            className={`display-6 fw-bold mb-1 text-primary ${style.title}`}
                        >
                            DashBoard
                        </p>
                        <p>Scores Statistics </p>
                    </div>
                    <div className="row g-4 mb-5">
                        {listStatistics.map((element, idx) => {
                            return (
                                <div className="col-lg-4" key={idx}>
                                    <div className={style.stat_card}>
                                        <h2 className="h6 fw-bold mb-4">
                                            {element.subject}
                                        </h2>
                                        <div style={{ height: "250px" }}>
                                            <Doughnut
                                                data={element.data}
                                                options={element.option}
                                            />
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </section>
            </main>
        </DefaultLayout>
    );
};
export default DashBoard;
