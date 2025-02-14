import React, { useRef, useState } from "react";
import "./Login.css";
import 'react-toastify/dist/ReactToastify.css';
import Swal from "sweetalert2";

function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const [errors, setErrors] = useState({})

    const handleLogin = () => {
        const UserInfo = JSON.parse(localStorage.getItem("UserInfo"))
        const email = emailRef.current.value
        const password = passwordRef.current.value

        let validationErrors = {}

        if (email === "") {
            validationErrors.email = "الرجاء إدخال عنوان البريد الإلكتروني الخاص بك."
        }
        if (password === "") {
            validationErrors.password = "الرجاء إدخال كلمة المرور الخاصة بك."
        }

        if (Object.keys(validationErrors).length > 0) {
            setErrors(validationErrors)
        } else {
            setErrors({})

            // هنا بنقارن القيم المدخلة مع البيانات المخزنة
            if (UserInfo && email.toLowerCase() === UserInfo.Email.toLowerCase() && password === UserInfo.Password) {
                Swal.fire({
                    icon: "success",
                    title: "تم تسجيل الدخول بنجاح!",
                    text: "تم تسجيل الدخول بنجاح! إعادة التوجيه إلى الصفحة الرئيسية ...",
                    confirmButtonText: "موافق"
                }).then(() => {
                    setTimeout(() => {
                        window.location = "/"
                    }, 3000)
                })
            } else {
                Swal.fire({
                    icon: "error",
                    title: "خطأ!",
                    text: "البريد الإلكتروني أو كلمة المرور غير صحيحة!",
                    confirmButtonText: "حسناً"
                })
            }
        }
    }
    return (
        <>
            <div className="secLogin">
                <div className="form-container">
                    <div className="logo-container">
                        <img src="/assets/logo.svg" alt="Logo" className="login-logo" />
                    </div>
                    <h2 className="fw-bold">تسجيل الدخول</h2>
                    <div className="form">
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
                                تذكرني
                            </label>
                        </div>
                        <button type="button" className="btn btn-primary w-100 btnLog" onClick={handleLogin}>تسجيل الدخول</button>
                        <div className="text-center mt-3">
                            <p>ليس لديك حساب؟ <a href="/register">انشئ حسابًا الآن</a></p>
                            <a href="/ForgotPassword ">هل نسيت كلمة المرور؟</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login