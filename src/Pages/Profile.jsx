import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import { ProfileByIdAllApi } from '../Utils/Apis';
import { ProfileUpdateAllApi } from '../Utils/Apis';



// ## style css area start ####  

const Container = styled.div`
  .breadcrum-li a{
  text-decoration: none;
  margin-top: 5px;
  color: #008479;
  }
  .main-body{
    background-color: #F2F3F6; 
  }
.main-content-conatainer{
    background-color: #fff;
    margin: 10px;
    /* height: 100vh; */
    border-radius: 15px;
}
.container-div-conetent{
    padding: 18px 18px 18px 18px;
    background-color: #fff;
    border-radius: 3px;
}
.my-ul{
    border: 1px solid #D7E7E5;

}
.content-div{
    background-color: #E5F3F2;
    text-align: center;
    padding: 15px 0px 15px 0px;
}
.content-div123{
    background-color: #E5F3F2;
   
}
.li-link{
    color: #000;
    text-decoration: none ;
    cursor: pointer !important;
}
.nav-pills .nav-link.active, .nav-pills .show>.nav-link {
    background-color: transparent ;
    color: orange;
    border-bottom: 1px solid orange;
    border-radius: 0;
}
.my-nav-link{
    color: #000;
}
.color123{
    color: #8F8F8F;
}
.for-padding{
    /* padding: 0px 0px 2px 60px; */
}
.li-links{
    border: 1px solid  #D7E7E5;
}
.verified{
    background: #0AAD24;
    color: #fff;
    padding: 2px 7px;
}
`;
// ## style css area end #### 


