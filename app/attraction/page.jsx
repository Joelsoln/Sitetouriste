import Attraction from "@/components/Attraction"

export const metadata = {
    title: 'Attraction | VisitAfrica',
    description: 'page qui montre les meilleurs endroits a visiter en Afrique',
    openGraph: {
        title: 'Attraction | VisitAfrica',
        description: 'Page Attraction ',
        images: ['./logo3.webp']
    }
}

export default function Page(){
    return <>
        <Attraction/>
    </>
}