import  Carousel  from '../../components/Carousel';
import ExternalPageNavFooter from '../../components/ExternalPageNavFooter';
import {photosChat as photos , descriptions} from './datas';



function ChatAppInfo() {
 
  return (
    <ExternalPageNavFooter 
    title={descriptions.title}
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
