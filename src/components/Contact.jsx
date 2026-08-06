import styled from 'styled-components'
import { Phone, MessageCircle, Mail, MapPin } from 'lucide-react'
import { Container, Condensed, gold } from '../styles/GlobalStyle'
import constructionBg from '../assets/construction-footer.png'

const Section=styled.footer`
  min-height:clamp(310px,31vw,430px);color:#fff;position:relative;overflow:hidden;
  background:#272d30 url(${constructionBg}) center/cover no-repeat;
  &:before{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(14,18,20,.82),rgba(14,18,20,.64) 55%,rgba(14,18,20,.72))}
  &:after{content:'';position:absolute;z-index:0;left:0;right:0;top:0;height:52px;background:linear-gradient(180deg,#171c20 0%,rgba(23,28,32,.68) 32%,transparent 100%);pointer-events:none}
`
const Inner=styled(Container)`position:relative;z-index:1;padding:clamp(52px,6vw,80px) 0;`
const Heading=styled.div`
  .small{font-family:${Condensed};text-transform:uppercase;font-size:clamp(13px,1vw,16px);color:#d6d9da}
  .big{font-family:${Condensed};text-transform:uppercase;font-size:clamp(29px,3vw,44px);margin:7px 0 32px}
`
const Contacts=styled.div`
  display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;max-width:820px;
  .contact{min-height:70px;display:flex;align-items:center;gap:15px;padding:15px 18px;border:1px solid rgba(255,255,255,.2);border-radius:7px;background:rgba(8,12,14,.45);font-size:clamp(12px,1vw,15px);transition:.2s}
  a.contact:hover{border-color:${gold};background:rgba(8,12,14,.65)}
  .icon{flex:0 0 40px;width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:${gold};color:#171a1c}
  .label{display:block;color:#aeb4b7;font-size:11px;margin-bottom:4px}.value{font-weight:700}
  @media(max-width:620px){grid-template-columns:1fr;.contact{min-height:66px}}
`
function InstagramIcon(){return <svg width="21" height="21" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>}
export default function Contact(){return <Section id="contact"><Inner><Heading><div className="small">Остались вопросы?</div><div className="big">Свяжитесь со мной</div></Heading><Contacts><a className="contact" href="tel:+79297779644"><span className="icon"><Phone size={20}/></span><span><span className="label">Телефон</span><span className="value">+7 (929) 777-96-44</span></span></a><a className="contact" href="https://wa.me/79297779644" target="_blank" rel="noreferrer"><span className="icon"><MessageCircle size={21}/></span><span><span className="label">Мессенджер</span><span className="value">Написать в WhatsApp</span></span></a><a className="contact" href="mailto:djo_stroy@mail.ru"><span className="icon"><Mail size={20}/></span><span><span className="label">Электронная почта</span><span className="value">djo_stroy@mail.ru</span></span></a><div className="contact"><span className="icon"><MapPin size={20}/></span><span><span className="label">Зона работы</span><span className="value">Выезд по городу и области</span></span></div><a className="contact" href="https://instagram.com/Djo_Stroy" target="_blank" rel="noreferrer"><span className="icon"><InstagramIcon/></span><span><span className="label">Социальная сеть</span><span className="value">Instagram · Djo_Stroy</span></span></a></Contacts></Inner></Section>}
