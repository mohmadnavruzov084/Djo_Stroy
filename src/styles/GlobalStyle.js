import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{font-family:Arial,Helvetica,sans-serif;color:#17191a;background:#fff;font-synthesis:none;text-rendering:optimizeLegibility}
  *{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;min-width:320px}button,input,textarea{font:inherit}button,a{cursor:pointer}a{text-decoration:none;color:inherit}
`
export const Container = styled.div`
  width:min(784px,calc(100% - 68px));margin:0 auto;
  @media(min-width:1100px){width:min(1180px,calc(100% - 80px))}
  @media(max-width:620px){width:calc(100% - 30px)}
`
export const Condensed = `'Arial Narrow','Roboto Condensed',Impact,sans-serif`
export const gold = '#f9bd09'
