import { useState, useEffect, useContext } from "react";

import Contact from "../components/complain/contact";
import Messages from "../components/complain/messages";
import MenubarAdmin from "../components/menubarAdmin";

import { UserContext } from "../context/userContext";

import { io } from "socket.io-client";

let socket;
const ComplainAdmin = () => {
  //variable for storing contacts and messages
  const [contact, setContact] = useState(null);
  const [contacts, setContacts] = useState([]);

  const [messages, setMessages] = useState([]);

  const [state] = useContext(UserContext);

  useEffect(() => {
    socket = io(process.env.SERVER_URL ||"https://dumbmerch-be33.herokuapp.com/api/v1/"||"http://localhost:5000", {
      auth: {
        token: localStorage.getItem("token"),
      },
    });

    socket.on("new message", () => {
      socket.emit("load messages", contact?.id);
    });

    loadContacts();
    loadMessages();

    return () => {
      socket.disconnect();
    };
  }, [messages]); // code here

  const loadContacts = () => {
    socket.emit("load customer contact");
    socket.on("customer contact", (data) => {
      console.log("customer contact:");
      console.log(data);
      // filter just customers which have sent a message
      let dataContacts = data.map((item) => {
        return {
          ...item,
          message:
            item.sender?.length > 0
              ? item.sender[item.sender?.length - 1]?.message
              : "Click here to start message",
        };
      });
      console.log("customer datacontact:");
      console.log(dataContacts);
      setContacts(dataContacts);
    });
  };

  // used for active style when click contact
  const onClickContact = (data) => {
    console.log("onClick contact:");
    console.log(data);
    setContact(data);
    socket.emit("load messages", data.id);
  };

  const loadMessages = () => {
    socket.on("messages", (data) => {
      console.log("messages data:");
      console.log(data);
      if (data.length > 0) {
        const dataMessages = data.map((item) => ({
          idSender: item.sender.id,
          message: item.message,
        }));
        
        console.log("dataMessages:");
        console.log(dataMessages);
        
        setMessages(dataMessages);
      } else {
        setMessages([]);
      }
    });
  };

  const onSendMessage = (e) => {
    if (e.key === "Enter") {
      const data = {
        idRecipient: contact.id,
        message: e.target.value,
      };

      console.log("new Message:");
      console.log(data);
      
      socket.emit("send message", data);
      e.target.value = "";
    }
  };
  return (
    <>
      <header>
        <MenubarAdmin />
      </header>
      <div className="container-fluid mt-5" style={{ heigh: "89.5vh" }}>
        <div className="row">
          <div
            className="col-md-3 px-3 border-end border-dark overflow-auto"
            style={{ heigh: "89.5vh" }}
          >
            <Contact
              dataContact={contacts}
              clickContact={onClickContact}
              contact={contact}
            />
          </div>
          <div className="col-md-9 px-0" style={{ heigh: "89.5vh" }}>
            <Messages
              contact={contact}
              messages={messages}
              user={state.user}
              sendMessage={onSendMessage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ComplainAdmin;
