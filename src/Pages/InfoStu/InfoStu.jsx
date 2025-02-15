import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Navbar";
import Footer from "../../Components/Footer";
import './InfoStu.css';

function InfoStu() {
    const [formData, setFormData] = useState({
        universityEmail: '',
        password: '',
        email: '',
        phoneNumber: '',
        address: '',
        facebook: '',
        twitter: '',
        instagram: ''
    });

    const [userName, setUserName] = useState('');
    const [userEmail, setUserEmail] = useState('');
    const [Address, setUserAddress] = useState('');
    const [userBand, setUserBand] = useState('');
    const [userDivision, setUserDivision] = useState('');
    const [userTel, setUserTel] = useState('');

    useEffect(() => {
        const UserInfo = JSON.parse(localStorage.getItem("UserInfo"))

        if (UserInfo) {
            setUserName(UserInfo.Name || '')
            setUserEmail(UserInfo.Email || '')
            setUserAddress(UserInfo.Address || '')
            setUserTel(UserInfo.Tel || '')
            setUserBand(UserInfo.Band || '')
            setUserDivision(UserInfo.Division || '')

            setFormData(prevState => ({
                ...prevState,
                email: UserInfo.Email || '', // تعيين البريد الإلكتروني
                phoneNumber: UserInfo.Tel || '', // تعيين رقم الهاتف
                address: UserInfo.Address || '' // تعيين العنوان
            }))
        }
    }, [])

    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // إرسال النموذج
    const handleSubmit = (e) => {
        e.preventDefault()
        // console.log('Form Data Submitted:', formData) // check
    }

    return (
        <div className="bg-light">
            <Header />

            <div className="container" style={{ marginTop: "100px" }}>
                <h2 className="text-primary-emphasis">البيانات الرئيسية</h2>
                <Link to='/' className="mb-2 text-decoration-none text-primary-emphasis">
                    <i className="fas fa-home text-primary-emphasis"></i>&nbsp;الرئيسية
                </Link>
                <span> - البيانات الشخصية</span>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-md-6 mt-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title mb-4">
                                    <i className="fas fa-id-card"></i>&nbsp;بيانات الإتصال
                                </h3>
                                <hr />
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="universityEmail" className="form-label fw-bold">البريد الجامعي</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="universityEmail"
                                            name="universityEmail"
                                            value={formData.universityEmail}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label fw-bold">كلمة المرور</label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="email" className="form-label fw-bold">البريد الإلكتروني</label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="form-label fw-bold">رقم الهاتف</label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            style={{ direction: 'rtl' }}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="address" className="form-label fw-bold">العنوان</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address"
                                            name="address"
                                            value={formData.address}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="facebook" className="form-label fw-bold">فيس بوك</label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            id="facebook"
                                            name="facebook"
                                            value={formData.facebook}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="twitter" className="form-label fw-bold">تويتر</label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            id="twitter"
                                            name="twitter"
                                            value={formData.twitter}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="mb-3">
                                        <label htmlFor="instagram" className="form-label fw-bold">انستجرام</label>
                                        <input
                                            type="url"
                                            className="form-control"
                                            id="instagram"
                                            name="instagram"
                                            value={formData.instagram}
                                            onChange={handleChange}
                                        />
                                    </div>
                                    <div className="d-flex justify-content-center">
                                        <button type="submit" className="btn text-light" style={{ backgroundColor: "#21B592" }}>
                                            حفظ
                                            <i className="fas fa-save me-2"></i>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    <div className="col-md-6 mt-5">
                        <div className="card shadow">
                            <div className="card">
                                <img src="/assets/bg.jpg" className="card-img" alt="..." />
                                <div className="card-img-overlay">
                                    <h5 className="card-title">{userName}</h5>
                                    <div className="imgStu text-center">
                                    </div>
                                </div>
                                <div className="d-flex justify-content-evenly">
                                    <div className="mt-4 text-center">
                                        <h2 className="fw-bold emailStu">البريد الإلكتروني</h2>
                                        <p className="text-body-secondary userEmail">{userEmail}</p>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <h2 className="fw-bold bandStu">الفرقة</h2>
                                        <p className="text-body-secondary userBand">{userBand}</p>
                                    </div>

                                    <div className="mt-4 text-center">
                                        <h2 className="fw-bold divitionStu">الشعبة</h2>
                                        <p className="text-body-secondary userDivision">{userDivision}</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="card shadow mt-4 p-4">
                            <div className="card border-0">
                                <p className="fw-bold">البريد الجامعي :</p>
                                <p className="fw-bold">كلمة المرور :</p>
                                <p className="fw-bold">رقم التليفون : <span className="fw-normal" style={{ unicodeBidi: 'embed', direction: 'ltr' }}>{userTel}</span></p>
                                <p className="fw-bold">العنوان : <span className="fw-normal" >{Address}</span></p>
                                <hr />
                                <p className="fw-bold text-center">التواصل الإجتماعي</p>
                                <div className="d-flex justify-content-center">
                                    <i className="fab fa-facebook fs-3"></i>
                                    <i className="fab fa-twitter mx-3 fs-3"></i>
                                    <i className="fab fa-instagram fs-3"></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default InfoStu