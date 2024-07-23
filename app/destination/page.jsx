import Destination from "@/components/Destination"

export const metadata = {
    title: 'Destination | VisitAfrica',
    description: 'page de offrant des descriptions sur les lieux mythiques offrant des souvenirs inoubliables',
    openGraph: {
        title: 'Destination | VisitAfrica',
        description: 'Page Destination ',
        images: ['./logo3.webp']
    }
}
export default function Page(){
    return <>
        <Destination/>
    </>
}