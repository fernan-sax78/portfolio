import  Carousel  from '../../../../components/Carousel';
import ExternalPageNavFooter from '../../../../components/ExternalPageNavFooter';
import {photosChat as photos , descriptions} from './datas';
import { useTranslations } from 'next-intl';



function ChatAppInfo() {
 
  const t = useTranslations('ExternalPage');
  return (
    <ExternalPageNavFooter 
    title={t('title_chat')}
    linkGitHub={ descriptions.linkGitHub }
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

export default ChatAppInfo;
