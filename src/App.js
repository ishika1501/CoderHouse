import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CollegeProgram from './pages/CollegeProgram';
import Home from './pages/Home';
import Features from './pages/Features';
import CampusProgram from './pages/CampusProgram';

import SwayamBatch from './pages/SwayamBatch';
// import CrtOfflineBatch from './pages/CrtOfflineBatch';
import CodersSheet from './pages/CodersSheet';
import MentorshipModule from './pages/MentorshipModule';
import MarathonClasses from './pages/MarathonClasses'; // New Component
import Internship from './pages/Internship'; // New Component
import Contest from './pages/Contest'; // New Component
import MoonCoder from './pages/MoonCoder'; // New Component
import Notes from './pages/Notes';
import Achievers from './pages/Achievers';
import Cocubes from './pages/Cocubes'; // Adjust the path if needed
import Amcat from './pages/Amcat';
import Elitmus from './pages/Elitmus';
import AboutUs from './pages/AboutUs';

import Gform from './pages/Gform'; // Import the Gform component


import CProgramming from './Programs/c-programming';
import CPlusPlusProgramming from './Programs/CPlusPlusProgramming';
import JavaProgramming from './Programs/JavaProgramming';
import PythonProgramming from './Programs/PythonProgramming';
import FullStackDevelopment from './Programs/FullStackDevelopment';
import Cybersecurity from './Programs/Cybersecurity';
import MachineLearning from './Programs/MachineLearning';
import Aptitude from './Programs/aptitude';
import Reasoning from './Programs/reasoning';
import English from './Programs/english';
import CriticalThinking from './Programs/CriticalThinking';
import GDPersonalInterview from './Programs/gd-personal-interview';
import TermsAndConditions from './pages/TermsAndConditions.js';
import PrivacyPolicy from './pages/PrivacyPolicy.js';

import './App.css';
import ResumeBuilding from './pages/ResumeBuilding';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          {/* Existing Routes */}
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/features" element={<Features />} />
          <Route path="/Notes" element={<Notes/>} />
          <Route path="/Achievers" element={<Achievers/>} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Gform" element={<Gform />} /> {/* Route to Gform */}
          <Route path="/Terms&Conditions" element={<TermsAndConditions/>} />
          
          <Route path="/collegePrograms" element={<CollegeProgram />} />
          <Route path="/CampusPrograms" element={<CampusProgram />} />
          <Route path="/swayam-batch" element={<SwayamBatch />} />
          {/* <Route path="/crt-offline-batch" element={<CrtOfflineBatch />} /> */}
          <Route path="/coders-sheet" element={<CodersSheet />} />
          <Route path="/mentorship-module" element={<MentorshipModule />} />
          <Route path="/privacy" element={<PrivacyPolicy/>}/>
          {/* Newly Added Routes */}
          <Route path="/marathon-classes" element={<MarathonClasses />} />
          <Route path="/internship" element={<Internship />} />
          <Route path="/contest" element={<Contest />} />
          <Route path="/moon-coder" element={<MoonCoder />} />
          <Route path="/ResumeBuilding" element={<ResumeBuilding />} />


          <Route path="/Amcat" element={<Amcat />} />
          <Route path="/Cocubes" element={<Cocubes/>} />
          <Route path="/Elitmus" element={<Elitmus/>} />

          <Route path="/programs/c-programming" element={<CProgramming />} />
          <Route path="/programs/c-plus-plus-programming" element={<CPlusPlusProgramming />} />
          <Route path="/programs/java-programming" element={<JavaProgramming />} />
          <Route path="/programs/python-programming" element={<PythonProgramming />} />
          <Route path="/programs/full-stack-development" element={<FullStackDevelopment />} />
          <Route path="/programs/cybersecurity" element={<Cybersecurity />} />
          <Route path="/programs/machine-learning" element={<MachineLearning />} />
          <Route path="/programs/aptitude" element={<Aptitude />} />
          <Route path="/programs/reasoning" element={<Reasoning />} />
          <Route path="/programs/english" element={<English />} />
          <Route path="/programs/CriticalThinking" element={<CriticalThinking />} />
          <Route path="/programs/gd-personal-interview" element={<GDPersonalInterview />} />
          

        </Routes>
      </Router>
    </div>
  );
}

export default App;