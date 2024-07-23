import Contact from "@/components/Contact"

export const metadata = {
    title: 'Contact | VisitAfrica',
    description: 'formulaire de conatct pour obtenir des informations',
    openGraph: {
        title: 'Contact | VisitAfrica',
        description: 'Page Contact ',
        images: ['./logo3.webp']
    }
}
export default function Page(){
    return <>
        <Contact/>
    </>
}