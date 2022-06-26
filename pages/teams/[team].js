import { useRouter } from 'next/router'
import Image from 'next/image'

export default function team(){
      try {
            const router = useRouter()
            const team = router.query.team;
            const res = _getImgToDisplay(team);
            return (
                  <div className="grid grid-cols-5 gap-5 h-1/5">
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                              <Image
                              alt='Mountains'
                              src={res.top}
                              layout='fill'
                              objectFit='contain'
                              />
                        </div>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                              <Image
                              alt='Mountains'
                              src={res.jungler}
                              layout='fill'
                              objectFit='contain'
                              />
                        </div>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                              <Image
                              alt='Mountains'
                              src={res.mid}
                              layout='fill'
                              objectFit='contain'
                              />
                        </div>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}>
                              <Image
                              alt='Mountains'
                              src={res.adc}
                              layout='fill'
                              objectFit='contain'
                              />
                        </div>
                        <div style={{width: '100%', height: '100%', position: 'relative'}}><Image src={res.support} layout='fill'objectFit='contain' /></div>
                  </div>
            );
      } catch (error) {
            
      }
      
}

function _getImgToDisplay(team){
      switch(team){
            case "BDS":
                  return{
                        top: "/teams/BDS/ADAM.avif",
                        jungler: "/teams/BDS/SHEO.avif",
                        mid: "/teams/BDS/REEKER.avif",
                        adc: "/teams/BDS/CROWNIE.avif",
                        support: "/teams/BDS/DREAMER-ACE.avif"
                  }
            case "GAMEWARD":
                  return{
                        top: "/teams/GAMEWARD/MELONIK.avif",
                        jungler: "/teams/GAMEWARD/AKABANE.avif",
                        mid: "/teams/GAMEWARD/CZEKOLAD.avif",
                        adc: "/teams/GAMEWARD/INNAXE.avif",
                        support: "/teams/GAMEWARD/KAMILIUS.avif"
                  }
            case "GO":
                  return{
                        top: "/teams/GO/NUQ.png",
                        jungler: "/teams/GO/KARIMKT.avif",
                        mid: "/teams/GO/RONALDO.avif",
                        adc: "/teams/GO/SMILEY.avif",
                        support: "/teams/GO/VEIGNOREM.avif"
                  }
            case "KC":
                  return{
                        top: "/teams/KC/CABOCHARD.avif",
                        jungler: "/teams/KC/113.avif",
                        mid: "/teams/KC/SAKEN.avif",
                        adc: "/teams/KC/REKKLES.avif",
                        support: "/teams/KC/HANTERA.avif"
                  }
            case "LDLC":
                  return{
                        top: "/teams/LDLC/RAGNER.avif",
                        jungler: "/teams/LDLC/YIKE.avif",
                        mid: "/teams/LDLC/EIKA.avif",
                        adc: "/teams/LDLC/EXAKICK.avif",
                        support: "/teams/LDLC/DOSS.avif"
                  }
            case "MIRAGE":
                  return{
                        top: "/teams/MIRAGE/BADLULU.avif",
                        jungler: "/teams/MIRAGE/MEMENTO.avif",
                        mid: "/teams/MIRAGE/RANGJUN.avif",
                        adc: "/teams/MIRAGE/CODYSUN.avif",
                        support: "/teams/MIRAGE/RAXXO.avif"
                  }
            case "MSF":
                  return{
                        top: "/teams/MSF/KACKOS.avif",
                        jungler: "/teams/MSF/ZANZARAH.avif",
                        mid: "/teams/MSF/CZAJEK.avif",
                        adc: "/teams/MSF/WOOLITE.avif",
                        support: "/teams/MSF/VANDER.avif"
                  }
            case "OPLON":
                  return{
                        top: "/teams/OPLON/DARLIK.avif",
                        jungler: "/teams/OPLON/SHERNFIRE.avif",
                        mid: "/teams/OPLON/PENG.avif",
                        adc: "/teams/OPLON/XICOR.png",
                        support: "/teams/OPLON/TWIITZ.avif"
                  }
            case "SOLARY":
                  return{
                        top: "/teams/SOLARY/KIO.avif",
                        jungler: "/teams/SOLARY/DJOKO.avif",
                        mid: "/teams/SOLARY/SCARLET.avif",
                        adc: "/teams/SOLARY/ASZA.avif",
                        support: "/teams/SOLARY/STEELBACK.avif"
                  }
            case "VITALITY":
                  return{
                        top: "/teams/VITALITY/SZYGENDA.avif",
                        jungler: "/teams/VITALITY/SKEANZ.avif",
                        mid: "/teams/VITALITY/DIPLEX.avif",
                        adc: "/teams/VITALITY/JESKLA.avif",
                        support: "/teams/VITALITY/JACKTROLL.avif"
                  }
      }
}