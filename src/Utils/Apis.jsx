import axios from 'axios'

const token = ` Bearer ${localStorage.getItem('token')}`;
// console.log('my-token',token)

const newngrok1= 'http://auth.edu2all.in:5000';
// const newngrok1= 'http://10.5.51.4:5000';
// const girjeshServer = '10.5.50.47:5000';


// ***************************************************************************************
                            // Login  //
// ***************************************************************************************


export const loginApi = async(data) => {

    let res = await axios.post(`${newngrok1}/login/all`,data);

    if (res) {
        return res;
    }else{
       return [];
    }
}

// ########################## Human Resources API start ###########################

// post api 
export const PostApi = async(formData) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/role/addRole`,formData)
   
   if(res) {
    return res;
   }
   else{
    return []
   }
}

// GetAll Api 
export const RolePermissionGetApi = async() =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/role/getRoleBySch`)
   if(res) {
    return res;
   }
   else{
    return []
   }
}


//  Get All Api of special feature get from addon page in super admin panel
export const SpeFeaGetAllApi = async() =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/fea/getFeaByRoleId`)
   // const res= await axios.get(`${newngrok1}/fea/getAllFeatures`)
// console.log('my-response', res)
   if(res) {
    return res;
   }
   else{
    return []
   }
}

 // delete Api 

 export const RolePermDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/role/delete/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Get by Id 

export const RolePerGetByIdApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.get(`${newngrok1}/role/getByRoleId/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// Put Data Api 
export const RolePerPutApi = async(id,datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
    const res2= await axios.put(`${newngrok1}/role/editById/${id}`,datares)
    // console.log('my-response-get-by-id', res2)
 
    if(res2) {
     return res2;
    }
    else{
     return []
    }
 }



// ########################## Human Resources API end ########################### 



// ########################## Class API start ########################### 

// post Api 
export const ClassPostApi = async(datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/class/addClass`,datares)
   if(res) {
    return res;
   }
   else{
    return []
   }
   
}

// GetAll Api 
export const ClassGetApi = async() =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/class/getAllClassBySchId`)
//    console.log('my-response', res)

   if(res) {
    return res;
   }
   else{
    return []
   }
}
// delete Api 

export const ClassDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/class/deleteById/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}



// Get By id 

export const ClassGetByIdApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.get(`${newngrok1}/class/getClassById/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// Put Data Api 
export const ClassPutApi = async(id,datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/class/updateClassById/${id}`,datares)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// ########################## Class API end ########################### 


// ########################## Class Room API start ########################### 


// Post Api 

export const ClassRoomPostApi = async(datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/room/addRoom`,datares)
   if(res) {
    return res;
   }
   else{
    return []
   }
   
}

// GetAll Api 
export const ClassRoomGetApi = async() =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/room/getAllRoomBySchId`)
//    console.log('my-response', res)

   if(res) {
    return res;
   }
   else{
    return []
   }
}

// Get By id 

export const ClassRoomGetByIdApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.get(`${newngrok1}/room/getRoomById/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// delete Api 

export const classRoomDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/room/deleteById/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// Put Data Api 
export const ClassRoomPutApi = async(id,datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/room/updateRoomById/${id}`,datares)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// ########################## Class Room API end ########################### 





// ########################## Section API end ########################### 

// Post Api with Get all Api of class and Get all api of room

export const SectionPostApi = async(datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/section/addSecInClass`,datares)
   if(res) {
    return res;
   }
   else{
    return []
   }
   
}

// NullGetAll Api from room page for room id

export const NullRoomGetApi = async() =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/room/getAllNullRoom`)
//    console.log('my-response', res)

   if(res) {
    return res;
   }
   else{
    return []
   }
}

// Sectionn Get All Api 
export const SectionRoomGetApi = async(searchKey) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/section/getAllSecBySchool?searchKey=${searchKey}`)

   if(res) {
    return res;
   }
   else{
    return []
   }
}


// Sectionn Delete Api 
export const SectionDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/section/deleteSection/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Get By id 

export const SectionGetByIdApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.get(`${newngrok1}/section/getBySectionId/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}


