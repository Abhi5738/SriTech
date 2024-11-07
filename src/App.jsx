import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Courses from "./components/Courses";
import ContactUs from "./components/ContactUs";
import "../src/index.css";
import FrequentlyAskedQuestions from "./components/FrequentlyAskedQuestions";
import Footer from "./components/footer";
import TrainingsAndInternship from "./components/TrainingsAndInternship";
import ResumeWritingAndReview from "./components/ResumeWritingAndReview";
import MockInterview from "./components/mockInterview";
import JobReferrals from "./components/JobReferrals";
import Contact from "./components/Contact";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/courses" element={<Courses />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/faqs" element={<FrequentlyAskedQuestions />} />
        <Route path="/internship" element={<TrainingsAndInternship />} />
        <Route path="/resume" element={<ResumeWritingAndReview />} />
        <Route path="/mock-interview" element={<MockInterview />} />
        <Route path="/referrals" element={<JobReferrals />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
