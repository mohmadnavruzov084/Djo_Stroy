import styled from 'styled-components'
import heroBackground from '../assets/hero-clean-torso.png'
import mobileConstructionBackground from '../assets/construction-footer.png'
import { Container, Condensed, gold } from '../styles/GlobalStyle'
import Icon from './Icon'

const Section = styled.section`
  width:100%;height:clamp(520px,48vw,650px);color:#fff;position:relative;overflow:hidden;
  background:#090d0f url(${heroBackground}) center/cover no-repeat;
  @media(max-width:700px){
    height:650px;background-image:url(${mobileConstructionBackground});background-position:32% center;
    &:before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(7,10,11,.86),rgba(7,10,11,.58)),linear-gradient(180deg,rgba(7,10,11,.08) 0%,rgba(7,10,11,.22) 58%,#090d0f 93%)}
  }
`
const Inner = styled(Container)`position:relative;height:100%`
const Copy = styled.div`
  position:relative;z-index:1;width:clamp(455px,42vw,610px);padding-top:clamp(35px,4vw,62px);
  h1{font-family:${Condensed};font-size:clamp(39px,3.35vw,56px);line-height:1.08;text-transform:uppercase;margin:0 0 clamp(17px,1.5vw,24px);letter-spacing:.2px}
  h1 span{display:block;color:${gold};font-weight:400;margin-top:5px}
  .lead{font-size:clamp(11px,.95vw,16px);line-height:1.4;margin:0 0 clamp(24px,2vw,32px)}
  .facts{display:flex;gap:clamp(28px,3vw,45px);margin-bottom:clamp(23px,2vw,31px)}
  .fact{display:flex;gap:9px;align-items:center;font-size:clamp(9px,.8vw,12px);line-height:1.35}.fact svg{color:${gold}}
  .buttons{display:flex;gap:12px}.buttons button{height:clamp(40px,3.5vw,52px);padding:0 clamp(23px,2vw,31px);border:1px solid #fff;border-radius:2px;background:transparent;color:#fff;font-size:clamp(9px,.8vw,12px);font-weight:700;display:flex;align-items:center;justify-content:center}
  .buttons button:first-child{background:${gold};border-color:${gold};color:#151515;width:clamp(145px,13vw,190px)}
  @media(max-width:700px){padding-top:108px;width:100%;h1{font-size:39px}.lead{font-size:13px}.fact{font-size:11px}}
  @media(max-width:420px){padding-top:104px;h1{font-size:33px}.facts{gap:15px;flex-wrap:wrap}}
`
const Note = styled.div`
  position:absolute;right:-11px;bottom:38px;width:clamp(157px,14vw,205px);height:auto;min-height:92px;border:1px solid rgba(255,255,255,.3);border-radius:5px;background:rgba(8,10,11,.76);padding:17px 12px 16px 42px;font-size:clamp(8px,.72vw,11px);line-height:1.55;z-index:2;backdrop-filter:blur(5px);
  svg{position:absolute;left:13px;top:16px}.gold{color:${gold};font-weight:700}
  @media(max-width:850px){right:15px;bottom:25px;width:205px}
  @media(max-width:700px){left:0;right:0;bottom:16px;width:100%;min-height:82px;padding:14px 18px 13px 54px;font-size:11px;display:block;svg{left:18px;top:16px}}
`

export default function Hero({header}){
  return <Section id="home"><Inner>{header}<Copy><h1>Ремонт и строительство<span>под ключ</span></h1><p className="lead">Качественные услуги для дома, участка и бизнеса.<br/>Решаем задачи любой сложности — быстро и надежно.</p><div className="facts"><div className="fact"><Icon name="calendar" size={18}/>Опыт работы<br/>более 7 лет</div><div className="fact"><Icon name="shield" size={18}/>Гарантия<br/>на все работы</div><div className="fact"><Icon name="truck" size={18}/>Выезд<br/>в день обращения</div></div><div className="buttons"><button onClick={()=>window.open('https://wa.me/79297779644','_blank','noopener,noreferrer')}>➤ &nbsp; Оставить заявку</button><button onClick={()=>{window.location.href='tel:+79297779644'}}><Icon name="phone" size={13}/> &nbsp; Позвонить</button></div></Copy><Note><Icon name="shield" size={23}/>Работаю на результат,<br/>а не на количество.<br/><span className="gold">Ваша задача — моя<br/>ответственность.</span></Note></Inner></Section>
}
