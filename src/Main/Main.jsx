import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components';
import Admin from '../Pages/Admin';
import AdAdminForm from '../Pages/AdAdminForm';
import Teacher from '../Pages/Teacher';
import Accountant from '../Pages/Accountant';
import Librarian from '../Pages/Librarian';
import Student from '../Pages/Student';
import OtherStaff from '../Pages/OtherStaff';
import TeacherPermission from '../Pages/TeacherPermission';
import TeacherPermission22 from '../Pages/TeacherPermission22';
import DailyAttendance from '../Pages/DailyAttendance';
import ClassList from '../Pages/ClassList';
import ClassRoutine from '../Pages/ClassRoutine';
import Subject from '../Pages/Subject';
import Gradebooks from '../Pages/Gradebooks';
import Syllabus from '../Pages/Syllabus';
import ClassRoom from '../Pages/ClassRoom';
import Departments from '../Pages/Departments';
import UserRole from '../Pages/RolePermission';
import UserList from '../Pages/UserList';
import TakeAttendance from '../Pages/TakeAttendance';
import Leave from '../Pages/Leave';
import StateTable_1 from '../Pages/StateTable_1';
import Payroll from '../Pages/Payroll';
import PayRoll_Create from '../Pages/PayRoll_Create';
import SmsSetting from '../Pages/SmsSetting';
import SmsSettingState1 from '../Pages/SmsSettingState1';
import SmsSettingState2 from '../Pages/SmsSettingState2';
import SmsSettingState3 from '../Pages/SmsSettingState3';
import SmsSender from '../Pages/SmsSender';
import BookListManager from '../Pages/BookListManager';
import BookIssueReport from '../Pages/BookIssueReport';
import Holiday from '../Pages/Holiday';
import Notice from '../Pages/Notice';
import NoticeViewPage from '../Pages/NoticeViewPage';
import Event from '../Pages/Event';
import Login from '../Pages/Event';
import Section from '../Pages/Section';
import RolePermisGetAll from '../Pages/RolePermisGetAll';
import OnlineCourse from '../Pages/OnlineCourse';
import AssignLeave from '../Pages/AssignLeave';
import LeaveStatus from '../Pages/LeaveStatus';
import AssignSubjectTeacher from '../Pages/AssignSubjectTeacher';
import AssignClassTeacher from '../Pages/AssignClassTeacher';
import Discount from '../Pages/Discount';
import Fee from '../Pages/Fee';
import Fee_collection from '../Pages/Fee_collection';
import ManageInvoice from '../Pages/ManageInvoice';
import Due_invoice from '../Pages/Due_invoice';
import Income from '../Pages/Income';
import Income_category from '../Pages/Income_category';
import Expense from '../Pages/Expense';
import Expense_category from '../Pages/Expense_category';
import MainUserForm from '../Pages/MainUserForm';
import User_Contact from '../Pages/User_Contact';
import User_Per_info from '../Pages/User_Per_info';
import OfflineExam from '../Pages/OfflineExam';
import Marks from '../Pages/Marks';
import AssignmentTea from '../Pages/AssignmentTea';
import Assign_publish from '../Pages/Assign_publish';
import Assign_archieves from '../Pages/Assign_archieves';
import Assign_draft from '../Pages/Assign_draft';
import Assignment_details from '../Pages/Assignment_details';
import Assignmnt_submss from '../Pages/Assignmnt_submss';
import Sample_paper from '../Pages/Sample_paper';
import Profile from '../Pages/Profile';

const Container = styled.div`
  background-color: #F2F3F6;
`;

