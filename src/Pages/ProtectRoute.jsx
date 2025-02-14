import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
    // localStorage من ال UserInfo استرجاع ال
    const userInfo = JSON.parse(localStorage.getItem('UserInfo'))

    // تحقق إذا كانت البيانات موجودة
    const isLoggedIn = userInfo !== null && userInfo.isLoggedIn === true

    // console.log('isLoggedIn:', isLoggedIn) //check

    if (!isLoggedIn) {
        return <Navigate to="/login" replace />
    }

    return children
}

export default ProtectedRoute