import Image from 'next/image'
import Link from 'next/link'

export default function teams(){
    return(
        <div className="flex justify-center items-center flex-grow">
            <div className="m-auto grid grid-cols-4 gap-20">
                <Link href="/teams/KC">
                    <div><Image src="/teams/KC/KC.avif" alt="me" width="128" height="128" /></div>
                </Link>
                <Link href="/teams/BDS">
                    <div><Image src="/teams/BDS/BDS.avif" alt="me" width="128" height="128" /></div>
                </Link>
                <Link href="/teams/VITALITY">
                    <div><Image src="/teams/VITALITY/VITALITY.png" alt="me" width="128" height="128" /></div>
                </Link>
                <Link href="/teams/GAMEWARD">
                    <div><Image src="/teams/GAMEWARD/GAMEWARD.avif" alt="me" width="128" height="128" /></div>
                </Link>
                <Link href="/teams/GO">
                    <div><Image src="/teams/GO/GO.avif" alt="me" width="128" height="128" /></div>
                </Link>
                <Link href="/teams/LDLC">
                    <div><Image src="/teams/LDLC/LDLC.avif" alt="me" width="128" height="128" /></div>
                </Link>
                <Link href="/teams/MIRAGE">
                    <div><Image src="/teams/MIRAGE/MIRAGE.avif" alt="me" width="128" height="128" /></div>
                </Link>
                <Link href="/teams/MSF">
                    <div><Image src="/teams/MSF/MSF.avif" alt="me" width="128" height="128" /></div>
                </Link>
                <Link href="/teams/OPLON">
                    <div className='col-start-2 col-end-3'><Image src="/teams/OPLON/OPLON.avif" alt="me" width="128" height="128" /></div>
                </Link>
                <Link href="/teams/SOLARY">
                    <div className='col-start-3 col-end-4'><Image src="/teams/SOLARY/SOLARY.avif" alt="me" width="128" height="128" /></div>
                </Link>
            </div>
        </div>
    )
}