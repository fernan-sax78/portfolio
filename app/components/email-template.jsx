


export function EmailTemplates(props) {
    const { personName , personEmail , personSubject , personMessage } = props;
    
  return (


    <div>

      <h1> {personName} Contact You</h1>
      <p>Subject : {personSubject}</p>
      <p>You can Write him or her to this email : {personEmail}</p>
      <p>Here the Message : {personMessage}</p>

    </div>
    
  )
}

export default EmailTemplates;


