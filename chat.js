const chatting = document.querySelector("#Chat")
const chatDad = document.querySelector("#father")
const stopChat = document.querySelector(".btn")
const chatting2 = document.querySelector("#move")
let product = input + "=" + eval(input);


chatting.addEventListener('click', () => {
   
	chatDad.style.display = "inline-block";
	chatting2.style.display = "none";

})


stopChat.addEventListener('click', () => {
   
	chatDad.style.display = "none";
	chatting2.style.display = "block";

})


let keywords = [
	["hi","hey","hello"], 
	["how are you", "how is life", "what's up", "whats happening"],
	["what are you doing", "what is going on"],
	["how old are you", "what is your age"],
	["who are you", "are you human", "are you bot"],
	["i love you", "love", "love you"],
	["happy", "thankful", "great", "cool", "good", "that's great"],
	["bad", "hate", "angry"],
	["who created you", "who made you"],
	["your name please",  "your name", "may i know your name", "what is your name"],
	["help me", "tell me story", "tell me joke"],
	["ah", "yes", "ok", "okay", "nice", "thanks", "thank you"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["where do you live", "where do you stay"],
  ["i miss you", "miss you"],
  ["are you a male or female", "are you a female"],
  ["what are you hobbies", "hobbies"],
  ["are you real"],
  ["what language do you speak"],
];
let response = [
	["Hi","Hey!","Hello!", "Sup?"], 
	["Fine", "Pretty well", "Fantastic"],
	["Lets change the topic", "Nothing much", "About to go to sleep", "Can you guess?", "I don't know actually", "I am somewhere in Nigeria"],
	["I am 12 days old", "Im still a baby"],
	["I am just a bot", "I am a bot. What are you?"],
	["Ubanna", "My god"],
	["I love you too", "Me too", "God loves you too"],
	["Good to know", "Glad to hear it", "cool stuff"],
	["Why?", "Cheer up!", "dont be hateful"],
	["I am Special", "I have name, ask again, guess"],
	["I will", "What about?", "Teacher: What is a baby lizard called?... Akpos: a baby lizard is called lizzybaby"],
	["Tell me a story", "Tell me a joke", "Tell me about yourself", "You are welcome", "Kk", "that's nice"],
  ["Bye", "Goodbye", "See you later"],
  ["In Nigeria", "In a Laptop"],
  ["Me too", "I miss you too"],
  ["It doesn't matter"],
  ["chatting"],
  ["Yes I am"],
  ["Javascript and English for now"],
];
let defaultResponse = ["Come again...", "Hmmmm...", "I like chatting" , "Ask me anything", "Kk", "You too", "Teacher: What is a baby lizard called?... Akpos: a baby lizard is called lizzybaby"];
let totalChat = document.querySelector("#submit").addEventListener("click", (e) => {
		let input = document.getElementById("input").value;
		if (input === "") {
			alert("Say something");
			return false;
		  }
		let mainChat = document.getElementById("mainuser")
 
 let newUser = document.createElement('p');
 newUser.className = "user";
 newUser.innerHTML = input
 mainChat.appendChild(newUser)
 document.getElementById("headShow").innerHTML = 'Im special is typing';
	  setTimeout(function(){ reply(input); }, 5000);
	  document.getElementById("input").value = ""; //clear input value
	 
	}
	
);

const reply = (input) => {
	try{
		product = input + "=" + eval(input);
	} catch(e){
		let inputFromUser = (input.toLowerCase()).replace(/[^\w\s\d]/gi, "");
		inputFromUser = inputFromUser.replace(/ a /g, " ").replace(/i feel /g, "").replace(/whats/g, "what is").replace(/please /g, "").replace(/ please/g, "");
		if(converge(keywords, response, inputFromUser)){
			product = converge(keywords, response, inputFromUser);			
		} else {
			product = defaultResponse[Math.floor(Math.random()*defaultResponse.length)]
			
		}
	}
	let mainChat = document.getElementById("mainuser")
 
 let newBot = document.createElement('p');
 newBot.className = "chatbot";
 newBot.innerHTML = product
 mainChat.appendChild(newBot)
 document.getElementById("headShow").innerHTML = '';
	}


const converge = (arrayKeywords, arrayResponse, text) => {
	let botResponse;
	for(let i=0; i<arrayKeywords.length; i++){
		for(let j=0; j<arrayResponse.length; j++){
			if(arrayKeywords[i][j] == text){
				botResponses = arrayResponse[i];
				botResponse =  botResponses[Math.floor(Math.random()*botResponses.length)];
			}
		}
	}
	return botResponse;
}




