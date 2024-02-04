import ExternalPageNavFooter from '../../components/ExternalPageNavFooter';
import  Carousel  from '../../components/Carousel';
import { photosTodo as photos  , descriptions} from './data.js';

function TodoApp() {
  console.log(descriptions.linkGitHub );
  return (
    <ExternalPageNavFooter
    title={descriptions.title}
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