// Put Data Api 
export const SectionPutApi = async(id,datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
    const res2= await axios.put(`${newngrok1}/section/updateSection/${id}`,datares)
    console.log('my-response-get-by-id', res2)
 
    if(res2) {
     return res2;
    }
    else{
     return []
    }
 }
 

 // Section Get by class Id All Api 

export const SectionRoomByIdGetApi = async(Class) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/section/getByClassId?classId=${Class}`,)

   if(res) {
    return res;
   }
   else{
    return []
   }
}

// ########################## Section API end ########################### 





// ########################## Event  API start ########################### 

// Event post Api 
export const EventPostApi = async(datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/events/addEvents`,datares)
   if(res) {
    return res;
   }
   else{
    return []
   }
   
}

// Event Get All Api 

export const EventGetAllApi = async(key) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/events/allEvents?searchKey=${key}`)
// console.log('my-response', res)
   if(res) {
    return res;
   }
   else{
    return []
   }
}


// Event Delete Api 
export const EventDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/events/delete/${id}`)   
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}


// Event get by id 
export const EventGetByIdApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.get(`${newngrok1}/events/findEvents/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}



// Event Put Data Api 
export const EventPutApi = async(id,datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
    const res2= await axios.put(`${newngrok1}/events/modify/${id}`,datares)
    console.log('my-response-get-by-id', res2)
 
    if(res2) {
     return res2;
    }
    else{
     return []
    }
 }
// ########################## Event API end ########################### 





// ########################## Notice API start ########################### 

// Event post Api 
export const NoticePostApi = async(datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/notice/addNotice`,datares)
   if(res) {
    return res;
   }
   else{
    return []
   }
   
}


// Event Get All Api 

export const NoticeGetAllApi = async(key) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/notice/allNotice?searchKey=${key}`)
// console.log('my-response', res)
   if(res) {
    return res;
   }
   else{
    return []
   }
}

// Notice Delete Api 
export const NoticeDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/notice/delete/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Notice get by id 
export const NoticeGetByIdApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.get(`${newngrok1}/notice/findNotice/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Notice Put Data Api 
export const NoticePutApi = async(id,datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
    const res2= await axios.put(`${newngrok1}/notice/modify/${id}`,datares)
    console.log('my-response-get-by-id', res2)
 
    if(res2) {
     return res2;
    }
    else{
     return []
    }
 }
// ########################## Notice API end ########################### 





// ########################## Holiday API start ########################### 

// Holiday post Api 
export const HolidayPostApi = async(datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/holiday/addHoliday`,datares)
   if(res) {
    return res;
   }
   else{
    return []
   }
}

// Holiday Get All Api 
export const HolidayGetAllApi = async(key) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/holiday/all?searchKey=${key}`)
// console.log('my-response', res)
   if(res) {
    return res;
   }
   else{
    return []
   }
}

// Holiday Delete Api 
export const HolidayDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/holiday/delete/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Holiday get by id 
export const HolidayGetByIdApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.get(`${newngrok1}/holiday/find/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}


// Holiday Put Data Api 
export const HolidayPutApi = async(id,datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
    const res2= await axios.put(`${newngrok1}/holiday/modify/${id}`,datares)
    console.log('my-response-get-by-id', res2)
 
    if(res2) {
     return res2;
    }
    else{
     return []
    }
 }
// ########################## Holiday API end ########################### 






// ########################## Staff  API start ########################### 


// Staff  post Api 
export const StaffPostApi = async(datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/otherStaff/addStaff`,datares)
   if(res) {
    return res;
   }
   else{
    return []
   }
   
}


