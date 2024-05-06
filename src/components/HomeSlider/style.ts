import styled from 'styled-components'

export const HomeSliderWrapper = styled.div`
  margin: auto;
  --slide-height: 19rem;
  --slide-spacing: 1rem;
  --slide-size: 100%;
`

export const HomeSliderViewPort = styled.div`
  overflow: hidden;
`
export const HomeSliderContainer = styled.div`
  backface-visibility: hidden;
  display: flex;
  touch-action: pan-y;
  margin-left: calc(var(--slide-spacing) * -1);
`

export const HomeSliderContent = styled.div`
  flex: 0 0 var(--slide-size);
  min-width: 0;
  padding-left: var(--slide-spacing);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  @media screen and (min-width: 720px) {
    align-items: flex-start;
    flex-direction: row;
  }
`

export const HomeSliderContentTitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
`
export const HomeSliderContentTitle = styled.h2`
  color: #1a365d;
  font-weight: 900;
  text-align: left;
  font-size: 2.25rem;
  line-height: 1.5;
`
export const HomeSliderContentSubtitle = styled.p`
  color: #1a202c;
  font-size: 1.5rem;
  text-align: left;
  margin-top: 10px;
  font-weight: 500;
  line-height: 1.5;
`

export const HomeSliderContenImg = styled.img`
  max-width: 350px;
  width: 100%;
  object-fit: cover;
`

export const HomeSliderDotsContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 4rem 0;
`

export const HomeSliderDots = styled.span<{
  isSelected: boolean
}>`
  display: inline-block;
  height: 20px;
  width: 20px;
  border: 2px solid #2d7eff;
  border-radius: 100px;
  margin-right: 10px;
  /* background: white; */
  cursor: pointer;

  background: ${(props) =>
    props.isSelected
      ? 'linear-gradient(93.26deg, #21cafd 0.19%, #2d7eff 100%)'
      : '#fff'};
`
