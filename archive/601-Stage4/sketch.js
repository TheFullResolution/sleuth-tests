/*
Officer: 2906969
CaseNum: 601-3-67525683-2906969

Case 601 - Narrowing in - stage 4

Casey Fry is on a killing spree and we still haven’t caught her.
We need a more sophisticated approach.

In the setup function, use a for loop to traverse the sightings, marking all of the locations on the map
where she was last seen. Do this by drawing Gold stroke vertexes at each location.

In addition, we've assembled a list of recent thefts in the area. Using another for loop to traverse the
recent crime records, you should mark those locations on the map. Do this by drawing small, Yellow stroke rectangles centered over each location.

This time we will catch Fry by comparing both distance from the crimes and dates of sightings.
If she was within less than 90 pixels of any of the crimes within no more than 1 days of their occurrence then the details
should be pushed to the list of possible matches with the following format.

{ crime:{x: 0, y:0, victimName: "John Doe"}, suspect:{x: 0, y:0} }

Note that the possible matches are already being drawn.
Your job is to fill the array with the correct data.

Use X11 colours. You can find a reference table at https://en.wikipedia.org/wiki/Web_colors.

For this mission you will need ONLY the following:

- for loop
- if()
- dist()
- abs()
- stroke()
- beginShape(), endShape(), vertex()

- stroke
- rect() NB. Draw each rectangle with the point at its center.


*/

var countyMap;

var possibleMatches = [];

//Sightings of Casey Fry.
//prettier-ignore
var suspectLog = [ 
  { loc_x : 518, loc_y : 471, day : 12},
  { loc_x : 486, loc_y : 508, day : 12},
  { loc_x : 475, loc_y : 566, day : 13},
  { loc_x : 376, loc_y : 554, day : 13},
  { loc_x : 316, loc_y : 559, day : 13},
  { loc_x : 265, loc_y : 614, day : 14},
  { loc_x : 253, loc_y : 609, day : 14},
  { loc_x : 240, loc_y : 604, day : 14},
  { loc_x : 220, loc_y : 597, day : 15},
  { loc_x : 178, loc_y : 600, day : 15},
  { loc_x : 199, loc_y : 604, day : 17},
  { loc_x : 146, loc_y : 582, day : 18},
  { loc_x : 115, loc_y : 551, day : 20},
  { loc_x : 67, loc_y : 495, day : 21},
  { loc_x : 39, loc_y : 493, day : 22},
  { loc_x : 68, loc_y : 461, day : 24} 
];

//Recent crime records.
//prettier-ignore
var murdersceneRecorded = {
	LocX: [438, 408, 408, 642, 623, 95, 75, 269, 389, 484, 496, 546, 538, 702, 817],
	LocY: [420, 451, 377, 289, 279, 488, 522, 597, 554, 549, 484, 463, 359, 412, 474],
	date: [11, 11, 13, 16, 16, 17, 18, 26, 28, 2, 9, 14, 12, 17, 18],
	Murdered: ['JESUS FORSLIN', 'LAVERNE JACQUELIN', 'JAUNITA JOYER', 'LAKESHA SYMMES', 'NICOLE ASHELY', 'DRUSILLA WARMAN', 'JENIFFER DEAUVILLE', 'NELSON TINTLE', 'LIANNE COURTWOOD', 'LARRAINE PEGORD', 'JULIANA ADVERSANE', 'LOUISE ZETLAND', 'DEEDEE PHINNEY', 'ERMELINDA OORIN', 'DARBY MYRLE'],
};

function preload() {
  countyMap = loadImage("map.png");
}

function setup() {
  createCanvas(countyMap.width, countyMap.height);

  image(countyMap, 0, 0);

  //add your code below here
  beginShape();
  stroke(255, 215, 0);
  noFill();
  for (let i = 0; i < suspectLog.length; i++) {
    vertex(suspectLog[i].loc_x, suspectLog[i].loc_y);

    for (let j = 0; j < murdersceneRecorded.LocX.length; j++) {
      if (
        dist(
          suspectLog[i].loc_x,
          suspectLog[i].loc_y,
          murdersceneRecorded.LocX[j],
          murdersceneRecorded.LocY[j]
        ) < 90 &&
        abs(suspectLog[i].day - murdersceneRecorded.date[j]) < 2
      ) {
        possibleMatches.push({
          crime: {
            x: murdersceneRecorded.LocX[j],
            y: murdersceneRecorded.LocY[j],
            victimName: murdersceneRecorded.Murdered[j],
          },
          suspect: { x: suspectLog[i].loc_x, y: suspectLog[i].loc_y },
        });
      }
    }
  }
  endShape();

  for (let i = 0; i < murdersceneRecorded.LocX.length; i++) {
    stroke(255, 215, 0);
    fill(255)
    rect(
      murdersceneRecorded.LocX[i] - 4,
      murdersceneRecorded.LocY[i] - 4,
      8,
      8
    );
  }

  // code to draw the matches ( if any)
  for (let i = 0; i < possibleMatches.length; i++) {
    stroke(127);
    strokeWeight(3);
    line(
      possibleMatches[i].crime.x,
      possibleMatches[i].crime.y,
      possibleMatches[i].suspect.x,
      possibleMatches[i].suspect.y
    );

    noStroke();
    fill(127);
    text(
      possibleMatches[i].crime.victimName,
      possibleMatches[i].crime.x + 15,
      possibleMatches[i].crime.y + 15
    );
  }
}

//We are not using the draw function this time
