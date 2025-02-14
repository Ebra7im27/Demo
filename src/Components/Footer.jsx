import { Link } from "react-router-dom"

function Footer() {

    return (
        <>
            <div className="container-fauild">
                <div className="bg-light d-flex justify-content-between p-4">
                    <div className="text-primary-emphasis">جامعة الأمير سطام بن عبدالعزيز.</div>
                    <Link to="/none" className="text-decoration-none text-primary">فريق العمل</Link>
                </div>
            </div>
        </>
    )

}

export default Footer