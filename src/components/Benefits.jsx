import styled from 'styled-components'
import { ShieldCheck, Star, CalendarDays, BadgeRussianRuble } from 'lucide-react'
import { Container, Condensed, gold } from '../styles/GlobalStyle'

const Section=styled.section`
  background:#171c20;color:#fff;padding:clamp(34px,4vw,50px) 0;margin-bottom:0;
`
const Label=styled.div`
  color:${gold};text-align:center;text-transform:uppercase;font-family:${Condensed};
  font-size:clamp(16px,1.3vw,20px);letter-spacing:.6px;margin-bottom:clamp(22px,2.2vw,30px);
`
const Grid=styled.div`
  display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:0;
  .item{min-height:78px;display:grid;grid-template-columns:48px 1fr;grid-template-rows:auto 1fr;column-gap:17px;row-gap:8px;padding:0 clamp(16px,2vw,28px);border-right:1px solid rgba(249,189,9,.46)}
  .item:first-child{padding-left:0}.item:last-child{border:0;padding-right:0}
  .icon{color:${gold};grid-row:1/3;padding-top:2px}.head{font-family:${Condensed};text-transform:uppercase;font-size:clamp(15px,1.2vw,18px)}
  .text{font-size:clamp(11px,.85vw,13px);line-height:1.5;color:#d9dcde;white-space:pre-line}
  @media(max-width:850px){grid-template-columns:1fr 1fr;gap:30px 0;.item:nth-child(2){border:0}.item:nth-child(3){padding-left:0}}
  @media(max-width:500px){grid-template-columns:1fr;gap:27px;.item,.item:first-child,.item:nth-child(3),.item:last-child{border:0;padding:0;min-height:0}}
`
const data=[[ShieldCheck,'Надёжность','Всегда на связи и выполняю\nработы в срок.'],[Star,'Качество','Проверенные материалы\nи профессиональный инструмент.'],[CalendarDays,'Опыт','Более 7 лет в ремонте\nи строительстве.'],[BadgeRussianRuble,'Честные цены','Без переплат и скрытых\nрасходов.']]
export default function Benefits(){return <Section id="about"><Container><Label>Почему выбирают меня</Label><Grid>{data.map(([BenefitIcon,title,text])=><div className="item" key={title}><span className="icon"><BenefitIcon size={38} strokeWidth={1.6}/></span><div className="head">{title}</div><div className="text">{text}</div></div>)}</Grid></Container></Section>}
