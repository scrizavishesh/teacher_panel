import React, { useState } from 'react'
import styled from 'styled-components'
import Main from '../Main/Main';
import { Link, NavLink } from 'react-router-dom';
import Logout from '../Modals/Logout';

const Container = styled.div`
    display: flex;
    position: relative;

    .modalHighborder{
        border-bottom: 2px solid var(--modalBorderColor);
    }
    /* .my-anchor- span{
        color: #000 !important;
    } */
    
`;

const TextOverlap = styled.div`
    position: absolute;
    z-index: 1;
    width: ${(props) => (props.sidebaropen ? '208px' : '3.85%')};
    height: 100vh;
    transition: width 0.3s ease;
    
    .sidebarLogoimg{
        display: flex;
        align-items: center;
    }

    .sidebaroptiontext{
        display: ${(props) => (props.sidebaropen ? 'block' : 'none')};
    }

    .sidebarlinks{
        position: relative;
    }
    
    .sidebarlinks:hover{
        background-color: var(--greenColorBtn);
        border-right: 4px solid var(--activeOrangeBorder);
    }
    
    .sidebarlinks:hover::before{
        content: "";
        display: block;
        width: 0; 
        height: 0; 
        border-top: 9px solid transparent;
        border-bottom: 9px solid transparent;
        border-right: 9px solid var(--activeOrangeBorder);
        position: absolute;
        top: 32%;
        right: -1%;
    }
    
    .actionOptionsCollapsed:hover{
        border-right: none !important;
    }
    
    .actionOptionsCollapsed::before:hover{
        right: -15% !important;
    }
    
    .sidebarlinks:hover .sidebaroptiontext{
        position: absolute;
        display: block;
        z-index: 1;
        width: 140px;
        margin-top: -21%;
        margin-left: 68% !important;
        overflow: visible;
        padding: 12px;
        background-color: var(--greenColorBtn);
        border-right: 4px solid var(--activeOrangeBorder);
        transition: margin-left 0.3s ease;
        color: #fff !important;
        height: 99.9%;
    }
    
    .actionOptionsCollapsed:hover .sidebaroptiontext{
        margin-top: -21.5%;
    }

    .sidebaroptiontext::before{
        content: "";
        display: block;
        width: 0; 
        height: 0; 
        border-top: 8px solid transparent;
        border-bottom: 8px solid transparent;
        border-right: 8px solid var(--activeOrangeBorder);
        position: absolute;
        top: 32%;
        right: -1%;
    }

    .sidebar-closed .sidebaroptiontext {
        margin-left: 0 !important;
    }
    .my-dropdown-border11{
        border-bottom: 1px solid grey;
    }
.my-anchor-tag a{
    text-decoration: none;
    list-style: none !important;
    color: #000;
}
.my-anchor-tag li{
    list-style: none;
}
.active{
    color: #008479 !important;
}

    @media screen and (max-width: 830px) and (min-width: 1px) {
        width: 0px !important;
        transform: translate(-100%);
        .sidebarContentDiv{
            width: 0px !important;
            transform: translate(-100%);
        }


        .actionOptionsCollapsed {
            border-right: none;
        }
    }

`;

const Sidebar = styled.div`
    width: ${(props) => (props.sidebaropen ? '240px' : '4%')};
    height: 100vh;
    transition: width 0.3s ease;
    overflow: hidden scroll;
    position: relative;

    .sidebarMainDiv{
        background-color: #F0F8F7;
        width: ${(props) => (props.sidebaropen ? '100%' : '100%')};
        height: 100vh;
        transition: width 0.3s ease;
    }



    @media screen and (max-width: 830px) and (min-width: 10px) {
        transform: translate(-100%);
        width: 0px !important;
        /* .sidebarMainDiv{
            transform: translate(-100%);
        } */
    }

`;



const MainContainer = styled.div`
    width: ${(props) => (props.sidebaropen ? '100%' : '100%')};
    height: 100vh;
    background-color: #F2F3F6;
    transition: width 0.3s ease;
    /* overflow: scroll; */

    @media screen and (max-width: 830px) and (min-width: 10px) {
        width: 100vw;
    }

`;

const Header = styled.div`
    border-bottom: 1px solid var(--lightGreenBorderColor);

    .dropdown-toggle::after {
        margin-top: 0.6em;
    }

    .btn, .btn:focus {
        border: none;
    }
    .bell{
    padding-top: 16px;
}
.count p{
    position: absolute;
    background-color: var(--activeOrangeBorder);
    padding: 1px 7px 1px 7px;
    color: #fff;
    border-radius: 50%;
    right: 271px;
    top: 24px;
}
.search-icon{
    display: none;
}
.my-form-focus:focus{
    border: 1px solid #DDDDEB; 
    box-shadow:none;
}
.li-line-adjust svg{
    margin-top: 20px;
   padding-right: 20px !important;
}

@media only screen and (max-width: 665px) {
    .default-search-bar{
        display: none;
    }
    .search-icon{
        display: block;
    }
}
@media only screen and (max-width: 415px) {
   .user-content-img img{
    width: 25px;
   }
   .user-content-img{
    margin-top: 8px;
   }
   .user-content-img h3{
    font-size: 12px !important;
   }
   .count p{
    position: absolute;
    background-color: var(--activeOrangeBorder);
    padding: 1px 7px 1px 7px;
    color: #fff;
    border-radius: 50%;
    right: 215px;
    top: 24px;
}
.bell{
    padding-top: 12px;
    padding-right: 0 !important;
}
}
@media only screen and (max-width: 320px) {
    .count p{
    position: absolute;
    background-color: var(--activeOrangeBorder);
    padding: 1px 7px 1px 7px;
    color: #fff;
    border-radius: 50%;
    right: 175px;
    top: 24px;
}
}
`;
const MainContentDiv = styled.div`
    height: 90vh;
    overflow: scroll;
`;