// Teacher  Get All Api 
export const TeacherGetAllApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/otherStaff/getStaffByRoleType/${id}`)
// console.log('my-response', res)
   if(res) {
    return res;
   }
   else{
    return []
   }
}


// Staff Delete Api 
export const StaffDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/otherStaff/deleteStaff/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Staff Get by user Id 

export const StaffGetById = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/otherStaff/getUser/${id}`)
// console.log('my-response', res)
   if(res) {
    return res;
   }
   else{
    return []
   }
}
// staff Put Data Api 
export const StaffPutApi = async(id,datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
    const res2= await axios.put(`${newngrok1}/otherStaff/editStaff/${id}`,datares)
    // console.log('my-response-get-by-id', res2)
 
    if(res2) {
     return res2;
    }
    else{
     return []
    }
 }

// ########################## Staff API end ########################### 







// ########################## Book manager list API start ########################### 

//  post Api 
export const BookManagerPostApi = async(datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/books/add`,datares)
   if(res) {
    return res;
   }
   else{
    return []
   }  
}

// Library  Get All Api 
export const BookManagerGetAllApi = async() =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/books/allBooks`)
// console.log('my-response', res)
   if(res) {
    return res;
   }
   else{
    return []
   }
}

//  Delete Api 
export const BookManagerDeleteApi = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.delete(`${newngrok1}/books/delete/${id}`)
   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
//  Get by user Id 

export const BookmanGetById = async(id) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.get(`${newngrok1}/books/getBook/${id}`)
// console.log('my-response', res)
   if(res) {
    return res;
   }
   else{
    return []
   }
}

// Book Manager Put Data Api 
export const BookManPutApi = async(id,datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
    const res2= await axios.put(`${newngrok1}/books/modifyBook/${id}`,datares)
    // console.log('my-response-get-by-id', res2)
 
    if(res2) {
     return res2;
    }
    else{
     return []
    }
 }
// ########################## Book manager list API end ########################### 


// ########################## Book issue report API start ########################### 

//  post Api 
export const BookIssuePostApi = async(datares) =>{
    axios.defaults.headers.common["Authorization"] = token;
   const res= await axios.post(`${newngrok1}/transaction/issue-book`,datares)
   if(res) {
    return res;
   }
   else{
    return []
   }  
}
 
//   Get All Api 
export const bookIssueGetAllApi = async(startDate,endDate) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/transaction/book-transactions?startDate=${startDate}&endDate=${endDate}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Delete Api 
export const IssueBookDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/transaction/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

//  Get by user Id 
export const IssueBookGetById = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/transaction/getOne/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// Book Issue Put Data Api 
export const IssueBookPutApi = async(id,PuData) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/transaction/update/${id}`,PuData)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// ########################## Book issue report API end ########################### 





// ########################## Student apsi start  ########################### 


// Student  Get All Api 
export const studentGetAllApi = async(searchKey,classNo,sectionName) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/student/getAllScClSec?searchKey=${searchKey}&classNo=${classNo}&classSec=${sectionName}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}


// ########################## Student apsi  end ########################### 


// ########################## Online Course API start ########################### 

//  post Api 
export const OnlinePostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/courses/add`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}

// Get All Api 
export const OnlineCourseGetAllApi = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/courses/getAllCourses`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
//  Delete Api 
export const OnlineDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/courses/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

//  Get by user Id 
export const OnlineGetById = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/courses/getCourses/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const OnlinePutApi = async(id,datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/courses/update/${id}`,datares)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// ########################## Online Course API end ########################### 




// ########################## Human resources Leave API start ########################### 

//  post Api 
export const LeavePostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/leaveType/create`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}


// Get All Api 
export const LeaveGetAllApi = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/leaveType/getAll`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Delete Api 
export const LeaveDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/leaveType/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

