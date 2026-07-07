// Wait until chatbot HTML is loaded
window.addEventListener("load", () => {

    // Wait a moment because chatbot.html is loaded using fetch()
    setTimeout(() => {

        const chatBtn = document.getElementById("ai-chat-btn");
        const chatWindow = document.getElementById("chat-window");
        const closeBtn = document.getElementById("close-chat");
        const sendBtn = document.getElementById("send-btn");
        const input = document.getElementById("user-input");
        const messages = document.getElementById("chat-messages");
        const quickBtns = document.querySelectorAll(".quick-btn");

        // Open Chat
        chatBtn.addEventListener("click", () => {
            chatWindow.classList.remove("hidden");
        });

        // Close Chat
        closeBtn.addEventListener("click", () => {
            chatWindow.classList.add("hidden");
        });

        // Send Button
        sendBtn.addEventListener("click", sendMessage);

        // Enter Key
        input.addEventListener("keypress", function(e) {
            if (e.key === "Enter") {
                sendMessage();
            }
        });

        // Quick Buttons
        quickBtns.forEach(button => {
            button.addEventListener("click", () => {
                input.value = button.innerText;
                sendMessage();
            });
        });

        // Send Message
        function sendMessage() {

            const text = input.value.trim();

            if (text === "") return;

            // User Message
            const userMsg = document.createElement("div");
            userMsg.className = "user-message";
            userMsg.innerHTML = text;
            messages.appendChild(userMsg);

            input.value = "";

            scrollBottom();

            // Typing...
            const typing = document.createElement("div");
            typing.className = "bot-message";
            typing.id = "typing";
            typing.innerHTML = "Typing...";
            messages.appendChild(typing);

            scrollBottom();

            setTimeout(() => {

                typing.remove();

                const botMsg = document.createElement("div");
                botMsg.className = "bot-message";
                botMsg.innerHTML = getReply(text);

                messages.appendChild(botMsg);

                scrollBottom();

            }, 1000);

        }

        // Portfolio Replies
        function getReply(message) {

            message = message.toLowerCase();

            if (message.includes("project")) {
                return "🚀 You can explore all my projects in the Projects section of this portfolio.";
            }

            if (message.includes("skill")) {
                return "💻 My skills include HTML, CSS, JavaScript, React, Node.js, Python, Machine Learning, Git, and more.";
            }

            if (message.includes("resume")) {
                return "📄 You can download my resume from the Resume section.";
            }

            if (message.includes("contact")) {
                return "📧 You can contact me using the Contact section or social links.";
            }

            if (message.includes("hello") || message.includes("hi")) {
                return "👋 Hello! How can I help you today?";
            }

            return "😊 Thanks for your message! Soon I'll be connected to an AI model for smarter answers.";
        }

        function scrollBottom() {
            messages.scrollTop = messages.scrollHeight;
        }

    }, 300);

});