const MainLayout2 = () => {

    const [tabclick, setTabclick] = useState(true)

    const [sidebaropen, setSidebarOpen] = useState(true);
    const [activeLink, setActiveLink] = useState('dashboard');
    // const [dropdownopen, setDropDownOpen] = useState(false);



    const ClickedDropdown = () => {
        setTabclick(!tabclick)

    }

    const toggleSidebar = () => {
        setSidebarOpen(!sidebaropen);
    };

    const handleLinkClick = (linkName) => {
        setActiveLink(linkName);
        if (!(activeLink === 'systemSettings' || activeLink === 'webSetting' || activeLink === 'manageFaq' || activeLink === 'paymentSettings')) {
            setDropDownOpen(false);
        }
    };


    return (
        <>
            <Container>
                <TextOverlap sidebaropen={sidebaropen}>
                    <div className="sidebarContentDiv">
                        <ul className='p-0' >
                            <li className='nav-item p-3 sidebarLogoimg'>
                                {sidebaropen ? <img src="./images/Scrizalogo.svg" alt="" className='img-fluid scrizalogoImg' /> : <img src="/images/scrizalogooo.png" alt="" className='img-fluid scrizalogoImg' />}
                            </li>
                            <li className={`nav-item pt-2 pb-2 sidebarlinks sidebarlinkborder sidebartoplinkborder ${activeLink === 'dashboard' ? `${sidebaropen ? 'actionOptions' : 'actionOptionsCollapsed'}` : ''}`}>
                                <Link to='/' onClick={() => { handleLinkClick('dashboard'); }} className={`sidebbaroptions border-top  ${activeLink === 'dashboard' ? 'text-white' : 'text-black'} text-decoration-none`} >
                                    <span className='d-flex mb-0 p-1 ps-2'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="1.8rem" height="1.2rem" viewBox="0 0 20 20"><path fill={`${activeLink === 'dashboard' ? 'white' : 'black'}`} d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0m.667 1.359v1.035a.667.667 0 0 1-1.334 0V1.359A8.614 8.614 0 0 0 5.637 2.51l.522.584a.667.667 0 0 1-.995.888l-.63-.707a8.714 8.714 0 0 0-1.776 1.962l.843.506a.667.667 0 0 1-.686 1.143l-.803-.481a8.607 8.607 0 0 0-.709 2.491h.907a.667.667 0 1 1 0 1.334l-.973-.001v.031a8.627 8.627 0 0 0 .742 3.263l.836-.559a.667.667 0 0 1 .741 1.109l-.939.627A8.66 8.66 0 0 0 10 18.667a8.662 8.662 0 0 0 7.447-4.23l-1.132-.757a.667.667 0 0 1 .74-1.109l.989.661a8.633 8.633 0 0 0 .62-3.003H17.58a.667.667 0 0 1 0-1.333h1.017a8.608 8.608 0 0 0-.57-2.168l-.95.492a.667.667 0 1 1-.612-1.184l.965-.5a8.71 8.71 0 0 0-1.839-2.158l-.602.789a.667.667 0 1 1-1.06-.81l.58-.76a8.615 8.615 0 0 0-3.842-1.238m3.248 5.46a.667.667 0 0 1-.104.937l-2.04 1.631l.007.12c0 .692-.529 1.262-1.205 1.326l-.129.006a1.333 1.333 0 1 1 .558-2.544l1.976-1.58a.667.667 0 0 1 .937.104" /></svg>
                                        <h2 className={`ms-1 ${sidebaropen ? '' : 'sidebaroptiontext'} ${!sidebaropen ? 'sidebar-closed' : ''}`}>Dashboard</h2>
                                    </span>
                                </Link>
                            </li>
                            {/* #############  */}

                            {/* Users  */}
                            {/* <div className='sidebarlinkborder' style={{width:'99%'}}>
                           <div className="w-100 gap-1">
                            <div className=" p-2 d-flex " data-bs-toggle="collapse" href="#collapseExample11" role="button" aria-expanded="false" aria-controls="collapseExample11">
                                
                                <div className='flex-grow-1'>
                                  <span>
                                    <svg width="17" height="19" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M17.2985 12.1662C17.2125 12.0808 17.1104 12.0131 16.9982 11.9671C16.886 11.9211 16.7658 11.8976 16.6445 11.898C16.5232 11.8984 16.4032 11.9228 16.2913 11.9696C16.1794 12.0164 16.0778 12.0848 15.9924 12.1708C15.9069 12.2569 15.8392 12.359 15.7932 12.4712C15.7472 12.5834 15.7237 12.7036 15.7242 12.8249C15.7246 12.9462 15.7489 13.0662 15.7957 13.1781C15.8425 13.29 15.9109 13.3915 15.997 13.477C16.7781 14.2498 17.3981 15.1699 17.8211 16.1839C18.2442 17.198 18.4619 18.2859 18.4616 19.3847C18.4616 20.5108 15.2216 22.1539 10.1539 22.1539C5.08621 22.1539 1.84621 20.5108 1.84621 19.3847C1.84475 18.2932 2.0584 17.212 2.47495 16.2031C2.89151 15.1942 3.50281 14.2772 4.2739 13.5047C4.44583 13.3317 4.54233 13.0978 4.54233 12.8539C4.54233 12.61 4.44583 12.3761 4.2739 12.2031C4.10095 12.0312 3.867 11.9347 3.62313 11.9347C3.37927 11.9347 3.14531 12.0312 2.97236 12.2031C2.02631 13.1439 1.27643 14.2631 0.766202 15.4959C0.255978 16.7287 -0.00443734 18.0505 5.72011e-05 19.3847C5.72011e-05 22.3847 5.2339 24.0001 10.1539 24.0001C15.0739 24.0001 20.3077 22.3847 20.3077 19.3847C20.3113 18.0418 20.047 16.7118 19.5303 15.4723C19.0136 14.2329 18.2549 13.1089 17.2985 12.1662Z" fill="#241F20"/>
                                            <path d="M10.1539 12.9231C11.4318 12.9231 12.6811 12.5441 13.7437 11.8341C14.8063 11.1241 15.6345 10.115 16.1235 8.93426C16.6126 7.75357 16.7406 6.45437 16.4912 5.20096C16.2419 3.94754 15.6265 2.79621 14.7229 1.89254C13.8192 0.988881 12.6679 0.373479 11.4144 0.12416C10.161 -0.12516 8.86183 0.00279968 7.68114 0.491858C6.50044 0.980917 5.49129 1.80911 4.78129 2.8717C4.07128 3.9343 3.69232 5.18357 3.69232 6.46154C3.69232 8.17525 4.37309 9.81876 5.58486 11.0305C6.79664 12.2423 8.44015 12.9231 10.1539 12.9231ZM10.1539 1.84616C11.0667 1.84616 11.959 2.11684 12.718 2.62399C13.477 3.13113 14.0686 3.85196 14.4179 4.69531C14.7672 5.53866 14.8586 6.46666 14.6806 7.36196C14.5025 8.25725 14.0629 9.07964 13.4174 9.72511C12.772 10.3706 11.9496 10.8102 11.0543 10.9882C10.159 11.1663 9.23098 11.0749 8.38763 10.7256C7.54428 10.3763 6.82345 9.78471 6.31631 9.02571C5.80916 8.26671 5.53848 7.37438 5.53848 6.46154C5.53848 5.23746 6.02474 4.06352 6.89029 3.19797C7.75584 2.33242 8.92978 1.84616 10.1539 1.84616Z" fill="#241F20"/>
                                    </svg>
                                  </span> &nbsp; &nbsp;
                                    <span className='heading-16 '>Users</span>
                                </div>
                                <div className=' pe-2'>
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 -4.37114e-07L5 5L10 0L0 -4.37114e-07Z" fill="black"/>
                                    </svg>
                                </div>
                            </div>
                            </div>
                            <div className="collapse" onClick={(e)=> ClickedDropdown()} id={`${tabclick ? 'collapseExample11' : ''}`}>
                            <div className="card card-body my-card-body heading-16 pt-0">
                                 <ul className='ps-3 my-anchor-tag'>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/admin" ActiveClassName='active'>Admin</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/teacher" ActiveClassName='active'>Teacher</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/accountant"   ActiveClassName='active'>Accountant</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/librarian" ActiveClassName='active'>Librarian</NavLink></li>
                                    </div>
                                 
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/other_staff" ActiveClassName='active'>Other Staff</NavLink></li>
                                    </div>
                                   
                                 </ul>
                            </div>
                            </div>
                            </div> */}


                            {/* Examination  */}

                            <div className='sidebarlinkborder' style={{ width: '99%' }}>
                                <div className="w-100 gap-1">
                                    <div className=" p-2 d-flex " data-bs-toggle="collapse" href="#collapseExample22" role="button" aria-expanded="false" aria-controls="collapseExample22">

                                        <div className='flex-grow-1'>
                                            <span>
                                                <svg width="21" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 14.6483L25 7.82415L13 1L1 7.82415L13 14.6483ZM13 14.6483L21.2121 9.97827C21.9356 11.8458 22.3333 13.8818 22.3333 16.013C22.3333 16.9703 22.2531 17.9082 22.0992 18.8205C18.6191 19.1667 15.4653 20.6544 13 22.913C10.5347 20.6544 7.38095 19.1667 3.90083 18.8205C3.74689 17.9082 3.66667 16.9702 3.66667 16.013C3.66667 13.8818 4.06432 11.8458 4.78784 9.97813L13 14.6483ZM7.66667 22.8372V12.6011L13 9.56814" stroke="#241F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>

                                            </span> &nbsp; &nbsp;
                                            <span className='heading-16 '>Academic</span>
                                        </div>
                                        <div className=' pe-2'>
                                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 -4.37114e-07L5 5L10 0L0 -4.37114e-07Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse" id="collapseExample22">
                                    <div className="card card-body my-card-body heading-16 pt-0">
                                        <ul className='ps-3 my-anchor-tag'>
                                            <div className='d-flex li-line-adjust pb-2'>
                                                <div className='li-line-adjust'>
                                                    <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="6" y2="0.5" stroke="black" />
                                                    </svg>
                                                </div>
                                                <li className='ps-2'><NavLink to="/dailyattendance" ActiveClassName='active'>Daily Attendance</NavLink></li>
                                            </div>

                                            <div className='d-flex li-line-adjust pb-2'>
                                                <div className='li-line-adjust'>
                                                    <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="6" y2="0.5" stroke="black" />
                                                    </svg>
                                                </div>
                                                <li className='ps-2'><NavLink to="/classroutine" ActiveClassName='active'>Class Routine</NavLink></li>
                                            </div>

                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className='sidebarlinkborder' style={{ width: '99%' }}>
                                <div className="w-100 gap-1">
                                    <div className=" p-2 d-flex " data-bs-toggle="collapse" href="#collapseExample33" role="button" aria-expanded="false" aria-controls="collapseExample33">

                                        <div className='flex-grow-1'>
                                            <span>
                                                <svg width="21" height="21" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M13 14.6483L25 7.82415L13 1L1 7.82415L13 14.6483ZM13 14.6483L21.2121 9.97827C21.9356 11.8458 22.3333 13.8818 22.3333 16.013C22.3333 16.9703 22.2531 17.9082 22.0992 18.8205C18.6191 19.1667 15.4653 20.6544 13 22.913C10.5347 20.6544 7.38095 19.1667 3.90083 18.8205C3.74689 17.9082 3.66667 16.9702 3.66667 16.013C3.66667 13.8818 4.06432 11.8458 4.78784 9.97813L13 14.6483ZM7.66667 22.8372V12.6011L13 9.56814" stroke="#241F20" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                                </svg>
                                            </span> &nbsp; &nbsp;
                                            <span className='heading-16 '>Examination</span>
                                        </div>
                                        <div className=' pe-2'>
                                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 -4.37114e-07L5 5L10 0L0 -4.37114e-07Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse" id="collapseExample33">
                                    <div className="card card-body my-card-body heading-16 pt-0">
                                        <ul className='ps-3 my-anchor-tag'>
                                            <div className='d-flex li-line-adjust pb-2'>
                                                <div className='li-line-adjust'>
                                                    <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="6" y2="0.5" stroke="black" />
                                                    </svg>
                                                </div>
                                                <li className='ps-2'><NavLink to="/offlineexam" ActiveClassName='active'>Offline Exam</NavLink></li>
                                            </div>

                                            <div className='d-flex li-line-adjust pb-2'>
                                                <div className='li-line-adjust'>
                                                    <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="6" y2="0.5" stroke="black" />
                                                    </svg>
                                                </div>
                                                <li className='ps-2'><NavLink to="/marks" ActiveClassName='active'>Marks </NavLink></li>
                                            </div>

                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Accounting  */}
                            {/* <div className='sidebarlinkborder' style={{width:'99%'}}>
                           <div className="w-100 gap-1">
                            <div className=" p-2 d-flex " data-bs-toggle="collapse" href="#collapseExample2212" role="button" aria-expanded="false" aria-controls="collapseExample22">
                                
                                <div className='flex-grow-1'>
                                  <span>

                                  <svg width="18" height="20" viewBox="0 0 21 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M19.7143 24H0.857143C0.629814 24 0.411797 23.9097 0.251051 23.7489C0.090306 23.5882 0 23.3702 0 23.1429V0.857143C0 0.629814 0.090306 0.411797 0.251051 0.251051C0.411797 0.0903058 0.629814 0 0.857143 0H19.7143C19.9416 0 20.1596 0.0903058 20.3204 0.251051C20.4811 0.411797 20.5714 0.629814 20.5714 0.857143V23.1429C20.5714 23.3702 20.4811 23.5882 20.3204 23.7489C20.1596 23.9097 19.9416 24 19.7143 24ZM1.71429 22.2857H18.8571V1.71429H1.71429V22.2857Z" fill="black"/>
                                    <path d="M17.1434 10.2856H3.42916C3.20184 10.2856 2.98382 10.1953 2.82307 10.0345C2.66233 9.87378 2.57202 9.65576 2.57202 9.42843V3.42843C2.57202 3.2011 2.66233 2.98309 2.82307 2.82234C2.98382 2.6616 3.20184 2.57129 3.42916 2.57129H17.1434C17.3708 2.57129 17.5888 2.6616 17.7495 2.82234C17.9103 2.98309 18.0006 3.2011 18.0006 3.42843V9.42843C18.0006 9.65576 17.9103 9.87378 17.7495 10.0345C17.5888 10.1953 17.3708 10.2856 17.1434 10.2856ZM4.28631 8.57129H16.2863V4.28557H4.28631V8.57129Z" fill="black"/>
                                    <path d="M11.1434 17.1431H9.42916C8.95578 17.1431 8.57202 17.5268 8.57202 18.0002V19.7145C8.57202 20.1879 8.95578 20.5716 9.42916 20.5716H11.1434C11.6168 20.5716 12.0006 20.1879 12.0006 19.7145V18.0002C12.0006 17.5268 11.6168 17.1431 11.1434 17.1431Z" fill="black"/>
                                    <path d="M16.286 17.1431H14.5717C14.0984 17.1431 13.7146 17.5268 13.7146 18.0002V19.7145C13.7146 20.1879 14.0984 20.5716 14.5717 20.5716H16.286C16.7594 20.5716 17.1432 20.1879 17.1432 19.7145V18.0002C17.1432 17.5268 16.7594 17.1431 16.286 17.1431Z" fill="black"/>
                                    <path d="M5.99941 17.1431H4.28512C3.81173 17.1431 3.42798 17.5268 3.42798 18.0002V19.7145C3.42798 20.1879 3.81173 20.5716 4.28512 20.5716H5.99941C6.47279 20.5716 6.85655 20.1879 6.85655 19.7145V18.0002C6.85655 17.5268 6.47279 17.1431 5.99941 17.1431Z" fill="black"/>
                                    <path d="M11.1434 12H9.42916C8.95578 12 8.57202 12.3838 8.57202 12.8571V14.5714C8.57202 15.0448 8.95578 15.4286 9.42916 15.4286H11.1434C11.6168 15.4286 12.0006 15.0448 12.0006 14.5714V12.8571C12.0006 12.3838 11.6168 12 11.1434 12Z" fill="black"/>
                                    <path d="M16.286 12H14.5717C14.0984 12 13.7146 12.3838 13.7146 12.8571V14.5714C13.7146 15.0448 14.0984 15.4286 14.5717 15.4286H16.286C16.7594 15.4286 17.1432 15.0448 17.1432 14.5714V12.8571C17.1432 12.3838 16.7594 12 16.286 12Z" fill="black"/>
                                    <path d="M5.99941 12H4.28512C3.81173 12 3.42798 12.3838 3.42798 12.8571V14.5714C3.42798 15.0448 3.81173 15.4286 4.28512 15.4286H5.99941C6.47279 15.4286 6.85655 15.0448 6.85655 14.5714V12.8571C6.85655 12.3838 6.47279 12 5.99941 12Z" fill="black"/>
                                 </svg>

                                  </span> &nbsp; &nbsp;
                                    <span className='heading-16 '>Accounting</span>
                                </div>

                                <div className=' pe-2'>
                                    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M0 -4.37114e-07L5 5L10 0L0 -4.37114e-07Z" fill="black"/>
                                    </svg>
                                </div>
                            </div>
                            </div>

                            <div className="collapse" id="collapseExample2212">
                            <div className="card card-body my-card-body heading-16 pt-0">
                                 <ul className='ps-3 my-anchor-tag'>

                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/discount" ActiveClassName='active'>Discount</NavLink></li>
                                    </div>

                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/fee" ActiveClassName='active'>Fee Type</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/feecollection" ActiveClassName='active'>Fee Collection</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/manageinvoice" ActiveClassName='active'>Manage Invoice</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/dueinvoisce" ActiveClassName='active'>Due Invoice</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/income" ActiveClassName='active'>Income</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/incomecategory" ActiveClassName='active'>Income Category</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/expense" ActiveClassName='active'>Expense</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/expensecategory" ActiveClassName='active'>Expense Category</NavLink></li>
                                    </div>
                                    <div className='d-flex li-line-adjust pb-2'>
                                        <div className='li-line-adjust'>
                                            <svg width="6"  height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <line y1="0.5" x2="6" y2="0.5" stroke="black"/>
                                            </svg>
                                        </div>
                                        <li className='ps-2'><NavLink to="/mainuserform" ActiveClassName='active'>Main User Form</NavLink></li>
                                    </div>
                                 </ul>
                            </div>
                            </div>

                            </div> */}


                            {/* // Human resources */}
                            <div className='sidebarlinkborder' style={{ width: '99%' }}>
                                <div className="w-100 gap-1">
                                    <div className=" p-2 d-flex " data-bs-toggle="collapse" href="#collapseExample2233" role="button" aria-expanded="false" aria-controls="collapseExample2233">

                                        <div className='flex-grow-1'  >
                                            <span>
                                                <svg width="21" height="23" viewBox="0 0 21 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10.4912 24.6657C10.9795 24.6657 11.375 25.0612 11.375 25.5495C11.375 26.0378 10.9795 26.4334 10.4912 26.4334C10.0028 26.4334 9.60732 26.0378 9.60732 25.5495C9.60732 25.0612 10.0028 24.6657 10.4912 24.6657ZM4.78157 15.6174C4.76831 15.5909 4.75284 15.5666 4.73516 15.5423C4.65783 15.4163 4.58049 15.2904 4.50316 15.1467C4.42582 14.9921 4.34848 14.8462 4.27999 14.7115C4.21149 14.5656 4.1452 14.4109 4.08775 14.2563C4.03914 14.1215 3.98169 13.9668 3.92424 13.7834C3.83807 13.5227 3.59501 13.3592 3.33428 13.3592H1.66162C1.60417 13.3592 1.54672 13.3503 1.50694 13.3305C1.46938 13.3106 1.42077 13.2818 1.39205 13.2443C1.35448 13.2045 1.32355 13.1669 1.30587 13.1294C1.28598 13.0918 1.27715 13.0322 1.27715 12.9747V10.8668C1.27715 10.8093 1.28598 10.7607 1.29703 10.7209C1.31692 10.6811 1.34564 10.6347 1.39426 10.5861C1.43182 10.5486 1.47159 10.5176 1.50915 10.5088C1.54893 10.4889 1.60638 10.4801 1.66383 10.4801H3.19949C3.50884 10.4801 3.76073 10.2569 3.81818 9.96745C3.85575 9.80394 3.89552 9.64927 3.93308 9.51227C3.98169 9.3576 4.0303 9.21177 4.08775 9.05709C4.1452 8.91126 4.20265 8.75659 4.27999 8.61297C4.34848 8.45829 4.42582 8.32351 4.49211 8.18872C4.62689 7.93683 4.57828 7.64737 4.38605 7.45514L3.18845 6.24649C3.17961 6.23765 3.17961 6.23765 3.16856 6.23765C3.131 6.20009 3.10006 6.16031 3.08239 6.12275C3.0625 6.08519 3.0625 6.04542 3.0625 5.98797C3.0625 5.93052 3.07134 5.88191 3.09122 5.84213C3.11111 5.79352 3.13984 5.75596 3.18845 5.70735L4.66667 4.23797C4.71528 4.18935 4.75284 4.16063 4.80145 4.14074C4.84122 4.12086 4.88763 4.11202 4.94729 4.11202C5.00473 4.11202 5.05335 4.12086 5.09312 4.14074C5.13289 4.16063 5.17929 4.18935 5.21907 4.22692H5.2279L6.31944 5.31846C6.53157 5.53058 6.86963 5.5593 7.11269 5.38696C7.23864 5.30962 7.36458 5.23228 7.50821 5.15495C7.66288 5.07761 7.80871 5.00028 7.9435 4.93178C8.08933 4.86328 8.244 4.79699 8.39867 4.73954C8.53346 4.69093 8.68813 4.63348 8.87153 4.57603C9.13226 4.48986 9.29577 4.2468 9.29577 3.98607V2.3112C9.29577 2.25375 9.30461 2.1963 9.32449 2.15653C9.34438 2.11896 9.37311 2.07919 9.40183 2.04163C9.4416 2.00406 9.47917 1.97313 9.51673 1.96429C9.55429 1.94441 9.61395 1.93557 9.6714 1.93557H11.1562H11.1739H11.3264C11.3838 1.93557 11.4413 1.94441 11.4811 1.96429C11.5186 1.97313 11.5584 2.00406 11.596 2.04163C11.6247 2.07919 11.6534 2.11896 11.6733 2.15653C11.6932 2.19409 11.702 2.25375 11.702 2.3112V3.98386C11.702 4.24459 11.8655 4.48544 12.1263 4.57382C12.3097 4.63127 12.4643 4.68872 12.5991 4.73733C12.7538 4.79478 12.9085 4.86328 13.0543 4.92957C13.1891 4.99807 13.3349 5.0754 13.4896 5.15274C13.6354 5.23007 13.7592 5.30741 13.8851 5.38475C14.1259 5.5593 14.464 5.53058 14.6783 5.31625L15.7699 4.22471H15.7787C15.8163 4.18714 15.8649 4.15621 15.9047 4.13853C15.9422 4.11865 15.9908 4.10981 16.0505 4.10981C16.108 4.10981 16.1566 4.11865 16.1963 4.13853C16.2449 4.15842 16.2825 4.18714 16.3311 4.23576L17.8093 5.70514C17.858 5.75375 17.8867 5.79131 17.9066 5.83992C17.9265 5.87749 17.9353 5.9261 17.9353 5.98576C17.9353 6.04321 17.9353 6.08298 17.9154 6.12054C17.8955 6.16031 17.8668 6.19788 17.8292 6.23544C17.8204 6.23544 17.8204 6.23544 17.8093 6.24428L16.6117 7.45293C16.4195 7.64516 16.3709 7.93683 16.5057 8.18651C16.5742 8.3213 16.6515 8.45608 16.7178 8.61076C16.7951 8.75659 16.8526 8.91126 16.91 9.05488C16.9675 9.20956 17.0161 9.35539 17.0647 9.51006C17.1023 9.64485 17.142 9.79952 17.1796 9.96524C17.2371 10.2547 17.489 10.4779 17.7983 10.4779H19.334C19.3914 10.4779 19.4489 10.4867 19.4886 10.5066C19.5262 10.5154 19.566 10.5442 19.6035 10.5839C19.6521 10.6325 19.6809 10.6811 19.7008 10.7187C19.7096 10.7563 19.7206 10.8049 19.7206 10.8645V12.9725C19.7206 13.0299 19.7118 13.0874 19.6919 13.1272C19.672 13.1669 19.6433 13.2045 19.6057 13.2421C19.577 13.2796 19.5284 13.3106 19.4908 13.3282C19.4511 13.3481 19.3936 13.357 19.3362 13.357H17.6635C17.4028 13.357 17.1619 13.5205 17.0735 13.7812C17.0161 13.9646 16.9586 14.1193 16.91 14.2541C16.8526 14.4087 16.7841 14.5634 16.7178 14.7092C16.6493 14.844 16.572 14.9899 16.4946 15.1445C16.4173 15.2904 16.34 15.4163 16.2626 15.54C16.2449 15.5644 16.2295 15.5887 16.2162 15.6152H17.679C17.7408 15.4914 17.8027 15.3589 17.8668 15.2219C17.9441 15.0473 18.0215 14.875 18.09 14.7004C18.0988 14.6717 18.1187 14.6319 18.1297 14.6032H19.3671C19.5903 14.6032 19.8024 14.5656 19.9946 14.4883C20.1869 14.4109 20.3725 14.285 20.5271 14.1303C20.6818 13.9757 20.8078 13.8011 20.8851 13.5978C20.9624 13.3945 21 13.1912 21 12.9703V10.8645C21 10.6524 20.9514 10.4403 20.8741 10.2459C20.7967 10.0536 20.6818 9.87906 20.5271 9.72439L20.5183 9.71555C20.3636 9.56088 20.1891 9.43494 19.9968 9.3576C19.8046 9.27143 19.5903 9.23165 19.3693 9.23165H18.3153C18.3153 9.20293 18.3065 9.18304 18.2955 9.15432C18.238 8.97092 18.1806 8.78752 18.1121 8.61297C18.0347 8.42957 17.9662 8.25501 17.8889 8.0915C17.8801 8.07161 17.8602 8.04289 17.8513 8.01417L18.7219 7.13475C18.8854 6.98891 19.0025 6.81656 19.0887 6.62212C19.166 6.42988 19.2146 6.21555 19.2146 5.99459C19.2146 5.77143 19.1771 5.57035 19.0887 5.36707C19.0025 5.17483 18.8854 5.00028 18.7307 4.8456H18.7219L17.2437 3.37622C17.089 3.22155 16.9145 3.10665 16.7112 3.01827C16.5079 2.93209 16.3046 2.89232 16.0836 2.89232C15.8715 2.89232 15.6594 2.92988 15.4561 3.01827C15.2528 3.0956 15.0783 3.22155 14.9236 3.37622L14.1701 4.12086L14.1127 4.09213C13.958 4.00596 13.7835 3.92862 13.6001 3.84024C13.4255 3.7629 13.2532 3.68557 13.0786 3.61707C13.0499 3.60823 13.0101 3.58834 12.9814 3.5773V2.33992C12.9814 2.11675 12.9438 1.90463 12.8665 1.7124C12.7891 1.51795 12.6632 1.33456 12.5085 1.17988C12.345 1.02521 12.1705 0.899266 11.976 0.82193C11.7749 0.744594 11.5717 0.707031 11.3485 0.707031H10.5862H10.416H9.65372C9.43056 0.707031 9.22948 0.744594 9.0262 0.82193C8.83396 0.899266 8.65941 1.02521 8.49369 1.17988C8.33902 1.33456 8.21307 1.51795 8.13573 1.7124C8.0584 1.90463 8.02083 2.11896 8.02083 2.33992V3.5773C7.99211 3.58613 7.95234 3.60602 7.92361 3.61707C7.74905 3.68557 7.5767 3.7629 7.40215 3.84024C7.21875 3.92641 7.04419 4.00375 6.88952 4.09213L6.83207 4.12086L6.0786 3.37622C5.92393 3.22155 5.74937 3.0956 5.54609 3.01827C5.3428 2.93209 5.13068 2.89232 4.91856 2.89232C4.69539 2.89232 4.49432 2.92988 4.29104 3.01827C4.08775 3.10444 3.91319 3.22155 3.75852 3.37622L2.2803 4.8456H2.27146C2.11679 5.00028 2.00189 5.17483 1.91351 5.36707C1.82734 5.56814 1.78756 5.77143 1.78756 5.99238C1.78756 6.21555 1.83617 6.42768 1.91351 6.61991C1.99968 6.81215 2.11679 6.9867 2.2803 7.13254L3.15088 8.01196C3.14205 8.04068 3.12216 8.06941 3.11332 8.08929C3.03598 8.2528 2.96749 8.42736 2.89015 8.61076C2.82165 8.78531 2.7642 8.96871 2.70675 9.15211C2.69792 9.18083 2.68687 9.20072 2.68687 9.22944H1.63289C1.40972 9.22944 1.1976 9.26922 1.00537 9.35539C0.813131 9.43273 0.638573 9.55867 0.483902 9.71334L0.475063 9.72218C0.320391 9.87685 0.205492 10.0514 0.128157 10.2436C0.0486111 10.4381 0 10.6524 0 10.8645V12.9703C0 13.1935 0.0375631 13.3945 0.114899 13.5978C0.192235 13.8011 0.318182 13.9757 0.472854 14.1303C0.627525 14.285 0.810922 14.4109 1.00537 14.4883C1.1976 14.5656 1.41193 14.6032 1.63289 14.6032H2.87027C2.8791 14.6319 2.89899 14.6717 2.91004 14.7004C2.97854 14.875 3.05587 15.0473 3.13321 15.2219C3.19949 15.3611 3.25915 15.4936 3.32102 15.6152H4.78157V15.6174ZM7.17456 13.6619C6.99116 13.6685 6.84975 13.7061 6.75473 13.7724C6.69949 13.8099 6.65972 13.8563 6.63542 13.9116C6.60669 13.9734 6.59343 14.0486 6.59564 14.1347C6.60227 14.3866 6.73485 14.7181 6.99116 15.1003L6.99558 15.1048L7.82639 16.4283C8.16004 16.9586 8.50915 17.5 8.94444 17.8955C9.36206 18.2777 9.86806 18.5363 10.5398 18.5385C11.2645 18.5407 11.797 18.2711 12.2279 17.869C12.6765 17.4491 13.03 16.8746 13.3769 16.3002L14.3138 14.7579C14.4883 14.3601 14.5524 14.0928 14.5126 13.9359C14.4883 13.8431 14.3867 13.7967 14.2099 13.7878C14.1723 13.7856 14.1348 13.7856 14.095 13.7856C14.053 13.7878 14.0088 13.79 13.9646 13.7945C13.9403 13.7967 13.916 13.7945 13.8917 13.79C13.8078 13.7945 13.7216 13.7878 13.6354 13.7768L13.9558 12.356C11.5761 12.7317 9.79514 10.964 7.27841 12.0025L7.4596 13.6751C7.36016 13.6774 7.26294 13.6752 7.17456 13.6619ZM14.5303 13.3636C14.7601 13.4343 14.9081 13.5801 14.97 13.8166C15.0363 14.0795 14.9634 14.4485 14.7424 14.9523C14.738 14.9611 14.7336 14.97 14.7292 14.9788L13.7812 16.5388C13.4167 17.1398 13.0455 17.743 12.5505 18.207L12.5262 18.2291C12.5726 18.2976 12.6256 18.3728 12.6787 18.4523C12.8422 18.6931 13.03 18.9693 13.2045 19.1837C14.2342 19.8245 16.4991 19.9968 17.3851 20.4895C19.6389 21.7468 18.8169 24.8005 18.9804 26.9968C18.9318 27.5161 18.6379 27.8144 18.059 27.8585H17.4337L18.1209 22.6505C18.1739 22.244 17.8867 21.9125 17.5309 21.9125H12.6985C12.8179 21.0618 12.904 20.2487 12.946 19.6344C12.7206 19.3847 12.4798 19.0312 12.2721 18.7263C12.2257 18.66 12.1815 18.5937 12.1395 18.5341C11.7042 18.8257 11.1872 19.0069 10.5398 19.0047C9.81723 19.0025 9.25379 18.755 8.78756 18.3772C8.6572 18.7683 8.46496 19.3074 8.27936 19.5659C8.26389 19.588 8.244 19.6079 8.22191 19.6234C8.30145 20.2575 8.41193 21.0707 8.5423 21.9147H3.5928C3.23927 21.9147 2.94981 22.2462 3.00284 22.6527L3.69003 27.8608H3.0625C2.48359 27.8166 2.18971 27.5183 2.1411 26.999C2.16982 24.6723 1.28598 21.8573 3.73643 20.4918C4.63352 19.9902 6.94697 19.82 7.95675 19.1594C8.11143 18.8699 8.28157 18.3484 8.38542 18.0391C8.39646 18.0037 8.37879 18.0612 8.39646 18.0104C8.02525 17.6126 7.72254 17.142 7.43087 16.678L6.60006 15.3567C6.29514 14.9037 6.13826 14.4883 6.12721 14.148C6.12279 13.9889 6.14931 13.8431 6.20896 13.7149C6.27083 13.5823 6.36585 13.4697 6.494 13.3835C6.55366 13.3437 6.62216 13.3084 6.69508 13.2796C6.64205 12.5615 6.61995 11.6578 6.6553 10.9021C6.67298 10.7231 6.70833 10.5419 6.75694 10.363C7.06187 9.27584 7.99653 8.49144 9.06376 8.12244C9.58081 7.94346 9.38194 7.51701 9.90562 7.54573C11.1474 7.61423 13.0609 8.4141 13.7967 9.26259C14.8308 10.4491 14.5634 11.9119 14.5303 13.3636ZM8.84722 20.6354C8.4274 20.1581 8.39205 19.6587 8.84722 19.1306C9.37311 19.2632 9.8548 19.4908 10.2989 19.7979C10.3939 19.756 10.5066 19.7383 10.6149 19.7471C11.0767 19.4201 11.6645 19.2875 12.1793 19.0423C12.7936 19.6411 12.7273 20.1912 12.1241 20.7017C11.786 20.6243 11.4656 20.505 11.1585 20.3481C11.1496 20.4277 11.1297 20.5138 11.0922 20.6067L11.2491 21.9125H9.99621L10.1531 20.6067C10.0559 20.4409 10.0183 20.2995 10.0205 20.1824C9.65593 20.4012 9.26042 20.5426 8.84722 20.6354Z" fill="#241F20" />
                                                </svg>
                                            </span> &nbsp; &nbsp;
                                            <span className='heading-16 '>Human Resource</span>
                                        </div>
                                        <div className=' pe-2 '>
                                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 -4.37114e-07L5 5L10 0L0 -4.37114e-07Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse" id={`collapseExample2233`}>
                                    <div className="card card-body my-card-body heading-16 pt-0">
                                        <ul className='ps-3 my-anchor-tag'>
                                            <div className='d-flex li-line-adjust pb-2'>
                                                <div className='li-line-adjust'>
                                                    <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="6" y2="0.5" stroke="black" />
                                                    </svg>
                                                </div>
                                                <li className='ps-2'><NavLink to="/assignleave" ActiveClassName='active'>Attendance Report</NavLink></li>
                                            </div>
                                            <div className='d-flex li-line-adjust pb-2'>
                                                <div className='li-line-adjust'>
                                                    <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="6" y2="0.5" stroke="black" />
                                                    </svg>
                                                </div>
                                                <li className='ps-2'><NavLink to="/leave" ActiveClassName='active'>Leave</NavLink></li>
                                            </div>
                                            <div className='d-flex li-line-adjust pb-2'>
                                                <div className='li-line-adjust'>
                                                    <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="6" y2="0.5" stroke="black" />
                                                    </svg>
                                                </div>
                                                <li className='ps-2'><NavLink to="/payroll" ActiveClassName='active'>Payroll</NavLink></li>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className=" p-2 d-flex " >
                                <div className='flex-grow-1 my-anchor-tag'>
                                    <span>
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M3.86869 20.2675H4.9285V20.4789C4.9285 22.4207 6.66402 24 8.79718 24H10.513H18.7016H19.4377H20.1306C22.2644 24 24 22.4207 24 20.4789V7.25376C24 5.31246 22.2644 3.73257 20.1306 3.73257H19.0709V3.52125C19.0709 1.57922 17.3359 0 15.2021 0H13.7731H5.58453H3.86869C1.73552 0 0 1.57928 0 3.52125V16.7462C0 18.6875 1.73552 20.2675 3.86869 20.2675ZM20.1306 4.88526C21.5682 4.88526 22.7332 5.9457 22.7332 7.25376V20.4789C22.7332 21.7869 21.5682 22.8474 20.1306 22.8474H19.4378H18.7016H10.5131H8.79725C7.36022 22.8474 6.19525 21.7869 6.19525 20.4789V20.2675V19.1148V7.25376C6.19525 5.94563 7.36022 4.88526 8.79725 4.88526H10.5131H17.8048H18.7016H19.0708H20.1306ZM1.26602 3.52125C1.26602 2.21313 2.43098 1.15269 3.86869 1.15269H5.58453H13.7731H15.2021C16.6398 1.15269 17.8048 2.21313 17.8048 3.52125V3.73257H10.5131H8.79725C6.66408 3.73257 4.92856 5.31246 4.92856 7.25376V19.1148H3.86869C2.43098 19.1148 1.26602 18.0537 1.26602 16.7462V3.52125Z" fill="black" />
                                            <path d="M8.49992 8.3335C8.22365 8.3335 8 8.55723 8 8.83353C8 9.10976 8.22365 9.3335 8.49992 9.3335H18.5C18.7763 9.3335 19 9.10976 19 8.83353C19 8.55723 18.7763 8.3335 18.5 8.3335H8.49992Z" fill="black" />
                                            <path d="M10 12.1668C10 12.4429 10.2235 12.6665 10.4988 12.6665H19.8345C20.1097 12.6665 20.3333 12.4429 20.3333 12.1668C20.3333 11.8907 20.1097 11.6665 19.8345 11.6665H10.4988C10.2235 11.6665 10 11.8907 10 12.1668Z" fill="black" />
                                            <path d="M17.6667 15.8331C17.6667 15.557 17.4455 15.3335 17.1726 15.3335H8.494C8.22101 15.3335 8 15.557 8 15.8331C8 16.1091 8.22101 16.3335 8.494 16.3335H17.1726C17.4455 16.3335 17.6667 16.1091 17.6667 15.8331Z" fill="black" />
                                            <path d="M19.8271 18.6665H11.5055C11.2262 18.6665 11 18.8903 11 19.1666C11 19.4428 11.2262 19.6665 11.5055 19.6665H19.8271C20.1064 19.6665 20.3333 19.4428 20.3333 19.1666C20.3333 18.8903 20.1064 18.6665 19.8271 18.6665Z" fill="black" />
                                        </svg>

                                    </span> &nbsp; &nbsp;
                                    <span className='heading-16 ps-1'><NavLink to="/assignmenttea" ActiveClassName='active'>Assignment</NavLink></span>
                                </div>
                            </div>
                            <hr className='my-0 ' style={{ color: '#adadad', width: '99%' }} />

                            {/* <div className='sidebarlinkborder' style={{ width: '99%' }}>
                                <div className="w-100 gap-1">
                                    <div className=" p-2 d-flex " data-bs-toggle="collapse" href="#collapseExample0011" role="button" aria-expanded="false" aria-controls="collapseExample0011">

                                        <div className='flex-grow-1'>
                                            <span>
                                                <svg width="22" height="21" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path fill-rule="evenodd" clip-rule="evenodd" d="M0 19.5449H2.875V0.306641C2.875 0.138672 3.01367 0 3.18164 0H12.9199C13.0879 0 13.2266 0.138672 13.2266 0.306641V7.51953H21.8438C22.0117 7.51953 22.1504 7.6582 22.1504 7.82617V19.543H24V22.0801H0V19.5449ZM5.33594 2.89453H7.32812C7.38867 2.89453 7.43945 2.94531 7.43945 3.00586V5.41992C7.43945 5.48047 7.38867 5.53125 7.32812 5.53125H5.33594C5.27539 5.53125 5.22461 5.48047 5.22461 5.41992V3.00586C5.22461 2.94531 5.27539 2.89453 5.33594 2.89453ZM8.71094 14.9023H10.7031C10.7637 14.9023 10.8145 14.9531 10.8145 15.0137V17.4277C10.8145 17.4883 10.7637 17.5391 10.7031 17.5391H8.71094C8.65039 17.5391 8.59961 17.4883 8.59961 17.4277V15.0137C8.59961 14.9512 8.65039 14.9023 8.71094 14.9023ZM5.33594 14.9023H7.32812C7.38867 14.9023 7.43945 14.9531 7.43945 15.0137V17.4277C7.43945 17.4883 7.38867 17.5391 7.32812 17.5391H5.33594C5.27539 17.5391 5.22461 17.4883 5.22461 17.4277V15.0137C5.22461 14.9512 5.27539 14.9023 5.33594 14.9023ZM8.71094 10.8984H10.7031C10.7637 10.8984 10.8145 10.9492 10.8145 11.0098V13.4238C10.8145 13.4844 10.7637 13.5352 10.7031 13.5352H8.71094C8.65039 13.5352 8.59961 13.4844 8.59961 13.4238V11.0117C8.59961 10.9492 8.65039 10.8984 8.71094 10.8984ZM5.33594 10.8984H7.32812C7.38867 10.8984 7.43945 10.9492 7.43945 11.0098V13.4238C7.43945 13.4844 7.38867 13.5352 7.32812 13.5352H5.33594C5.27539 13.5352 5.22461 13.4844 5.22461 13.4238V11.0117C5.22461 10.9492 5.27539 10.8984 5.33594 10.8984ZM8.71094 6.89648H10.7031C10.7637 6.89648 10.8145 6.94727 10.8145 7.00781V9.42188C10.8145 9.48242 10.7637 9.5332 10.7031 9.5332H8.71094C8.65039 9.5332 8.59961 9.48242 8.59961 9.42188V7.00781C8.59961 6.94727 8.65039 6.89648 8.71094 6.89648ZM5.33594 6.89648H7.32812C7.38867 6.89648 7.43945 6.94727 7.43945 7.00781V9.42188C7.43945 9.48242 7.38867 9.5332 7.32812 9.5332H5.33594C5.27539 9.5332 5.22461 9.48242 5.22461 9.42188V7.00781C5.22461 6.94727 5.27539 6.89648 5.33594 6.89648ZM8.71094 2.89453H10.7031C10.7637 2.89453 10.8145 2.94531 10.8145 3.00586V5.41992C10.8145 5.48047 10.7637 5.53125 10.7031 5.53125H8.71094C8.65039 5.53125 8.59961 5.48047 8.59961 5.41992V3.00586C8.59961 2.94531 8.65039 2.89453 8.71094 2.89453ZM4.52539 1.42969H11.541C11.6621 1.42969 11.7617 1.54883 11.7617 1.69336V18.4648C11.7617 18.6094 11.6621 18.7285 11.541 18.7285H4.52539C4.4043 18.7285 4.30469 18.6094 4.30469 18.4648V1.69336C4.30469 1.54883 4.4043 1.42969 4.52539 1.42969ZM14.1816 10.4355H16.1738C16.2344 10.4355 16.2852 10.4863 16.2852 10.5469V12.9609C16.2852 13.0215 16.2344 13.0723 16.1738 13.0723H14.1816C14.1211 13.0723 14.0703 13.0215 14.0703 12.9609V10.5469C14.0703 10.4863 14.1211 10.4355 14.1816 10.4355ZM17.5566 14.9023H19.5488C19.6094 14.9023 19.6602 14.9531 19.6602 15.0137V17.4277C19.6602 17.4883 19.6094 17.5391 19.5488 17.5391H17.5566C17.4961 17.5391 17.4453 17.4883 17.4453 17.4277V15.0137C17.4453 14.9512 17.4961 14.9023 17.5566 14.9023ZM14.1816 14.9023H16.1738C16.2344 14.9023 16.2852 14.9531 16.2852 15.0137V17.4277C16.2852 17.4883 16.2344 17.5391 16.1738 17.5391H14.1816C14.1211 17.5391 14.0703 17.4883 14.0703 17.4277V15.0137C14.0703 14.9512 14.1211 14.9023 14.1816 14.9023ZM17.5566 10.4355H19.5488C19.6094 10.4355 19.6602 10.4863 19.6602 10.5469V12.9609C19.6602 13.0215 19.6094 13.0723 19.5488 13.0723H17.5566C17.4961 13.0723 17.4453 13.0215 17.4453 12.9609V10.5469C17.4453 10.4863 17.4961 10.4355 17.5566 10.4355ZM13.4492 8.94922H20.4648C20.5859 8.94922 20.6855 9.06836 20.6855 9.21289V18.4648C20.6855 18.6094 20.5859 18.7285 20.4648 18.7285H13.4492C13.3281 18.7285 13.2285 18.6094 13.2285 18.4648V9.21289C13.2285 9.06836 13.3281 8.94922 13.4492 8.94922Z" fill="black" />
                                                </svg>
                                            </span> &nbsp; &nbsp;
                                            <span className='heading-16 '>Library</span>
                                        </div>
                                        <div className=' pe-2 '>
                                            <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M0 -4.37114e-07L5 5L10 0L0 -4.37114e-07Z" fill="black" />
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                                <div className="collapse" id="collapseExample0011">
                                    <div className="card card-body my-card-body heading-16 pt-0">
                                        <ul className='ps-3 my-anchor-tag'>
                                            <div className='d-flex li-line-adjust pb-2'>
                                                <div className='li-line-adjust'>
                                                    <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="6" y2="0.5" stroke="black" />
                                                    </svg>
                                                </div>
                                                <li className='ps-2'><NavLink to="/booklistmanager" ActiveClassName='active'>Book List Manager</NavLink></li>
                                            </div>
                                            <div className='d-flex li-line-adjust pb-2'>
                                                <div className='li-line-adjust'>
                                                    <svg width="6" height="1" viewBox="0 0 6 1" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <line y1="0.5" x2="6" y2="0.5" stroke="black" />
                                                    </svg>
                                                </div>
                                                <li className='ps-2'><NavLink to="/BookIssueReport" ActiveClassName='active'>Book Issue Report</NavLink></li>
                                            </div>

                                        </ul>
                                    </div>
                                </div>
                            </div> */}

                            <div className=" p-2 d-flex " >
                                <div className='flex-grow-1 my-anchor-tag'>
                                    <span>
                                        <svg width="24" height="23" viewBox="0 0 24 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M9.88519 4.46471C11.1181 4.46471 12.1175 3.46525 12.1175 2.23235C12.1175 0.999459 11.1181 0 9.88519 0C8.65229 0 7.65283 0.999459 7.65283 2.23235C7.65283 3.46525 8.65229 4.46471 9.88519 4.46471Z" fill="black" />
                                            <path d="M23.9371 18.6228L21.8397 12.7299C21.6879 12.3025 21.2886 12.0101 20.8332 12.0045L17.0264 11.9258C17.2569 12.2463 17.3919 12.6343 17.3919 13.0504C17.3919 13.1741 17.3806 13.2978 17.3581 13.4159H19.3431L22.0646 20.4897L23.3017 20.0117C23.8528 19.7981 24.1339 19.1851 23.9371 18.6228Z" fill="black" />
                                            <path d="M11.1505 6.83203C11.0943 6.83203 11.0324 6.83765 10.9762 6.84328H10.9706C10.9706 6.84328 10.9706 6.84328 10.965 6.84328C10.2058 6.95012 9.70539 7.69798 9.89657 8.44585L11.1786 13.4166H16.543C16.5824 13.3042 16.6049 13.1748 16.6049 13.0511C16.6049 12.427 16.1044 11.9097 15.4803 11.8984H15.4746L13.8215 11.8647L12.3707 7.70361V7.69798C12.1852 7.16941 11.6903 6.83203 11.1505 6.83203Z" fill="black" />
                                            <path d="M21.3227 20.7772L18.7979 14.2038H17.0098H10.5714H10.369L7.71488 7.30432L6.10668 3.12076C5.77492 2.25481 4.80213 1.82746 3.94181 2.15922C3.07586 2.49098 2.6485 3.46377 2.98026 4.3241L3.48072 5.6174L5.48815 10.8412L6.77583 14.1982L8.06351 17.5495H16.4981L18.0444 21.57L18.1963 21.9693C18.4887 22.7284 19.3434 23.1107 20.1081 22.8183L20.4792 22.6778C21.2383 22.391 21.6151 21.5363 21.3227 20.7772Z" fill="black" />
                                            <path d="M7.51803 18.3426L6.03916 14.4852L4.74586 11.1339L2.62597 5.62891H0V21.5815H17.1953L15.9526 18.3483H7.51803V18.3426ZM3.69997 19.2986H1.96807V16.1047H3.69997V19.2986ZM3.69997 14.2041H1.96807V11.0102H3.69997V14.2041ZM14.0858 19.6922H8.06909C7.84979 19.6922 7.67547 19.5179 7.67547 19.2986C7.67547 19.0793 7.84979 18.9049 8.06909 18.9049H14.0858C14.3051 18.9049 14.4794 19.0793 14.4794 19.2986C14.4794 19.5122 14.3051 19.6922 14.0858 19.6922Z" fill="black" />
                                        </svg>
                                    </span> &nbsp; &nbsp;
                                    <span className='heading-16 '><NavLink to="/holiday" ActiveClassName='active'>Holiday</NavLink></span>
                                </div>
                            </div>
                            <hr className='my-0 ' style={{ color: '#adadad', width: '99%' }} />

                            <div className=" p-2 d-flex " >
                                <div className='flex-grow-1 my-anchor-tag'>
                                    <span>
                                        <svg width="18" height="22" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 18.0028H21.5001V11.2368C21.5001 7.75133 19.2049 4.79218 16.0467 3.79026C15.9871 1.69034 14.2615 0 12.1473 0H12.0811C9.99034 0 8.27866 1.6531 8.18359 3.7208C4.90717 4.64908 2.49987 7.66706 2.49987 11.2368V18.0028H0V24.4189H8.07479C8.37666 26.3137 10.0216 27.7665 12 27.7665C13.9783 27.7665 15.6233 26.3137 15.9251 24.4189H23.9999V18.0028H24ZM12.0811 1.25533H12.1473C13.4704 1.25533 14.5698 2.23106 14.7638 3.5007C14.4125 3.45216 14.054 3.42647 13.6896 3.42647H10.3102C10.0263 3.42647 9.74597 3.44212 9.46988 3.47183C9.67609 2.21641 10.7682 1.25533 12.0811 1.25533ZM12 26.5111C10.7163 26.5111 9.63818 25.6169 9.35397 24.4189H14.6459C14.3617 25.6169 13.2837 26.5111 12 26.5111ZM22.7447 23.1635H1.25533V19.258H3.75528V11.2367C3.75528 7.62229 6.69585 4.68171 10.3103 4.68171H13.6897C17.3041 4.68171 20.2447 7.62229 20.2447 11.2367V19.258H22.7447V23.1635Z" fill="black" />
                                        </svg>

                                    </span> &nbsp; &nbsp;
                                    <span className='heading-16 ps-1'><NavLink to="/notice" ActiveClassName='active'>Notice</NavLink></span>
                                </div>
                            </div>
                            <hr className='my-0 ' style={{ color: '#adadad', width: '99%' }} />

                            <div className=" p-2 d-flex " >
                                <div className='flex-grow-1 my-anchor-tag'>
                                    <span>
                                        <svg width="18" height="22" viewBox="0 0 24 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M24 18.0028H21.5001V11.2368C21.5001 7.75133 19.2049 4.79218 16.0467 3.79026C15.9871 1.69034 14.2615 0 12.1473 0H12.0811C9.99034 0 8.27866 1.6531 8.18359 3.7208C4.90717 4.64908 2.49987 7.66706 2.49987 11.2368V18.0028H0V24.4189H8.07479C8.37666 26.3137 10.0216 27.7665 12 27.7665C13.9783 27.7665 15.6233 26.3137 15.9251 24.4189H23.9999V18.0028H24ZM12.0811 1.25533H12.1473C13.4704 1.25533 14.5698 2.23106 14.7638 3.5007C14.4125 3.45216 14.054 3.42647 13.6896 3.42647H10.3102C10.0263 3.42647 9.74597 3.44212 9.46988 3.47183C9.67609 2.21641 10.7682 1.25533 12.0811 1.25533ZM12 26.5111C10.7163 26.5111 9.63818 25.6169 9.35397 24.4189H14.6459C14.3617 25.6169 13.2837 26.5111 12 26.5111ZM22.7447 23.1635H1.25533V19.258H3.75528V11.2367C3.75528 7.62229 6.69585 4.68171 10.3103 4.68171H13.6897C17.3041 4.68171 20.2447 7.62229 20.2447 11.2367V19.258H22.7447V23.1635Z" fill="black" />
                                        </svg>

                                    </span> &nbsp; &nbsp;
                                    <span className='heading-16 ps-1'><NavLink to="/samplepaper" ActiveClassName='active'>Sample Paper</NavLink></span>
                                </div>
                            </div>
                            <hr className='my-0 ' style={{ color: '#adadad', width: '99%' }} />

                            <div className=" p-2 d-flex " >
                                <div className='flex-grow-1 my-anchor-tag'>
                                    <span>
                                        <svg width="21" height="21" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.45455 0V3.27273H3.27273C1.47851 3.27273 0 4.75124 0 6.54545V21.8182C0 23.6124 1.47851 25.0909 3.27273 25.0909H20.7273C22.5215 25.0909 24 23.6124 24 21.8182V6.54545C24 4.75124 22.5215 3.27273 20.7273 3.27273H18.5455V0H16.3636V3.27273H7.63636V0H5.45455ZM3.27273 5.45455H20.7273C21.3505 5.45455 21.8182 5.92222 21.8182 6.54545V21.8182C21.8182 22.4414 21.3505 22.9091 20.7273 22.9091H3.27273C2.64949 22.9091 2.18182 22.4414 2.18182 21.8182V6.54545C2.18182 5.92222 2.64949 5.45455 3.27273 5.45455ZM14.1818 14.1818C13.5775 14.1818 13.0909 14.6684 13.0909 15.2727V19.6364C13.0909 20.2407 13.5775 20.7273 14.1818 20.7273H18.5455C19.1498 20.7273 19.6364 20.2407 19.6364 19.6364V15.2727C19.6364 14.6684 19.1498 14.1818 18.5455 14.1818H14.1818Z" fill="black" />
                                        </svg>
                                    </span> &nbsp; &nbsp;
                                    <span className='heading-16 ps-1'><NavLink to="/event" ActiveClassName='active'>Event</NavLink></span>
                                </div>
                            </div>
                            <hr className='my-0 ' style={{ color: '#adadad', width: '99%' }} />

                            <div className=" p-2 d-flex " >
                                <div className='flex-grow-1 my-anchor-tag'>
                                    <span>
                                        <svg width="21" height="21" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M5.45455 0V3.27273H3.27273C1.47851 3.27273 0 4.75124 0 6.54545V21.8182C0 23.6124 1.47851 25.0909 3.27273 25.0909H20.7273C22.5215 25.0909 24 23.6124 24 21.8182V6.54545C24 4.75124 22.5215 3.27273 20.7273 3.27273H18.5455V0H16.3636V3.27273H7.63636V0H5.45455ZM3.27273 5.45455H20.7273C21.3505 5.45455 21.8182 5.92222 21.8182 6.54545V21.8182C21.8182 22.4414 21.3505 22.9091 20.7273 22.9091H3.27273C2.64949 22.9091 2.18182 22.4414 2.18182 21.8182V6.54545C2.18182 5.92222 2.64949 5.45455 3.27273 5.45455ZM14.1818 14.1818C13.5775 14.1818 13.0909 14.6684 13.0909 15.2727V19.6364C13.0909 20.2407 13.5775 20.7273 14.1818 20.7273H18.5455C19.1498 20.7273 19.6364 20.2407 19.6364 19.6364V15.2727C19.6364 14.6684 19.1498 14.1818 18.5455 14.1818H14.1818Z" fill="black" />
                                        </svg>
                                    </span> &nbsp; &nbsp;
                                    <span className='heading-16 ps-1'><NavLink to="/profile" ActiveClassName='active'>Profile</NavLink></span>
                                </div>
                            </div>
                            <hr className='my-0 ' style={{ color: '#adadad', width: '99%' }} />
                            <div className=" p-2 d-flex " >
                                <div className='flex-grow-1 my-anchor-tag'>
                                    <span>
                                        <svg width="23" height="18" viewBox="0 0 25 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M23.75 15H23.3333V1.25C23.3333 0.918479 23.2016 0.600537 22.9672 0.366116C22.7328 0.131696 22.4149 0 22.0833 0H2.91667C2.58515 0 2.2672 0.131696 2.03278 0.366116C1.79836 0.600537 1.66667 0.918479 1.66667 1.25V15H1.25C0.918479 15 0.600537 15.1317 0.366117 15.3661C0.131696 15.6005 0 15.9185 0 16.25V17.0833C0 17.8569 0.307291 18.5987 0.854272 19.1457C1.40125 19.6927 2.14312 20 2.91667 20H22.0833C22.8569 20 23.5987 19.6927 24.1457 19.1457C24.6927 18.5987 25 17.8569 25 17.0833V16.25C25 15.9185 24.8683 15.6005 24.6339 15.3661C24.3995 15.1317 24.0815 15 23.75 15ZM2.5 1.25C2.5 1.13949 2.5439 1.03351 2.62204 0.955372C2.70018 0.877232 2.80616 0.833333 2.91667 0.833333H22.0833C22.1938 0.833333 22.2998 0.877232 22.378 0.955372C22.4561 1.03351 22.5 1.13949 22.5 1.25V15H2.5V1.25ZM13.9208 16.35C13.898 16.4424 13.8442 16.5243 13.7684 16.5819C13.6926 16.6395 13.5993 16.6694 13.5042 16.6667H11.4833C11.3882 16.6694 11.2949 16.6395 11.2191 16.5819C11.1433 16.5243 11.0895 16.4424 11.0667 16.35L10.95 15.8333H14.05L13.9208 16.35Z" fill="white" />
                                            <path d="M8.42508 7.82948C8.75195 7.55433 8.98631 7.18533 9.0964 6.77249C9.20649 6.35966 9.18699 5.92296 9.04054 5.52158C8.89409 5.12021 8.62778 4.77356 8.27769 4.52864C7.9276 4.28371 7.51067 4.15234 7.08341 4.15234C6.65616 4.15234 6.23923 4.28371 5.88914 4.52864C5.53905 4.77356 5.27274 5.12021 5.12629 5.52158C4.97984 5.92296 4.96034 6.35966 5.07043 6.77249C5.18052 7.18533 5.41488 7.55433 5.74175 7.82948C5.26745 8.0752 4.86974 8.44645 4.592 8.90273C4.31426 9.35902 4.16716 9.88281 4.16675 10.417V12.0836C4.16675 12.4152 4.29844 12.7331 4.53286 12.9675C4.76728 13.202 5.08523 13.3336 5.41675 13.3336H8.75008C9.0816 13.3336 9.39954 13.202 9.63397 12.9675C9.86839 12.7331 10.0001 12.4152 10.0001 12.0836V10.417C9.99967 9.88281 9.85257 9.35902 9.57483 8.90273C9.29709 8.44645 8.89938 8.0752 8.42508 7.82948ZM5.83341 6.25031C5.83341 6.00309 5.90673 5.76141 6.04408 5.55585C6.18143 5.35029 6.37665 5.19007 6.60506 5.09546C6.83347 5.00085 7.0848 4.9761 7.32728 5.02433C7.56975 5.07256 7.79248 5.19161 7.9673 5.36643C8.14211 5.54125 8.26117 5.76397 8.3094 6.00645C8.35763 6.24893 8.33287 6.50026 8.23826 6.72867C8.14365 6.95708 7.98344 7.1523 7.77788 7.28965C7.57232 7.427 7.33064 7.50031 7.08341 7.50031C6.75189 7.50031 6.43395 7.36862 6.19953 7.1342C5.96511 6.89978 5.83341 6.58183 5.83341 6.25031ZM9.16675 12.0836C9.16675 12.1942 9.12285 12.3001 9.04471 12.3783C8.96657 12.4564 8.86059 12.5003 8.75008 12.5003H5.41675C5.30624 12.5003 5.20026 12.4564 5.12212 12.3783C5.04398 12.3001 5.00008 12.1942 5.00008 12.0836V10.417C5.00008 9.86445 5.21957 9.33454 5.61028 8.94384C6.00098 8.55314 6.53088 8.33365 7.08341 8.33365C7.63595 8.33365 8.16585 8.55314 8.55655 8.94384C8.94725 9.33454 9.16675 9.86445 9.16675 10.417V12.0836Z" fill="black" />
                                            <path d="M19.5834 2.5H12.9167C12.5852 2.5 12.2673 2.6317 12.0329 2.86612C11.7984 3.10054 11.6667 3.41848 11.6667 3.75V10.4167C11.6667 10.7482 11.7984 11.0661 12.0329 11.3005C12.2673 11.535 12.5852 11.6667 12.9167 11.6667H19.5834C19.9149 11.6667 20.2329 11.535 20.4673 11.3005C20.7017 11.0661 20.8334 10.7482 20.8334 10.4167V3.75C20.8334 3.41848 20.7017 3.10054 20.4673 2.86612C20.2329 2.6317 19.9149 2.5 19.5834 2.5ZM14.1667 4.58333H15.8334C15.9439 4.58333 16.0499 4.62723 16.128 4.70537C16.2062 4.78351 16.2501 4.88949 16.2501 5C16.2501 5.11051 16.2062 5.21649 16.128 5.29463C16.0499 5.37277 15.9439 5.41667 15.8334 5.41667H14.1667C14.0562 5.41667 13.9503 5.37277 13.8721 5.29463C13.794 5.21649 13.7501 5.11051 13.7501 5C13.7501 4.88949 13.794 4.78351 13.8721 4.70537C13.9503 4.62723 14.0562 4.58333 14.1667 4.58333ZM18.3334 9.58333H14.1667C14.0562 9.58333 13.9503 9.53944 13.8721 9.4613C13.794 9.38315 13.7501 9.27717 13.7501 9.16667C13.7501 9.05616 13.794 8.95018 13.8721 8.87204C13.9503 8.7939 14.0562 8.75 14.1667 8.75H18.3334C18.4439 8.75 18.5499 8.7939 18.628 8.87204C18.7062 8.95018 18.7501 9.05616 18.7501 9.16667C18.7501 9.27717 18.7062 9.38315 18.628 9.4613C18.5499 9.53944 18.4439 9.58333 18.3334 9.58333ZM18.3334 7.5H14.1667C14.0562 7.5 13.9503 7.4561 13.8721 7.37796C13.794 7.29982 13.7501 7.19384 13.7501 7.08333C13.7501 6.97283 13.794 6.86685 13.8721 6.78871C13.9503 6.71057 14.0562 6.66667 14.1667 6.66667H18.3334C18.4439 6.66667 18.5499 6.71057 18.628 6.78871C18.7062 6.86685 18.7501 6.97283 18.7501 7.08333C18.7501 7.19384 18.7062 7.29982 18.628 7.37796C18.5499 7.4561 18.4439 7.5 18.3334 7.5Z" fill="black" />
                                        </svg>

                                    </span> &nbsp; &nbsp;
                                    <span className='heading-16 ps-1'><NavLink to="/onlinecourse" ActiveClassName='active'>Online Course</NavLink></span>
                                </div>
                            </div>
                            <hr className='my-0 ' style={{ color: '#adadad', width: '99%' }} />


                            {/* #############  */}

                        </ul>
                    </div>
                </TextOverlap>
                <Sidebar sidebaropen={sidebaropen} className='sidebarborder sidebardiv'>
                    <div className="sidebarMainDiv"></div>
                </Sidebar>
                <MainContainer sidebaropen={sidebaropen}>
                    <Header>
                        <div className="d-flex bgggg bg-white p-2 justify-content-between">
                            <div className='d-flex'>
                                <div className="p-3 flex-grow-1" aria-current="page">
                                    <svg className='' xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24" onClick={toggleSidebar} style={{ cursor: 'pointer' }}>
                                        <path fill="#008479" stroke="#008479" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 17h14M5 12h14M5 7h14" />
                                    </svg>
                                </div>
                                <div className='d-flex'>
                                    <div className="input-group default-search-bar mb-3 ps-2 pt-3">
                                        <input type="text" className="form-control my-form-focus form-focus font-color" style={{ height: '34px' }} placeholder="Search" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                        <span className="input-group-text button-bg-color button-color heading-14 font-color " style={{ cursor: 'pointer', height: "34px" }} id="basic-addon2">Search</span>
                                    </div>
                                    <div className='search-icon pt-4'>
                                        <a href=""><svg height="32" version="1.1" width="32" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#"><g transform="translate(0 -1028.4)"><path d="m14.938 12.281-2.844 2.813 6.906 6.906 2.844-2.844-6.906-6.875z" fill="#95a5a6" transform="translate(0 1028.4)" /><path d="m15.562 1041.2c-0.473 1.3-1.472 2.4-2.75 2.9l2.188 2.3c1.16-0.7 2.137-1.7 2.812-2.9l-2.25-2.3z" fill="#7f8c8d" /><path d="m18 10a8 8 0 1 1 -16 0 8 8 0 1 1 16 0z" fill="#bdc3c7" transform="translate(0 1028.4)" /><path d="m15 10a5 5 0 1 1 -10 0 5 5 0 1 1 10 0z" fill="#ecf0f1" transform="translate(0 1028.4)" /></g></svg></a>
                                    </div>
                                </div>
                            </div>

                            <div className="p-2 d-flex">
                                <div className="count heading-12 ">
                                    <p>8</p>
                                </div>
                                <div>
                                    <div className="bell  pe-4">
                                        <svg width="21" height="23" viewBox="0 0 24 26" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M12 26C10.9391 26 9.92172 25.5786 9.17157 24.8284C8.42143 24.0783 8 23.0609 8 22C8 21.7348 8.10536 21.4804 8.29289 21.2929C8.48043 21.1054 8.73478 21 9 21H15C15.2652 21 15.5196 21.1054 15.7071 21.2929C15.8946 21.4804 16 21.7348 16 22C16 23.0609 15.5786 24.0783 14.8284 24.8284C14.0783 25.5786 13.0609 26 12 26ZM10.27 23C10.4458 23.3031 10.6982 23.5547 11.0018 23.7295C11.3054 23.9044 11.6496 23.9965 12 23.9965C12.3504 23.9965 12.6946 23.9044 12.9982 23.7295C13.3018 23.5547 13.5542 23.3031 13.73 23H10.27Z" fill="#241F20" />
                                            <path d="M14 4H10C9.73478 4 9.48043 3.89464 9.29289 3.70711C9.10536 3.51957 9 3.26522 9 3C9 2.20435 9.31607 1.44129 9.87868 0.87868C10.4413 0.316071 11.2044 0 12 0C12.7956 0 13.5587 0.316071 14.1213 0.87868C14.6839 1.44129 15 2.20435 15 3C15 3.26522 14.8946 3.51957 14.7071 3.70711C14.5196 3.89464 14.2652 4 14 4Z" fill="#241F20" />
                                            <path d="M23 23H1C0.734786 23 0.480432 22.8946 0.292896 22.7071C0.105359 22.5196 2.11107e-06 22.2652 2.11107e-06 22C-0.000874888 20.8707 0.271509 19.7579 0.793906 18.7566C1.3163 17.7553 2.0732 16.8953 3 16.25V11C2.99995 8.62341 3.93992 6.34327 5.61479 4.65716C7.28967 2.97105 9.56347 2.01584 11.94 2H12.05C14.4369 2 16.7261 2.94821 18.414 4.63604C20.1018 6.32387 21.05 8.61305 21.05 11V16.25C21.9676 16.9009 22.7148 17.7633 23.2283 18.7642C23.7418 19.7651 24.0065 20.8751 24 22C24 22.2652 23.8946 22.5196 23.7071 22.7071C23.5196 22.8946 23.2652 23 23 23ZM2.1 21H21.9C21.7584 20.3067 21.4712 19.6514 21.0575 19.0774C20.6437 18.5033 20.1129 18.0236 19.5 17.67C19.3474 17.5819 19.2208 17.455 19.133 17.3023C19.0452 17.1495 18.9993 16.9762 19 16.8V11C19 9.14348 18.2625 7.36301 16.9497 6.05025C15.637 4.7375 13.8565 4 12 4C10.1435 4 8.36301 4.7375 7.05025 6.05025C5.7375 7.36301 5 9.14348 5 11V16.8C5.0007 16.9762 4.95483 17.1495 4.86702 17.3023C4.77922 17.455 4.65261 17.5819 4.5 17.67C3.88711 18.0236 3.35626 18.5033 2.94253 19.0774C2.52881 19.6514 2.24164 20.3067 2.1 21Z" fill="#241F20" />
                                        </svg>
                                    </div>
                                </div>
                                <div className="dropdown dropdown-sm">

                                    <Link className="btn d-flex dropdown-toggle" to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                        <div className="row user-content-img">
                                            <div className="col-3"><img src="./images/userProfile.png" alt="" width={40} /></div>
                                            <div className="col-9 text-start">
                                                <div className="row"><h3>@admin.school</h3></div>
                                                <div className="row"><h3>admin@skdschool.in</h3></div>
                                            </div>
                                        </div>
                                    </Link>

                                    <ul className="dropdown-menu dropdown-menu-end">
                                        <li><Link className="dropdown-item greyText" to="#">Profile</Link></li>
                                        <li><Link className="dropdown-item greyText" to="#">Logout</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </Header>
                    <MainContentDiv>
                        <Main />
                    </MainContentDiv>
                </MainContainer>



                <div className="offcanvas offcanvas-end p-2" tabIndex="-1" id="Logout" aria-labelledby="LogoutLabel">
                    <div className="offcanvas-header modalHighborder">
                        <Link type="button" data-bs-dismiss="offcanvas" aria-label="Close">
                            <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 16 16">
                                <path fill="#008479" fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8" />
                            </svg>
                        </Link>
                        <h2 className="offcanvas-title" id="LogoutLabel">Logout Message</h2>
                    </div>
                    <div className="offcanvas-body pt-0">
                        <Logout />
                    </div>
                </div>




            </Container>
        </>
    )
}

export default MainLayout2