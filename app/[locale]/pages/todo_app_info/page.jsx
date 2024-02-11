import ExternalPageNavFooter from '../../../../components/ExternalPageNavFooter.jsx';
import  Carousel  from '../../../../components/Carousel.jsx';
import { photosTodo as photos  , descriptions} from './data.js';
import { useTranslations } from 'next-intl';

function TodoApp() {
  const t = useTranslations('ExternalPage');
  return (
    <ExternalPageNavFooter
    title={t('title_todo')}
    linkGitHub={ descriptions.linkGitHub === '' ?  '/' : descriptions.linkGitHub  }
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

export default TodoApp;
