import { Link } from "react-router-dom";
import Header from "../../Components/Navbar";
import Footer from "../../Components/Footer";


function News() {
    return (
        <div className="bg-light">
            <Header />

            <div className="container mb-5" style={{ marginTop: "100px" }}>
                <h2 className="text-primary-emphasis">الأخبار</h2>
                <Link to='/' className="mb-2 text-decoration-none text-primary-emphasis">
                    <i className="fas fa-home text-primary-emphasis"></i>&nbsp;الرئيسية
                </Link>
                <span> - الأخبار </span>
            </div>

            <div className="container me-auto">
                <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-4">
                        <div className="card card1 mx-auto" style={{ width: " 18rem;" }}>
                            <img src="/assets/photo 1.png" className="card-img-top" alt="..." />
                            <div className="font card-body z-1">
                                <h5 className="space card-title fw-normal text-primary-emphasis">جدول العملي للفصل الدراسي الأول للعام الجامعي 2024/2025 - شعبة المحاسبة والإدارة</h5>
                                <hr />
                                <i className="fas fa-calendar-alt ms-1"></i><span>الجمعة 20 ديسمبر 2024 21:04م</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card card1 mx-auto" style={{ width: " 18rem;" }}>
                            <img src="/assets/photo 2.png" className="card-img-top" alt="..." />
                            <div className="font card-body z-1">
                                <h5 className="space card-title fw-normal text-primary-emphasis">جدول العملي للفصل الدراسي الأول للعام الجامعي 2024/2025 - شعبة المحاسبة والإدارة</h5>
                                <hr />
                                <i className="fas fa-calendar-alt ms-1"></i><span>الجمعة 20 ديسمبر 2024 21:04م</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card card1 mx-auto" style={{ width: " 18rem;" }}>
                            <img src="/assets/photo 3.png" className="card-img-top" alt="..." />
                            <div className="font card-body z-1">
                                <h5 className="space card-title fw-normal text-primary-emphasis">جدول العملي للفصل الدراسي الأول للعام الجامعي 2024/2025 - شعبة نظم المعلومات</h5>
                                <hr />
                                <i className="fas fa-calendar-alt ms-1"></i><span>الجمعة 20 ديسمبر 2024 21:04م</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container me-auto">
                <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-4">
                        <div className="card card1 mx-auto" style={{ width: " 18rem;" }}>
                            <img src="/assets/photo 4.png" className="card-img-top" alt="..." />
                            <div className="font card-body z-1">
                            <h5 className="space card-title fw-normal text-primary-emphasis">جدول العملي للفصل الدراسي الأول للعام الجامعي 2024/2025 - شعبة نظم المعلومات</h5>
                            <hr />
                                <i className="fas fa-calendar-alt ms-1"></i><span>الجمعة 20 ديسمبر 2024 21:04م</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card card1 mx-auto" style={{ width: " 18rem;" }}>
                            <img src="/assets/photo 5.png" className="card-img-top" alt="..." />
                            <div className="font card-body z-1">
                            <h5 className="space card-title fw-normal text-primary-emphasis">جدول العملي للفصل الدراسي الأول للعام الجامعي 2024/2025 - شعبة نظم المعلومات</h5>
                            <hr />
                                <i className="fas fa-calendar-alt ms-1"></i><span>الجمعة 20 ديسمبر 2024 21:04م</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card card1 mx-auto" style={{ width: " 18rem;" }}>
                            <img src="/assets/photo 6.png" className="card-img-top" alt="..." />
                            <div className="font card-body z-1">
                            <h5 className="space card-title fw-normal text-primary-emphasis">جدول العملي للفصل الدراسي الأول للعام الجامعي 2024/2025 - شعبة نظم المعلومات</h5>
                            <hr />
                                <i className="fas fa-calendar-alt ms-1"></i><span>الجمعة 20 ديسمبر 2024 21:04م</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="container me-auto">
                <div className="row g-3 mb-3">
                    <div className="col-12 col-sm-4">
                        <div className="card card1 mx-auto" style={{ width: " 18rem;" }}>
                            <img src="/assets/photo 7.png" className="card-img-top" alt="..." />
                            <div className="font card-body z-1">
                            <h5 className="space card-title fw-normal text-primary-emphasis">جدول العملي للفصل الدراسي الأول للعام الجامعي 2024/2025 - شعبة علوم حاسب</h5>
                            <hr />
                                <i className="fas fa-calendar-alt ms-1"></i><span>الجمعة 20 ديسمبر 2024 21:04م</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card card1 mx-auto" style={{ width: " 18rem;" }}>
                            <img src="/assets/photo 8.png" className="card-img-top" alt="..." />
                            <div className="font card-body z-1">
                            <h5 className="space card-title fw-normal text-primary-emphasis">جدول العملي للفصل الدراسي الأول للعام الجامعي 2024/2025 - شعبة علوم حاسب</h5>
                            <hr />
                                <i className="fas fa-calendar-alt ms-1"></i><span>الجمعة 20 ديسمبر 2024 21:04م</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-sm-4">
                        <div className="card card1 mx-auto" style={{ width: " 18rem;" }}>
                            <img src="/assets/photo 9.png" className="card-img-top" alt="..." />
                            <div className="font card-body z-1">
                                <h5 className="space card-title fw-normal text-primary-emphasis">جدول العملي للفصل الدراسي الأول للعام الجامعي 2024/2025 - شعبة علوم حاسب</h5>
                                <hr />
                                <i className="fas fa-calendar-alt ms-1"></i><span>الجمعة 20 ديسمبر 2024 21:04م</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default News