//  Get by user Id 
export const LeaveGetById = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/leaveType/get/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const LeavePutApi = async(id,datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/leaveType/edit/${id}`,datares)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}



// -----------------------------------------
// Assign leave Apis 

//  post Api 
export const AssignLeavePostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/leaveUser/add`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}
// Get All Api 
export const AssignLeaveGetAllApi = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/leaveUser/getUsers`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
// Delete api
export const LeaveAssignDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/leaveUser/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}
// Delete leave type api
export const LeaveAssignDeleteTypeApi = async(id, roleId) =>{
   // console.log('my leave type in apis page',datares)
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/leaveUser/deleteLeaveType/${id}?leaveType=${roleId}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}


//  Get by user Id 
export const AssignLeaveGetById = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/leaveUser/getById/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}


// -----------------------------------------
// leave status 

//  post Api 
export const LeaveStatusPostApi = async(id, datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/leave/acknowledge/${id}`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}

// Get All Api 
export const LeaveStatusGetAllApi = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/leave/new-applied`)
  if(res) {
   return res;
  }
  else{
   return []
  }
}


// ########################## Human resources Leave API end ########################### 




// ########################## Subject API start ########################### 

//  post Api 
export const SubjectPostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/subject/addSubject`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}

// subject Get All Api 
export const SubjectGetAllApi = async(key, classIdForSearch) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/subject/getAllSubjectBySchId?searchKey=${key}&classNo=${classIdForSearch}`, )
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Delete Api 
export const SubjectDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/subject/deleteById/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

//  Get by user Id 
export const SubjectGetById = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/subject/getSubjectById/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}


//  Put Data Api 
export const SubjectPutApi = async(id,datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/subject/updateSubById/${id}`,datares)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// ########################## Subject API end ########################### 




// ########################## Department API start ########################### 
//  post Api 
export const DepartmentPostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/departments/add`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}

// Department Get All Api 
export const DepartmentGetAllApi = async(key) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/departments/all?searchKey=${key}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Delete Api 
export const DepartmentDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/departments/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

//  Get by user Id 
export const DepartmentGetById = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/departments/getById/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const DepartmentPutApi = async(id,datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/departments/modify/${id}`,datares)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Search by class id 

// Department Get All Api 
export const DepartmentSearchGetAllApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/subject/getAllSubByClassId/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
// ########################## Department API end ########################### 



// ########################## Syllabus API Start ########################### 

//  post Api 
export const SyllabusPostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/syllabus/addSyllabus`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}

// this section api use for section by class id for section 
export const SyllabusSectionGetAllApi = async(classId) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/section/getByClassId?classId=${classId}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// Get subject by class id in syllabus 
export const SubjectByClassIdInSyllabusGetAllApi = async(classId) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/subject/getAllSubByClassId/${classId}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}


// Get all api syllabus 
export const SyllabusGetAllApi = async(key,classId,sectionId) =>{
   axios.defaults.headers.common["Authorization"] = token;
//   const res= await axios.get(`${newngrok1}/syllabus/getAllSyllabus`)
  const res= await axios.get(`${newngrok1}/syllabus/getByClassSection?searchKey=${key}&classId=${classId}&classSecId=${sectionId}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Delete Api 
export const SyllabusDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/syllabus/deleteById/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

//  Get by user Id 

export const SyllbusGetById = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/syllabus/getSyllabusById/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const SyllabusPutApi = async(id,datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/syllabus/updateById/${id}`,datares)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// Download file apis 
export const SyllabusFileDownloadGetAllApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/syllabus/downloadSyllabus/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// ########################## Syllabus API end ########################### 




// ########################## Academics API start ########################### 

// Class Routine 


// Get all teacher by sybject id api syllabus 
export const AllTeacherBySubjectId = async(classId,subjectId) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/subject/getAllSubjectTeacher?classId=${classId}&subjectId=${subjectId}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  post Api 
export const ClassRoitinePostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
//   const res= await axios.post(`${girjeshServer}/routine/addRoutine`,datares)
  const res= await axios.post(`${newngrok1}/routine/addRoutine`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}
// get all api 
export const ClassRoutineGetAll = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/routine/getByTeacher`)
//   const res= await axios.get(`${newngrok1}/routine/getAllRoute`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// get all api by search class and section 
export const ClassRoutineBySearchGetAll = async(classNo, section) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/routine/getBySchClassId?classNo=${classNo}&section=${section}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}




