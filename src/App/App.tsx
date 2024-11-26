import {
  Navigate,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Avtorization from "../Avtorization";
import ChoosingLesson from "../ChoosingLessons/ChoosingLesson";
import Header from "../Header";
import styles from "./styles.module.scss";
import LessonsInstruction from "../ChoosingLessons/LessonsInstuction";
import SingleQuestions from "../ChoosingLessons/QuestionsLists/components/SingleQuestions";
import MultiQuestions from "../ChoosingLessons/QuestionsLists/components/MultiQuestions";
import TextQuestions from "../ChoosingLessons/QuestionsLists/components/TextQuestions";
import TeacherLessons from "../TeacherLessons";
import ChoosingLessonTeacher from "../ChoosingLessonTeacher";
import ChoosingCourse from "../Corses/ChoosingCourse";
import CourseTitle from "../Corses/CoursesTitle";
import CourseMaterial from "../Corses/CoursesMaterial";
import AllRaiting from "../Rating/AllRating";
import ProfileRating from "../Rating/ProfilRating";

function App() {
  return (
    <div>
      <Router>
        <div className={styles.app}>
          <Header />
          <Routes>
            <Route path='/fly-high/login' element={<Avtorization />} />
            <Route path='/fly-high//course' element={<ChoosingCourse />} />
            <Route
              path='/fly-high//course/choosingLesson'
              element={<CourseTitle />}
            />
            <Route
              path='/fly-high//course/choosingLesson/choosingTopic'
              element={<CourseMaterial />}
            />
            <Route path='/fly-high//rating' element={<AllRaiting />} />
            <Route
              path='/fly-high//rating/personRating'
              element={<ProfileRating />}
            />

            <Route path='/fly-high//lesson' element={<ChoosingLesson />} />
            <Route
              path='/fly-high//lesson/instruction'
              element={<LessonsInstruction />}
            />
            <Route
              path='/fly-high/lesson/instruction/questions'
              element={<TextQuestions />}
            />

            <Route
              path='*'
              element={<Navigate to='/fly-high/course' replace />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
