import Breadcrumb from 'react-bootstrap/Breadcrumb';

export default function Breadcrumbs({ items = [] }) {
    return (
        <Breadcrumb>
            {items.map((item, index) => (
                <Breadcrumb.Item
                    href={item.url}
                    key={index}
                    active={item.active}
                >
                    {item.title}
                </Breadcrumb.Item>
            ))}
        </Breadcrumb>
    );
}
