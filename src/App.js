import './App.css';
import { BrowserRouter, Route,Navigate, Routes } from "react-router-dom";
import { Outlet } from "react-router-dom";
import Register from './Components/RegisterLogin/Register';
import VerifyEmailPage from './Components/VerifyEmail/VerifyEmailPage';
import StartExamPage from './Components/FreeExam/FreeExamPage';
import ExamListPage from './Components/ExamList/ExamlistPage';
import QuestionPaper from './Components/StartExams/QuestionPaper';
import ErrorPage from './Components/NoPageFound/ErrorPage';
import HomePage from './Components/Home.jsx/HomePage';


function App() {
  window.history.forward(false);

  let Authid = sessionStorage.getItem("Auth");

  return (
    <div className="App" onLoad={()=>{return (<h1>please wait, loading</h1>)}}>

      <BrowserRouter>
      
        <Routes>
          <Route>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<Register />} />
            <Route path="/startexam" element={Authid === "true"? <StartExamPage />:<Navigate to='/' />} exact />
            <Route path="/verifyEmail" element={Authid === "true" ? <VerifyEmailPage />:<Navigate to='/' />} exact />
            <Route path="/examlists" element={Authid === "true" ? <ExamListPage />:<Navigate to='/' />} exact />
            <Route path="/startexam" element={Authid === "true" ? <StartExamPage />:<Navigate to='/' />} exact />
            <Route path="/examid/:id" element={Authid === "true" ? <QuestionPaper />:<Navigate to='/' />} exact />
            <Route path="*" element={<ErrorPage />} />
          </Route>
        </Routes>
        <Outlet />
      </BrowserRouter>
    </div>
  );
}


export default App;
