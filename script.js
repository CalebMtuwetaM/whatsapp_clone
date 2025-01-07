// script.js
document.addEventListener("DOMContentLoaded", () => {
    const messageInput = document.getElementById("message");
    const sendButton = document.getElementById("send-button");
    const messagesContainer = document.querySelector(".messages");
  
    // Function to send a message
    const sendMessage = () => {
      const messageText = messageInput.value.trim();
      if (messageText === "") return;
  
      // Create a new message element
      const messageElement = document.createElement("div");
      messageElement.classList.add("message", "sent");
  
      const messageContent = document.createElement("p");
      messageContent.textContent = messageText;
      messageElement.appendChild(messageContent);
  
      const timestamp = document.createElement("span");
      timestamp.classList.add("timestamp");
      const now = new Date();
      timestamp.textContent = now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
      messageElement.appendChild(timestamp);
  
      // Append the message to the messages container
      messagesContainer.appendChild(messageElement);
      messagesContainer.scrollTop = messagesContainer.scrollHeight;
  
      // Clear the input field
      messageInput.value = "";
    };
  
    // Event listener for the send button
    sendButton.addEventListener("click", sendMessage);
  
    // Event listener for pressing Enter in the input field
    messageInput.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        event.preventDefault();
        sendMessage();
      }
    });
  });
  