// live hosts

export default urls = {
  HOST: "https://test.egreatminds.com/WebApis",
  BASE_URL: "https://test.egreatminds.com/WebApis",

  //Login
  LOGIN: "/api/Auth/Login",
  REGISTER: "/api/Auth/Register",
  ADD_ATTENDENCE: "/api/Attendence/AddAttendence",
  CHECKOUT:'/api/Attendence/Checkout',
  UPDATE_ATTENDENCE: "/api/Attendence/UpdateAttendence/9",
  GET_ALL_ATTENDENCE: "/api/Attendence/GetAttendenceAll",
  ADD_COMPANY: "/api/Company/AddCompany",
  GET_ALL_COMPANIES: "/api/Company/GetCompaniesAll",
  APPLY_LEAVE: "/api/Leave/AddLeave",
  GET_LEAVES: "/api/Leave/GetUserLeavesAll",
  GET_ATDNCE_COUNTSALL: "/api/Attendence/GetAttendenceCountsAll",
  ADD_REASON_OF_LATE: "/api/Attendence/LateAttendence",
  ADD_APPLY_LEAVE: "/api/Leave/AddLeave",
  GET_USER_PROFILE: "/api/Users/GetUsersById/",
  GET_ALL_USERS: "/api/Users/GetUsers",
  ADD_PROFILE_PIC:"/api/Auth/EditUserImagebyApp/",
  GET_MONTHLY_ATTENDANCE_OF_USER:"/api/Attendence/GetMonthlyAttendenceById/6",
  GET_REQUESTS:'/api/RequestItems/GetRequestItemsAll',
  ADD_REQUEST:'/api/RequestItems/AddRequestItems',
  LATE_USERS:'/api/Attendence/GetLateUserById',
};
