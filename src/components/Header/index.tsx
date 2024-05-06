import Logo from '../../assets/logo.png'
import * as S from './style'

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderLogo>
        <img src={Logo} alt='Two Lines Technology Pty Ltd' />
      </S.HeaderLogo>
      <S.HeaderNav>
        <ul>
          <li>
            <a href='#contact-us'>Contact Us</a>
          </li>
        </ul>
      </S.HeaderNav>
    </S.HeaderWrapper>
  )
}

export default Header
