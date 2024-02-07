


export function typewriterFunction( text , reference) {
    

        //  const encouragementText = document.getElementById('myText');
         const encouragementText = reference ;
         let index = 0;
         
         const typingText = () => {
         if (index < text.length) {
           if (index === 121) {
            encouragementText.innerHTML += `</br> ${text.charAt(index)} `; 
           }
            else if (index === 125 ) {
              encouragementText.innerHTML += `<span style = "color : #d9534f; font-size : 1.4rem !important; font-weight : bold">${text.charAt(index)}</span>`;
            }
             else if(index > 121 ){
            encouragementText.innerHTML += `<span style = "font-size : 1rem !important ; font-style : italic">${text.charAt(index)}</span>`;
             }
            else{
            encouragementText.innerHTML +=  text.charAt(index) ;
           }
           index ++;
          setTimeout(typingText , 180);
        }
       
    }   

    
     typingText();


}