// Assign Subject and teacher start

//  post Api 
export const AssignTeaSubPostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/subject/setSubjectTeacher`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}

// subject and teacher Get all api  
export const AssignGetAllApi = async(classId,subjectId) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/subject/getAllSubjectTeacher?classId=${classId}&subjectId=${subjectId}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
//  Delete Api 
export const AssignDeleteDeleteApi = async(subjectIdForDelete, staffIdForDelete) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/subject/removeSubjectTeacher?subjectId=${subjectIdForDelete}&teacherId=${staffIdForDelete}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

// Assign Subject and teacher end

// ########################## Academics API end ########################### 



// ########################## Daily attendace API start ########################### 

export const DailyAttendancehGetAll = async(sectionId, date) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/attendance/search-date?sectionId=${sectionId}&date=${date}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  post Api 
export const DailyAttendancePostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/attendance/create`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}
//  Put Data Api 
export const MyDailyAttendancePutApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/attendance/update`,datares)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

export const DailyAttendancehGetAllBymonth = async(sectionId2,month,year,search) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/attendance/search-month?sectionId=${sectionId2}&month=${month}&year=${year}&searchKey=${search}&page=${1}&size=${10}`,)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
// ########################## Daily attendace API end ########################### 

// ########################## Assign Class teacher APIs start ########################### 

// get all api by search class and section 
export const GeyAllTeacherLightWeightGetAll = async(classNo, section) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/otherStaff/getAllStaff-light`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  post Api 
export const AssignClassTreachPostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/section/assignClassTeacher`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}
//  assign get all api
export const AssignClassTeacherGetAllApi = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/section/section-classTeacher-getAll`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}


//  Delete Api 
export const AssignDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/section/removeClassTeacher/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}
// Get by id
export const AssignClassTeacherGetByIdAllApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/section/sectionClassTeacherGetById/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const AssignClassTeacherPutApi = async(section, teacher) =>{
   
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/section/editClassTeacher?sectionId=${section}&staffId=${teacher}`)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// ########################## Assign Class teacher APIs end ########################### 





// ########################## StaffAttendance APIs start ########################### 

export const StaffAttendanceGetAllApi = async(date,roleid) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/staffAttendance/search-date?roleId=${roleid}&date=${date}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
//  post Api 
export const TakeAttendancePostApi = async(datares) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/staffAttendance/create`,datares)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}
//  Put Data Api 
export const SatffAttendancePutApi = async(data) =>{
   
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/staffAttendance/update`, data)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

export const AttendanceGetAllBymonth = async(roleid,month,year,search) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/staffAttendance/search-month?roleId=${roleid}&month=${month}&year=${year}&searchKey=${search}&page=${1}&size=${10}`,)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
// ########################## StaffAttendance APIs end ########################### 




// ########################## Income category APIs start ########################### 

//  post Api 
export const IncomeCategoryPostApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/account-category/create`,formData)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}


//  Income get all api
export const IncomeCategorygetAllApi = async(income) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/account-category/getAllByType?type=${income}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Delete Api 
export const IncomeCategoryDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/account-category/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}
// Get by id
export const IncomeCategoryGetByIdApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/account-category/getOne/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const IncomeCategoryPutApi = async(id,formData) =>{
   
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/account-category/modify/${id}`,formData)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}

// ########################## Income category APIs end ########################### 





// ########################## Expense category APIs start ########################### 
//  post Api 
export const ExpenseCategoryPostApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/account-category/create`,formData)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}

