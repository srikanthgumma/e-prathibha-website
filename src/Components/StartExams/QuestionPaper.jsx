import axios from 'axios';
import './QuestionPaper.css';
import { useEffect, useState } from 'react';
import NavBar from '../NavMenu/NavBar';

let QuestionPaper = () => {
    const [Index, setIndex] = useState(1);
    let UserId = sessionStorage.getItem("id");
    let UserToken = sessionStorage.getItem("token");
    let Examid = sessionStorage.getItem("Examid");
    let q_no = sessionStorage.getItem("Ques_no");
    let [Qpapers, setQpapers] = useState([]);
    let getexamid = window.location.href;
    let examid = getexamid.split(':');
    let examid_length = examid[examid.length - 1];
    // console.log(examid); ---testing purpose 
    // console.log(getexamid); ---testing purpose 
    // console.log(examid_length); ---testing purpose 

    useEffect(() => {
        //   accesssing api part 
        try {
            axios.get(`https://test.e-prathibha.com/apis/start_exam?examId=${examid_length}`, {
                headers: {
                    server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
                    id: UserId,
                    tokenu: UserToken,
                }
            }).then((val) => {
                // console.log(val.data.data.exam);
                if (val.data.status === 200) {
                    setQpapers(val.data.data.exam);
                } else {
                    alert(val.data?.data);
                }
            }, (error) => {
                console.log(error);
            })
        } catch (err) {
            alert(err);
            console.log(err);
        }
    }, []);
    // console.log(Qpapers);
    const FinishExam = () => {
        axios.post(`https://test.e-prathibha.com/apis/finishExam`, {
            "examId": Examid,
            "qno": q_no
        }, {
            headers: {
                server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
                id: UserId,
                tokenu: UserToken
            }
        }).then((val) => {
            // console.log(val);
            if (val.data.status === 200) {
                alert(val.data.data);
                window.location.href = "/examlists";
                sessionStorage.setItem("Auth", false)
            } else {
                alert(val.data)
            }
        }, (error) => {
            console.log(error);
        });
    }
    // api data display part 
    return (
        <div style={{ overflowX: "hidden", backgroundColor: "#034006", color: "white", height: "650px", paddingBottom: "30px" }}>
            <NavBar />
            <h1 style={{ textAlign: "center", fontSize: "4rem", marginTop: "50px" }}>Question Paper</h1>
            <div>
                <div style={{ marginLeft: "79%" }}><h1 style={{ fontSize: "1.6rem" }}>Time:3 Hours</h1></div>
                <hr />
                <div>{
                    Qpapers.slice(Index - 1, Index).map((val, ind) => {
                        // console.log(val.ExamStat); ---testing purpose
                        // setExamid(val.ExamStat.exam_id);  ---testing purpose
                        return (
                            <div key={ind} style={{ border: "1px solid black", width: "1300px", padding: "40px", margin: "auto", height: "100%" }}>
                                <form id='examform' >
                                    <h1 style={{ fontSize: "2rem", fontWeight: "bold" }}> {"Q" + (Index)}{'.'}  {val.Question.question.above}</h1>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="answers" id="answer1" value={`${val.Question.option1}`} />
                                        <label class="form-check-label" for="answer1">
                                            {val.Question.option1}
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="answers" id="answer2" value={`${val.Question.option2}`} />
                                        <label class="form-check-label" for="answer2">
                                            {val.Question.option2}
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="answers" id="answer3" value={`${val.Question.option3}`} />
                                        <label class="form-check-label" for="answer3">
                                            {val.Question.option3}
                                        </label>
                                    </div>
                                    <div class="form-check">
                                        <input class="form-check-input" type="radio" name="answers" id="answer4" value={`${val.Question.option4}`} />
                                        <label class="form-check-label" for="answer4">
                                            {val.Question.option4}
                                        </label>
                                    </div>

                                </form>
                            </div>
                        )
                    })
                }</div>
            </div>


            <div style={{ display: "flex", flexDirection: "row", gap: "10px", paddingTop: "20px", justifyContent: "space-between" }}>
                <button style={{ border: "1px solid black", width: "200px", height: "40px", backgroundColor: "#00ffff" }} onClick={() => {
                    setIndex(Index - 1);
                }}>Previous Question</button>
                <button style={{ border: "1px solid black", width: "200px", height: "40px", backgroundColor: "#00ffff" }} onClick={() => {
                    setIndex(Index + 1);
                }}>Next Question</button>
            </div>

            <div style={{ paddingTop: "80px", marginLeft: "36%", marginRight: "50%" }}>
                <button style={{ border: "1px solid black", width: "400px", height: "50px", backgroundColor: "#fffff7", fontSize: "1.5rem" }} onClick={FinishExam}>Finish Exam</button>
            </div>
        </div>
    )
}
export default QuestionPaper;