/* eslint-disable react-hooks/exhaustive-deps */
import style from "./topGroup.module.css";
import DefaultLayout from "../../layouts/defaultLayout/defaultLayout";
import scoreService from "../../service/scoreService";
import { useSelector, useDispatch } from "react-redux";
import SortBtn from "../../components/Elements/SortBtn/SortBtn";
import {
    setTopGroupA,
    setTopGroupA1,
    setTopGroupB,
    setTopGroupC,
    setTopGroupD,
} from "../../redux/scoresSlide";
import { useEffect, useMemo } from "react";
const TopGroup = () => {
    const dispatch = useDispatch();
    const type = useSelector((state) => state.score.type);

    const groupA = useSelector((state) => state.score.topGroupA);
    const groupA1 = useSelector((state) => state.score.topGroupA1);
    const groupB = useSelector((state) => state.score.topGroupB);
    const groupC = useSelector((state) => state.score.topGroupC);
    const groupD = useSelector((state) => state.score.topGroupD);

    const list = useMemo(() => {
        if (type == "Group A") return groupA;
        else if (type === "Group A1") return groupA1;
        else if (type === "Group B") return groupB;
        else if (type === "Group C") return groupC;
        else if (type === "Group D") return groupD;
    }, [type, groupA]);

    const fetchData = async () => {
        try {
            if (
                groupA.length > 0 &&
                groupA1.length > 0 &&
                groupB.length > 0 &&
                groupC.length > 0 &&
                groupD.length > 0
            )
                return;
            const groupAResult = await scoreService.getTopGroup("group_a", 10);
            dispatch(setTopGroupA(groupAResult));
            const groupA1Result = await scoreService.getTopGroup(
                "group_a1",
                10,
            );
            dispatch(setTopGroupA1(groupA1Result));
            const groupBResult = await scoreService.getTopGroup("group_b", 10);
            dispatch(setTopGroupB(groupBResult));
            const groupCResult = await scoreService.getTopGroup("group_c", 10);
            dispatch(setTopGroupC(groupCResult));
            const groupDResult = await scoreService.getTopGroup("group_d", 10);
            dispatch(setTopGroupD(groupDResult));
            return;
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);
    return (
        <DefaultLayout>
            <main className="container-fluid p-4 p-lg-5">
                <section>
                    <div className="mb-3">
                        <p
                            className={`display-6 fw-bold text-primary ${style.title}`}
                        >
                            Top {type}
                        </p>
                    </div>
                    <div className="row g-4">
                        <div className="">
                            <div className="d-flex justify-content-between align-items-center mb-4">
                                <div></div>
                                <SortBtn />
                            </div>
                            <div id="recent-tasks-container">
                                {list && Array.isArray(list)
                                    ? // eslint-disable-next-line no-unused-vars
                                      list.map((key, idx) => {
                                          return (
                                              <div
                                                  className={`${style.task_item} shadow-sm`}
                                                  key={key.data[0]}
                                              >
                                                  <div className="d-flex align-items-center justify-content-between w-100">
                                                      <div
                                                          className={`${style.list_scores}`}
                                                      >
                                                          <div>
                                                              <p className="text-center text-primary">
                                                                  <b>SBD</b>
                                                              </p>
                                                              <p className="text-center">
                                                                  {key.data[0]}
                                                              </p>
                                                          </div>
                                                          <div>
                                                              <p className="text-center text-primary">
                                                                  <b>
                                                                      {
                                                                          key
                                                                              .subjects[0]
                                                                      }
                                                                  </b>
                                                              </p>
                                                              <p className="text-center">
                                                                  {key.data[1]}
                                                              </p>
                                                          </div>
                                                          <div>
                                                              <p className="text-center text-primary">
                                                                  <b>
                                                                      {
                                                                          key
                                                                              .subjects[1]
                                                                      }
                                                                  </b>
                                                              </p>
                                                              <p className="text-center">
                                                                  {key.data[2]}
                                                              </p>
                                                          </div>
                                                          <div>
                                                              <p className="text-center text-primary">
                                                                  <b>
                                                                      {
                                                                          key
                                                                              .subjects[2]
                                                                      }
                                                                  </b>
                                                              </p>
                                                              <p className="text-center">
                                                                  {key.data[3]}
                                                              </p>
                                                          </div>
                                                          <div>
                                                              <p className="text-center text-primary-emphasis">
                                                                  <b>Tổng</b>
                                                              </p>
                                                              <p className="text-center text-primary-emphasis">
                                                                  {key.data[4]}
                                                              </p>
                                                          </div>
                                                      </div>
                                                  </div>
                                              </div>
                                          );
                                      })
                                    : null}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </DefaultLayout>
    );
};
export default TopGroup;
