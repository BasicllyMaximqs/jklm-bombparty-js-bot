setInterval(function () {

    if (window.getComputedStyle(document.getElementsByClassName("round")[0]).display === "none") return;
    if (window.getComputedStyle(document.getElementsByClassName("selfTurn")[0]).display === "none") return;
    let container = document.getElementsByClassName("syllable")[0].innerHTML;
    console.log("indexing new syllable: " + container)    
	var xmlHttp = null;
	try {
		xmlHttp = new XMLHttpRequest();
	} catch(e) {
		console.log("Failed to create XMLHttpRequest: " + e);
	}
	if (xmlHttp) {
		xmlHttp.open('GET', 'https://api.yourdictionary.com/wordfinder/v1/wordlist?contains=' + container + '&limit=25&offset=0&order_by=score&group_by=word_length&has_definition=check&suggest_links=true&dictionary=WWF', true);
		xmlHttp.onreadystatechange = function () {
			if (xmlHttp.readyState == 4) {
				console.log("Server Responded");
				let local_json = JSON.parse(xmlHttp.responseText);
				
			        let x_number_gen = Math.floor(Math.random() * local_json.data._groups.length);
				let y_number = Math.floor(Math.random() * local_json.data._groups[x_number_gen]._items.length);
				
				let put = local_json.data._groups[x_number_gen]._items[y_number];
				
				console.log("found a word: " + put);
				console.log("autofilling");
				wordInput.value = put;
				
			        const word = wordInput.value.trim();
				socket.emit("setWord", word, true);
                                //stolen event from main source code in the game itself (bomb.js)
			}
		};
		xmlHttp.send(null);
	}
}, 250);
