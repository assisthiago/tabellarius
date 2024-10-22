import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import { useRouter } from "next/router";

export default function Message() {
    const { id } = useRouter().query;

    const breadcrumbs = [
        { title: "Mensagens", url: "/messages", active: false },
        { title: id, url: `/messages/${id}`, active: true }
    ];

    return (
        <Layout>
            <Breadcrumb items={breadcrumbs} />
        </Layout>
    )
}
