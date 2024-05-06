import { useDotButton } from './SliderButton'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import HeroImg from '../../assets/hero.jpg'

import * as S from './style'

const sliderData = [
  {
    id: 'slider-2wwe654',
    title: 'Convert your paper documents into any digital data formats',
    subtitle:
      'Need your data in XML, JSON, Word , TXT or PDF. You name it and we will provide you'
  },
  {
    id: 'slider-1ddsg423',
    title: 'Go paperless with easy scanning and smart storage',
    subtitle: 'Use our portal to access the scanned files anywhere, anytime'
  },
  {
    id: 'slider-3hjjh789',
    title: 'Remediate your paper records into readable, accessible format',
    subtitle:
      'Make your digital records accessible for everyone including people with disability to access'
  }
]

const HomeSlider = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({}, [
    Autoplay({
      playOnInit: true,
      delay: 10000
    })
  ])

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi)

  return (
    <S.HomeSliderWrapper>
      <S.HomeSliderViewPort ref={emblaRef}>
        <S.HomeSliderContainer>
          {sliderData.map((sd) => (
            <S.HomeSliderContent key={sd.id}>
              <S.HomeSliderContentTitleWrapper>
                <S.HomeSliderContentTitle>{sd.title}</S.HomeSliderContentTitle>
                <S.HomeSliderContentSubtitle>
                  {sd.subtitle}
                </S.HomeSliderContentSubtitle>
              </S.HomeSliderContentTitleWrapper>
              <S.HomeSliderContenImg src={HeroImg} />
            </S.HomeSliderContent>
          ))}
        </S.HomeSliderContainer>
      </S.HomeSliderViewPort>

      <S.HomeSliderDotsContainer>
        {scrollSnaps.map((_, index) => (
          <S.HomeSliderDots
            key={index}
            onClick={() => onDotButtonClick(index)}
            isSelected={index === selectedIndex}
          />
        ))}
      </S.HomeSliderDotsContainer>
    </S.HomeSliderWrapper>
  )
}

export default HomeSlider
