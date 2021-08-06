window.addEventListener("DOMContentLoaded", function () {
   document.querySelector("#fetchQuotesBtn").addEventListener("click", function () {

      // Get values from drop-downs
      const topicDropdown = document.querySelector("#topicSelection");
      const selectedTopic = topicDropdown.options[topicDropdown.selectedIndex].value;
      const countDropdown = document.querySelector("#countSelection");
      const selectedCount = countDropdown.options[countDropdown.selectedIndex].value;
   
      // Get and display quotes
      fetchQuotes(selectedTopic, selectedCount);	   
   });
});

function fetchQuotes(topic, count) {
   // TODO: Modify to use XMLHttpRequest
   let xhr = new XMLHttpRequest()
   xhr.addEventListener("load",responseReceivedHandler)
   xhr.responseType = "json"
   xhr.open("GET",`https://wp.zybooks.com/quotes.php?topic=${topic}&count=${count}`)
   xhr.send()
   

  
}

// TODO: Add responseReceivedHandler() here
function responseReceivedHandler(){
   let responseWindow = document.querySelector("#quotes")
   if(Object.keys(this.response).includes("error")){
      responseWindow.innerHTML = this.response['error']
   } else {
      let html = "<ol>";
      for (let c = 1; c <= Object.keys(this.response).length; c++) {
         html += `<li>${this.response[c-1]["quote"] + " - " + this.response[c-1]["source"]}</li>`;
      }
      html += "</ol>";
      responseWindow.innerHTML = html
   }
}