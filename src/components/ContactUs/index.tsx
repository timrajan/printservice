import * as S from './style'

const ContactUs = () => {
  return (
    <S.ContactUsWrapper>
      <S.ContactUsTitle>Contact Us</S.ContactUsTitle>
      <S.ContactUsSubtitle>We would love to hear from you</S.ContactUsSubtitle>

      <S.ContactUsContentWrapper id='contact-us'>
        <S.ContactUsContentTitle>Email us</S.ContactUsContentTitle>
        <S.ContactUsContent>
          For technical/business related questions/issues: &ensp;
          <S.ContactUsContentLink href='mailto:contact@twolinestech.com'>
            contact@twolinestech.com
          </S.ContactUsContentLink>
        </S.ContactUsContent>
      </S.ContactUsContentWrapper>
    </S.ContactUsWrapper>
  )
}

export default ContactUs
