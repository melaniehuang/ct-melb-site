var baseColor = '#000000';
var membersList;
var memberNames;
var initials = new Array();
var numRows;
var remainder;
var chipFont;
var bx = [0,1,16,18,25,29,45,47];

function preload() {
  var contentRequest = "/data/content.json";
  content = loadJSON(contentRequest);

  var membersRequest = "/data/members.json";
  membersList = loadJSON(membersRequest); 

  chipFont = loadFont("/data/creativetech.ttf");
}

function setup(){
  getEventContent();
  var canvas = createCanvas(450,2000);
  canvas.parent("chips");
  noLoop();
  colorMode(RGB, 255);
  memberNames = [];
  var membersDetails = membersList.data;   
  for (var n = 0; n < membersDetails.length; n++){
    var memberName = membersDetails[n].name;
    append(memberNames, memberName); 
  }

  var numMembers = memberNames.length;
  numRows = floor(numMembers/8);
  remainder = numMembers % 8;
 
  for (var m = 0; m < memberNames.length; m++){
    getInitials(m);
  }
  
  shuffle(initials, true);
  for (var p = 0; p < 2; p++){
    bx[p] = int(random(0,16));
    bx[p+2] = int(random(16,25));
    bx[p+4] = int(random(25,41));
    bx[p+6] =  int(random(41,50));
  }
  drawChips();
}

function draw(){
}

function getInitials(m){
  var selectedMember = memberNames[m];  
  var firstLast = new Array();
  firstLast = split(selectedMember, " ");
  
  if (firstLast.length == 1){
    var firstname = firstLast[0];
    
    append(initials, firstname.charAt(0));
    append(initials,' ');
  } else {
    var firstname = firstLast[0];
    var lastname = firstLast[firstLast.length-1];
    
    append(initials, firstname.charAt(0) + lastname.charAt(0));
  }
}

function drawChips(){
  var numBox = 8;
  var memNum = 0;
  console.log(bx);
  for (var r = 0; r < numRows+1; r++){
    for (var c = 0; c < numBox; c++){     

      fill(255);
      textAlign(CENTER);
      textFont(chipFont);
      textSize(32);
      
      if (r == numRows){
        numBox = remainder;
        if (c < 3){
          fill(255);          
          strokeWeight(2);
          stroke(255);
          rect(c*44, 16+r*64, 14, 22);

          noFill();
          rect(c*44+14, 16+r*64, 16, 22);
          noStroke();

          fill(0);
          text(initials[memNum].charAt(0), 8+c*44, 32+r*64);
          
          fill(255);
          text(initials[memNum].charAt(1) ,22+c*44, 32+r*64);
        } else if (c > 2 && c < 5) {
          fill(255);          
          strokeWeight(2);
          stroke(255);
          rect(c*44+32, 16+r*64, 14, 22);

          noFill();
          rect(c*44+32+14, 16+r*64, 16, 22);
          noStroke();

          fill(0);
          text(initials[memNum].charAt(0), 8+c*44+32, 32+r*64);
          
          fill(255);
          text(initials[memNum].charAt(1) ,22+c*44+32, 32+r*64);
        } else {
          fill(255);          
          strokeWeight(2);
          stroke(255);
          rect(c*44+64, 16+r*64, 14, 22);

          noFill();
          rect(c*44+64+14, 16+r*64, 16, 22);
          noStroke();

          fill(0);
          text(initials[memNum].charAt(0), 8+c*44+64, 32+r*64);
          
          fill(255);
          text(initials[memNum].charAt(1) ,22+c*44+64, 32+r*64);
        }
      } else {
        if (c < 3){
          for (var b = 0; b < numRows; b++){
            for (var b2 = 0; b2 < 2; b2++){
              drawBorder(c*44+(bx[0+b2]*2), 13+(64*b));
              drawBlack(c*44+(bx[0+b2]*2), 15+(64*b));
              
              drawBorder(c*44+34, 13+((bx[2+b2]-15)*2)+(64*b));
              drawBlack(c*44+32, 13+((bx[2+b2]-15)*2)+(64*b));
              
              drawBorder(c*44+34-((bx[4+b2]-25)*2), 39+(64*b));
              drawBlack(c*44+34-((bx[4+b2]-25)*2), 37+(64*b));
              
              drawBorder(c*44, 39-((bx[6+b2]-40)*2)+(64*b));
              drawBlack(c*44+2, 39-((bx[6+b2]-40)*2)+(64*b));
            }
          }
          
          fill(255);          
          strokeWeight(2);
          stroke(255);
          rect(3+c*44, 16+r*64, 14, 22);

          noFill();
          rect(3+c*44+14, 16+r*64, 16, 22);
          noStroke();

          fill(0);
          text(initials[memNum].charAt(0), 11+c*44, 32+r*64);
          
          fill(255);
          text(initials[memNum].charAt(1) ,25+c*44, 32+r*64);

        } else if (c > 2 && c < 5){   
          for (var b = 0; b < numRows; b++){
            for (var b2 = 0; b2 < 2; b2++){
              drawBorder(c*44+(bx[0+b2]*2)+29, 13+(64*b));
              drawBlack(c*44+(bx[0+b2]*2)+29, 15+(64*b));

              drawBorder(c*44+63, 13+((bx[2+b2]-15)*2)+(64*b));
              drawBlack(c*44+61, 13+((bx[2+b2]-15)*2)+(64*b));

              drawBorder(c*44+34-((bx[4+b2]-25)*2)+29, 39+(64*b));
              drawBlack(c*44+34-((bx[4+b2]-25)*2)+29, 37+(64*b));

              drawBorder(c*44+29, 39-((bx[6+b2]-40)*2)+(64*b));
              drawBlack(c*44+31, 39-((bx[6+b2]-40)*2)+(64*b));
            }
          }

          fill(255);          
          strokeWeight(2);
          stroke(255);
          rect(c*44+32, 16+r*64, 14, 22);

          noFill();
          rect(c*44+32+14, 16+r*64, 16, 22);
          noStroke();

          fill(0);
          text(initials[memNum].charAt(0), 8+c*44+32, 32+r*64);
          
          fill(255);
          text(initials[memNum].charAt(1) ,22+c*44+32, 32+r*64);
        } else {
          for (var b = 0; b < numRows; b++){
            for (var b2 = 0; b2 < 2; b2++){
              drawBorder(c*44+(bx[0+b2]*2)+29+32, 13+(64*b));
              drawBlack(c*44+(bx[0+b2]*2)+29+32, 15+(64*b));

              drawBorder(c*44+95, 13+((bx[2+b2]-15)*2)+(64*b));
              drawBlack(c*44+93, 13+((bx[2+b2]-15)*2)+(64*b));

              drawBorder(c*44+34-((bx[4+b2]-25)*2)+29+30, 39+(64*b));
              drawBlack(c*44+34-((bx[4+b2]-25)*2)+29+30, 37+(64*b));

              drawBorder(c*44+61, 39-((bx[6+b2]-40)*2)+(64*b));
              drawBlack(c*44+63, 39-((bx[6+b2]-40)*2)+(64*b));
            }
          }

          fill(255);          
          strokeWeight(2);
          stroke(255);
          rect(c*44+64, 16+r*64, 14, 22);

          noFill();
          rect(c*44+64+14, 16+r*64, 16, 22);
          noStroke();

          fill(0);
          text(initials[memNum].charAt(0), 8+c*44+64, 32+r*64);
          
          fill(255);
          text(initials[memNum].charAt(1) ,22+c*44+64, 32+r*64);
        }
      }
      memNum++;
    }
  }
}

