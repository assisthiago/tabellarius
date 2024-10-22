import Breadcrumb from "@/components/Breadcrumb";
import Layout from "@/components/Layout";
import Link from "next/link";
import { Stack } from 'react-bootstrap';

export default function Custom404() {
    const breadcrumbs = [{ title: ":(", url: "/", active: true }];

    return (
        <Layout>
            <Breadcrumb items={breadcrumbs} />
            <Stack direction="vertical" className="mt-5 text-center" gap={5}>
                <h1 className="display-1 m-0 fw-bolder">Eita!</h1>
                <div>
                    <small className="text-muted">500</small>
                    <h1 className="display-4 m-0 fw-lighter text-muted">Erro Interno do Servidor.</h1>
                </div>
                <Link
                    href="/"
                    className="text-decoration-none"
                >
                    Voltar
                </Link>
            </Stack>
        </Layout>
    )
}
