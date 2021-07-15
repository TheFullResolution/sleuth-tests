/*

Officer: 2906969
CaseNum: 702-2-32326704-2906969

Case 702 - The case of Vanishing Vannevar
Stage 3 - Where's Vannevar

“All units: Vannevar’s car has been sighted. It is a blue car with a Number_Plate of PGXEEO. Approach with
caution.” This is your big chance kid. Don’t blow it. Complete the helper functions below to
drive through the traffic and locate Vannevar.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random, min, abs, and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of Detective_CarObject and the cars in
carObjects_array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function moveCar() {
  /*
	This function should do the following: 
	 - increment Detective_CarObject's Distance_Amnt property by its Gas_Amt property 
	 - add a random amount between -0.08 and 0.08 to Detective_CarObject's Vibrate_Val property
	 - use the constrain function to constrain Detective_CarObject's Vibrate_Val property to values between 0.08 and 1.25
	 - call the turnEngine function passing Detective_CarObject as an argument
	*/
  Detective_CarObject.Distance_Amnt += Detective_CarObject.Gas_Amt;
  Detective_CarObject.Vibrate_Val += random(-0.08, 0.08);
  Detective_CarObject.Vibrate_Val = constrain(
    Detective_CarObject.Vibrate_Val,
    0.08,
    1.25
  );
  turnEngine(Detective_CarObject);
}

function switchLanes(targetVehicle) {
  /*
	This function should do the following: 
	 - move targetVehicle from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use lanePos_a and lanePos_b to effect the change.
	 hint: You will need to modify the X_Coord property of targetVehicle.
	*/
  if (targetVehicle.X_Coord === lanePos_a) {
    targetVehicle.X_Coord = lanePos_b;
  } else {
    targetVehicle.X_Coord = lanePos_a;
  }
}

function vehicleAhead(target_vehicle) {
  /*
	This function should do the following: 
	 - determine if target_vehicle is in the same lane and less than 200px behind any of the cars in carObjects_array.
	 - do this by traversing carObjects_array and comparing each car's Distance_Amnt property to that of target_vehicle.
	 - use the Number_Plate property of each car to ignore cars that match target_vehicle.
	 - if you find a car that matches these requirements then return the car object. Otherwise return false.
	*/
  let returnValue = false;
  for (let i = 0; i < carObjects_array.length; i++) {
    if (
      carObjects_array[i].Number_Plate !== target_vehicle.Number_Plate &&
      target_vehicle.X_Coord === carObjects_array[i].X_Coord &&
      carObjects_array[i].Distance_Amnt - target_vehicle.Distance_Amnt < 200 &&
      carObjects_array[i].Distance_Amnt > target_vehicle.Distance_Amnt
    ) {
      returnValue = carObjects_array[i];
    }
  }
  return returnValue;
}

function checkVehicleAtSide(car_obj) {
  /*
	This function should do the following: 
	 - traverse carObjects_array and determine if any of the cars are parallel with car_obj.
	 - if a car is found to be parallel to car_obj then return the index of that car object.
	 - cars are considered parallel if the absolute difference between their Distance_Amnt properties is less than 25 px and they have non-matching X_Coord properties	*/

  let returnValue = false;
  for (let i = 0; i < carObjects_array.length; i++) {
    if (
      carObjects_array[i].Number_Plate !== car_obj.Number_Plate &&
      car_obj.X_Coord !== carObjects_array[i].X_Coord &&
      abs(carObjects_array[i].Distance_Amnt - car_obj.Distance_Amnt) < 25
    ) {
      returnValue = i;
    }
  }
  return returnValue;
}

