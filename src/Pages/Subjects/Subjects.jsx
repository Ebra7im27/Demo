import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../../Components/Navbar";
import Footer from "../../Components/Footer";

function Subjects() {
    const [selectedSemester, setSelectedSemester] = useState("one")
    
    // const [selectedSemester, setSelectedSemester] = useState("two") // لو عاوز الفصل الدراسي الثاني هو الوضع الإفتراضي

    function SemesterOne() {
        return (
            <div className="container" style={{ marginBottom: "100px" }}>
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">إسم المادة</th>
                                    <th scope="col">الفصل الدراسي</th>
                                    <th scope="col">المحاضرات</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>برمجه الشبكات</td>
                                    <td>الفصل الدراسي الأول</td>
                                    <td>
                                        <div className="border border-0 bg-warning p-1 rounded" style={{ width: "140px", cursor: "pointer" }}>
                                            <i className="fas fa-eye text-light"></i>
                                            <span className="text-light" style={{ marginRight: "5px" }}>عرض المحاضرات</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>هندسة البرمجيات (2) </td>
                                    <td>الفصل الدراسي الأول</td>
                                    <td>
                                        <div className="border border-0 bg-warning p-1 rounded" style={{ width: "140px", cursor: "pointer" }}>
                                            <i className="fas fa-eye text-light"></i>
                                            <span className="text-light" style={{ marginRight: "5px" }}>عرض المحاضرات</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>الرؤية بالحاسب</td>
                                    <td>الفصل الدراسي الأول</td>
                                    <td>
                                        <div className="border border-0 bg-warning p-1 rounded" style={{ width: "140px", cursor: "pointer" }}>
                                            <i className="fas fa-eye text-light"></i>
                                            <span className="text-light" style={{ marginRight: "5px" }}>عرض المحاضرات</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>الذكاء الإصطناعي</td>
                                    <td>الفصل الدراسي الأول</td>
                                    <td>
                                        <div className="border border-0 bg-warning p-1 rounded" style={{ width: "140px", cursor: "pointer" }}>
                                            <i className="fas fa-eye text-light"></i>
                                            <span className="text-light" style={{ marginRight: "5px" }}>عرض المحاضرات</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    function SemesterTwo() {
        return (
            <div className="container" style={{ marginBottom: "100px" }}>
                <div className="row">
                    <div className="col-12">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">#</th>
                                    <th scope="col">إسم المادة</th>
                                    <th scope="col">الفصل الدراسي</th>
                                    <th scope="col">المحاضرات</th>
                                </tr>
                            </thead>
                            <tbody className="table-group-divider">
                                <tr>
                                    <th scope="row">1</th>
                                    <td>النظم الخبيرة</td>
                                    <td>الفصل الدراسي الثاني</td>
                                    <td>
                                        <div className="border border-0 bg-warning p-1 rounded" style={{ width: "140px", cursor: "pointer" }}>
                                            <i className="fas fa-eye text-light"></i>
                                            <span className="text-light" style={{ marginRight: "5px" }}>عرض المحاضرات</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">2</th>
                                    <td>الوسائط المتعددة</td>
                                    <td>الفصل الدراسي الثاني</td>
                                    <td>
                                        <div className="border border-0 bg-warning p-1 rounded" style={{ width: "140px", cursor: "pointer" }}>
                                            <i className="fas fa-eye text-light"></i>
                                            <span className="text-light" style={{ marginRight: "5px" }}>عرض المحاضرات</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">3</th>
                                    <td>تحليل وتصميم الخوارزميات</td>
                                    <td>الفصل الدراسي الثاني</td>
                                    <td>
                                        <div className="border border-0 bg-warning p-1 rounded" style={{ width: "140px", cursor: "pointer" }}>
                                            <i className="fas fa-eye text-light"></i>
                                            <span className="text-light" style={{ marginRight: "5px" }}>عرض المحاضرات</span>
                                        </div>
                                    </td>
                                </tr>
                                <tr>
                                    <th scope="row">4</th>
                                    <td>بناء المترجمات</td>
                                    <td>الفصل الدراسي الثاني</td>
                                    <td>
                                        <div className="border border-0 bg-warning p-1 rounded" style={{ width: "140px", cursor: "pointer" }}>
                                            <i className="fas fa-eye text-light"></i>
                                            <span className="text-light" style={{ marginRight: "5px" }}>عرض المحاضرات</span>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        )
    }

    return (
        <div className="bg-light">
            <Header />

            <div className="container mb-5" style={{ marginTop: "100px" }}>
                <h2 className="text-primary-emphasis">الأخبار</h2>
                <Link to='/' className="mb-2 text-decoration-none text-primary-emphasis">
                    <i className="fas fa-home text-primary-emphasis"></i>&nbsp;الرئيسية
                </Link>
                <span> - المواد الدراسية </span>
            </div>

            <div className="container">
                <div className="btn-group" role="group" aria-label="Basic radio toggle button group">
                    <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio1"
                        autoComplete="off"
                        checked={selectedSemester === "one"}
                        onChange={() => setSelectedSemester("one")}
                    />
                    <label className="btn btn-outline-primary rounded border-0" htmlFor="btnradio1">الفصل الدراسي الأول</label>

                    <input
                        type="radio"
                        className="btn-check"
                        name="btnradio"
                        id="btnradio2"
                        autoComplete="off"
                        checked={selectedSemester === "two"}
                        onChange={() => setSelectedSemester("two")}
                    />
                    <label className="btn btn-outline-primary rounded border-0" htmlFor="btnradio2">الفصل الدراسي الثاني</label>
                </div>
                <hr />
            </div>

            {selectedSemester === "one" ? <SemesterOne /> : <SemesterTwo />}

            <Footer />
        </div>
    )
}

export default Subjects