function preload() {
  var contentRequest = "/data/content.json";
  content = loadJSON(contentRequest);
}

function setup(){
  console.log(content);
  
  if (content.events.length > 0){
  	for (var e = 0; e < content.events.length; e++){
  		var event = content.events[e];
  		var description = event.description

  		var eventDiv = createDiv("");  		
  		eventDiv.class("event");
  		eventDiv.parent("events");

  		var eventTitle = createElement("h3", "<a href=" + event.eventLink + "> " + event.title + "</br>" + event.timedate + " @ " + event.location + "</a>");
  		eventTitle.class("eventTitle"); 
  		eventTitle.parent(eventDiv);

  		var eventDescription = createP(event.description);
  		eventTitle.class("eventInfo"); 
  		eventDescription.parent(eventDiv);
  		
  		for (var p = 0; p < content.events[e].projects.length; p++){
    	  var project = content.events[e].projects[p];

    	  var projectListing = createElement("div", "<h4><a href =" + project.projectLink + ">" + project.projectTitle + "</a></h4>By <a href=" + project.speakerLink + ">" + project.speaker + "</a>" );
  		  projectListing.class("eventProject");
  		  projectListing.parent(eventDiv);
    	}


  	}
  } else {
  	var noEvent = createDiv("More events coming soon."); 
  }
}