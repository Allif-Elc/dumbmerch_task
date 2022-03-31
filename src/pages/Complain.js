import { useState } from "react";

import Contact from "../components/complain/contact";
import Messages from "../components/complain/messages";
import Menubar from "../components/menubar";

const Complain = () => {

    const [contact, setContact] = useState(null)

    const dataContact = [
        {
            id: 1,
            name: 'Admin',
            chat: 'Yes, Is there anything I can help',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
        },
        {
            id: 2,
            name: 'Admin 2',
            chat: 'Hello World',
            img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1050&q=80'
        }
    ]


    return (  
        <>
            <header>
                <Menubar/>
            </header>
            <div className="container-fluid mt-5"
            style={{heigh:"89.5vh"}}
            >
                <div className="row">
                    <div className="col-md-3 px-3 border-end border-dark overflow-auto"
                    style={{heigh:"89.5vh"}}
                    >
                        <Contact dataContact={dataContact}  setContact={setContact} contact={contact}/>
                    </div>
                    <div  className="col-md-9 px-0"
                    style={{heigh:"89.5vh"}} 
                    >
                        <Messages contact={contact}/>
                    </div>
                </div>
            </div>
        </>
    );
}
 
export default Complain;