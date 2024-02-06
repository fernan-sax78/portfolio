import { useEffect } from 'react';

function TypeWriter({children , author}) {
    
    

    useEffect(() => {

         const encouragementText = document.getElementById('myText');
         let index = 0;
         const text = ` "It is not true that people stop pursuing dreams because they grow old, they grow old because they stop pursuing dreams..."- ${author} -` ;
         
         
         const typingText = () => {
         if (index < text.length) {
           if (index === 124) {
            encouragementText.innerHTML += `</br> ${text.charAt(index)} `;
           }
            else if (index === 126) {
              encouragementText.innerHTML += `<span style = "color : #d9534f; font-size : 1.4rem !important; font-weight : bold">${text.charAt(index)}</span>`;
            }
             else if(index > 126 ){
            encouragementText.innerHTML += `<span style = "font-size : 1rem !important ; font-style : italic">${text.charAt(index)}</span>`;
             }else{
            encouragementText.innerHTML +=  text.charAt(index) ;
           }
           index ++;
          setTimeout(typingText , 80);
        }
       
    }   

    
     return () => {typingText(); }


    }, [])

   
  return (
    <span>
    {children}
    </span>
  )
}

export default TypeWriter
