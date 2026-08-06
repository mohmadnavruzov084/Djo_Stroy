import styled from 'styled-components'
import { House, Wrench, Axe, Tractor, Search, Truck, Trash2 } from 'lucide-react'
import { Container, Condensed, gold } from '../styles/GlobalStyle'

const Section = styled.section`
  padding: clamp(46px, 6vw, 82px) 0;
  background: #fff;
`
const Label = styled.div`
  margin-bottom: 10px;text-align:center;text-transform:uppercase;color:${gold};
  font-size:clamp(10px,.75vw,13px);letter-spacing:3px;font-weight:800;
`
const Title = styled.h2`
  margin:0 0 clamp(24px,3vw,38px);text-align:center;text-transform:uppercase;
  font-family:${Condensed};font-size:clamp(24px,2.2vw,34px);
`
const Grid = styled.div`
  display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:clamp(12px,1.4vw,20px);
  @media(max-width:820px){grid-template-columns:repeat(2,minmax(0,1fr))}
  @media(max-width:540px){grid-template-columns:1fr}
`
const Card = styled.article`
  min-height:clamp(175px,15vw,215px);border:1px solid #e4e4e4;border-radius:8px;
  padding:clamp(24px,2.2vw,32px) clamp(20px,2vw,28px);background:#fff;
  box-shadow:0 4px 18px rgba(13,18,20,.05);transition:.2s ease;
  &:hover{transform:translateY(-3px);box-shadow:0 10px 28px rgba(13,18,20,.09)}
  .icon{width:48px;height:48px;display:grid;place-items:center;color:${gold};background:#15191c;border-radius:7px;margin-bottom:19px}
  .name{font-family:${Condensed};font-size:clamp(15px,1.25vw,18px);line-height:1.2;text-transform:uppercase;margin:0 0 11px;white-space:pre-line}
  .desc{font-size:clamp(12px,.9vw,14px);line-height:1.55;margin:0;color:#4b4f51}
  @media(max-width:540px){min-height:auto;display:grid;grid-template-columns:48px 1fr;column-gap:17px;.icon{grid-row:1/3;margin:0}.name{align-self:end}.desc{grid-column:2}}
`
const data = [
  [House,'Ремонт и строительство\nпод ключ','Полный цикл работ: от идеи до готового объекта. Качество и сроки под контролем.'],
  [Wrench,'Мастер на час','Бытовые и технические задачи: мелкий ремонт, установка и сборка.'],
  [Axe,'Спил деревьев','Аккуратный спил деревьев любой сложности. Вывоз и уборка включены.'],
  [Tractor,'Покос травы','Покос травы на участках любой площади. Быстро, чисто и аккуратно.'],
  [Search,'Оценка недвижимости','Профессиональная оценка квартир, домов и участков для любых целей.'],
  [Truck,'Доставка стройматериалов','Доставка строительных материалов в срок от проверенных поставщиков.'],
  [Trash2,'Вывоз строительного мусора','Быстро и недорого вывезу строительный мусор любых объёмов.'],
]
export default function Services(){return <Section id="services"><Container><Label>Мои услуги</Label><Title>Решаю широкий спектр задач</Title><Grid>{data.map(([ServiceIcon,name,desc])=><Card key={name}><span className="icon"><ServiceIcon size={26} strokeWidth={1.8}/></span><h3 className="name">{name}</h3><p className="desc">{desc}</p></Card>)}</Grid></Container></Section>}
