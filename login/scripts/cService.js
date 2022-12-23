let demo = () => {
  window.location.href = "../Demo/demo.html";
};

let bullet_data = [
  {
    title: "Quick replies",
    desc: "Guide conversation flows with quick replies for a better conversational experience and a higher success rate.",
  },
  {
    title: "Rich inline content",
    desc: "Improve customer satisfaction and boost customer engagement with rich line HTML content and KB articles.",
  },
  {
    title: "Automate escalation",
    desc: "Automatically escalate chats to available agents if the bot is unable to give an appropriate response.",
  },
  {
    title: "Help Desk Integration",
    desc: "Integrate the chatbot software with HappyFox Help Desk to create tickets and track conversations.",
  },
  {
    title: "Agent monitoring & barge-in",
    desc: "A live agent can monitor the chatbot’s conversations with the end-user and barge in at any time.",
  },
  {
    title: "Reports & analytics",
    desc: "Measure the bot's performance and optimize the conversation flow for enhanced customer interactions.",
  },
  {
    title: "ML & NLP technologies",
    desc: "Enhance your support workflows by leveraging AI in the form of machine learning, NLP, and NLU.",
  },
  {
    title: "Maintain brand identity",
    desc: "Customize the look and feel of your virtual assistant to match that of your brand to enhance the user experience.",
  },
];

let container = document.querySelector("#new");

let display = (data) => {
  data.forEach((el) => {
    let div = document.createElement("div");
    div.className = "bullet_div";
    let title = document.createElement("li");
    title.className = "title";
    title.innerText = el.title;
    let desc = document.createElement("p");
    desc.innerText = el.desc;
    desc.className = "desc";
    div.append(title, desc);
    container.append(div);
  });
};

display(bullet_data);

let getDemo = () => {
  let email = document.querySelector("#email").value;
  if (email != "") {
    alert("Email has been sent. Please verify your email!");
    location.reload();
  } else {
    alert("Please enter your email address.");
  }
};