//  Expense get all api
export const ExpenseCategorygetAllApi = async(expense) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/account-category/getAllByType?type=${expense}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Delete Api 
export const ExpenseCategoryDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/account-category/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}
// Get by id
export const ExpenseCategoryGetByIdApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/account-category/getOne/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const ExpenseCategoryPutApi = async(id,formData) =>{
   
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/account-category/modify/${id}`,formData)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }
}
// ########################## Expense category APIs end ########################### 


// ########################## Income APIs end ########################### 

//  post Api 
export const IncomePostApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/income-expense/addTransaction`,formData)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}
//  income get all api
export const IncomeAllApi = async(income ,startDate,endDate,categoryId) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/income-expense/getAllByType?type=${income}`)
//   ,startDate,endDate,categoryId
//   &categoryId=${categoryId}&startDate=${startDate}&endDate=${endDate}
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
//  Delete Api 
export const IncomeDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/income-expense/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

// Get by id
export const IncomeGetByIdApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/income-expense/getOne/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
//  Put Data Api 
export const incomePutApi = async(id,formData) =>{
   
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/income-expense/modify/${id}`,formData)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }

}


// ########################## Income APIs end ########################### 




// ########################## Expense APIs start ########################### 

//  post Api 
export const ExpensePostApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/income-expense/addTransaction`,formData)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}
//  income get all api
export const ExpenseAllApi = async(expense) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/income-expense/getAllByType?type=${expense}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Delete Api 
export const ExpenseDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/income-expense/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

// Get by id
export const ExpenseGetByIdApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/income-expense/getOne/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const ExpensePutApi = async(id,formData) =>{
   
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/income-expense/modify/${id}`,formData)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }

}
// ########################## Expense APIs end ########################### 


// ########################## Exam Category APIs start ########################### 


//  Exam category get all api
export const ExamcategoryGetAll = async(searchKey) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/exam_category/all?searchKey=${searchKey}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// ########################## Exam Category APIs end ########################### 


// ##########################  Session  APIs start ########################### 

//  Session category get all api
export const SessionyGetAll = async(searchKey) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/session/getAllSessionBySchId?searchKey=${searchKey}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
// ##########################  Session  APIs end ########################### 


// ##########################  Marks  APIs start ########################### 

export const MarksGetAll = async(classId, sectionId,subjectId,sessionName,examCategory,searchKey) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/marks/all?classId=${classId}&sectionId=${sectionId}&sessionName=${sessionName}&subjectId=${subjectId}&examCategory=${examCategory}&searchKey=${searchKey}&page=${1}&size=${10}`, )
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
//  post Api 
export const MarksPostApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/marks/assign`,formData)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}


// ##########################  Marks  APIs end ########################### 


// ##########################  Offline exam  APIs start ########################### 

export const OfflineExamGetAll = async(searchKey) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/exam_details/all?searchKey=${searchKey}&page=${1}&size=${10}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  post Api 
export const OfflinePostApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/exam_details/register`,formData)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}
//  Delete Api 
export const OfflineDeleteApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res2= await axios.delete(`${newngrok1}/exam_details/delete/${id}`)
  if(res2) {
   return res2;
  }
  else{
   return []
  }
}

// Get by id
export const OfflineGetByIdApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/exam_details/getOne/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const OfflinePutApi = async(id,formData) =>{
   
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/exam_details/modify/${id}`,formData)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }

}

// ##########################  Offline exam  APIs end ########################### 




// ##########################  Assignemnt exam  APIs start ########################### 


//  post Api 
export const AssignmentPostApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/assignment/create`,formData)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}

//  Teacher get with class id and subject id all api
export const GetTeacherGetAll = async(classId,subjectId) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/subject/getAllSubjectTeacher?classId=${classId}&subjectId=${subjectId}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
//  Assignmnt get all api
export const AssignmntGetAllApi = async(sectioId, subjectId, searchKey) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/assignment/search-Assignment?sectionId=${sectioId}&subjectId=${subjectId}&searchKey=${searchKey}&page${1}&size=${10}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// Get by id
export const AssignmntGetByIdApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/assignment/getById/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
//  Put Data Api 
export const AssignmntPutApi = async(IdForUpdate,formData) =>{
   
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/assignment/update/${IdForUpdate}`,formData)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }

}