const Main = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route exact path='/admin' element={<Admin/>}/>
          <Route exact path='/addadminform' element={<AdAdminForm/>}/>
          <Route exact path='/teacher' element={<Teacher/>}/>
          <Route exact path='/accountant' element={<Accountant/>}/>
          <Route exact path='/librarian' element={<Librarian/>}/>
          <Route exact path='/student' element={<Student/>}/>
          <Route exact path='/other_staff' element={<OtherStaff/>}/>
          <Route exact path='/teacherpermission' element={<TeacherPermission/>}/>
          <Route exact path='/teacherpermission22' element={<TeacherPermission22/>}/>
          <Route exact path='/dailyattendance' element={<DailyAttendance/>}/>
          <Route exact path='/classlist' element={<ClassList/>}/>
          <Route exact path='/classroutine' element={<ClassRoutine/>}/>
          <Route exact path='/subject' element={<Subject/>}/>
          <Route exact path='/gradebooks' element={<Gradebooks/>}/>
          <Route exact path='/syllabus' element={<Syllabus/>}/>
          <Route exact path='/Classroom' element={<ClassRoom/>}/>
          <Route exact path='/Department' element={<Departments/>}/>
          <Route exact path='/userrole' element={<UserRole/>}/>
          <Route exact path='/userlist' element={<UserList/>}/>
          <Route exact path='/takeattendance' element={<TakeAttendance/>}/>
          <Route exact path='/leave' element={<Leave/>}/>
          <Route exact path='/statetable1' element={<StateTable_1/>}/>
          <Route exact path='/payroll' element={<Payroll/>}/>
          <Route exact path='/payrollcreate' element={<PayRoll_Create/>}/>
          <Route exact path='/smssetting' element={<SmsSetting/>}/>
          <Route exact path='/smssettingstate1' element={<SmsSettingState1/>}/>
          <Route exact path='/smssettingstate2' element={<SmsSettingState2/>}/>
          <Route exact path='/smssettingstate3' element={<SmsSettingState3/>}/>
          <Route exact path='/smssender' element={<SmsSender/>}/>
          <Route exact path='/booklistmanager' element={<BookListManager/>}/>
          <Route exact path='/bookissuereport' element={<BookIssueReport/>}/>
          <Route exact path='/holiday' element={<Holiday/>}/>
          <Route exact path='/notice' element={<Notice/>}/>
          <Route exact path='/noticeview' element={<NoticeViewPage/>}/>
          <Route exact path='/event' element={<Event/>}/>
          <Route exact path='/' element={<Login/>}/>
          <Route exact path='/section' element={<Section/>}/>
          <Route exact path='/rolepermissiongetall' element={<RolePermisGetAll/>}/>
          <Route exact path='/onlinecourse' element={<OnlineCourse/>}/>
          <Route exact path='/assignleave' element={<AssignLeave/>}/>
          <Route exact path='/leavestatus' element={<LeaveStatus/>}/>
          <Route exact path='/assignsubjectteacher' element={<AssignSubjectTeacher/>}/>
          <Route exact path='/assignclassteacher' element={<AssignClassTeacher/>}/>
          <Route exact path='/discount' element={<Discount/>}/>
          <Route exact path='/fee' element={<Fee/>}/>
          <Route exact path='/feecollection' element={<Fee_collection/>}/>
          <Route exact path='/manageinvoice' element={<ManageInvoice/>}/>
          <Route exact path='/dueinvoisce' element={<Due_invoice/>}/>
          <Route exact path='/income' element={<Income/>}/>
          <Route exact path='/incomecategory' element={<Income_category/>}/>
          <Route exact path='/expense' element={<Expense/>}/>
          <Route exact path='/expensecategory' element={<Expense_category/>}/>
          <Route exact path='/mainuserform' element={<MainUserForm/>}/>
          <Route exact path='/usercontact' element={<User_Contact/>}/>
          <Route exact path='/userperinfo' element={<User_Per_info/>}/>
          <Route exact path='/offlineexam' element={<OfflineExam/>}/>
          <Route exact path='/marks' element={<Marks/>}/>
          <Route exact path='/assignmenttea' element={<AssignmentTea/>}/>
          <Route exact path='/assignpublsih' element={<Assign_publish/>}/>
          <Route exact path='/assignarchieves' element={<Assign_archieves/>}/>
          <Route exact path='/assigndraft' element={<Assign_draft/>}/>
          <Route exact path='/assignmentdetails/:id' element={<Assignment_details />}/>
          <Route exact path='/assignmntsubmssion' element={<Assignmnt_submss/>}/>
          <Route exact path='/samplepaper' element={<Sample_paper/>}/>
          <Route exact path='/profile' element={<Profile/>}/>
          
        </Routes>
      </Container>
    </>
  )
}

export default Main