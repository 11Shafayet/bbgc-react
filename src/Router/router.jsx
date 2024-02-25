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
import ExamRoutine from '../pages/ExamRoutine';

// admin
import Dashboard from '../pages/admin/Dashboard';
import Login from '../pages/admin/Login';
import AddNotice from '../pages/admin/AddNotice';
import AllNotices from '../pages/admin/AllNotices';
import AddRoutine from '../pages/admin/AddRoutine';
import AddTeacher from '../pages/admin/AddTeacher';
import AllTeachers from '../pages/admin/AllTeachers';
import DashboardLayout from '../MainLayout/DashboardLayout';
import AllRoutine from '../pages/admin/AllRoutine';
import Register from '../pages/admin/Register';
import AllUsers from '../pages/admin/AllUsers';
import PrivateRoute from './PrivateRoute';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
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
        path: '/exam-routine',
        element: <ExamRoutine />,
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

  // admin routes
  {
    path: '/dashboard',
    element: <DashboardLayout />,
    children: [
      {
        path: '/dashboard',
        element: (
          <PrivateRoute>
            <Dashboard />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/login',
        element: <Login />,
      },
      {
        path: '/dashboard/register',
        element: <Register />,
      },
      {
        path: '/dashboard/all-users',
        element: (
          <PrivateRoute>
            <AllUsers />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-notice',
        element: (
          <PrivateRoute>
            <AddNotice />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/all-notice',
        element: (
          <PrivateRoute>
            <AllNotices />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-routine',
        element: (
          <PrivateRoute>
            <AddRoutine />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/all-routine',
        element: (
          <PrivateRoute>
            <AllRoutine />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/add-teacher',
        element: (
          <PrivateRoute>
            <AddTeacher />
          </PrivateRoute>
        ),
      },
      {
        path: '/dashboard/all-teachers',
        element: (
          <PrivateRoute>
            <AllTeachers />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
