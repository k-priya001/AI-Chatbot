// Dummy responses from the chatbot
const chatbotResponses = {
    greeting: "Hello! How can I help you today?",
    jobPlacement: "Our university offers a variety of job placement services. How can I assist you specifically?",
    internship: "We have information about various internship opportunities. Could you please provide more details?",
    resumeGuidance: "Sure, I can provide guidance on creating an effective resume. What kind of job are you applying for?",
    interviewTips: "Preparing for interviews is crucial. Do you have a specific question about interviews?",
    saysyes:"Okay!! In which Field you are interested in?",
    saysno:"Could you please rephrase?",
    webdeveloper:"Do you have any experience?", 
    introduction:"Results-oriented marketing professional with 5 years of experience in digital marketing and brand strategy. Proven track record of developing and implementing successful marketing campaigns that increase brand awareness and drive customer engagement. Adept at analyzing market trends and leveraging data-driven insights to optimize campaign performance. Seeking a challenging role to contribute strategic marketing expertise to a dynamic team.",
    fallback: "I'm sorry, I didn't understand that. Could you please rephrase?"
};

function displayMessage(message, sender) {
    const chatBox = document.getElementById("chat-box");
    const messageDiv = document.createElement("div");
    messageDiv.className = sender === "user" ? "user-message" : "chatbot-message";
    messageDiv.innerText = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}
function sendMessage() {
    const userInput = document.getElementById("user-input").value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, "user");
        document.getElementById("user-input").value = "";

        const chatbotResponse = getChatbotResponse(userInput);
        displayMessage(chatbotResponse, "chatbot");
    }
}
function getChatbotResponse(userInput) {
    userInput = userInput.toLowerCase();

    if (userInput.includes("hello") || userInput.includes("hi")) {
        return chatbotResponses.greeting;
        
    } else if (userInput.includes("job placement")) {
        return chatbotResponses.jobPlacement;
    } else if (userInput.includes("internship")) {
        return chatbotResponses.internship;
    } else if (userInput.includes("resume")) {
        return chatbotResponses.resumeGuidance;
    } else if (userInput.includes("interview")) {
        return chatbotResponses.interviewTips;
    } else if (userInput.includes("yes")) {
        return chatbotResponses.saysyes;
    } else if (userInput.includes("no")) {
        return chatbotResponses.saysno;
    } else if (userInput.includes("web developer")) {
        return chatbotResponses.webdeveloper;
    } else if (userInput.includes("introdution")) {
        return chatbotResponses.introduction;
    } else if (userInput.includes("interview")) {
        return chatbotResponses.interviewTips;
    } else if (userInput.includes("interview")) {
        return chatbotResponses.interviewTips;
    }  
    
    else {
        return chatbotResponses.fallback;
    }

}
