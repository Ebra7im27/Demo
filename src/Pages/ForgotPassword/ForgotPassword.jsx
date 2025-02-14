import React, { useRef, useState } from "react";
import './ForgotPassword.css';
import 'react-toastify/dist/ReactToastify.css'; // Import Toastify CSS
import Swal from "sweetalert2";

function ForgotPassword() {
    const emailRef = useRef()
    const [newPassword, setNewPassword] = useState("")
    const [errors, setErrors] = useState("")
    const [message, setMessage] = useState("")

    const handleResetPassword = () => {
        const email = emailRef.current.value
        const userInfo = JSON.parse(localStorage.getItem("UserInfo"))

        if (!email) {
            setErrors("الرجاء إدخال عنوان البريد الإلكتروني الخاص بك.")
            return
        }

        if (userInfo && userInfo.Email.toLowerCase() === email.toLowerCase()) {
            setErrors("")
            setMessage("الرجاء إدخال كلمة المرور الجديدة أدناه.....")
        } else {
            setErrors("لم يتم العثور على عنوان البريد الإلكتروني. يرجى التحقق من بريدك الإلكتروني والمحاولة مرة أخرى.")
        }
    }

    const handlePasswordChange = (e) => {
        setNewPassword(e.target.value)
    }

    const handleSavePassword = () => {
        if (newPassword.length < 8) {
            Swal.fire({
                icon: "error",
                title: "خطأ",
                text: "يجب أن تتكون كلمة المرور من 8 أحرف على الأقل.",
            })
            return
        }

        const userInfo = JSON.parse(localStorage.getItem("UserInfo"))
        userInfo.Password = newPassword
        localStorage.setItem("UserInfo", JSON.stringify(userInfo))

        Swal.fire({
            icon: "success",
            title: "تم التحديث بنجاح",
            text: "لقد تم تحديث كلمة المرور الخاصة بك بنجاح.",
            confirmButtonText: "موافق"
        }).then(() => {
            setTimeout(() => {
                window.location = "/login"
            }, 3000)
        })
    }

    return (
        <>
            <div className="forgot-password-section">
                <div className="logo-container">
                    <img src="/assets/logo.svg" alt="Logo" className="login-logo" />
                </div>
                <h2 className="forgot-password-title fw-bold">نسيان كلمة المرور</h2>
                <div className="forgot-password-form">
                    <div className="forgot-password-input-group">
                        <label htmlFor="email" className="form-label fw-bold fs-5">البريد الإلكتروني</label>
                        <input
                            type="email"
                            className={`forgot-password-input ${errors ? 'is-invalid' : ''}`}
                            id="email"
                            ref={emailRef}
                            placeholder="أدخل البريد الإلكتروني"
                        />
                        {errors && <div className="forgot-password-error">{errors}</div>}
                    </div>

                    <button type="button" className="forgot-password-btn w-100" onClick={handleResetPassword}>
                        إرسال رابط إعادة تعيين
                    </button>

                    {message && <div className="forgot-password-message mt-3">{message}</div>}

                    {message && (
                        <div className="forgot-password-input-group">
                            <label htmlFor="newPassword" className="forgot-password-label fw-bold fs-5">كلمة المرور الجديدة</label>
                            <input
                                type="password"
                                className={`forgot-password-input ${errors ? 'is-invalid' : ''}`}
                                id="newPassword"
                                value={newPassword}
                                onChange={handlePasswordChange}
                            />
                            {errors && <div className="forgot-password-error">{errors}</div>}
                        </div>
                    )}

                    {newPassword && (
                        <button type="button" className="forgot-password-btn w-100" onClick={handleSavePassword}>
                            حفظ كلمة المرور
                        </button>
                    )}
                </div>
            </div>
        </>
    )
}

export default ForgotPassword