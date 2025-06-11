function sendMessage() {
  const userInput = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");

  const message = userInput.value.trim();
  if (message === "") return;

  // Display user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerHTML = `<span class="msg-text">${message}</span>
                       <span class="timestamp">${getCurrentTime()}</span>`;
  chatBox.appendChild(userMsg);

  // Get bot reply
  const reply = getBotReply(message.toLowerCase());

  // Display bot message
  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.innerHTML = `<span class="msg-text">${reply}</span>
                      <span class="timestamp">${getCurrentTime()}</span>`;
  chatBox.appendChild(botMsg);

  userInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotReply(input) {
  if (input.includes("price") || input.includes("cost")) {
    return "Prices vary depending on the product. You can check our product page for exact details.";
  } else if (input.includes("delivery")) {
    return "Delivery usually takes 3-5 business days.";
  } else if (input.includes("return") || input.includes("refund")) {
    return "We offer a 7-day easy return policy. Refunds are processed within 2-3 days.";
  } else if (input.includes("warranty")) {
    return "Most products come with a 1-year warranty. Please check the product description for details.";
  } else if (input.includes("hello") || input.includes("hi")) {
    return "Hello! How can I help you today?";
  } else {
    return "Sorry, I didn't understand that. Please ask about price, delivery, return, or warranty.";
  }
}

function getCurrentTime() {
  const now = new Date();
  return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function resetChat() {
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = '<div class="bot-message">Hi! How can I help you today?</div>';
}

let userEmail = "";

function loginUser() {
  const emailInput = document.getElementById("emailInput").value.trim();

  if (!emailInput || !emailInput.includes("@")) {
    alert("Please enter a valid email address.");
    return;
  }

  // Save email and switch view
  userEmail = emailInput;

  // Hide login and show chatbot
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("chatContainer").style.display = "flex";

  // Show welcome message with email
  const chatBox = document.getElementById("chatBox");
  chatBox.innerHTML = `<div class="bot-message">Welcome <strong>${userEmail}</strong>! How can I help you today?</div>`;
}


function toggleToLogin() {
  document.getElementById("signinSection").style.display = "none";
  document.getElementById("loginSection").style.display = "block";
}

function toggleToSignIn() {
  document.getElementById("loginSection").style.display = "none";
  document.getElementById("signinSection").style.display = "block";
}

function registerUser() {
  const email = document.getElementById("registerEmail").value.trim();
  if (email) {
    localStorage.setItem("registeredEmail", email);
    alert("Registration successful! Now login.");
    toggleToLogin();
  } else {
    alert("Please enter a valid email.");
  }
}

function loginUser() {
  const enteredEmail = document.getElementById("emailInput").value.trim();
  const storedEmail = localStorage.getItem("registeredEmail");

  if (enteredEmail === storedEmail) {
    alert("Login successful!");
    document.getElementById("loginSection").style.display = "none";
    document.getElementById("chatContainer").style.display = "block";
  } else {
    alert("Email not found. Please register first.");
  }
}

// function sendMessage() {
//   const input = document.getElementById("userInput");
//   const message = input.value.trim();
//   if (message === "") return;

//   const chatBox = document.getElementById("chatBox");

//   const userMsg = document.createElement("div");
//   userMsg.className = "user-message";
//   userMsg.innerText = message;
//   chatBox.appendChild(userMsg);

//   // Dummy bot response
//   const botMsg = document.createElement("div");
//   botMsg.className = "bot-message";
//   botMsg.innerText = "Thanks for your query. We'll get back to you!";
//   chatBox.appendChild(botMsg);

//   input.value = "";
//   chatBox.scrollTop = chatBox.scrollHeight;
// }

// function resetChat() {
//   document.getElementById("chatBox").innerHTML = '<div class="bot-message">Hi! How can I help you today?</div>';
// }

const chatHistory = [];

function sendMessage() {
  const userInput = document.getElementById("userInput");
  const chatBox = document.getElementById("chatBox");
  const message = userInput.value.trim();
  if (message === "") return;

  const userTime = getCurrentTime();
  const reply = getBotReply(message.toLowerCase());
  const botTime = getCurrentTime();

  // Display user message
  const userMsg = document.createElement("div");
  userMsg.className = "user-message";
  userMsg.innerHTML = `<span class="msg-text">${message}</span><span class="timestamp">${userTime}</span>`;
  chatBox.appendChild(userMsg);

  // Display bot message
  const botMsg = document.createElement("div");
  botMsg.className = "bot-message";
  botMsg.innerHTML = `<span class="msg-text">${reply}</span><span class="timestamp">${botTime}</span>`;
  chatBox.appendChild(botMsg);

  // Save to history
  chatHistory.push({
    user: message,
    userTime: userTime,
    bot: reply,
    botTime: botTime
  });

  userInput.value = "";
  chatBox.scrollTop = chatBox.scrollHeight;

  // Optional: Save to localStorage
  localStorage.setItem("chatHistory", JSON.stringify(chatHistory));
}

function showHistory() {
  const savedHistory = JSON.parse(localStorage.getItem("chatHistory")) || [];
  if (savedHistory.length === 0) {
    alert("No chat history found.");
    return;
  }

  let historyText = "🕘 Chat History:\n\n";
  savedHistory.forEach((entry, index) => {
    historyText += `🧑‍💻 [${entry.userTime}] You: ${entry.user}\n🤖 [${entry.botTime}] Bot: ${entry.bot}\n\n`;
  });

  alert(historyText); // You can also display this in a modal or div
}


