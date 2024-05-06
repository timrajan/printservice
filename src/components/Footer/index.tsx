import * as S from './style'

const Footer = () => {
  return (
    <S.FooterWrapper>
      <p>&copy; {new Date().getFullYear()} All rights reserved</p>
    </S.FooterWrapper>
  )
}

export default Footer
