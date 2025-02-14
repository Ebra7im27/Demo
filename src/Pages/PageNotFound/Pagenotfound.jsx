import React from 'react';
import { Button } from 'react-bootstrap';
import './Pagenotfound.css';
// import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
    // const navigate = useNavigate()

    return (
        <div className="page-not-found container-fluid">
            <div className="row justify-content-center align-items-center text-center flex-md-row flex-column-reverse">
                <div className='col-md-6 col-12 order-md-1'>
                    <h1 className="error-code">خطأ !</h1>

                    <h2 className="error-message">الصفحة غير موجودة</h2>

                    <p className="error-description">
                        عذرًا، الصفحة التي تبحث عنها غير موجودة. قد تكون قد نُقلت أو حُذفت.
                    </p>

                    {/* This method is similar to the method used in the comment (navigate) */}
                    <Button variant="success" href="/" className="go-back-btn">
                        العودة إلى الصفحة الرئيسية
                    </Button>

                    {/* <Button onClick={() => navigate('/')} variant="success" className="go-back-btn">
                        العودة إلى الصفحة الرئيسية
                    </Button> */}
                </div>

                <div className="col-md-6 col-12 order-md-1">
                    <img src="/assets/404.svg" alt="Logo" className="login-error" width={400} />
                </div>
            </div>
        </div>
    )
}

export default PageNotFound