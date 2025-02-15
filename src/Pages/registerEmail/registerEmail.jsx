import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function RegisterEmail() {
    // حالة النموذج
    const [formData, setFormData] = useState({
        name: '',
        division: '',
        band: '',
        phoneNumber: '',
        universityEmail: '',
        universityEmail2: '',
        password: '',
        confirmPassword: ''
    })

    // حالة الموافقة على الشروط والأحكام
    const [isAgreed, setIsAgreed] = useState(false)

    // تحميل البيانات من localStorage عند تحميل المكون
    useEffect(() => {
        const UserInfo = JSON.parse(localStorage.getItem("UserInfo"))

        if (UserInfo) {
            setFormData(prevState => ({
                ...prevState,
                name: UserInfo.Name || '', // الاسم
                division: UserInfo.Division || '', // الشعبة
                band: UserInfo.Band || '' // الفرقة
            }))
        }
    }, [])

    // تحديث حالة النموذج عند تغيير الحقول
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({
            ...formData,
            [name]: value
        })
    }

    // تحديث حالة الموافقة على الشروط والأحكام
    const handleAgreementChange = (e) => {
        setIsAgreed(e.target.checked)
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
                <h2 className="text-primary-emphasis">طلب بريد جامعي</h2>
                <Link to='/' className="mb-2 text-decoration-none text-primary-emphasis">
                    <i className="fas fa-home text-primary-emphasis"></i>&nbsp;الرئيسية
                </Link>
                <span> - البيانات الشخصية</span>
            </div>

            <div className="container">
                <div className="row">
                    <div className="col-12 mt-5">
                        <div className="card shadow">
                            <div className="card-body">
                                <h3 className="card-title mb-4 text-info">
                                    <i className="fas fa-envelope-open-text text-info"></i>&nbsp; طلب بريد جامعي
                                </h3>
                                <hr />
                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label htmlFor="name" className="form-label fw-bold">إسم الطالب</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            disabled
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="division" className="form-label fw-bold">الشعبة</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="division"
                                            name="division"
                                            value={formData.division}
                                            onChange={handleChange}
                                            disabled
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="band" className="form-label fw-bold">الفرقة</label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="band"
                                            name="band"
                                            value={formData.band}
                                            onChange={handleChange}
                                            disabled
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="phoneNumber" className="form-label fw-bold">
                                            رقم الهاتف <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="tel"
                                            className="form-control"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="universityEmail" className="form-label fw-bold">
                                            البريد الإلكتروني <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="universityEmail"
                                            name="universityEmail"
                                            value={formData.universityEmail}
                                            onChange={handleChange}
                                            placeholder="example@example.com"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="universityEmail2" className="form-label fw-bold">
                                            البريد الجامعي <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="email"
                                            className="form-control"
                                            id="universityEmail2"
                                            name="universityEmail2"
                                            value={formData.universityEmail2}
                                            onChange={handleChange}
                                            placeholder="@metmans.edu.eg"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="password" className="form-label fw-bold">
                                            كلمة المرور <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="password"
                                            name="password"
                                            value={formData.password}
                                            onChange={handleChange}
                                            placeholder="يجب أن تكون كلمة المرور 8 أحرف على الأقل، وتحتوي على حرف كبير، وحرف صغير، ورقم، وعلامة خاصة."
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label htmlFor="confirmPassword" className="form-label fw-bold">
                                            تأكيد كلمة المرور <span className="text-danger">*</span>
                                        </label>
                                        <input
                                            type="password"
                                            className="form-control"
                                            id="confirmPassword"
                                            name="confirmPassword"
                                            value={formData.confirmPassword}
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    <div className="mt-3">
                                        <h2 className="text-primary fw-bold">شروط إنشاء الإيميل الجامعي</h2>
                                        <ol>
                                            <li className="text-secondary">التأكد من ملئ البيانات السابقة بشكل صحيح.</li>
                                            <li className="text-secondary">أي بيانات خاطئة تقع على مسئولية مقدم الطلب.</li>
                                            <li className="text-secondary">التعامل بالبريد الجامعي في الأغراض العلمية و التعليمية فقط.</li>
                                            <li className="text-secondary">يحذر التعامل مع الهيئات و المؤسسات والحصول على خدمات و إعادة بيعها باستخدام البريد الجامعي.</li>
                                            <li className="text-secondary">أي تعاملات بالبريد الجامعي تقع على مسئولية الطالب دون أدنى مسئولية على المعهد تجاه الغير.</li>
                                            <li className="text-secondary">أي مشكلة قانونية يتحملها صاحب البريد الجامعي وليس المعهد.</li>
                                        </ol>
                                        <div className="form-check mb-3 d-flex align-items-center">
                                            <input
                                                className="form-check-input ms-2"
                                                type="checkbox"
                                                id="flexCheckDefault"
                                                onChange={handleAgreementChange}
                                            />
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                أوافق على جميع الشروط والأحكام
                                            </label>
                                        </div>
                                    </div>

                                    <hr />
                                    <div className="d-flex justify-content-center">
                                        {isAgreed && (
                                            <button type="submit" className="btn text-light bg-primary">
                                                إرسال
                                                <i className="fas fa-paper-plane me-2"></i>
                                            </button>
                                        )}
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    )
}

export default RegisterEmail