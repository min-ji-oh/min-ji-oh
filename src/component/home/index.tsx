import HomeEmail from './email'
import HomeMyInfo from './info'
import HomeStudy from './study'
import HomeVisual from './visual'

const HomeComponent = () => {
  return (
    <>
      <HomeVisual />
      <HomeMyInfo />
      <HomeStudy />
      <HomeEmail />
    </>
  )
}

export default HomeComponent
