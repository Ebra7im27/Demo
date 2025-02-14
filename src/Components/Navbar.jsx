import React, { useEffect, useState } from "react";
import '../App.css';
import { Link, useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Header() {
    const [isOffcanvasOpen, setIsOffcanvasOpen] = useState(false);
    const navigate = useNavigate();

    const navItems = [
        { name: "الصفحة الرئيسية", link: "/", icon: "fas fa-home" },
        { name: "البيانات الشخصية", link: "/student/info", icon: "fas fa-info-circle" },
        { name: "طلب بريد جامعي", link: "/student/registeremail", icon: "fas fa-envelope" },
        { name: "الأخبار", link: "/student/news", icon: "far fa-newspaper" },
        { name: "المواد الدراسية", link: "/student/subjects", icon: "fas fa-book" },
        { name: "تسجيل الخروج", link: "/", icon: "fas fa-power-off" }
    ];

    const today = new Date();
    const formattedDate = today.toLocaleDateString('ar-EG', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    })

    const [userName, setUserName] = useState('');

    useEffect(() => {
        const UserInfo = JSON.parse(localStorage.getItem("UserInfo"));
        if (UserInfo && UserInfo.Name) {
            setUserName(UserInfo.Name)
        }
    }, [])

    const closeOffcanvas = () => {
        setIsOffcanvasOpen(false)
    }

    const handleLogout = () => {
        // console.log("تم النقر على زر تسجيل الخروج")
        Swal.fire({
            title: 'هل أنت متأكد؟',
            text: "هل تريد تسجيل الخروج؟",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'نعم، سجل الخروج',
            cancelButtonText: 'إلغاء'
        }).then((result) => {
            if (result.isConfirmed) {
                localStorage.removeItem("UserInfo")
                Swal.fire(
                    'تم تسجيل الخروج!',
                    'تم تسجيل خروجك بنجاح.',
                    'success'
                ).then(() => {
                    navigate('/login')
                    // console.log("تم التوجيه إلى صفحة تسجيل الدخول")
                })
            }
        })
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg sticky-top bg-light">
                <div className="container">
                    <button
                        className="btn btn-dark ms-3"
                        type="button"
                        onClick={() => setIsOffcanvasOpen(true)}
                        style={{ color: "#1a237e", borderColor: "#f0f0f0" }}
                    >
                        <i className="fas fa-bars" style={{ color: "#fff" }}></i>
                    </button>

                    <div className="ms-auto" style={{ fontSize: "19px", marginRight: "20px" }}>
                        <i className="fas fa-calendar-alt ms-1"></i>
                        {formattedDate}
                    </div>

                    <div className="d-flex gap-3">
                        <Link to={"/student/info"} className="text-dark"><i className="fas fa-user mt-1" style={{ fontSize: "24px", cursor: "pointer", marginLeft: "15px" }}></i></Link>

                        <div className="dropdown">
                            <button className="btn btn-secondary dropdown-toggle position-relative bellIcon bg-light text-dark border-0 d-lg-none d-xl-block" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                <i className="fas fa-bell" style={{ fontSize: "24px", cursor: "pointer" }}></i>
                            </button>
                            <ul className="dropdown-menu">
                                <li><span className="dropdown-item text-end fw-bold fs-5">الإشعارات الجديدة .......</span></li>
                                <hr className=" text-black-50" />
                                <li>
                                    <span className="dropdown-item text-end text-danger" style={{ cursor: "pointer" }}>
                                        جدول العملي للفصل الدراسي الثاني 2025/2026 - شعبة علوم الحاسب
                                    </span>
                                    <p className="opacity-75 fs-6 text-end fw-bold" style={{ marginRight: "20px" }}>منذ شهر</p>
                                </li>
                                <hr />
                                <li>
                                    <span className="dropdown-item text-end text-danger" style={{ cursor: "pointer" }}>
                                        جدول العملي للفصل الدراسي الثاني 2025/2026 - شعبة المحاسبة والإدارة
                                    </span>
                                    <p className="opacity-75 fs-6 text-end fw-bold" style={{ marginRight: "20px" }}>منذ شهر</p>
                                </li>
                                <hr />
                                <li>
                                    <span className="dropdown-item text-end text-danger" style={{ cursor: "pointer" }}>
                                        جدول العملي للفصل الدراسي الثاني 2025/2026 - شعبة نظم المعلومات
                                    </span>
                                    <p className="opacity-75 fs-6 text-end fw-bold" style={{ marginRight: "20px" }}>منذ شهر</p>
                                </li>
                                <hr />
                                <li><span className="dropdown-item text-center" style={{ cursor: "pointer" }}>عرض الكل</span></li>
                            </ul>
                            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger mt-1">99+</span>
                        </div>

                        <button onClick={handleLogout} style={{ background: "none", border: "none", cursor: "pointer" }}>
                            <i className="fas fa-sign-out-alt mt-1" style={{ fontSize: "24px" }}></i>
                        </button>
                    </div>
                </div>
            </nav>

            <div
                className={`offcanvas offcanvas-end ${isOffcanvasOpen ? "show" : ""}`}
                tabIndex="-1"
                id="offcanvasSidebar"
                aria-labelledby="offcanvasSidebarLabel"
                style={{ width: "300px", backgroundColor: "#fff" }}
            >
                <div className="offcanvas-header text-center">
                    <button type="button" className="btn-close" onClick={closeOffcanvas} data-bs-dismiss="offcanvas"></button>
                    <h5 className="offcanvas-title fs-4 fw-bold" style={{ marginLeft: "50px" }}>{userName}</h5>
                </div>
                <div className="offcanvas-body">
                    <ul className="nav flex-column text-end">
                        {navItems.map((item, index) => (
                            <li key={index} className="nav-item">
                                <Link
                                    to={item.link}
                                    className="nav-link d-flex align-items-center fw-bold"
                                    style={{ color: "#1a237e" }}
                                    onClick={(e) => {
                                        if (item.name === "تسجيل الخروج") {
                                            e.preventDefault();
                                            handleLogout();
                                        }
                                        closeOffcanvas();
                                    }}
                                >
                                    <i className={`${item.icon} text-dark fs-6`}></i>
                                    &nbsp;
                                    <span className="text-dark fs-5">{item.name}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}

export default Header