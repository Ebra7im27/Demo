// import React from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Link } from "react-router-dom";

// function n() {
//     const navItems = [
//         {
//             name: "الصفحة الرئيسية",
//             link: "/",
//             icon: "fas fa-home",
//         },
//         {
//             name: "العملاء",
//             link: "/customers",
//             icon: "fas fa-users",
//             subItems: [
//                 {
//                     name: "أنواع العملاء",
//                     link: "/customer-categories",
//                     icon: "fas fa-users-cog",
//                 },
//                 {
//                     name: "إضافة عميل",
//                     link: "/AddCustomer",
//                     icon: "fas fa-user-plus",
//                 },
//             ],
//         },
//         {
//             name: "القضايا",
//             link: "/cases",
//             icon: "fas fa-gavel",
//             subItems: [
//                 {
//                     name: "أنواع القضايا",
//                     link: "/CaseTypes",
//                     icon: "fas fa-balance-scale",
//                 },
//                 {
//                     name: "إضافة قضية",
//                     link: "/add-case",
//                     icon: "fas fa-plus-circle",
//                 },
//             ],
//         },
//         {
//             name: "الجلسات",
//             link: "/sessions",
//             icon: "fas fa-calendar-alt",
//         },
//         {
//             name: "المدفوعات",
//             link: "/payments",
//             icon: "fas fa-credit-card",
//             subItems: [
//                 {
//                     name: "تقارير المدفوعات",
//                     link: "/PaymentReports",
//                     icon: "fas fa-file-alt",
//                 },
//             ],
//         },
//         {
//             name: "الصور والملفات",
//             link: "/Attachments",
//             icon: "fas fa-image",
//         },
//         {
//             name: "المصروفات",
//             link: "/expenses",
//             icon: "fas fa-wallet",
//             subItems: [
//                 {
//                     name: "إضافة مصروف",
//                     link: "/add-expense",
//                     icon: "fas fa-plus",
//                 },
//                 {
//                     name: "إضافة تصنيف مصاريف",
//                     link: "/AddExpenseCategory",
//                     icon: "fas fa-plus",
//                 },
//             ],
//         },
//     ];

//     return (
//         <>
//             <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#fff" }}>
//                 <div className="container-fluid">
//                     <Link className="navbar-brand" to="/">
//                         <img src='../../public/assets/logo.png' alt="Logo" className="logo-img me-2" />
//                     </Link>
//                     <button
//                         className="btn btn-outline-secondary ms-2"
//                         type="button"
//                         style={{ color: "#1a237e", borderColor: "#f0f0f0" }}
//                     >
//                         <i className="fas fa-expand" style={{ color: "#1a237e" }}></i>
//                     </button>
//                     <button
//                         className="btn btn-outline-secondary ms-auto"
//                         type="button"
//                         data-bs-toggle="offcanvas"
//                         data-bs-target="#offcanvasSidebar"
//                         aria-controls="offcanvasSidebar"
//                         style={{ color: "#1a237e", borderColor: "#f0f0f0" }}
//                     >
//                         <i className="fas fa-bars" style={{ color: "#1a237e" }}></i>
//                     </button>
//                 </div>
//             </nav>

//             <div
//                 className="offcanvas offcanvas-end sidebar"
//                 tabIndex="-1"
//                 id="offcanvasSidebar"
//                 aria-labelledby="offcanvasSidebarLabel"
//                 style={{ width: "300px", backgroundColor: "#fff" }}
//             >
//                 <div className="offcanvas-body">
//                     <ul className="nav flex-column text-end">
//                         {navItems.map((item, index) => (
//                             <li key={index} className="nav-item sidebar-item">
//                                 {item.link ? (
//                                     <Link
//                                         to={item.link}
//                                         className="nav-link d-flex justify-content-between align-items-center fw-bold sidebar-link"
//                                         style={{ color: "#1a237e" }}
//                                     >
//                                         <i
//                                             className={`${item.icon} me-2 fs-5`}
//                                             style={{ color: "#1a237e" }}
//                                         ></i>
//                                         <span>{item.name}</span>
//                                     </Link>
//                                 ) : (
//                                     <span
//                                         className="nav-link d-flex justify-content-between align-items-center fw-bold sidebar-link"
//                                         style={{ color: "#1a237e" }}
//                                     >
//                                         <i
//                                             className={`${item.icon} me-2 fs-5`}
//                                             style={{ color: "#1a237e" }}
//                                         ></i>
//                                         <span>{item.name}</span>
//                                     </span>
//                                 )}

//                                 {item.subItems && (
//                                     <ul className="nav flex-column ms-3 sidebar-sublist">
//                                         {item.subItems.map((subItem, subIndex) => (
//                                             <li key={subIndex} className="nav-item sidebar-subitem">
//                                                 <Link
//                                                     to={subItem.link}
//                                                     className="nav-link d-flex justify-content-between align-items-center fw-bold sidebar-sublink"
//                                                     style={{ color: "#1a237e" }}
//                                                 >
//                                                     <i
//                                                         className={`${subItem.icon} me-2 fs-6`}
//                                                         style={{ color: "#1a237e" }}
//                                                     ></i>
//                                                     <span>{subItem.name}</span>
//                                                 </Link>
//                                             </li>
//                                         ))}
//                                     </ul>
//                                 )}
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//             </div>
//         </>
//     );
// }

// export default n;
