import { Breadcrumb as BreadcrumbRB } from "react-bootstrap";

export default function Breadcrumb() {
    return (
        <BreadcrumbRB>
            {/* <BreadcrumbRB.Item href="#">Dashboard</BreadcrumbRB.Item>
            <BreadcrumbRB.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
                Library
            </BreadcrumbRB.Item> */}
            <BreadcrumbRB.Item active>Dashboard</BreadcrumbRB.Item>
        </BreadcrumbRB>
    )
}

