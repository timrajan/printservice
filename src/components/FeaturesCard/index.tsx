import * as S from './style'

interface IFeaturesCard {
  imgUrl: string
  title: string
  subtitle: string
  isReverse?: boolean
}

const FeaturesCard = ({
  imgUrl,
  title,
  subtitle,
  isReverse = false
}: IFeaturesCard) => {
  return (
    <S.FeaturesCardWrapper isReverse={isReverse}>
      <img src={imgUrl} alt='Feature' />
      <S.FeaturesTitleWrapper>
        <S.FeatureTitle>{title}</S.FeatureTitle>
        <S.FeatureSubTitle>{subtitle}</S.FeatureSubTitle>
      </S.FeaturesTitleWrapper>
    </S.FeaturesCardWrapper>
  )
}

export default FeaturesCard
