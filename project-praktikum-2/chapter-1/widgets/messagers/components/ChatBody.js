import moment from "moment";
import React from "react";

const itsme = "Febry";

const styleChatItems = {
  chatBubleSender: {
    textAlign: "right",
    backgroundColor: "#a198a7",
    alignSelf: "flex-end",
  },
  chatBubleReceiver: {
    backgroundColor: "#a83aef",
    alignSelf: "flex-start",
  },
};

function ChatBubleItem({ data, children }) {
  const isSender = data.from === itsme;

  return (
    <div
      className="chat text-white rounded my-2 p-2"
      style={
        isSender
          ? styleChatItems.chatBubleSender
          : styleChatItems.chatBubleReceiver
      }
    >
      {children}
    </div>
  );
}

export default function ChatBody({ data }) {
  const listdata = data;

  // Helper to get date string (e.g., "2024-02-22")
  const getDateString = (date) => moment(date).format("YYYY-MM-DD");

  let lastDate = null;

  return (
    <div className="chat-items">
      {listdata.map((v, index) => {
        const currentDate = getDateString(v.date);
        const showDateHeader = currentDate !== lastDate;
        lastDate = currentDate;

        return (
          <React.Fragment key={index}>
            {showDateHeader && (
              <div
                className="chat-date-header"
                style={{
                  textAlign: "center",
                  margin: "10px 0",
                  backgroundColor: "white",
                  color: "grey",
                  padding: "5px 10px",
                  borderRadius: "10px",
                  maxWidth: "fit-content",
                  position: "relative",
                  left: "50%",
                  transform: "translateX(-50%)",
                  fontStyle: "italic",
                }}
              >
                {moment(v.date).isSame(moment(), "day")
                  ? "Today"
                  : moment(v.date).format("MMM DD, YYYY")}
              </div>
            )}
            <div
              className="chat-item"
              style={{ display: "flex", flexDirection: "column" }}
            >
              <ChatBubleItem data={v}>
                <span className="me-3">{v.message}</span>
                <span className="chat-date" style={{ fontSize: "11px" }}>
                  {moment(v.date).format("HH:mm")}
                </span>
              </ChatBubleItem>
            </div>
          </React.Fragment>
        );
      })}
    </div>
  );
}