const Profile = () => {

    const [forDelete, setForDelete] = useState(false)
 
    const [hide, setHide] = useState(false)
    const [show, setShow] = useState(true)
    const [hide22, setHide22] = useState(false)
    const [show22, setShow22] = useState(true)
    const [showdelete, setShowdelete] = useState(true)
    const [hidedelete, setHidedelete] = useState(false)
    const [leaveType, setLeaveType] = useState()
    const [LeaveData, setLeaveData] = useState([])
    const [loader, setLoader] = useState(false)
    const [searchKey, setSearchKey] = useState()
    const [IdForDelete, setIdForDelete] = useState()
    const [IdForUpdate, setIdForUpdate] = useState()

    const [address, setAddress] = useState()
    const [staffName, setStaffName] = useState()
    const [staffLastName, setStaffLastName] = useState()
    const [phone, setPhone] = useState()
    const [staffEmail, setStaffEmail] = useState()
console.log('emaillllll',staffEmail)
    useEffect(()=>{
        MyProfileGetAllApi()
    },[])


  // Leave Get All Api   
  const MyProfileGetAllApi = async () => {
    setLoader(true)
    try {
      const response = await ProfileByIdAllApi();
      console.log('Get all Api data in Profile', response);
      if (response?.status === 200) {
        toast.success(response?.data?.msg)
        setAddress(response?.data?.otherStaff?.staffAddress)
        setStaffName(response?.data?.otherStaff?.staffName)
        setStaffLastName(response?.data?.otherStaff?.staffLastName)
        setPhone(response?.data?.otherStaff?.staffPhone)
        setStaffEmail(response?.data?.otherStaff?.staffEmail)
        setLoader(false)
      } else {
        toast.error(response?.data?.msg);
      }
    } catch (error) {
      console.log(error)
    }
  }
      // Profile Put api 
  const MyProfilePutApi = async () => {
    setLoader(true)
    try {
      const formData = new FormData()
      formData.append('staffName', staffName)
      formData.append('lastName', staffLastName)
      formData.append('staffPhone', phone)
      formData.append('address', address)
      
      const response = await ProfileUpdateAllApi(formData);
      console.log('MY profile update api', response)
      if (response?.status === 200) {
        toast.success(response?.data?.message);
        // MyLeaveGetAllApi()
        setShow22(false)
        setHide22(true)
        setLoader(false)
      } else {
        toast.error(response?.data?.message);
        setShow22(true)
      }
    } catch (error) {
      console.log(error)
    }
    // console.log('my-dataset',data)
  }
    return (
        <Container>
            <div className="container-fluid p-4">
                <div className="container-div-conetent">
                    <div className="row " >

                        <div className="col-lg-3 div-col-3 content-div123" >

                            <div className="content-div">
                                <p>
                                    <img src="./public/images/Ellipse 26 (3).png" alt="" />
                                </p>
                                <h2 className='heading-20 mt-2' >Jhon Doe</h2>
                                <p className='heading-14 mt-2'>Teacher <span className='verified'>Verified</span></p>
                                <hr className='mx-2 mb-0' />
                                <p className='ps-4 py-2  heading-14' style={{ color: "#008479", textAlign: 'initial' }}>Details info</p>
                                <hr className='mx-2 mt-0' />
                            </div>
                            <div className="row heading-14">
                                <div className="col-lg-6">
                                    <p className='pt-1 color123'>Email:</p>
                                    <p className='pt-1 color123'>Phone:</p>
                                    <p className='pt-1 color123'>Address:</p>
                                </div>
                                <div className="col-lg-6">
                                    <p className='pt-1'>{staffEmail}</p>
                                    <p className='pt-1'>{phone}</p>
                                    <p className='pt-1'>{address}</p>
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-9">
                            <div class="mb-1">
                                <label for="exampleFormControlInput1" class="form-label heading-16">Name</label>
                                <input type="text" class="form-control form-control-sm" value={staffName} onChange={(e)=> setStaffName(e.target.value)}  id="exampleFormControlInput1" placeholder="Bertha N. Fisher" />
                            </div>
                            <div class="mb-1">
                                <label for="exampleFormControlInput1" class="form-label heading-16">Email</label>
                                <input type="text" class="form-control form-control-sm"  id="exampleFormControlInput1" placeholder="admin@example.com" />
                            </div>
                            <div class="mb-1">
                                <label for="exampleFormControlInput1" class="form-label heading-16">Designation</label>
                                <input type="text" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Enter your Designation" />
                            </div>
                            <div class="mb-1">
                                <label for="exampleFormControlInput1" class="form-label heading-16">Birthday</label>
                                <input type="date" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Bertha N. Fisher" />
                            </div>

                            <div className="mb-1  ">
                                <label for="exampleFormControlInput1" className="form-label heading-16">Gender</label>
                                <select class="form-select  form-select-sm form-focus  label-color" aria-label="Default select example">
                                    <option selected>--Choose--</option>
                                    {/* {
                        sectionData.map(item =>
                          <option value={item.sectionName}>{item.sectionName}</option>
                        )
                      } */}
                                </select>
                            </div>
                            <div class="mb-1">
                                <label for="exampleFormControlInput1" class="form-label heading-16">Phone Number</label>
                                <input type="email" class="form-control form-control-sm" value={phone} onChange={(e)=> setPhone(e.target.value)} id="exampleFormControlInput1" placeholder="Bertha N. Fisher" />
                            </div>
                            <div class="mb-1">
                                <label for="exampleFormControlInput1" class="form-label heading-16">Address</label>
                                <input type="text" class="form-control form-control-sm" value={address} onChange={(e)=> setAddress(e.target.value)} id="exampleFormControlInput1" placeholder="Bertha N. Fisher" />
                            </div>
                            <div class="mb-1">
                                <label for="exampleFormControlInput1" class="form-label heading-16">Photo</label>
                                <input type="file" class="form-control form-control-sm" id="exampleFormControlInput1" placeholder="Bertha N. Fisher" />
                            </div>
                            <div className='my-button11 mt-2'>
                                <button type="button" className="btn btn-outline-success heading-12 btn-bgAndColor" onClick={MyProfilePutApi}>Save Changes</button>
                                <button type="button" className="btn btn-outline-success heading-12 ms-1">Cancel</button>
                                <Toaster />
                            </div>
                        </div>

                    </div>

                </div>
            </div>


        </Container >
    )
}

export default Profile