function findAssailant() {
  /*
	This function should do the following: 
	 - Check cars passing parallel to Detective_CarObject to see if they match the Number_Plate property in the assailant description.
	 - it does this by calling checkVehicleAtSide.
	 - if a positive result is returned then the Number_Plate property of the found car is then checked against the assailant description.
	 - if a match is found then the car in question is assigned to the global variable assailant.
	*/
  const parallelIndex = checkVehicleAtSide(Detective_CarObject);

  console.log(parallelIndex);
  if (parallelIndex === 0 || parallelIndex > 0) {
    if (carObjects_array[parallelIndex].Number_Plate === "PGXEEO") {
      assailant = carObjects_array[parallelIndex];
    }
  }
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var Detective_CarObject;

var roadWidth;
var roadLeftEdge;
var lanePos_a;
var lanePos_b;
var carImages = {};
var assailant;

var carObjects_array = [
  {
    X_Coord: 500,
    Y_Coord: 0,
    Distance_Amnt: -200,
    Car_Variety: "greenCar",
    Number_Plate: "7NL73E",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 200,
    Car_Variety: "whiteCar",
    Number_Plate: "1F34H7",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 500,
    Y_Coord: 0,
    Distance_Amnt: 600,
    Car_Variety: "blueCar",
    Number_Plate: "U1PIYG",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 500,
    Y_Coord: 0,
    Distance_Amnt: 1000,
    Car_Variety: "blueCar",
    Number_Plate: "FKD2A8",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 1400,
    Car_Variety: "greenCar",
    Number_Plate: "0BRMJM",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 1800,
    Car_Variety: "blueCar",
    Number_Plate: "UKPGLD",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 500,
    Y_Coord: 0,
    Distance_Amnt: 2200,
    Car_Variety: "greenCar",
    Number_Plate: "LWWQTW",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 2600,
    Car_Variety: "greenCar",
    Number_Plate: "14GF2R",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 3000,
    Car_Variety: "blueCar",
    Number_Plate: "PGXEEO",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 3400,
    Car_Variety: "blueCar",
    Number_Plate: "PAP1VD",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 3800,
    Car_Variety: "redCar",
    Number_Plate: "FR5XKK",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 4200,
    Car_Variety: "whiteCar",
    Number_Plate: "XR1TQQ",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 4600,
    Car_Variety: "redCar",
    Number_Plate: "18FQ4U",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 500,
    Y_Coord: 0,
    Distance_Amnt: 5000,
    Car_Variety: "greenCar",
    Number_Plate: "JC22P1",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 5400,
    Car_Variety: "redCar",
    Number_Plate: "VXG7EW",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 5800,
    Car_Variety: "whiteCar",
    Number_Plate: "O3VOU9",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 6200,
    Car_Variety: "blueCar",
    Number_Plate: "BMKQTB",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 6600,
    Car_Variety: "blueCar",
    Number_Plate: "N2AVHM",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 500,
    Y_Coord: 0,
    Distance_Amnt: 7000,
    Car_Variety: "whiteCar",
    Number_Plate: "PX1H4I",
    Gas_Amt: 2,
    exhaust: [],
  },
  {
    X_Coord: 300,
    Y_Coord: 0,
    Distance_Amnt: 7400,
    Car_Variety: "redCar",
    Number_Plate: "6DHONS",
    Gas_Amt: 2,
    exhaust: [],
  },
];

function preload() {
  var carTypes = ["detective", "redCar", "greenCar", "blueCar", "whiteCar"];

  for (var i = 0; i < carTypes.length; i++) {
    carImages[carTypes[i]] = loadImage("cars/" + carTypes[i] + ".png");
  }
}

function setup() {
  createCanvas(800, 800);
  textSize(30);
  textAlign(CENTER);

  roadWidth = 400;
  roadLeftEdge = 200;
  lanePos_a = 300;
  lanePos_b = 500;

  Detective_CarObject = {
    X_Coord: roadLeftEdge + roadWidth / 4,
    Y_Coord: 550,
    Distance_Amnt: 0,
    Gas_Amt: 3,
    Vibrate_Val: 0,
    Car_Variety: "detective",
    Number_Plate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  if (assailant) {
    fill(255);

    text("assailant found !", width / 2, height / 2);
    return;
  }

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  moveCar();
  var b2b = vehicleAhead(Detective_CarObject);
  if (b2b) switchLanes(Detective_CarObject);
  findAssailant();

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < carObjects_array.length; i++) {
    carObjects_array[i].Distance_Amnt += carObjects_array[i].Gas_Amt;
    carObjects_array[i].Y_Coord =
      Detective_CarObject.Y_Coord -
      carObjects_array[i].Distance_Amnt +
      Detective_CarObject.Distance_Amnt;
  }
}

/////////////////////////DRAWING FUNCTIONS////////////////////////

function drawRoad() {
  stroke(100);
  fill(50);
  rect(roadLeftEdge, 0, roadWidth, 800);
  stroke(255);

  for (var i = -1; i < 20; i++) {
    line(
      roadLeftEdge + roadWidth / 2,
      i * 100 + (Detective_CarObject.Distance_Amnt % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (Detective_CarObject.Distance_Amnt % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(Detective_CarObject);
  image(
    carImages["detective"],
    Detective_CarObject.X_Coord -
      carImages["detective"].width / 2 +
      random(-Detective_CarObject.Vibrate_Val, Detective_CarObject.Vibrate_Val),
    Detective_CarObject.Y_Coord +
      random(-Detective_CarObject.Vibrate_Val, Detective_CarObject.Vibrate_Val)
  );

  //draw all other cars

  for (var i = 0; i < carObjects_array.length; i++) {
    if (
      carObjects_array[i].Y_Coord < height &&
      carObjects_array[i].Y_Coord > -height / 2
    ) {
      image(
        carImages[carObjects_array[i].Car_Variety],
        carObjects_array[i].X_Coord -
          carImages[carObjects_array[i].Car_Variety].width / 2,
        carObjects_array[i].Y_Coord
      );
      turnEngine(carObjects_array[i]);

      drawExhaust(carObjects_array[i]);
    }
  }
}

function turnEngine(car) {
  car.exhaust.push({
    size: 2,
    x: car.X_Coord,
    y: car.Y_Coord + carImages[car.Car_Variety].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.Gas_Amt / 3);
    if (car.Car_Variety != "detective")
      car.exhaust[i].y += Detective_CarObject.Gas_Amt - car.Gas_Amt;
    car.exhaust[i].x += random(-1, 1);
    car.exhaust[i].size += 0.5;

    if (car.exhaust[i].y > height || car.exhaust[i].y < 0) {
      car.exhaust.splice(i, 1);
    }
  }
}

function drawExhaust(car) {
  noStroke();
  for (var i = 0; i < car.exhaust.length; i++) {
    var alpha = map(car.exhaust[i].size, 0, 40, 50, 0);
    fill(125, alpha);
    ellipse(car.exhaust[i].x + 20, car.exhaust[i].y, car.exhaust[i].size);
  }
}
