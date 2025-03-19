import { Route, Routes } from 'react-router-dom';
import './App.css';
import Landing from './pages/Landing';
import Signup from './pages/auth/Signup';
import Login from './pages/auth/Login';
import WelcomePage from './pages/WelcomePage';
import Assessment from './pages/Assessment';
import Home from './pages/Home/Home';
import Courses from './pages/Courses/Courses';
import Lessons from './pages/Courses/Lessons/Lessons';
import LessonDetails from './pages/Courses/Lessons/LessonQuiz';

function App() {

  return (
    <>
    <Routes>
      <Route path='/' element={<Landing/>} />
      <Route path='/register' element={<Signup/>} />
      <Route path='/welcome' element={<WelcomePage/>} />
      <Route path='/home' element={<Home/>} />
      <Route path='/courses/:category' element={<Courses/>} />
      <Route path='/course/:courseTitle/:id' element={<Lessons/>} />
      <Route path='/lesson/:lessonTitle/:lessonId' element={<LessonDetails/>} />
      <Route path='/assessment' element={<Assessment/>} />
      <Route path='/login' element={<Login/>} />
    </Routes>
    </>
  )
}

export default App
