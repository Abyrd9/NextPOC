import styled from 'styled-components';
import {font} from './Styles';

const FooterStyle = styled.div`
  background-color: #1F2025;
  width: 100%;
  padding: 100px 0px;
  ${font(18, 200)}
  color: #fff;
  text-align: center;
`

const Footer = () => {
  return (
    <FooterStyle>
      Content.
    </FooterStyle>
  )
}

export default Footer;