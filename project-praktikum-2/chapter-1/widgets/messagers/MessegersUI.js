import React, { useState, useRef, useEffect } from "react";
import { ButtonPrimary, ButtonSecondary } from "./components/ButtonUI";
import ChatBody from "./components/ChatBody";
import moment from "moment";

export default function MessegersUI() {
  const chatArr = [
    {
      id: 1,
      message: "Hi",
      from: "Febry",
      date: "2024-02-22 10:30:00",
    },
    {
      id: 2,
      message: "Iya",
      from: "Isnan",
      date: "2024-02-22 10:35:00",
    },
    {
      id: 3,
      message: "Apakah itu Micro-Frontend ?",
      from: "Febry",
      date: "2024-02-22 10:50:00",
    },
    {
      id: 4,
      message: "Kaga tau",
      from: "Isnan",
      date: "2024-02-22 10:52:00",
    },
    {
      id: 5,
      message: "Apaan dah",
      from: "Isnan",
      date: "2024-02-22 10:52:00",
    },
    {
      id: 6,
      message:
        "Arsitektur pada bagian FrontEnd aplikasi yang berpusat pada independensi suatu fitur dengan fitur lainnya.",
      from: "Febry",
      date: "2024-02-22 11:00:00",
    },
    {
      id: 7,
      message: "Bijiiii",
      from: "Isnan",
      date: "2024-02-22 12:12:00",
    },
    {
      id: 8,
      message: "Bijiiii",
      from: "Isnan",
      date: "2024-02-22 12:12:00",
    },
    {
      id: 9,
      message: "Bijiiii",
      from: "Isnan",
      date: "2024-02-22 12:12:00",
    },
    {
      id: 10,
      message: "Bijiiii",
      from: "Isnan",
      date: "2024-02-22 12:12:00",
    },
  ];

  const StylesMessager = {
    chatBox: {
      minHeight: "200px",
      maxHeight: "45vh",
      overflowY: "auto",
      backgroundColor: "#e5f3fd",
    },
  };

  const [myChat, setMyChat] = useState(chatArr);
  const [writeChat, setWriteChat] = useState("");
  const endOfMessagesRef = useRef(null);

  const scrollToBottom = () => {
    endOfMessagesRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [myChat]);

  const HandlerSendChat = (e) => {
    e.preventDefault();
    const objChat = {
      id: myChat.length + 1,
      message: writeChat,
      from: "Febry",
      date: moment().format("YYYY-MM-DD HH:mm:ss"),
    };
    setMyChat([...myChat, objChat]);
    setWriteChat("");
  };

  // Sort chat by date ascending
  const sortedChats = [...myChat].sort(
    (a, b) => new Date(a.date) - new Date(b.date)
  );

  const senderName = "Febry";

  return (
    <div className="card">
      <div className="card-header">
        <h3 className="card-title align-items-start flex-column">
          <span className="fw-bold mb-2 text-gray-900">Chats</span>
        </h3>
        <div className="card-toolbar">
          <ButtonSecondary
            items={{
              title: "Create new chat",
              btn_class: "btn-icon btn-clear",
            }}
          >
            <i className="bi bi-pencil-square"></i>
          </ButtonSecondary>
        </div>
      </div>
      <div className="card-body p-0">
        <div
          className="chat-message px-2 bg-light-primary"
          style={StylesMessager.chatBox}
        >
          <ChatBody data={sortedChats} sender={senderName} />
          <div ref={endOfMessagesRef} />
        </div>
        <div className="chat-send bg-light p-3">
          <form
            method="post"
            autoComplete="off"
            onSubmit={(e) => HandlerSendChat(e)}
          >
            <div className="d-flex justify-content-between align-items-center">
              <input
                type="text"
                className="form-control me-2"
                autoFocus={true}
                value={writeChat}
                onChange={(e) => setWriteChat(e.target.value)}
              />
              <ButtonPrimary
                items={{
                  title: "Send",
                  btn_class: "btn-icon btn-success",
                  type: "submit",
                }}
              >
                <i className="bi bi-send"></i>
              </ButtonPrimary>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
