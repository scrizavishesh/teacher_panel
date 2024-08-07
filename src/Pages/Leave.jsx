import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
// import StateTable_1 from './StateTable_1';
import { LeaveTeacherAllApi } from '../Utils/Apis'
import { LeaveTeacherPostApi } from '../Utils/Apis'
import { LeaveTeacherGetAllApi } from '../Utils/Apis'

import HashLoader from './HashLoaderCom';


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
.margin-minus22{
    margin-top: -18px;
    font-size: 16px;
}
th, td{
  padding: 10px;
}
.my-td-style-yellow span{
  background-color: #FFEED3;
    color: #FF914C;
    padding: 1px 18px 1px 18px;
    border-radius: 18px 18px 18px 18px;
}
.my-td-style-green span{
  background-color:#E6FFE2;
  color: #00A67E;
  padding: 1px 18px 1px 18px;
    border-radius: 18px 18px 18px 18px;
}
.my-button-drop{
  line-height: 13px !important;
  border: 1px solid var(--tableActionButtonBgColor)  !important;

}
.pagination-a{
  background-color: #f2f0f0;
  color: #000;
  padding: 0.00175rem 0.25rem;
  margin-left: 0px !important;
}
.form-focus:focus {
    color: #212529 !important;
    background-color: #fff !important;
    border-color: var(--greyInputborderColor) !important;
    outline: none !important;
    box-shadow: none !important;
}
.page-link-1122 {
    /* padding: 0.00175rem 0.05rem; */
    padding: 0rem 0rem;
}
.pagination-a a{
  gap: 2px;
}
.my-pagina li a:hover{
  background-color: #008479;
  color: #fff;
  border: none;
}
.input-bg{
  background-color: #F2F3F6 !important;
}
.label-color{
  color: #bbbec1;
}
.cont-drop-btn button:hover{
  background-color: transparent;
  color: #000;
  cursor: pointer;
  border: none;
}


.my-button11{
    display: flex;
    justify-content: center;
    gap: 4px;
    margin-top: 30px;
}

.my-button11 button{
    border-radius: 5px;
  border: 1px solid #ababad;
  color: #000;
font-size: 12px;
}
.my-button11 button:hover{
    background-color: #008479;
    color: #fff;
}
.my-button22{
    display: flex;
    gap: 4px;
    margin-top: 4px;
}

.my-button22 button{
    border-radius: 5px;
  border: 1px solid #ababad;
  color: #000;
font-size: 12px;
}
.my-button22 button:hover{
    background-color: #008479;
    color: #fff;
}
.my-grey{
  color: #ADADBD;
}

.my-div-class p{
  border: 1px solid #ADADBD;
  padding: 10px;
  border-radius: 4px;
  background-color: #F2F3F6;
  color: #ADADBD;
  border: 1px solid #F2F3F6;
}
.my-div-class span a{
    text-decoration: none;
}
.anchor-color a{
  color: #8F8F8F;
}
.my-own-button{
  height: 33px;
  background-color: var(  --greenTextColor);
  line-height: 18px;
}
.my-own-outline-btn{
  height: 33px;
  line-height: 0px;
  color: #000;
  border: 1px solid var( --buttonBorder);
  background-color: #fff;
}

.img-div img{
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 1px solid #b9b8b8;

}
/* ############# offcanvas ############## */
.forInput {
    background : #F2F3F6;
    color:  #ADADBD;
    /* font-family: 'Noto Sans'; */
    font-size: 14px;
  }
  .forInput::placeholder{
    color: #ADADBD;
  }

  .forInputFont{
    font-size: 14px;
  }
    .forLabel {
    color:  #ADADBD;
    font-size: 15px;
  }
  .button11{
    --bs-btn-color: #959494;
    --bs-btn-border-color: #cdcdcd;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #008479;
    border-radius: 0%;
  }

  .img-container{
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #2BB673;
    top: -16%;
  }
  .img-container22{
    position: absolute;
    height: 60px;
    width: 60px;
    border-radius: 50%;
    background-color: #2BB673;
    border: 2px solid #cdcdcd;
    top: -16%;
  }
  .img-container img{
    height: 30px;
    width: 36px;
    margin: 11px;
    margin-top: 14px;
  }
  .img-container22 img{
    height: 27px;
    width: 32px;
    margin: 11px;
    margin-top: 14px;
  }
  .img-container{

  }
  .bg-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    border: 1px solid #dee2e6;
    width: 65%;
    background-color: #F2F3F6;
  }
  .delete-section {
    /* height: 30%; */
    position: relative;
  display: flex;
  justify-content: center;
  text-align: center;
  }
  .button-position{
    position: absolute;
    top: 78%;
  }
  .main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }
  .image-container{
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 1px solid #F1F5FA;
  }
  .image-container img{
    width: 100%;
    height: 100%;
  }
  .delete-content{
    font-size: 20px;
  }
  .delete-content span{
    background-color: #0AAD24;
    color: #fff;
    font-size: 15px;
    padding: 2px 6px 2px 6px;
    border-radius: 4px;
  }
  .likeButton{
    background-color: #008479;
    color: #fff;
    font-size: 17px;
    padding: 2px 8px 2px 8px;
    border-radius: 4px;
    display: inline;
  }