function drawBorder(sx,sy){
  fill("#ffffff");
  rect(sx, sy, 2,2);
}

function drawBlack(sx,sy){
  fill("#000000");
  rect(sx, sy, 2,2);
}


function getEventContent(){
  if (content.events.length > 0){
    for (var e = 0; e < content.events.length; e++){
      var event = content.events[e];
      var description = event.description;

      var eventDiv = createDiv("");  
      eventDiv.class("event");
      eventDiv.parent("events");

      var eventTitle = createElement("h3", "<a href=" + event.eventLink + " target='_blank'> " + event.title + "</br>" + event.timedate + " @ " + event.location + "</a>");
      eventTitle.class("eventTitle"); 
      eventTitle.parent(eventDiv);

      var eventDescription = createP(event.description);
      eventTitle.class("eventInfo"); 
      eventDescription.parent(eventDiv);
      
      for (var p = 0; p < content.events[e].projects.length; p++){
        var project = content.events[e].projects[p];
        var pLink = project.projectLink;
        var sLink = project.speakerLink;

        if (pLink === ""){
          pLink = "";
        } else {
          pLink = "<a href =" + project.projectLink + " target='_blank'>";
        }

        if (sLink === ""){
          sLink = "";
        } else {
          sLink = "<a href =" + project.speakerLink + " target='_blank'>";
        }

        var projectListing = createElement("div", "<h4>" + pLink + project.projectTitle + "</a></h4>By " + sLink + project.speaker + "</a>" );
        projectListing.class("eventProject");
        projectListing.parent(eventDiv);
      }

      if (event.meetup === "true"){
        var meetupSummary = createP(event.meetupInfo);
        meetupSummary.class("eventInfo");
        meetupSummary.parent(eventDiv);
      }
    }
  } else {
    var noEvent = createDiv("More events coming soon. </br>For other related events and inspiration around Melbourne, stay up to date on our <a href = 'https://www.facebook.com/groups/1542924152702740/' target='_blank'>Facebook</a> page."); 
    noEvent.parent("events"); 
  }

  //Past Projects
  for (var p = 0; p < content.pastProjects.length; p++){
    var pastSpeaker = content.pastProjects[p];
    var pastListing = createElement("div", "<h4><a href =" + pastSpeaker.projectLink + " target='_blank'> " + pastSpeaker.project + "</a></h4>By <a href=" + pastSpeaker.speakerLink + ">" + pastSpeaker.speaker + "</a>" );
    pastListing.class("pastProject");
    pastListing.parent("projects");
  }
}










