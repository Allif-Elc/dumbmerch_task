import default_profile from '../../assets/Image-Not-Available.png'

const Contact = ({ dataContact, clickContact, contact }) => {
    
    // console.log(dataContact)
    // console.log(clickContact)
    // console.log(contact)


    return ( 
        <>
        {dataContact.map((item) => (
            <div 
             key={item.id}
             className={`contact mt-3 p-2 ${
                contact?.id === item?.id && "contact-active"
              }`}
              onClick={() => {
                clickContact(item);
              }}
            >   
            <img src={default_profile} 
            className="rounded-circle"
            alt="contact-img"
            style={{
              height:50,
              width:50,
              objectFit:"cover",  
            }} />
            <div>
                <ul className="profile-li">
                    <li className="contact-name">{item.name}</li>
                    <li className="contact-message">{item?.message}</li>
                </ul>
            </div>
        </div>  

    ))}
        </>
     );
}
 
export default Contact;