.view-details-background-color{
    background-color: var(--backgroundColor);
  }

  .symbol-container img{
    object-fit: cover;
  }
  .subject{
    font-size: 14px;
  }
  .sure-main-container{
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .sure-content h5{
    font-weight: 200;
  }
  .sure-content p{
    font-size: 14px;
    color: #ADADBD;
  }
  .agree{
    font-size: 14px;
    color: #ADADBD;
  }
  .buttons-topss{
    margin-top: -35px;
  }
  .button00{
    --bs-btn-color: #959494;
    --bs-btn-border-color: #cdcdcd;
    --bs-btn-hover-color: #fff;
    --bs-btn-hover-bg: #B50000;
    border-radius: 0%;
  }
  .bg-color-pink{
    border: 1px dashed #EECEBE;
    background: #FFF9F6;
  }
  .my-non-clickable button{
    border-radius: 5px;
    border: 1px solid #ECEBF3;
    background: #FFF;
    color: #000;
  }
  .my-form-check-input123:checked {
    background-color: var( --greenTextColor);
    border-color: var( --greenTextColor);
}
.overflow-y {
  max-height: 300px; 
  overflow-y: auto; 
}
.my-own-outline-btn{
    border: 1px solid #008479;
    color: #008479;
}

.my-navlink-tabs a{
color: #000 !important;
}
.nav-link{
    color: #000 !important;
} 

.my-button112233{
        background-color: #008479 !important;
        color: #fff  !important;
        border-radius: 0;
        border: 1px solid #008479;
    }

    .button00{
    --bs-btn-color: #959494;
    --bs-btn-border-color: #cdcdcd;
    background-color: #B50000;
    color: #fff;
    border-radius: 0%;
  }
.cancel-btn{
    color: #959494;
   border-color: #cdcdcd;
  
    --bs-btn-hover-bg: #fff;
    border-radius: 0%;
  }

  .my-btn.disabled, .my-btn:disabled, fieldset:disabled .btn {
    color: #fff ;
    pointer-events: none;
    background-color: #B50000;
    border-color: #cdcdcd;
    opacity: var(--bs-btn-disabled-opacity);
}
.my-form-check-input:checked{
  background-color: #B50000;
  border-color: #B50000;
} 
.font-background{
    width: 88px;

    background-color: #00A67E;
    color: #fff;
    padding: 2px 0px 2px 0px !important;
    text-align: center;
    border-radius: 5px;
}
.font-background22{
    width: 88px;
    background-color: #B50000;
    color: #fff;
    padding: 2px;
    text-align: center;
    border-radius: 5px;
}
.font-background33{
    width: 88px;
    background-color: #F9AB43;
    color: #fff;
    padding: 2px;
    text-align: center;
    border-radius: 5px;
}
.conatiner-1{
  border: 1px solid #E4E4F0;
  text-align: center;
  padding: 10px;

background: linear-gradient(180deg, #FFFFFF 0%, #F8FAFF 100%);;
}
.my-button-show{
  cursor: pointer;
}
/* ############# offcanvas ############## */

/* ########## media query ###########  */
 @media only screen and (max-width: 950px) {
  .for-media-query{
    display: flex;
    flex-direction: column;
  }
}
 @media only screen and (max-width: 735px) {
  .for-media-query{
    display: flex;
    flex-direction: column;
  }
}
@media only screen and (max-width: 605px) {
  .for-media-query-22{
    flex: 0 0 auto !important;
    width: 53% !important;
  }
  .my-own-button{
    margin-top: 5px;
    margin-bottom: 25px;
  }
  .search-responsive{
    margin-top: 10px;
  }
  .export1{
    margin-top: 8px !important;
  }
  .export2{
    margin-top: 12px !important;
  }
}

@media only screen and (max-width: 605px) {
    .for-dislay-direction{
        display: flex;
        flex-direction: column;
        margin-bottom: 5px;
    }

}

@media only screen and (max-width: 425px) {
    .for-media-query-22{
    flex: 0 0 auto !important;
    width: 75% !important;
  }

}
`;
// ## style css area end ####  


const Leave = () => {


  const [forDelete, setForDelete] = useState(false)

  const [hide, setHide] = useState(false)
  const [show, setShow] = useState(true)
  const [hide22, setHide22] = useState(false)
  const [show22, setShow22] = useState(true)
  const [showdelete, setShowdelete] = useState(true)
  const [hidedelete, setHidedelete] = useState(false)

  const [leaveType, setLeaveType] = useState()
  const [leaveApply, setLeaveApply] = useState()
  const [fromDate, setfromDate] = useState()
  const [toDate, setToDate] = useState()
  const [reason, setReason] = useState()
  const [document, setDocument] = useState()

  const [LeaveData, setLeaveData] = useState([])
  const [LeaveGetAllData, setLeaveGetAlData] = useState([])
  const [loader, setLoader] = useState(false)
  const [searchKey, setSearchKey] = useState()
  const [IdForDelete, setIdForDelete] = useState()
  const [IdForUpdate, setIdForUpdate] = useState()
  console.log('my leave ID', IdForDelete)
  // const [tabclick, setTabclick] = useState('tab3')

  useEffect(() => {
    TecaherLeaveGetAllApi();
    MyLeaveGetAllApi();
  }, [])


  // Leave type 
  const TecaherLeaveGetAllApi = async () => {
    setLoader(true)
    try {
      const response = await LeaveTeacherAllApi();
      console.log(' Teacher Leave type get All Api data', response);
      if (response?.status === 200) {
        toast.success(response?.data?.msg)
        setLeaveData(response?.data?.leave)
        setLoader(false)
      } else {
        toast.error(response?.data?.msg);
      }
    } catch (error) {
      console.log(error)
    }
  }
  // Leave Post Api 
  const MyTeacherLeaveApplyPostApi = async () => {

    const formData = {
      "reason": reason,
      "startDate": fromDate,
      "endDate": toDate,
      "leaveType": leaveType
    }

    setLoader(true)
    try {
      const response = await LeaveTeacherPostApi(formData);
      if (response?.status === 200) {
        if (response?.data?.status === "success") {
          toast.success(response?.data?.msg);
          // MyLeaveGetAllApi()
          setShow(false)
          setHide(true)
          setLoader(false)
        } else {
          toast.error(response?.data?.msg);
          setShow(true)
        }
      } else {
        toast.error(response?.data?.msg);
      }
    } catch (error) {
      console.log(error)
    }
  }

  // Leave Get All Api 
  const MyLeaveGetAllApi = async () => {
    setLoader(true)
    try {
      const response = await LeaveTeacherGetAllApi();
      console.log('Teacher Leave get All Api dataaaaaaaaa', response);
      if (response?.status === 200) {
        toast.success(response?.data?.msg)
        setLeaveGetAlData(response?.data?.leave)
        setLoader(false)
      } else {
        toast.error(response?.data?.msg);
      }
    } catch (error) {
      console.log(error)
    }
  }


  const handleForDelete = () => {
    MyHolidayDeleteApi(IdForDelete)
  }
  return (
    <Container>

      {
        loader && (
          <HashLoader />
        )
      }

      <div className="container-fluid main-body p-3">

        <div className='d-flex justify-content-between for-dislay-direction'>
          <div className="breadCrum ms-2">
            <nav style={{ '--bs-breadcrumb-divider': "'>'" }} aria-label="breadcrumb">
              <ol className="breadcrumb ms-2">
                <li className="breadcrumb-item active heading-14 font-color" aria-current="page">Home</li>
                <li className="breadcrumb-item active heading-14 font-color" aria-current="page">Human Resource</li>
                <li className="breadcrumb-item breadcrum-li heading-14" ><Link href="#">Leave</Link></li>
              </ol>
            </nav>
          </div>
          <div className='d-flex g-1 for-media-query'>
            <div className='me-2 search-responsive'>
              <div className="input-group mb-3 ">
                <input type="text" className="form-control form-focus font-color" style={{ height: '34px' }} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <span className="input-group-text button-bg-color button-color heading-14 font-color " style={{ cursor: 'pointer', height: "34px" }} id="basic-addon2">Search</span>
              </div>
            </div>
            <Link type="button" className="btn btn-success heading-16 my-own-button me-3 " data-bs-toggle="offcanvas" data-bs-target="#staticBackdrop101" aria-controls="staticBackdrop" to={''}>+ Create Leave</Link>
          </div>
        </div>
        <h5 className='ms-3 mb-2 margin-minus22 heading-16' style={{ marginTop: '-22px' }}>Leave Details</h5>

        <div className="main-content-conatainer pt-1 ">


          <div className="table-container px-3 table-responsive ">

            <table className="table table-sm table-striped">
              <thead className=''>
                <tr className='heading-16 text-color-000' style={{ fontWeight: '500' }}>
                  <th className=''>#</th>
                  <th className=''>Leave Type</th>
                  <th className=''>Leave Date</th>
                  <th className=''>Days</th>
                  <th className=''>Apply Date</th>
                  <th className=''>Reason</th>
                  <th className=''>Status</th>
                  <th className=''>Actions</th>
                </tr>
              </thead>

              <tbody className='heading-14 align-middle greyTextColor'>

                {
                  LeaveGetAllData.map((item, index) => (
                    <tr className='heading-14' >
                      <td className=' greyText'>{index + 1}</td>
                      <td className=' greyText'>{item.leaveType}</td>
                      <td className=' greyText'>{item.endDate}</td>
                      <td className=' greyText'>N-I-R</td>
                      <td className=' greyText'>{item.startDate}</td>
                      <td className=' greyText'>{item.reason}</td>
                      <td className=' greyText'>
                        <div className=''>
                          <p className={`font-background  ${item.approved === true ? 'font-background ' : 'font-background22'}`}>{item.approved === true ? 'Approved' : 'Reject' }</p>
                        </div>
                      </td>
                      <td className=' greyText'>
                        <div className="dropdown my-button-show">
                          <p>
                            <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M11.6335 2.4V1.2V0H10.4335H7.2335H6.0335V1.2V2.4H0.833496V6.4332H2.0167V19.2H15.6499V6.4332H16.8335V2.4H11.6335ZM5.6335 17.6H4.0335V6.4H5.6335V17.6ZM9.6335 17.6H8.0335V6.4H9.6335V17.6ZM7.2335 2.4V1.2H10.4335V2.4H7.2335ZM13.6335 17.6H12.0335V6.4H13.6335V17.6Z" fill="#ADADBD" />
                            </svg>
                          </p>
                        </div>
                      </td>
                    </tr>
                  ))
                }








              </tbody>
            </table>
          </div>

          <div className="row  ">
            <div className='d-flex justify-content-between px-5'>
              <div className='heading-13'>
                <p>Showing 1 to 10 entries</p>
              </div>
              <div >
                <nav aria-label="Page navigation example">
                  <ul className="pagination my-pagina " >
                    <li className="page-item">
                      <a className="page-link pagination-a" href="#" aria-label="Previous">
                        <span aria-hidden="true">
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 0.84875L7.1375 0L0 7L7.1375 14L8 13.1556L1.72917 7L8 0.84875Z" fill="black" />
                          </svg>
                        </span>
                      </a>
                      &nbsp;
                    </li>
                    &nbsp;
                    <li className="page-item"><a className="page-link pagination-a" href="#">1</a></li>&nbsp;
                    <li className="page-item"><a className="page-link pagination-a" href="#">2</a></li>&nbsp;
                    <li className="page-item"><a className="page-link pagination-a" href="#">3</a></li>&nbsp;
                    <li className="page-item"><a className="page-link pagination-a" href="#">4</a></li>&nbsp;
                    <li className="page-item"><a className="page-link pagination-a" href="#">5</a></li>&nbsp;
                    <li className="page-item">
                      <a className="page-link pagination-a" href="#" aria-label="Next" >
                        <span aria-hidden="true">
                          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0 0.84875L0.8625 0L8 7L0.8625 14L0 13.1556L6.27083 7L0 0.84875Z" fill="black" />
                          </svg>

                        </span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>

          <div className="row ms-2 pb-5">
            <p>Leave Details</p>
            <div className="col-lg-2 col-md-3 col-sm-6 mt-2 pe-0">
              <div className="conatiner-1 px-0">
                <p>
                  <svg className='mt-2' width="22" height="25" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.7778 3.2H22.5556V0H19.3333V3.2H9.66667V0H6.44444V3.2H3.22222C1.44517 3.2 0 4.6352 0 6.4V28.8C0 30.5648 1.44517 32 3.22222 32H25.7778C27.5548 32 29 30.5648 29 28.8V6.4C29 4.6352 27.5548 3.2 25.7778 3.2ZM25.781 28.8H3.22222V9.6H25.7778L25.781 28.8Z" fill="#FF914C" />
                    <path d="M13 13H16V21.125H13V13ZM13 22.75H16V26H13V22.75Z" fill="#FF914C" />
                  </svg>
                </p>
                <p className='heading-14 pt-2'><b>Casual Leave</b></p>
                <p className='heading-12 pt-2 pb-2' >Available - <span>0</span></p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mt-2 pe-0">
              <div className="conatiner-1 px-0">
                <p>
                  <svg className='mt-2' width="26" height="26" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.8462 31.9983H6.15385C4.52234 31.9963 2.95823 31.3473 1.80458 30.1937C0.650932 29.0401 0.00195429 27.4759 0 25.8444V12.306C0 11.9795 0.12967 11.6665 0.360484 11.4357C0.591298 11.2049 0.904349 11.0752 1.23077 11.0752H30.7692C31.0957 11.0752 31.4087 11.2049 31.6395 11.4357C31.8703 11.6665 32 11.9795 32 12.306V25.8444C31.998 27.4759 31.3491 29.0401 30.1954 30.1937C29.0418 31.3473 27.4777 31.9963 25.8462 31.9983ZM2.46154 13.5367V25.8444C2.46154 26.8237 2.85055 27.7628 3.54299 28.4553C4.23543 29.1477 5.17459 29.5367 6.15385 29.5367H25.8462C26.8254 29.5367 27.7646 29.1477 28.457 28.4553C29.1495 27.7628 29.5385 26.8237 29.5385 25.8444V13.5367H2.46154Z" fill="#FF914C" />
                    <path d="M30.7692 13.5385H1.23077C0.904349 13.5385 0.591298 13.4088 0.360484 13.178C0.12967 12.9472 0 12.6341 0 12.3077V6.15385C0.00195429 4.52234 0.650932 2.95822 1.80458 1.80458C2.95823 0.650932 4.52234 0.00195429 6.15385 0H25.8462C27.4777 0.00195429 29.0418 0.650932 30.1954 1.80458C31.3491 2.95822 31.998 4.52234 32 6.15385V12.3077C32 12.6341 31.8703 12.9472 31.6395 13.178C31.4087 13.4088 31.0957 13.5385 30.7692 13.5385ZM2.46154 11.0769H29.5385V6.15385C29.5385 5.17458 29.1495 4.23543 28.457 3.54299C27.7646 2.85055 26.8254 2.46154 25.8462 2.46154H6.15385C5.17459 2.46154 4.23543 2.85055 3.54299 3.54299C2.85055 4.23543 2.46154 5.17458 2.46154 6.15385V11.0769Z" fill="#FF914C" />
                    <path d="M9.84625 7.38462C9.51983 7.38462 9.20678 7.25495 8.97596 7.02413C8.74515 6.79332 8.61548 6.48027 8.61548 6.15385V1.23077C8.61548 0.904349 8.74515 0.591298 8.97596 0.360484C9.20678 0.12967 9.51983 0 9.84625 0C10.1727 0 10.4857 0.12967 10.7165 0.360484C10.9473 0.591298 11.077 0.904349 11.077 1.23077V6.15385C11.077 6.48027 10.9473 6.79332 10.7165 7.02413C10.4857 7.25495 10.1727 7.38462 9.84625 7.38462Z" fill="#FF914C" />
                    <path d="M23.3807 7.38462C23.0543 7.38462 22.7412 7.25495 22.5104 7.02413C22.2796 6.79332 22.1499 6.48027 22.1499 6.15385V1.23077C22.1499 0.904349 22.2796 0.591298 22.5104 0.360484C22.7412 0.12967 23.0543 0 23.3807 0C23.7071 0 24.0201 0.12967 24.251 0.360484C24.4818 0.591298 24.6114 0.904349 24.6114 1.23077V6.15385C24.6114 6.48027 24.4818 6.79332 24.251 7.02413C24.0201 7.25495 23.7071 7.38462 23.3807 7.38462Z" fill="#FF914C" />
                    <path d="M9.84557 9.84739C11.205 9.84739 12.3071 8.74532 12.3071 7.38585C12.3071 6.02638 11.205 4.92432 9.84557 4.92432C8.4861 4.92432 7.38403 6.02638 7.38403 7.38585C7.38403 8.74532 8.4861 9.84739 9.84557 9.84739Z" fill="#FF914C" />
                    <path d="M23.3856 9.84739C24.7451 9.84739 25.8471 8.74532 25.8471 7.38585C25.8471 6.02638 24.7451 4.92432 23.3856 4.92432C22.0261 4.92432 20.9241 6.02638 20.9241 7.38585C20.9241 8.74532 22.0261 9.84739 23.3856 9.84739Z" fill="#FF914C" />
                    <path d="M14.766 19.6905H7.3814C7.05498 19.6905 6.74193 19.5609 6.51112 19.3301C6.2803 19.0992 6.15063 18.7862 6.15063 18.4598C6.15063 18.1334 6.2803 17.8203 6.51112 17.5895C6.74193 17.3587 7.05498 17.229 7.3814 17.229H14.766C15.0924 17.229 15.4055 17.3587 15.6363 17.5895C15.8671 17.8203 15.9968 18.1334 15.9968 18.4598C15.9968 18.7862 15.8671 19.0992 15.6363 19.3301C15.4055 19.5609 15.0924 19.6905 14.766 19.6905Z" fill="#FF914C" />
                    <path d="M19.6891 24.6153H7.3814C7.05498 24.6153 6.74193 24.4857 6.51112 24.2549C6.2803 24.024 6.15063 23.711 6.15063 23.3846C6.15063 23.0582 6.2803 22.7451 6.51112 22.5143C6.74193 22.2835 7.05498 22.1538 7.3814 22.1538H19.6891C20.0155 22.1538 20.3286 22.2835 20.5594 22.5143C20.7902 22.7451 20.9199 23.0582 20.9199 23.3846C20.9199 23.711 20.7902 24.024 20.5594 24.2549C20.3286 24.4857 20.0155 24.6153 19.6891 24.6153Z" fill="#FF914C" />
                  </svg>

                </p>
                <p className='heading-14 pt-2'><b>Earned Leave</b></p>
                <p className='heading-12 pt-2 pb-2' >Available - <span>0</span></p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mt-2 pe-0">
              <div className="conatiner-1 px-0">
                <p>
                  <svg className='mt-2' width="28" height="28" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0_77_1902)">
                      <path d="M29.75 1.0625H4.25C3.12323 1.06379 2.04297 1.51198 1.24622 2.30872C0.449476 3.10547 0.00129356 4.18573 0 5.3125L0 28.6875C0.00129356 29.8143 0.449476 30.8945 1.24622 31.6913C2.04297 32.488 3.12323 32.9362 4.25 32.9375H29.75C30.8768 32.9362 31.957 32.488 32.7538 31.6913C33.5505 30.8945 33.9987 29.8143 34 28.6875V5.3125C33.9987 4.18573 33.5505 3.10547 32.7538 2.30872C31.957 1.51198 30.8768 1.06379 29.75 1.0625ZM31.875 28.6875C31.875 29.2511 31.6511 29.7916 31.2526 30.1901C30.8541 30.5886 30.3136 30.8125 29.75 30.8125H4.25C3.68641 30.8125 3.14591 30.5886 2.7474 30.1901C2.34888 29.7916 2.125 29.2511 2.125 28.6875V5.3125C2.125 4.74891 2.34888 4.20841 2.7474 3.8099C3.14591 3.41138 3.68641 3.1875 4.25 3.1875H29.75C30.3136 3.1875 30.8541 3.41138 31.2526 3.8099C31.6511 4.20841 31.875 4.74891 31.875 5.3125V28.6875Z" fill="#FF914C" />
                      <path d="M10.625 8.5H23.375C23.6568 8.5 23.927 8.38806 24.1263 8.1888C24.3256 7.98954 24.4375 7.71929 24.4375 7.4375C24.4375 7.15571 24.3256 6.88546 24.1263 6.6862C23.927 6.48694 23.6568 6.375 23.375 6.375H10.625C10.3432 6.375 10.073 6.48694 9.8737 6.6862C9.67444 6.88546 9.5625 7.15571 9.5625 7.4375C9.5625 7.71929 9.67444 7.98954 9.8737 8.1888C10.073 8.38806 10.3432 8.5 10.625 8.5Z" fill="#FF914C" />
                      <path d="M6.375 8.5C6.9618 8.5 7.4375 8.0243 7.4375 7.4375C7.4375 6.8507 6.9618 6.375 6.375 6.375C5.7882 6.375 5.3125 6.8507 5.3125 7.4375C5.3125 8.0243 5.7882 8.5 6.375 8.5Z" fill="#FF914C" />
                      <path d="M27.625 8.5C28.2118 8.5 28.6875 8.0243 28.6875 7.4375C28.6875 6.8507 28.2118 6.375 27.625 6.375C27.0382 6.375 26.5625 6.8507 26.5625 7.4375C26.5625 8.0243 27.0382 8.5 27.625 8.5Z" fill="#FF914C" />
                      <path d="M23.375 15.1406C22.6238 15.1388 21.8961 15.4029 21.3211 15.8863C20.7461 16.3697 20.3607 17.0411 20.2334 17.7814C20.1061 18.5218 20.2451 19.2833 20.6256 19.931C21.0062 20.5787 21.6038 21.0708 22.3125 21.3199V21.5156C22.3125 22.6428 21.8647 23.7238 21.0677 24.5208C20.2707 25.3179 19.1897 25.7656 18.0625 25.7656C16.9353 25.7656 15.8543 25.3179 15.0573 24.5208C14.2603 23.7238 13.8125 22.6428 13.8125 21.5156V21.4094C15.0118 21.1631 16.0895 20.5108 16.8637 19.5623C17.6379 18.6139 18.0614 17.4274 18.0625 16.2031V11.9531C18.0625 11.6713 17.9506 11.4011 17.7513 11.2018C17.552 11.0026 17.2818 10.8906 17 10.8906H14.875C14.5932 10.8906 14.323 11.0026 14.1237 11.2018C13.9244 11.4011 13.8125 11.6713 13.8125 11.9531C13.8125 12.2349 13.9244 12.5052 14.1237 12.7044C14.323 12.9037 14.5932 13.0156 14.875 13.0156H15.9375V16.2031C15.9375 17.0485 15.6017 17.8593 15.0039 18.457C14.4061 19.0548 13.5954 19.3906 12.75 19.3906C11.9046 19.3906 11.0939 19.0548 10.4961 18.457C9.89832 17.8593 9.5625 17.0485 9.5625 16.2031V13.0156H10.625C10.9068 13.0156 11.177 12.9037 11.3763 12.7044C11.5756 12.5052 11.6875 12.2349 11.6875 11.9531C11.6875 11.6713 11.5756 11.4011 11.3763 11.2018C11.177 11.0026 10.9068 10.8906 10.625 10.8906H8.5C8.21821 10.8906 7.94796 11.0026 7.7487 11.2018C7.54944 11.4011 7.4375 11.6713 7.4375 11.9531V16.2031C7.43865 17.4274 7.86205 18.6139 8.63629 19.5623C9.41052 20.5108 10.4882 21.1631 11.6875 21.4094V21.5156C11.6875 23.2064 12.3591 24.8279 13.5547 26.0234C14.7502 27.219 16.3717 27.8906 18.0625 27.8906C19.7533 27.8906 21.3748 27.219 22.5703 26.0234C23.7659 24.8279 24.4375 23.2064 24.4375 21.5156V21.3199C25.1462 21.0708 25.7438 20.5787 26.1244 19.931C26.5049 19.2833 26.6439 18.5218 26.5166 17.7814C26.3893 17.0411 26.0039 16.3697 25.4289 15.8863C24.8539 15.4029 24.1262 15.1388 23.375 15.1406ZM23.375 19.3906C23.1649 19.3906 22.9594 19.3283 22.7847 19.2116C22.61 19.0948 22.4738 18.9289 22.3934 18.7347C22.313 18.5406 22.2919 18.3269 22.3329 18.1208C22.3739 17.9147 22.4751 17.7254 22.6237 17.5768C22.7723 17.4282 22.9616 17.327 23.1677 17.286C23.3738 17.245 23.5875 17.2661 23.7816 17.3465C23.9757 17.4269 24.1417 17.5631 24.2584 17.7378C24.3752 17.9126 24.4375 18.118 24.4375 18.3281C24.4369 18.6097 24.3248 18.8797 24.1257 19.0788C23.9265 19.2779 23.6566 19.3901 23.375 19.3906Z" fill="#FF914C" />
                    </g>
                    <defs>
                      <clipPath id="clip0_77_1902">
                        <rect width="34" height="34" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>

                </p>
                <p className='heading-14 pt-2'><b>Sick Leave</b></p>
                <p className='heading-12 pt-2 pb-2' >Available - <span>0</span></p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mt-2 pe-0">
              <div className="conatiner-1 px-0">
                <p>
                  <svg className='mt-2' width="26" height="29" viewBox="0 0 29 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M25.7778 3.2H22.5556V0H19.3333V3.2H9.66667V0H6.44444V3.2H3.22222C1.44517 3.2 0 4.6352 0 6.4V28.8C0 30.5648 1.44517 32 3.22222 32H25.7778C27.5548 32 29 30.5648 29 28.8V6.4C29 4.6352 27.5548 3.2 25.7778 3.2ZM25.781 28.8H3.22222V9.6H25.7778L25.781 28.8Z" fill="#FF914C" />
                  </svg>


                </p>
                <p className='heading-14 pt-2'><b>Leave Without Pay</b></p>
                <p className='heading-12 pt-2 pb-2' >Available - <span>0</span></p>
              </div>
            </div>
            <div className="col-lg-2 col-md-3 col-sm-6 mt-2 pe-0">
              <div className="conatiner-1 px-0">
                <p>
                  <svg width="28" height="28" className='mt-2' viewBox="0 0 33 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16.7207 31.2582C16.9478 30.5353 17.1714 29.825 17.4152 29.0497C21.5624 29.0497 25.8193 29.0497 30.102 29.0497C30.102 22.3348 30.102 15.657 30.102 8.95746C21.1955 8.95746 12.2898 8.95746 3.35753 8.95746C3.35753 10.2417 3.35753 11.5162 3.35753 12.8172C2.60846 12.8172 1.88384 12.8172 1.1145 12.8172C1.1145 12.697 1.1145 12.5732 1.1145 12.4502C1.1145 9.4734 1.1145 6.49662 1.1152 3.52053C1.1152 2.66553 1.54494 2.23838 2.40372 2.23838C3.63354 2.23768 4.86336 2.23838 6.13651 2.23838C6.13651 2.5369 6.13651 2.81164 6.13651 3.08639C6.13651 3.73726 6.12743 4.38882 6.1393 5.03969C6.15118 5.6528 6.61307 6.13169 7.22099 6.13938C8.35997 6.15336 9.49895 6.15546 10.6379 6.13938C11.257 6.13029 11.7077 5.63882 11.7133 4.99774C11.721 4.0931 11.7154 3.18776 11.7154 2.26005C15.0667 2.26005 18.3942 2.26005 21.7587 2.26005C21.7587 3.10247 21.7587 3.9365 21.7587 4.76983C21.7587 5.74298 22.1598 6.14497 23.1318 6.14497C24.0731 6.14497 25.0143 6.14497 25.9562 6.14497C26.9373 6.14497 27.337 5.74858 27.3384 4.77822C27.3391 3.96447 27.3419 3.15071 27.3447 2.33695C27.3447 2.31668 27.36 2.2957 27.3775 2.25026C27.4572 2.24677 27.5466 2.23838 27.636 2.23838C28.81 2.23768 29.9839 2.23488 31.1571 2.23908C31.8929 2.24187 32.3583 2.70188 32.3583 3.43524C32.3597 12.3069 32.3597 21.1785 32.3583 30.0501C32.3583 30.7807 31.909 31.261 31.2081 31.2617C26.3964 31.2659 21.5855 31.2638 16.7738 31.2638C16.7388 31.2631 16.7046 31.2561 16.7207 31.2582Z" fill="#FF914C" />
                    <path d="M2.35763 16.7504C1.96073 16.7504 1.56733 16.7546 1.17323 16.7497C0.496823 16.7414 -0.00139459 16.2632 2.93275e-06 15.6305C0.00209922 14.9943 0.496125 14.5245 1.17882 14.5189C1.8643 14.514 2.54979 14.514 3.23527 14.5182C3.94731 14.5224 4.36447 14.8894 4.4644 15.5864C4.65236 16.8952 4.84033 18.2032 5.03249 19.5378C8.82398 19.5378 12.5966 19.5378 16.4188 19.5378C16.2868 20.2075 16.1631 20.8402 16.0373 21.4729C15.9241 22.042 15.8123 22.6117 15.6928 23.1801C15.5153 24.0232 14.8725 24.5622 14.0137 24.5636C11.0041 24.5685 7.99455 24.5685 4.98498 24.5636C4.07589 24.5622 3.40368 23.9512 3.2765 23.0473C2.9949 21.0464 2.7098 19.0456 2.42401 17.0455C2.41213 16.9546 2.38418 16.8658 2.35763 16.7504Z" fill="#FF914C" />
                    <path d="M10.0544 17.8476C10.0495 17.7784 10.0418 17.7232 10.0425 17.668C10.0453 15.7385 10.0467 13.8089 10.0551 11.8794C10.0572 11.3705 10.3018 11.1684 10.8049 11.2118C11.8935 11.3047 12.9354 11.562 13.8815 12.1248C15.4845 13.0784 16.2909 14.5549 16.5948 16.3446C16.6773 16.8326 16.7073 17.3296 16.7646 17.8476C14.5062 17.8476 12.303 17.8476 10.0544 17.8476Z" fill="#FF914C" />
                    <path d="M15.6201 29.0339C15.6187 30.2685 14.6132 31.2675 13.3778 31.2626C12.1466 31.2577 11.1515 30.2475 11.1592 29.0101C11.1662 27.7958 12.1689 26.7995 13.3841 26.7988C14.6202 26.7981 15.6215 27.7985 15.6201 29.0339Z" fill="#FF914C" />
                    <path d="M5.57976 31.2631C4.34574 31.2624 3.34442 30.2578 3.34791 29.0239C3.3507 27.79 4.35832 26.7924 5.59443 26.7994C6.81238 26.8063 7.80392 27.8005 7.80951 29.0204C7.8151 30.2536 6.81168 31.2638 5.57976 31.2631Z" fill="#FF914C" />
                    <path d="M10.0418 2.26161C10.0418 2.77336 10.0453 3.2851 10.0411 3.79614C10.0369 4.26944 9.8364 4.46449 9.35496 4.46938C9.05309 4.47218 8.75053 4.47497 8.44866 4.46868C8.0308 4.46029 7.81558 4.25965 7.81349 3.85207C7.8072 2.77056 7.8065 1.68974 7.81418 0.608231C7.81698 0.220229 8.0336 0.0153912 8.4277 0.00630282C8.7645 -0.00138732 9.102 -0.00278553 9.43881 0.00630282C9.82662 0.0167894 10.0349 0.227919 10.0404 0.621514C10.0474 1.16891 10.0418 1.71491 10.0418 2.26161Z" fill="#FF914C" />
                    <path d="M23.4324 2.20302C23.4324 1.69128 23.4289 1.17953 23.4338 0.668489C23.438 0.212673 23.6392 0.0127293 24.0948 0.00643741C24.4204 0.00224279 24.7461 -0.00195192 25.071 0.00853464C25.4427 0.0204194 25.6579 0.227354 25.6607 0.598578C25.6691 1.69128 25.6691 2.78468 25.6607 3.87738C25.6579 4.2479 25.4413 4.45693 25.0717 4.46812C24.7349 4.47861 24.3974 4.47651 24.0606 4.46952C23.6483 4.46043 23.4401 4.25419 23.4345 3.84242C23.4268 3.29572 23.4324 2.74972 23.4324 2.20302Z" fill="#FF914C" />
                    <path d="M20.6499 13.4017C20.9867 13.4017 21.3242 13.3975 21.661 13.4024C22.0991 13.4086 22.3059 13.6086 22.3143 14.0371C22.3206 14.3622 22.322 14.6887 22.3136 15.0138C22.3038 15.4095 22.1012 15.6262 21.7141 15.6311C20.9936 15.6402 20.2732 15.6409 19.5528 15.6304C19.1852 15.6248 18.9805 15.4067 18.9707 15.0327C18.9616 14.6838 18.9602 14.335 18.9707 13.9861C18.9826 13.6191 19.195 13.4128 19.5682 13.4031C19.9294 13.3947 20.29 13.4017 20.6499 13.4017Z" fill="#FF914C" />
                    <path d="M26.2217 15.6335C25.8611 15.6335 25.5012 15.6419 25.1407 15.6314C24.7689 15.6209 24.5614 15.4126 24.5509 15.0414C24.5404 14.6932 24.5404 14.3437 24.5502 13.9948C24.5607 13.625 24.7703 13.4097 25.14 13.4048C25.8604 13.3957 26.5808 13.3957 27.3012 13.4048C27.6723 13.4097 27.8805 13.6229 27.8917 13.9941C27.9022 14.3423 27.9022 14.6918 27.8917 15.0407C27.8805 15.4119 27.6723 15.6209 27.3019 15.6314C26.9421 15.6419 26.5815 15.6335 26.2217 15.6335Z" fill="#FF914C" />
                    <path d="M20.6212 20.0998C20.2725 20.0998 19.9239 20.1075 19.5752 20.0977C19.186 20.0872 18.9791 19.8775 18.9701 19.4853C18.9624 19.1483 18.9617 18.8107 18.9707 18.4737C18.9805 18.0836 19.1888 17.8732 19.5822 17.869C20.2907 17.8613 21 17.8613 21.7085 17.8697C22.0984 17.8746 22.3045 18.0871 22.3136 18.4807C22.322 18.8176 22.3227 19.1553 22.3136 19.4923C22.3031 19.8817 22.0942 20.0886 21.7022 20.0977C21.3417 20.1061 20.9818 20.0991 20.6212 20.0998Z" fill="#FF914C" />
                    <path d="M26.2288 17.8675C26.5656 17.8675 26.9031 17.8633 27.2399 17.8682C27.6781 17.8745 27.8849 18.0744 27.894 18.5023C27.9003 18.8273 27.901 19.1538 27.8933 19.4789C27.8842 19.8739 27.6802 20.0913 27.2938 20.0962C26.5733 20.1053 25.8529 20.106 25.1325 20.0955C24.7656 20.0899 24.5595 19.8704 24.5497 19.4978C24.5406 19.1489 24.5399 18.8001 24.5504 18.4512C24.5616 18.0835 24.7733 17.878 25.1479 17.8689C25.5084 17.8605 25.869 17.8675 26.2288 17.8675Z" fill="#FF914C" />
                    <path d="M20.6192 24.5653C20.2823 24.5653 19.9448 24.5702 19.608 24.5646C19.1916 24.5576 18.9799 24.3548 18.9701 23.9494C18.9617 23.6124 18.9617 23.2747 18.9708 22.9378C18.9813 22.5491 19.1902 22.3393 19.5836 22.3351C20.2921 22.3274 21.0014 22.3267 21.7099 22.3351C22.097 22.34 22.3039 22.5547 22.3137 22.9482C22.322 23.2852 22.322 23.6229 22.313 23.9599C22.3025 24.3486 22.0921 24.5548 21.6994 24.5632C21.3403 24.5716 20.9797 24.5653 20.6192 24.5653Z" fill="#FF914C" />
                  </svg>


                </p>
                <p className='heading-14 pt-2'><b>Maternity Leave</b></p>
                <p className='heading-12 pt-2 pb-2' >Available - <span>0</span></p>
              </div>
            </div>

          </div>
        </div>

        {/* ################## Off Canvas Area ####################  */}

        {/* ##### offcanvas added start ########  */}

        <div className="offcanvas-end offcanvas" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop101" aria-labelledby="staticBackdropLabel">
          {
            show && (
              <>
                <div className="offcanvas-header">
                  <Link data-bs-dismiss="offcanvas" >
                    <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.06 0.295798C8.15373 0.388761 8.22812 0.499362 8.27889 0.621222C8.32966 0.743081 8.3558 0.873786 8.3558 1.0058C8.3558 1.13781 8.32966 1.26852 8.27889 1.39038C8.22812 1.51223 8.15373 1.62284 8.06 1.7158L3.46 6.3158H27C27.2652 6.3158 27.5196 6.42115 27.7071 6.60869C27.8946 6.79623 28 7.05058 28 7.3158C28 7.58102 27.8946 7.83537 27.7071 8.0229C27.5196 8.21044 27.2652 8.3158 27 8.3158H3.48L8.06 12.8858C8.24625 13.0732 8.35079 13.3266 8.35079 13.5908C8.35079 13.855 8.24625 14.1084 8.06 14.2958C7.87264 14.482 7.61918 14.5866 7.355 14.5866C7.09081 14.5866 6.83736 14.482 6.65 14.2958L0.289999 7.9358C0.204397 7.85367 0.136286 7.75508 0.089756 7.64596C0.0432262 7.53683 0.0192413 7.41943 0.0192413 7.3008C0.0192413 7.18217 0.0432262 7.06476 0.089756 6.95564C0.136286 6.84652 0.204397 6.74793 0.289999 6.6658L6.64 0.295798C6.73296 0.20207 6.84356 0.127676 6.96542 0.0769072C7.08728 0.0261385 7.21799 0 7.35 0C7.48201 0 7.61272 0.0261385 7.73458 0.0769072C7.85643 0.127676 7.96704 0.20207 8.06 0.295798Z" fill="#008479" />
                    </svg>
                  </Link>
                  <h5 className="offcanvas-title heading-16" id="offcanvasRightLabel">Leave Apply </h5>
                </div>
                <hr className='mx-3' style={{ marginTop: '-3px' }} />

                <div class="offcanvas-body">
                  <div className="input " >

                    <div className="mb-3" style={{ marginTop: '-6px' }}>
                      <label for="exampleFormControlInput1" className="form-label  heading-14">Leave Apply</label>
                      <input type="date" className="form-control form-focus label-color  heading-14" onChange={(e) => setLeaveApply(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="Select Leave Type" />
                    </div>
                    <div class="mb-3">
                      <label for="exampleFormControlInput1" class="form-label mb-1 label-text-color focus heading-14">Leave Type</label>
                      <select class="form-select  form-select-sm form-focus label-color" onChange={(e) => setLeaveType(e.target.value)} aria-label="Default select example">
                        <option value="" >All Class</option>
                        {
                          LeaveData.map(item =>
                            <option value={item.leaveType}>{item.leaveType}</option>
                          )
                        }
                      </select>
                    </div>
                    <div className="mb-3" style={{ marginTop: '-6px' }}>
                      <label for="exampleFormControlInput1" className="form-label  heading-14">From Date </label>
                      <input type="date" className="form-control form-focus label-color  heading-14" onChange={(e) => setfromDate(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="Select Leave Type" />
                    </div>
                    <div className="mb-3" style={{ marginTop: '-6px' }}>
                      <label for="exampleFormControlInput1" className="form-label  heading-14">To Date</label>
                      <input type="date" className="form-control form-focus label-color  heading-14" onChange={(e) => setToDate(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="Select Leave Type" />
                    </div>

                    <div className="mb-3" style={{ marginTop: '-6px' }}>
                      <label for="exampleFormControlInput1" className="form-label  heading-14">Reason</label>
                      <textarea class="form-control" placeholder="" id="floatingTextarea2" onChange={(e) => setReason(e.target.value)} style={{ height: "70px" }}></textarea>
                    </div>

                    <div className="mb-3" style={{ marginTop: '-6px' }}>
                      <label for="exampleFormControlInput1" className="form-label  heading-14">Documents</label>
                      <input type="file" className="form-control form-focus label-color  heading-14" onChange={(e) => setLeaveType(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="Select Leave Type" />
                    </div>

                    <div className='my-button11 '>
                      <button type="button" className="btn btn-outline-success my-button112233" onClick={MyTeacherLeaveApplyPostApi}>Submit</button>
                      <button type="button" className="btn btn-outline-success">Cancel</button>
                      {/* <Toaster /> */}
                    </div>
                  </div>
                </div>
              </>
            )
          }
          {
            hide && (
              <>
                <div className="offcanvas-header d-block for-my-display">
                  <div className="offcanvas-header p-0 ">
                    <Link data-bs-dismiss="offcanvas" className='ps-3'><img src="./images/Vector (13).svg" alt="" /></Link>
                    <h5 className="offcanvas-title pe-3 heading-16" id="offcanvasRightLabel" >Successfull Message</h5>
                  </div>
                  <hr className='' />
                  <div className="delete-section mt-5">
                    <div className="bg-container">
                      <div className="img-container22">
                        <svg className='pt-1 mt-2' width="38" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2266 26.4378L35.68 2" stroke="white" stroke-width="5" stroke-miterlimit="10" />
                          <path d="M14.3912 26.5944L2 14.2032" stroke="white" stroke-width="5" stroke-miterlimit="10" />
                        </svg>
                        {/* <img src="./images/XMLID_1_.png" alt="" /> */}
                      </div>
                      <div className="content mt-5">
                        <p className='heading-20'>Successful Update</p>
                        <hr style={{ width: '' }} />
                        <p className='mb-5' style={{ color: '#ADADBD', fontSize: '14px' }}>Your profile has been <br /> Successfully Updated</p>
                      </div>
                      <div className='button-position'  >
                        <button type="button" className="btn btn-outline-primary button112233 mt-4 mb my-button112233 " data-bs-dismiss="offcanvas" aria-label="Close" style={{ fontSize: '14px' }}>Continue</button>

                      </div>

                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>

        <div className="offcanvas-end offcanvas" data-bs-backdrop="static" tabindex="-1" id="staticBackdrop202" aria-labelledby="staticBackdropLabel">
          {
            show22 && (
              <>
                <div className="offcanvas-header">
                  <Link data-bs-dismiss="offcanvas" >
                    <svg width="28" height="15" viewBox="0 0 28 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8.06 0.295798C8.15373 0.388761 8.22812 0.499362 8.27889 0.621222C8.32966 0.743081 8.3558 0.873786 8.3558 1.0058C8.3558 1.13781 8.32966 1.26852 8.27889 1.39038C8.22812 1.51223 8.15373 1.62284 8.06 1.7158L3.46 6.3158H27C27.2652 6.3158 27.5196 6.42115 27.7071 6.60869C27.8946 6.79623 28 7.05058 28 7.3158C28 7.58102 27.8946 7.83537 27.7071 8.0229C27.5196 8.21044 27.2652 8.3158 27 8.3158H3.48L8.06 12.8858C8.24625 13.0732 8.35079 13.3266 8.35079 13.5908C8.35079 13.855 8.24625 14.1084 8.06 14.2958C7.87264 14.482 7.61918 14.5866 7.355 14.5866C7.09081 14.5866 6.83736 14.482 6.65 14.2958L0.289999 7.9358C0.204397 7.85367 0.136286 7.75508 0.089756 7.64596C0.0432262 7.53683 0.0192413 7.41943 0.0192413 7.3008C0.0192413 7.18217 0.0432262 7.06476 0.089756 6.95564C0.136286 6.84652 0.204397 6.74793 0.289999 6.6658L6.64 0.295798C6.73296 0.20207 6.84356 0.127676 6.96542 0.0769072C7.08728 0.0261385 7.21799 0 7.35 0C7.48201 0 7.61272 0.0261385 7.73458 0.0769072C7.85643 0.127676 7.96704 0.20207 8.06 0.295798Z" fill="#008479" />
                    </svg>
                  </Link>
                  <h5 className="offcanvas-title heading-16" id="offcanvasRightLabel"> Edit Create Leave Type</h5>
                </div>
                <hr className='mx-3' style={{ marginTop: '-3px' }} />

                <div class="offcanvas-body">
                  <div className="input " >

                    <div className="mb-3" style={{ marginTop: '-6px' }}>
                      <label for="exampleFormControlInput1" className="form-label  heading-14">Leave Type</label>
                      <input type="email" className="form-control form-focus label-color  heading-14" value={leaveType} onChange={(e) => setLeaveType(e.target.value)} style={{ marginTop: '-4px' }} id="exampleFormControlInput1" placeholder="Select Leave Type" />
                      {/* {errors.putemail && <span style={{ color: 'red' }}>{errors.putemail}</span>} */}
                    </div>
                    <div className='my-button11 '>
                      <button type="button" className="btn btn-outline-success my-button112233" onClick={(e) => MyLeavePutApi(IdForUpdate)}>Update</button>
                      <button type="button" className="btn btn-outline-success">Cancel</button>
                      {/* <Toaster /> */}
                    </div>
                  </div>
                </div>
              </>
            )
          }
          {
            hide22 && (
              <>
                <div className="offcanvas-header d-block for-my-display">
                  <div className="offcanvas-header p-0 ">
                    <Link data-bs-dismiss="offcanvas" className='ps-3'><img src="./images/Vector (13).svg" alt="" /></Link>
                    <h5 className="offcanvas-title pe-3 heading-16" id="offcanvasRightLabel" >Successfull Message</h5>
                  </div>
                  <hr className='' />
                  <div className="delete-section mt-5">
                    <div className="bg-container">
                      <div className="img-container22">
                        <svg className='pt-1 mt-2' width="38" height="29" viewBox="0 0 38 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11.2266 26.4378L35.68 2" stroke="white" stroke-width="5" stroke-miterlimit="10" />
                          <path d="M14.3912 26.5944L2 14.2032" stroke="white" stroke-width="5" stroke-miterlimit="10" />
                        </svg>
                        {/* <img src="./images/XMLID_1_.png" alt="" /> */}
                      </div>
                      <div className="content mt-5">
                        <p className='heading-20'>Successful Update</p>
                        <hr style={{ width: '' }} />
                        <p className='mb-5' style={{ color: '#ADADBD', fontSize: '14px' }}>Your profile has been <br /> Successfully Updated</p>
                      </div>
                      <div className='button-position'  >
                        <button type="button" className="btn btn-outline-primary button112233 mt-4 mb my-button112233 " data-bs-dismiss="offcanvas" aria-label="Close" style={{ fontSize: '14px' }}>Continue</button>

                      </div>

                    </div>
                  </div>
                </div>
              </>
            )
          }
        </div>

        {/* ################ offcanvas delete start #############  */}

        <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasRight22" aria-labelledby="offcanvasRightLabel">

          {
            showdelete && (
              <div className="container-fluid">
                <div className="offcanvas-header p-0 pt-3">
                  <Link data-bs-dismiss="offcanvas" className='ps-3'><img src="./images/Vector (13).svg" alt="" /></Link>
                  <h5 className="offcanvas-title pe-3 heading-16" id="offcanvasRightLabel" >Delete Section</h5>
                </div>
                <hr className='' />

                <div className="offcanvas-body">

                  <div className="sure-main-container mt-4">
                    <div className="sure-container">
                      <div>
                        <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M29.5312 0.46875C13.2656 0.46875 0 13.7344 0 30C0 46.2656 13.2656 59.5312 29.5312 59.5312C45.7969 59.5312 59.0625 46.2656 59.0625 30C59.0625 13.7344 45.7969 0.46875 29.5312 0.46875ZM29.5312 55.7812C15.3281 55.7812 3.75 44.2031 3.75 30C3.75 15.7969 15.3281 4.21875 29.5312 4.21875C43.7344 4.21875 55.3125 15.7969 55.3125 30C55.3125 44.2031 43.7344 55.7812 29.5312 55.7812Z" fill="#B50000" />
                          <path d="M31.4062 25.5469H27.6562V44.2969H31.4062V25.5469Z" fill="#B50000" />
                          <path d="M31.4062 16.6406H27.6562V20.3906H31.4062V16.6406Z" fill="#B50000" />
                        </svg>
                      </div>

                      <div className="sure-content mt-2">
                        <h5 className='heading-20'>Are you sure?</h5>
                        <p>This Action will be permanently <br /> delete the Profile Data</p>
                      </div>
                      <div className="form-check mt-1">
                        <input className="form-check-input my-form-check-input" onClick={() => setForDelete(true)} type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label agree" for="flexCheckDefault">
                          I Agree to delete the Profile Data
                        </label>
                      </div>

                      <div className="mt-4">
                        <button type="button" className="btn my-btn button00" disabled={forDelete ? false : true} onClick={handleForDelete} >Delete</button>
                        <button type="button" className="btn cancel-btn  ms-2">Cancel</button>
                      </div>

                    </div>
                  </div>
                </div>
              </div>

            )
          }
          {/* ############## After click ##############  */}

          {
            hidedelete && (
              <div className="container-fluid">
                <div className="offcanvas-header p-0 pt-3">
                  <Link data-bs-dismiss="offcanvas" className='ps-3'><img src="./images/Vector (13).svg" alt="" /></Link>
                  <h5 className="offcanvas-title pe-3 heading-16" id="offcanvasRightLabel" >Successfull Message</h5>
                </div>
                <hr className='' />
                <div className="delete-section mt-5">
                  <div className="bg-container">
                    <div className="img-container22">
                      <img src="./images/XMLID_1_.png" alt="" />
                    </div>
                    <div className="content mt-5">
                      <p >Successful Delete</p>
                      <hr style={{ width: '' }} />
                      <p className='mb-5' style={{ color: '#ADADBD', fontSize: '14px' }}>Your profile has been <br /> Successfully Delete</p>
                    </div>
                    <div className='button-position'>
                      <button type="button" className="btn btn-outline-primary button11 mt-4 mb" data-bs-dismiss="offcanvas" aria-label="Close" style={{ fontSize: '14px' }}>Continue</button>

                    </div>

                  </div>
                </div>
              </div>

            )
          }
        </div>
        {/* ################ offcanvas delete end #############  */}



      </div>
    </Container>
  )
}

export default Leave
