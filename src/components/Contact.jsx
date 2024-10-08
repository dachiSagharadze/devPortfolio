import React, { useState, useEffect, useRef } from 'react';

export default function Contact() {


  const sendChatBtnRef = useRef(null);
  const chatInputRef = useRef(null);
  const chatboxRef = useRef(null);
  const [counter, setCounter] = useState(0);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const massegesEndRef = useRef(null);
  

  const sendMessage = (message) => {
    let parms = {
      name : name,
      email : email,
      subject : email,
      message : message,
    }

    emailjs.send('service_9unfhoy','template_l3u4eys', parms);

    chatInputRef.current.value = "Message sent successfully!!!";
    chatInputRef.current.disabled = true;

  }


  const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<img
              src='./Screenshots/DachiSagharadze.PNG' alt='Dachi Sagharadze'/><p>${message}</p>`;
    chatLi.innerHTML = chatContent;

    massegesEndRef.current.scrollIntoView({ behavior: 'smooth' });

    return chatLi;
  }

  const generateResponse = (incomingChatLi, trimmedMessage) => {
    const messageElement =  incomingChatLi.querySelector("p");

    if (trimmedMessage === 'reset'){
      setCounter(0);
      chatboxRef.current.innerHTML = ''; // Clear the chat history
      const initialMessageLi = createChatLi(`Hello there, What is your name?`, 'incoming');
      massegesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      chatboxRef.current.appendChild(initialMessageLi);
    }
    else if (counter === 0){
      setName(trimmedMessage);
      const nameForDisplay = trimmedMessage;
      messageElement.textContent = `Thanks ${nameForDisplay}, please type your email.`;
      massegesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      setCounter(1);
    }
    else if (counter === 1){
      const validEmailEndings = ['.com', '.net', '.org', '.info', '.biz', '.gov', '.edu', '.io', '.co', '.me', '.us'];

      // Check for '@' and valid email endings
      const hasAtSymbol = trimmedMessage.includes('@');
      const hasValidEnding = validEmailEndings.some(ending => trimmedMessage.endsWith(ending));



      if(hasAtSymbol && hasValidEnding){
        messageElement.textContent = 'Okay, now type in message you want to send.';
        massegesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        setEmail(trimmedMessage);
        setCounter (2);
      }
      else{
        messageElement.textContent = `Please Type in valid email!`;
        massegesEndRef.current.scrollIntoView({ behavior: 'smooth' });
        return setCounter(1);
      }
    }
    else if (counter === 2){
      messageElement.textContent ="Thank you, I will respond as soon as possible!";
      massegesEndRef.current.scrollIntoView({ behavior: 'smooth' });
      sendMessage(trimmedMessage);
    }
  }

  const handleChat = () => {
    const trimmedMessage = chatInputRef.current.value.trim();
    if(!trimmedMessage) return
    createChatLi(trimmedMessage, "outgoing")
    chatboxRef.current.appendChild(createChatLi(trimmedMessage, 'outgoing'));
    chatInputRef.current.value = "";

    setTimeout(() => {
      const incomingChatLi = createChatLi('Thinking...', 'incoming');
      chatboxRef.current.appendChild(incomingChatLi);
      generateResponse(incomingChatLi, trimmedMessage);
    })

  };

  return (
    <section className="w-full min-h-[100vh] flex-center">
      {/* Main container for the contact section */}
      <div className='mt-20 h-[40rem] flex flex-col overflow-hidden w-[25rem] sm:w-[30rem] md:w-[45rem] lg:w-[50rem] bg-[#1E1E1E] rounded-3xl'>
        
        {/* Info Container */}
        <div className='shadow-2xl flex w-full min-h-[7rem] items-center bg-[#1E1E1E]'>
          <div className='flex items-center'>
            <img 
              src='./Screenshots/DachiSagharadze.PNG' // Image source
              className='mr-5 ml-5 rounded-full h-[5rem] w-[5rem]' 
              alt='Dachi Sagharadze' // Added alt text for accessibility
            />
            <div className='flex flex-col'>
              <p className='text-[0.8rem] max-sm:text-[0.6rem]'>Dachi.sagharadze@gmail.com</p>
              <p className='text-[0.6rem] max-sm:text-[0.5rem] text-gray-400 flex items-center gap-1'>
                {/* Online status with a colored indicator */}
                <div className='h-3 w-3 bg-green-400 rounded-full'></div>Online (type reset for reset)
              </p>
            </div>
          </div>
        </div>
        
        {/* Chat History */}
        <div className="overflow-y-auto overflow-x-hidden p-4">
          <ul className='chatbox' ref={chatboxRef}>
            <li className='chat incoming'>
            <img
              src='./Screenshots/DachiSagharadze.PNG' // Image source
              alt='Dachi Sagharadze' // Added alt text for accessibility
            />
            <p>Hello there, What is your name?</p>
            </li>
          </ul>
          <div ref={massegesEndRef}></div>
        </div>
        {/* Input Container */}
        <div className="border-t border-black items-center min-h-[4rem] mt-auto gap-6 flex">
          <div className='flex chat-input justify-center w-full items-center pl-11 pr-11 gap-6'>
            <textarea 
              onKeyDown={(e) => {
                if (e.key === 'Enter' && e.shiftKey) {
                  // Shift + Enter was pressed: Insert a newline
                  // Allow the default behavior of adding a new line in the textarea
                } else if (e.key === 'Enter') {
                  e.preventDefault();  // Prevent new line on Enter key alone
                  handleChat();        // Call handleChat() to send the message
                }
              }}
              ref={chatInputRef}
              type="text" 
              className='w-full h-10 p-2 rounded-lg bg-black items-center text-[0.5rem] md:text-lg lg:text-xl resize-none flex-center' 
              placeholder="Type your message..."
              required
            />
            <span className='flex' onClick={handleChat} ref={sendChatBtnRef}>
              <i className="fa-solid fa-paper-plane hover:cursor-pointer hover:scale-125"></i>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
