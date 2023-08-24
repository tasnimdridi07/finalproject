document.getElementById("startConversationBtn").addEventListener("click", startConversation);

function startConversation() {
  var conversationDiv = document.getElementById("conversation");
  conversationDiv.innerHTML += "<p>Chatbot: How can I assist you today?</p>";
}

