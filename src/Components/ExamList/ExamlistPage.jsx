import axios from 'axios';
import { useEffect, useState } from 'react';
import './Examlist.css';
import { Link } from "react-router-dom";

let ExamListPage = () => {
    // window.history.back(false)
    let UserName = sessionStorage.getItem("UserName");
    let UserEmail = sessionStorage.getItem("UserEmail");
    let UserPhone = sessionStorage.getItem("UserPhone");
    let UserPassword = sessionStorage.getItem("UserPawssword");
    let UserConfirmPassword = sessionStorage.getItem("UserConfirmPassword");
    let UserId = sessionStorage.getItem("id");
    let UserToken = sessionStorage.getItem("token")
    let [ExamlistData, setExamlistData] = useState([]);

    useEffect(() => {
        try {
            axios.post(`https://test.e-prathibha.com/apis/test_free_exam`, { email: UserEmail, name: UserName, phone: UserPhone, password: UserPassword, confirmPassword: UserConfirmPassword },
                {
                    headers: {
                        server_key: "3w99V63pW7tJ7vavGXtCKo8cp",
                        id: UserId,
                        tokenu: UserToken
                    }
                }).then((val) => {
                    console.log(val.data);
                    if (val.data.status === 200) {
                        setExamlistData(val.data.data.exams);
                    }

                }, (err) => {
                    console.log(err);
                    alert(err.code)
                });
        } catch (err) {
            console.log(err);
            alert(err);
        }
    }, []);
    let GetQuestions = (id) =>{
    
        window.open(`/examid/:${id}`,"_self")
    }

    let Showing_Question_Papers = ExamlistData.map((val, ind) => {
        
        // console.log(Object.keys(val).slice(0,1).toString());
        let Question_Papers_Title = Object.keys(val).slice(0, 1).toString();
        console.log(Object.values(val).slice(0, 1).flat());
        let Question_Papers = Object.values(val).slice(0, 1).flat();
        let Question_Papers_List = Question_Papers.map((value, index) => {
            return (
                <div >
                    <p style={{fontSize:"2rem"}}>{value.years.exam_year}</p>
                    <button style={{ backgroundColor: "transparent", border: "none",color:"white",opacity:".4",fontSize:"13px" }}  onClick={()=>{GetQuestions(value.Exam.id)}}>Question Paper {index}</button>
                </div>

            )
        })

        return (
            <div key={ind} >
                <h1>{Question_Papers_Title}</h1>
                <p>{Object.keys(val).slice(2, 3).toString()} 0  / { Object.values(val).slice(2, 3)}</p>
                <div style={{ display: "grid", gridTemplateColumns: "300px 300px 300px", gap: "40px", justifyContent: "space-evenly", marginTop: "60px", marginBottom: "50px" }}>{Question_Papers_List}</div>
            </div>
        )
    })




    return (
        <div style={{ backgroundColor: '#034006', zIndex: "1", opacity: "1",textAlign:"center" }} >
            <nav style={{ textAlign: "center", backgroundColor: "black", height: "90px", paddingTop: "20px" }}>
                <h1 style={{ display: "inline-block", width: "300px", backgroundColor: "transparent", color: "white", float: "left" }}>E-Prathibha</h1>
                <Link to="/startexam" id="flink">
                    LogOut
                </Link>
                <Link to="/startexam" id="slink">
                    DashBoard
                </Link>
            </nav>
         <marquee >    <h1 style={{color:"white",width:"500px"}}>UPSC Question Papers and Civil PRE</h1></marquee>
            <div style={{ color: "white", textAlign: "center", paddingBottom: "60px", paddingTop: "50px" }}>{Showing_Question_Papers}</div>
        </div>
    )
}
export default ExamListPage;