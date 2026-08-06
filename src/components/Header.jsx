import { useState } from 'react'
import styled from 'styled-components'
import { gold } from '../styles/GlobalStyle'
import Icon from './Icon'
import logo from '../assets/djostroy-logo.svg'

const Bar=styled.header`
  height:clamp(82px,7vw,96px);display:flex;align-items:center;color:white;position:relative;z-index:2;gap:clamp(20px,2.4vw,38px);
  @media(max-width:920px){position:fixed;z-index:103;top:0;left:0;right:0;width:100%;height:76px;padding:4px 18px;background:${({$open})=>$open?'rgba(9,13,15,.96)':'rgba(9,13,15,.72)'};border-bottom:1px solid rgba(255,255,255,.1);backdrop-filter:blur(14px);-webkit-backdrop-filter:blur(14px);box-shadow:0 8px 28px rgba(0,0,0,.25);transition:background .25s}
`
const Logo=styled.a`
  display:flex;align-items:center;justify-content:center;flex:0 0 auto;width:clamp(64px,5.6vw,82px);height:clamp(72px,6.4vw,90px);position:relative;z-index:105;
  img{display:block;width:100%;height:100%;object-fit:contain}
  @media(max-width:920px){width:60px;height:68px}
`
const Nav=styled.nav`
  display:flex;align-items:center;justify-content:center;gap:clamp(18px,2vw,31px);font-size:clamp(11px,.82vw,14px);white-space:nowrap;flex:1;
  a{color:#f3f4f4;transition:.2s}a:hover{color:${gold}}
  @media(max-width:920px){display:none}
`
const Phone=styled.a`
  margin-left:auto;display:flex;gap:12px;align-items:flex-start;color:${gold};flex:0 0 auto;
  .number{color:#fff;font-weight:700;font-size:clamp(12px,.95vw,15px);white-space:nowrap}
  .hours{font-size:clamp(9px,.68vw,11px);color:${gold};margin-top:6px;font-weight:500;letter-spacing:.1px}
  @media(min-width:921px){position:absolute;right:-68px;top:25px;margin-left:0}
  @media(max-width:920px){display:none}
`
const Burger=styled.button`
  display:none;position:absolute;z-index:104;right:18px;top:15px;width:46px;height:46px;border:1px solid rgba(249,189,9,.55);border-radius:7px;background:rgba(12,16,18,.72);padding:0;
  span{position:absolute;left:11px;width:22px;height:2px;border-radius:2px;background:${gold};transition:.25s}
  span:nth-child(1){top:${({$open})=>$open?'21px':'14px'};transform:${({$open})=>$open?'rotate(45deg)':'none'}}
  span:nth-child(2){top:21px;opacity:${({$open})=>$open?0:1}}
  span:nth-child(3){top:${({$open})=>$open?'21px':'28px'};transform:${({$open})=>$open?'rotate(-45deg)':'none'}}
  @media(max-width:920px){display:block}
`
const MobileMenu=styled.div`
  display:none;position:fixed;z-index:102;inset:0;
  background:linear-gradient(180deg,rgba(9,13,15,.52) 0%,rgba(9,13,15,.62) 60%,rgba(9,13,15,.76) 100%);
  backdrop-filter:blur(20px) saturate(.72);-webkit-backdrop-filter:blur(20px) saturate(.72);
  padding:96px 24px 32px;
  opacity:${({$open})=>$open?1:0};visibility:${({$open})=>$open?'visible':'hidden'};transition:.25s;
  nav{display:flex;flex-direction:column;align-items:center;gap:7px}nav a{width:min(100%,420px);padding:14px 18px;border:1px solid rgba(255,255,255,.12);border-radius:5px;background:rgba(8,12,14,.3);text-align:center;font-family:'Arial Narrow',Arial,sans-serif;font-size:20px;text-transform:uppercase;color:#fff;text-shadow:0 2px 8px #000}nav a:hover{color:${gold};border-color:rgba(249,189,9,.55);background:rgba(8,12,14,.55)}
  .mobile-actions{display:grid;gap:12px;width:min(100%,420px);margin:30px auto 0}.mobile-actions a{display:flex;align-items:center;justify-content:center;min-height:48px;border-radius:5px;font-size:14px;font-weight:700}.call{border:1px solid ${gold};color:${gold}}.whatsapp{background:${gold};color:#141718}
  @media(max-width:920px){display:block}
`

export default function Header(){const [open,setOpen]=useState(false);const close=()=>setOpen(false);return <><Bar $open={open}><Logo href="#home" onClick={close} aria-label="DJOSTROY — на главную"><img src={logo} alt="DJOSTROY"/></Logo><Nav><a href="#home">Главная</a><a href="#services">Услуги</a><a href="#about">Обо мне</a><a href="#about">Преимущества</a><a href="#contact">Отзывы</a><a href="#contact">Контакты</a></Nav><Phone href="tel:+79297779644"><Icon name="phone" size={18}/><span className="number">+7 (929) 777-96-44<div className="hours">Ежедневно с 8:00 до 20:00</div></span></Phone><Burger type="button" $open={open} onClick={()=>setOpen(value=>!value)} aria-label={open?'Закрыть меню':'Открыть меню'} aria-expanded={open}><span/><span/><span/></Burger></Bar><MobileMenu $open={open} aria-hidden={!open}><nav><a onClick={close} href="#home">Главная</a><a onClick={close} href="#services">Услуги</a><a onClick={close} href="#about">Обо мне</a><a onClick={close} href="#about">Преимущества</a><a onClick={close} href="#contact">Отзывы</a><a onClick={close} href="#contact">Контакты</a></nav><div className="mobile-actions"><a className="call" href="tel:+79297779644">Позвонить</a><a className="whatsapp" href="https://wa.me/79297779644" target="_blank" rel="noreferrer">Написать в WhatsApp</a></div></MobileMenu></>}
