import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../MainLayout/MainLayout';

import Home from '../pages/Home';
import AcademicCalendar from '../pages/AcademicCalendar';
import AdmissionInfo from '../pages/AdmissionInfo';
import AdmissionNotice from '../pages/AdmissionNotice';
import CitizenCharter from '../pages/CitizenCharter';
import ClassRoutine from '../pages/ClassRoutine';
import Classes from '../pages/Classes';
import ContactUs from '../pages/ContactUs';
import DepartmentHistory from '../pages/DepartmentHistory';
import Employees from '../pages/Employees';
import Events from '../pages/Events';
import ExamNotice from '../pages/ExamNotice';
import HistoryBangla from '../pages/HistoryBangla';
import HistoryEnglish from '../pages/HistoryEnglish';
import HolidayCalendar from '../pages/HolidayCalendar';
import ImageGallery from '../pages/ImageGallery';
import Noc from '../pages/Noc';
import Notice from '../pages/Notice';
import OfficeOrder from '../pages/OfficeOrder';
import Principal from '../pages/Principal';
import Results from '../pages/Results';
import StudentsInfo from '../pages/StudentsInfo';
import Syllabus from '../pages/Syllabus';
import Teachers from '../pages/Teachers';
import VicePrincipal from '../pages/VicePrincipal';
import VideoGallery from '../pages/VideoGallery';
import VisionAndMission from '../pages/VisionAndMission';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/academic-calendar',
        element: <AcademicCalendar />,
      },
      {
        path: '/admission-info',
        element: <AdmissionInfo />,
      },
      {
        path: '/admission-notice',
        element: <AdmissionNotice />,
      },
      {
        path: '/citizen-charter',
        element: <CitizenCharter />,
      },
      {
        path: '/class-routine',
        element: <ClassRoutine />,
      },
      {
        path: '/classes',
        element: <Classes />,
      },
      {
        path: '/contact-us',
        element: <ContactUs />,
      },
      {
        path: '/citizen-charter',
        element: <CitizenCharter />,
      },
      {
        path: '/departments-history',
        element: <DepartmentHistory />,
      },
      {
        path: '/employees',
        element: <Employees />,
      },
      {
        path: '/events',
        element: <Events />,
      },
      {
        path: '/exam-notice',
        element: <ExamNotice />,
      },
      {
        path: '/history-bangla',
        element: <HistoryBangla />,
      },
      {
        path: '/history-english',
        element: <HistoryEnglish />,
      },
      {
        path: '/holiday-calendar',
        element: <HolidayCalendar />,
      },
      {
        path: '/image-gallery',
        element: <ImageGallery />,
      },
      {
        path: '/noc',
        element: <Noc />,
      },
      {
        path: '/notice',
        element: <Notice />,
      },
      {
        path: '/office-order',
        element: <OfficeOrder />,
      },
      {
        path: '/principal',
        element: <Principal />,
      },
      {
        path: '/results',
        element: <Results />,
      },
      {
        path: '/students-info',
        element: <StudentsInfo />,
      },
      {
        path: '/syllabus',
        element: <Syllabus />,
      },
      {
        path: '/teachers',
        element: <Teachers />,
      },
      {
        path: '/vice-principal',
        element: <VicePrincipal />,
      },
      {
        path: '/video-gallery',
        element: <VideoGallery />,
      },
      {
        path: '/vision-and-mission',
        element: <VisionAndMission />,
      },
    ],
  },
]);

export default router;
