import { Nav as NavRB } from "react-bootstrap";

export default function Nav() {
    return (
        <NavRB
            className="shadow flex-column sidebar-min-vh p-4"
            variant="pills"
        >
            <NavRB.Link active>Dashboard</NavRB.Link>
            <NavRB.Link>Link</NavRB.Link>
            <NavRB.Link>Link</NavRB.Link>
        </NavRB>
    )
}