// ##########################  Assignemnt exam  APIs end ########################### 





// ##########################  Sample Paper exam  APIs start ########################### 

//  post Api 
export const SamplePaperPostApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/samplePaper/create`,formData)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}
//  Assignmnt get all api
export const SampleGetAllApi = async(searchKey) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/samplePaper/getAll?searchkey=${searchKey}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
// get by id 
export const SampleGetByIdApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/samplePaper/getById/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

//  Put Data Api 
export const SamplePutApi = async(IdForUpdate,formData) =>{
   
   axios.defaults.headers.common["Authorization"] = token;
   const res2= await axios.put(`${newngrok1}/samplePaper/update/${IdForUpdate}`,formData)
   // console.log('my-response-get-by-id', res2)

   if(res2) {
    return res2;
   }
   else{
    return []
   }

}


// ##########################  Sample Paper exam  APIs end ########################### 





// ##########################  payroll  APIs start ########################### 


//  Payroll get all api

export const PayGetAllApi = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/payroll/getByStaff`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// Get by ud 
export const PayGetByIdAllApi = async(id) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/payroll/viewPayStaff/${id}`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
// ##########################  payroll  APIs end ########################### 


// ##########################  Profile  APIs start ########################### 

// Get All api 
export const ProfileByIdAllApi = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/otherStaff/getUserByToken`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// put api 
export const ProfileUpdateAllApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.put(`${newngrok1}/otherStaff/updateByUser`,formData)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// ##########################  Profile  APIs end ########################### 



// ##########################  Leave in teacher  APIs start ########################### 
//  post Api 
export const LeaveTeacherPostApi = async(formData) =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.post(`${newngrok1}/leave/add`,formData)
  if(res) {
   return res;
  }
  else{
   return []
  }  
}

// Get All type api 
export const LeaveTeacherAllApi = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/leaveType/getAll`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}
// Get All api 
export const LeaveTeacherGetAllApi = async() =>{
   axios.defaults.headers.common["Authorization"] = token;
  const res= await axios.get(`${newngrok1}/leave/user-readAll`)
// console.log('my-response', res)
  if(res) {
   return res;
  }
  else{
   return []
  }
}

// ##########################  Leave in teacher  APIs end ########################### 


// --- Garim api dashboard --- 


// ******************************************************************************************************
                            // Holiday  //
// ******************************************************************************************************


export const getAllHolidayDataApi = async(searchKey, pageNo, size) => {
  axios.defaults.headers.common["Authorization"] = token;
  var res = await axios.get(`${newngrok1}/holiday/all?&searchKey=${searchKey}&page=${pageNo}&size=${size}`);
  
  if (res) {
      return res;
  }else{
      return [];
  }
}


// ******************************************************************************************************
                          // Event  //
// ******************************************************************************************************


export const getAllEventDataApi = async(searchKey, pageNo, size) => {
  axios.defaults.headers.common["Authorization"] = token;
  var res = await axios.get(`${newngrok1}/events/allEvents?&searchKey=${searchKey}&page=${pageNo}&size=${size}`);
  
  if (res) {
      return res;
  }else{
      return [];
  }
}


// ******************************************************************************************************
                          // Assignments  //
// ******************************************************************************************************


export const getAllAssignmentsDataApi = async() => {
  axios.defaults.headers.common["Authorization"] = token;
  var res = await axios.get(`${newngrok1}/get-assignment`);
  // var res = await axios.get(`${newngrok1}/assignment/stu-get-assignment`);
  
  if (res) {
      return res;
  }else{
      return [];
  }
}

// ******************************************************************************************************
                          // ClassRoutine  //
// ******************************************************************************************************


export const getAllClassRoutineDataApi = async(day) => {
  axios.defaults.headers.common["Authorization"] = token;
  var res = await axios.get(`${newngrok1}/routine/getByStudent?day=${day}`);
  
  if (res) {
      return res;
  }else{
      return [];
  }
}

// --- Garim api dashboard --- 