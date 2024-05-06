import styled from 'styled-components'

export const FeaturesCardWrapper = styled.div<{
  isReverse: boolean
}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  padding: 1rem 0;

  @media (min-width: 720px) {
    gap: 100px;
    flex-direction: ${(props) => (props.isReverse ? 'row-reverse' : 'row')};
  }

  & img {
    width: 320px;
    height: 320px;
    object-fit: cover;
    @media (min-width: 720px) {
      width: 350px;
      height: 350px;
    }
  }
`

export const FeaturesTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
`

export const FeatureTitle = styled.p`
  text-align: left;
  color: #1a365d;
  font-weight: 700;
  line-height: 1.3;
  font-size: 1.5rem;
`
export const FeatureSubTitle = styled.p`
  text-align: left;
  line-height: 1.5;
  font-size: 1.2rem;
  font-weight: 400;
  color: #2d3748;
`
