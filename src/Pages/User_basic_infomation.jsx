import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import toast, { Toaster } from 'react-hot-toast';
import HashLoader from './HashLoaderCom';
// import { IncomeCategorygetAllApi } from '../Utils/Apis'

const User_basic_infomation = () => {

    const [loader, setLoader] = useState(false)
    const [forDelete, setForDelete] = useState(false)
    const [hide, setHide] = useState(false)
    const [show, setShow] = useState(true)
    const [searchKey, setSearchKey] = useState('')
    const [showdelete, setShowdelete] = useState(true)
    const [hidedelete, setHidedelete] = useState(false)
    const [IdForDelete, setIdForDelete] = useState()
    const [IdForUpdate, setIdForUpdate] = useState()
    const [showadd, setShowadd] = useState(true)
    const [hideedit, setHideedit] = useState(false)
    

    const [firstName, setFirstName] = useState()
    const [email, setEmail] = useState()
    const [firstAdd, setFirstAdd] = useState()
    const [phone, setPhone] = useState()
    const [gender, setGender] = useState()
    const [image, setImage] = useState()
    const [role, setRole] = useState()
    const [lastName, setLastName] = useState()
    const [status, setStatus] = useState()
    const [dob, setDob] = useState()
    const [maritalStatus, setMaritalstatus] = useState()
    const [bloodGroup, setBloodGroup] = useState()
    const [nationality, setNationality] = useState()
    const [state, setState] = useState()
    const [city, setCity] = useState()
    const [pinCode, setpinCode] = useState()
    const [religion, setReligion] = useState()
    const [secondAddress, setSecondAddress] = useState()


    return (
        <>
            <div className="container-fluid">
                <p className='heading-16'>Basic Information</p>
                <div className="row px-1 pt-2">
                    <div className="col-lg-4 col-md-4 col-sm-12 ">

                        <div className="mb-3  pt- for-media-margin">
                            <label for="exampleFormControlInput1" className="form-label    heading-14 label-color"> First Name </label>
                            <input type="text" className="form-control form-focus-input form-control-sm heading-14 grey-input-text-color input-border-color" onChange={(e) => setFirstName(e.target.value)} style={{ borderRadius: '5px', marginTop: '-5px' }} id="exampleFormControlInput12" placeholder="John" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color ">Gender</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setGender(e.target.value)} aria-label="Default select example">
                                <option  >--Choose--</option>
                                <option value="male" >Male</option>
                                <option value="female" >Female</option>
                                <option value="other" >Other</option>
             
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color "> Status</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setStatus(e.target.value)} aria-label="Default select example">
                            <option  >--Choose--</option>
                                <option value="active" >Active</option>
                                <option value="Inactive" >Inactive</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color "> State / Province</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setState(e.target.value)} aria-label="Default select example">
                            <option  >--Choose--</option>
                                <option value="uttar pradesh" >Uttar Pradesh</option>
                                <option value="delhi" >Delhi</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color "> Nationality</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setNationality(e.target.value)} aria-label="Default select example">
                            <option  >--Choose--</option>
                                <option value="indian" >Indian</option>
                                <option value="other" >Other</option>
                            </select>
                        </div>

                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color">Blood Group</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setBloodGroup(e.target.value)} aria-label="Default select example">
                            <option  >--Choose--</option>
                                <option value="a" >A</option>
                                <option value="b" >B</option>
                            </select>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 ">
                        <div className="mb-3  pt- for-media-margin">
                            <label for="exampleFormControlInput1" className="form-label    heading-14 label-color">Last Name </label>
                            <input type="text" className="form-control form-focus-input form-control-sm heading-14 grey-input-text-color input-border-color" onChange={(e) => setLastName(e.target.value)} style={{ borderRadius: '5px', marginTop: '-5px' }} id="exampleFormControlInput12" placeholder="Doe" />
                        </div>
                        <div className="mb-3  pt- for-media-margin">
                            <label for="exampleFormControlInput1" className="form-label    heading-14 label-color">Email</label>
                            <input type="text" className="form-control form-focus-input form-control-sm heading-14 grey-input-text-color input-border-color" onChange={(e) => setEmail(e.target.value)} style={{ borderRadius: '5px', marginTop: '-5px' }} id="exampleFormControlInput12" placeholder="type email" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color "> Marital Status</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setMaritalstatus(e.target.value)} aria-label="Default select example">
                            <option>--Choose--</option>
                                <option value="married" >Married</option>
                                <option value="Unmarried" >Unmarried</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color "> City</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setCity(e.target.value)} aria-label="Default select example">
                            <option>--Choose--</option>
                                <option value="noida" >Noida</option>
                                <option value="aligarh" >Aligarh</option>
                            </select>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color "> Citizenship</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => handle(e.target.value)} aria-label="Default select example">
                            <option  >--Choose--</option>
                                <option value="indian" >Indian</option>
                                <option value="other" >Other</option>
                            </select>
                        </div>
                        <div className="mb-3  pt- for-media-margin">
                            <label for="exampleFormControlInput1" className="form-label    heading-14 label-color">Address Line 1 </label>
                            <input type="text" className="form-control form-focus-input form-control-sm heading-14 grey-input-text-color input-border-color" onChange={(e) => setFirstAdd(e.target.value)} style={{ borderRadius: '5px', marginTop: '-5px' }} id="exampleFormControlInput12" placeholder="Address" />
                        </div>

                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-12 ">
                    <div className="mb-3  pt- for-media-margin">
                            <label for="exampleFormControlInput1" className="form-label    heading-14 label-color">Contact Number</label>
                            <input type="text" className="form-control form-focus-input form-control-sm heading-14 grey-input-text-color input-border-color" onChange={(e) => setPhone(e.target.value)} style={{ borderRadius: '5px', marginTop: '-5px' }} id="exampleFormControlInput12" placeholder="Address" />
                        </div>
                        <div className="mb-3  pt- for-media-margin">
                            <label for="exampleFormControlInput1" className="form-label    heading-14 label-color">Date of Birth </label>
                            <input type="date" className="form-control form-focus-input form-control-sm heading-14 grey-input-text-color input-border-color" onChange={(e) => setDob(e.target.value)} style={{ borderRadius: '5px', marginTop: '-5px' }} id="exampleFormControlInput12" placeholder="0.00" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color ">Role</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setRole(e)} aria-label="Default select example">
                                <option value="" >Normal Role</option>
                                {/* {
            classData.map(item =>
              <option value={`${item.classId} , ${item.classNo}`}>{item.classNo}</option>
            )
          } */}
                            </select>
                        </div>
                        <div className="mb-3  pt- for-media-margin">
                            <label for="exampleFormControlInput1" className="form-label    heading-14 label-color">Pin Code </label>
                            <input type="text" className="form-control form-focus-input form-control-sm heading-14 grey-input-text-color input-border-color" onChange={(e) => setpinCode(e.target.value)} style={{ borderRadius: '5px', marginTop: '-5px' }} id="exampleFormControlInput12" placeholder="121002" />
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14 label-color "> Religion</label>
                            <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setReligion(e)} aria-label="Default select example">
                            <option  >--Choose--</option>
                                <option value="muslim" >Muslim</option>
                                <option value="hindu" >Hindu</option>
                                <option value="sikh" >Sikh</option>
                                <option value="isai" >Isai</option>
                            </select>
                        </div>
                        <div className="mb-3  pt- for-media-margin">
                            <label for="exampleFormControlInput1" className="form-label    heading-14 label-color">Address Line 2 </label>
                            <input type="text" className="form-control form-focus-input form-control-sm heading-14 grey-input-text-color input-border-color" onChange={(e) => setSecondAddress(e.target.value)} style={{ borderRadius: '5px', marginTop: '-5px' }} id="exampleFormControlInput12" placeholder="Address" />
                        </div>
                    </div>
                    <div className="row mt-3 buttons-tops text-center">
                        <div className='my-button11 heading-14'>
                            <button type="button" class="btn btn-outline-success my-green heading-12" >Update Profile</button>
                            <button type="button" class="btn btn-outline-success heading-12 ms-1    ">Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>

    )
}

export default User_basic_infomation
