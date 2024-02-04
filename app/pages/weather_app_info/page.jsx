import ExternalPageNavFooter from '../../components/ExternalPageNavFooter';
import  Carousel  from '../../components/Carousel';
import {photosWeatherApp as photos , descriptions } from './datas.js'

function WeatherApp() {
  return (
    <ExternalPageNavFooter
    title={descriptions.title}
    linkGitHub={ descriptions.linkGitHub === '' &&  '/'  }
    state = {descriptions.state} 
    >
      

      <Carousel>
        {photos.map(photo => (
          <img src={photo.url_photo} key={photo.id} />
        ))}
      </Carousel>




    </ExternalPageNavFooter>
  )
}

export default WeatherApp ; 
