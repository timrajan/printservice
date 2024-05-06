import HomeSlider from './components/HomeSlider'
import landing1 from './assets/landing1.svg'
import landing2 from './assets/landing2.svg'
import landing3 from './assets/landing3.svg'
import FeaturesCard from './components/FeaturesCard'
import ContactUs from './components/ContactUs'
import Header from './components/Header'
import Footer from './components/Footer'
const App = () => {
  return (
    <div className='container'>
      <Header />
      <div>
        <HomeSlider />
        <FeaturesCard
          imgUrl={landing1}
          title='Extract data using Artificial Intelligence'
          subtitle='Our work on extracting data using Artificial Intelligence helps in quickly gather data from physical records'
        />

        <FeaturesCard
          imgUrl={landing3}
          title='Extract data to any formats to feed into your IT systems'
          subtitle='We help to provide you data in any format. You name it and we will work hard to provide you ranging from XML, JSON, PDF, TXT or word format'
          isReverse={true}
        />
        <FeaturesCard
          imgUrl={landing2}
          title='Support wide range of documents'
          subtitle='We cover from delicate paper records to hand written forms'
        />

        <ContactUs />
        <Footer />
      </div>
    </div>
  )
}

export default App
