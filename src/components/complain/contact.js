
const Contact = ({ dataContact, setContact, contact }) => {
    
    const clickContact = (id) => {
        const data = dataContact.find((item) => item.id == id);
        setContact(data);
      };
    
    return ( 
        <>
    { dataContact.map((item) => (
        <div className="d-flex align-items-center"
        onClick={() => {
            clickContact(item.id);}}
        >
            <img src={item.img} 
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
                    <li className="contact-message">{item.chat}</li>
                </ul>
            </div>
        </div>  

    ))}
        </>
     );
}
 
export default Contact;