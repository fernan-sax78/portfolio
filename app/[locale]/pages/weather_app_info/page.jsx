import ExternalPageNavFooter from '../../../../components/ExternalPageNavFooter.jsx';
import  Carousel  from '../../../../components/Carousel';
import {photosWeatherApp as photos , descriptions } from './datas.js';
import { useTranslations } from 'next-intl';

function WeatherApp() {
  const t = useTranslations('ExternalPage');
  return (
    <ExternalPageNavFooter
    title={t('title_weather')}
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
