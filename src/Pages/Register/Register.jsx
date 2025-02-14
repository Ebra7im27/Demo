import React, { useRef, useState, useEffect } from "react";
import "./Register.css";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

function Register() {
    const [UserInfo, setUserInfo] = useState({})
    const userNameRef = useRef()
    const emailRef = useRef()
    const telNumRef = useRef()
    const adressRef = useRef()
    const bandRef = useRef()
    const DivisionRef = useRef()
    const passwordRef = useRef()
    const [errors, setErrors] = useState({})

    const handleRegister = () => {
        const userName = userNameRef.current.value
        const email = emailRef.current.value
        const telNum = telNumRef.current.value
        const adress = adressRef.current.value
        const band = bandRef.current.value
        const division = DivisionRef.current.value
        const password = passwordRef.current.value

        let validationErrors = {}

        if (userName === "") {
            validationErrors.userName = "الرجاء إدخال اسم المستخدم الخاص بك."
        }
        if (email === "") {
            validationErrors.email = "الرجاء إدخال عنوان البريد الإلكتروني الخاص بك."
        }
        if (telNum === "") {
            validationErrors.telNum = "الرجاء إدخال رقم الهاتف الخاص بك."
        }
        if (adress === "") {
            validationErrors.title = "الرجاء إدخال العنوان الخاص بك."
        }
        if (band === "") {
            validationErrors.band = "الرجاء إدخال الفرقة الخاص بك."
        }
        if (division === "") {
            validationErrors.division = "الرجاء إدخال الشعبة الخاصة بك."
        }
        if (password === "") {
            validationErrors.password = "الرجاء إدخال كلمة المرور الخاصة بك."
        }
        else if (password.length < 8) {
            validationErrors.password = "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل."
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})

            // Set user info in state
            setUserInfo({
                isLoggedIn: true,
                Name: userName,
                Email: email,
                Tel: telNum,
                Address: adress,
                Band: band,
                Division: division,
                Password: password,
            })

            Swal.fire({
                icon: "success",
                title: "تم الحفظ بنجاح!",
                text: "سيتم توجيهك إلى صفحة تسجيل الدخول...",
                confirmButtonText: "موافق"
            }).then(() => {
                setTimeout(() => {
                    window.location = "/login"
                }, 3000)
            })
        }
    }

    // Save user info to localStorage
    useEffect(() => {
        if (Object.keys(UserInfo).length > 0) {
            localStorage.setItem("UserInfo", JSON.stringify(UserInfo))
            // setTimeout(() => {
            //     window.location = "/login"
            // }, 5000)
        }
    }, [UserInfo])

    return (
        <>
            <div className="sec-register">
                <div className="form-container">
                    <div className="logo-container">
                        <img src="/assets/logo.svg" alt="Logo" className="register-logo" />
                    </div>
                    <h2 className="titleReg fw-bold">إنشاء حساب</h2>
                    <div className="form" noValidate>

                        <div className="mb-3">
                            <label htmlFor="username" className="form-label fw-bold fs-5">الإسم</label>
                            <input
                                type="text"
                                className={`form-control ${errors.userName ? 'is-invalid' : ''}`}
                                id="username"
                                name="username"
                                ref={userNameRef}
                                placeholder="أدخل الإسم ثلاثي "
                            />
                            {errors.userName && <div className="invalid-feedback">{errors.userName}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold fs-5">البريد الإلكتروني</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                id="email"
                                name="email"
                                ref={emailRef}
                                placeholder="أدخل البريد الإلكتروني"
                            />
                            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="email" className="form-label fw-bold fs-5">رقم الهاتف</label>
                            <input
                                type="telNum"
                                className={`form-control ${errors.telNum ? 'is-invalid' : ''}`}
                                id="telNum"
                                name="telNum"
                                ref={telNumRef}
                                placeholder="أدخل رقم الهاتف "
                            />
                            {errors.telNum && <div className="invalid-feedback">{errors.telNum}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fw-bold fs-5">الفرقة</label>
                            <input
                                type="band"
                                className={`form-control ${errors.band ? 'is-invalid' : ''}`}
                                id="band"
                                name="band"
                                ref={bandRef}
                                placeholder="أدخل الفرقة"
                            />
                            {errors.band && <div className="invalid-feedback">{errors.band}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="division" className="form-label fw-bold fs-5">الشعبة</label>
                            <input
                                type="division"
                                className={`form-control ${errors.division ? 'is-invalid' : ''}`}
                                id="division"
                                name="division"
                                ref={DivisionRef}
                                placeholder="أدخل الشعبة"
                            />
                            {errors.division && <div className="invalid-feedback">{errors.division}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label fw-bold fs-5">العنوان</label>
                            <input
                                type="adress"
                                className={`form-control ${errors.address ? 'is-invalid' : ''}`}
                                id="adress"
                                name="adress"
                                ref={adressRef}
                                placeholder="أدخل العنوان"
                            />
                            {errors.address && <div className="invalid-feedback">{errors.address}</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label fw-bold fs-5">كلمة المرور</label>
                            <input
                                type="password"
                                className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                                id="password"
                                name="password"
                                ref={passwordRef}
                                placeholder="أدخل كلمة المرور"
                            />
                            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                        </div>

                        <div className="form-check mb-3 d-flex align-items-center">
                            <input className="form-check-input ms-2" type="checkbox" id="flexCheckDefault" />
                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                أوافق على جميع الشروط والأحكام
                            </label>
                        </div>


                        <button onClick={handleRegister} className="btn btn-primary w-100 btnReg">تسجيل</button>
                        <div className="text-center mt-3">
                            <p>لديك حساب بالفعل؟ <a href="/login">سجل الدخول</a></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register