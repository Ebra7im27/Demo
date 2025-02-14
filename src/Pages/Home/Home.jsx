import { Link } from "react-router-dom";
import Header from "../../Components/Navbar";
import './Home.css'
import Footer from "../../Components/Footer";
import { useEffect, useState } from "react";

function Home() {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        const UserInfo = JSON.parse(localStorage.getItem("UserInfo"));

        if (UserInfo && UserInfo.Name) {
            setUserName(UserInfo.Name);
        }
    }, [])

    return (
        <>
            <Header />
            <div className="container">
                <div className="jumbotron jumbotron-fluid mt-5 mb-5" style={{ backgroundColor: "#e1eaf9", borderRadius: "25px" }}>
                    <div className="container">
                        <div className="row align-items-center">
                            <div className="col-12 col-md-2">
                                <img className="d-block mx-auto" src="/assets/Hello.svg" alt="" style={{ width: "100%", maxWidth: "350px" }} />
                            </div>
                            <div className="col-12 col-md-10 mt-3 mt-md-0">
                                <h2 className="display-4 text-primary fs-1">مرحباً بك, <span>{userName}</span>   </h2>
                                <p className="lead text-dark">نسعد اليوم بوجودك معنا، ونرجو أن تكون في أفضل حال ونتمنى لك التفوق والنجاح.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* End message Welcome */}

            <div className="container mb-5">
                <div className="row">
                    <div class="border col-12 col-md-12 col-lg-6 p-3" style={{ borderRadius: "25px", backgroundColor: "#ff562f" }}>
                        <div className=" d-flex justify-content-between">
                            <div className="col-6 col-md-8 mt-3 mt-md-0 p-3">
                                <h4 className="text-light">مواد الفصل الدراسي الأول</h4>
                                <p className="mb-2 text-light">
                                    <i className="fas fa-caret-left"></i>&nbsp;الذكاء الإصطناعي
                                </p>
                                <p className="mb-2 text-light">
                                    <i className="fas fa-caret-left"></i>&nbsp;الرؤية بالحاسب
                                </p>
                                <p className="mb-2 text-light">
                                    <i className="fas fa-caret-left"></i>&nbsp;هندسة البرمجيات(2)
                                </p>
                                <p className="mb-2 text-light">
                                    <i className="fas fa-caret-left"></i>&nbsp;برمجه الشبكات
                                </p>
                            </div>

                            <div className="col-6 col-md-4">
                                <img
                                    className="img-fluid"
                                    src="/assets/Studying-cuate.svg"
                                    alt=""
                                    style={{ maxWidth: "100%", height: "auto" }}
                                />
                            </div>
                        </div>
                    </div>

                    <div className="border col-12 col-md-12 col-lg-6 p-3" style={{ borderRadius: "25px", height: "110px", backgroundColor: "#0052cc" }}>
                        <div className="d-flex justify-content-between">
                            <div className=" p-3">
                                <h4 className="text-light">مواد الفصل الدراسي الثاني</h4>
                                {/* <p className="mb-2">
                                    <i className="fas fa-book me-2"></i>اللغة العربية
                                </p>
                                <p className="mb-2">
                                    <i className="fas fa-book me-2"></i>الرياضيات
                                </p>
                                <p className="mb-2">
                                    <i className="fas fa-book me-2"></i>العلوم
                                </p>
                                <p className="mb-2">
                                    <i className="fas fa-book me-2"></i>اللغة الإنجليزية
                                </p> */}
                            </div>

                            <div>
                                <img
                                    className="img-fluid"
                                    src="/assets/Thesis-pana.svg"
                                    alt=""
                                    style={{ width: "100%", maxWidth: "100px" }}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>{/* Names of materials */}

            <div className="container">
                <h5 class="card-title p-2 fw-bold">أحدث الأخبار :</h5>
                <div class="card mb-3">
                    <img src="/assets/Table.png" class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-text text-primary fs-4">جدول العملي للفصل الدراسي الاول للعام الجامعي 2024/2025 - شعبة المحاسبة وإدارة</p>
                        <Link to="/student/news" className="card-text text-decoration-none">
                            <small className="text-body-secondary">عرض الكل</small>
                        </Link>
                    </div>
                </div>
            </div> {/* Table */}

            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-4 mb-3 up">
                        <div className="p-3 rounded-4 shadow-hover" style={{ backgroundColor: "#0052cc" }}>
                            <div className="d-flex justify-content-evenly"  style={{cursor: "pointer" }}>
                                <div className="p-3 rounded-circle border border-2 border-white">
                                    <i className="fas fa-globe-americas fs-1 text-light"></i>
                                </div>
                                <div>
                                    <p className="text-light fs-4">metmans.edu.eg</p>
                                    <small className="text-light opacity-75 fs-6">الموقع الرسمي للمعهد</small>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-12 col-md-4 mb-3 up">
                        <div className="p-3 rounded-4 shadow-hover" style={{ backgroundColor: "#ff562f" }}>
                            <div className="d-flex justify-content-evenly"  style={{cursor: "pointer" }}>
                                <div className="p-3" style={{ borderRadius: "100%", border: "2px solid White" }}>
                                    <i class="fas fa-mobile-alt fs-1 text-light"></i>
                                </div>
                                <div>
                                    <p className="text-light fs-4" style={{ unicodeBidi: 'embed', direction: 'ltr'}}>050 422 5747</p>
                                    <small className="text-light opacity-75 fs-6" >رقم التليفون</small>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-4 mb-3 up">
                        <div className="p-3 rounded-4 shadow-hover" style={{ backgroundColor: "#00baff" }}>
                            <div className="d-flex justify-content-evenly"  style={{cursor: "pointer" }}>
                                <div className="p-3" style={{ borderRadius: "100%", border: "2px solid White" }}>
                                    <i className="fas fa-envelope fs-1 text-light"></i>
                                </div>
                                <div>
                                    <p className="text-light fs-4">info@metmans.edu.eg</p>
                                    <small className="text-light opacity-75 fs-6">البريد الإلكتروني</small>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> {/* info collage */}
            <Footer />
        </>
    )
}

export default Home