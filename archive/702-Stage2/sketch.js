/*

Officer: 2906969
CaseNum: 702-1-81840600-2906969

Case 702 - The case of Vanishing Vannevar
Stage 2 - Downtown traffic

“All units: Vannevar is heading into the downtown area. Heavy traffic ahead. Drive safely.”
Complete the helper functions below to drive the car and avoid other vehicles. Keep on it kid.

There are many possible ways of completing this task,
but you should ONLY use the following commands and techniques:

	- Incrementing and assiging variables
	- Maths function such as random and constrain
	- Conditional statements
	- Traversing arrays with for loops
	- calling functions and returning values

HINT: make sure you take a look at the initialisation of detectiveVehicleObject and the cars in
Car_Array to understand their properties.

*/

///////////////////////// HELPER FUNCTIONS /////////////////////

function MoveVehicle() {
  /*
	This function should do the following: 
	 - increment detectiveVehicleObject's distanceTravelled property by its speedAmount property 
	 - add a random amount between -0.07 and 0.07 to detectiveVehicleObject's engineShudderVal property
	 - use the constrain function to constrain detectiveVehicleObject's engineShudderVal property to values between 0.1 and 1.14
	 - call the TurnoverMotor function passing detectiveVehicleObject as an argument
	*/
  detectiveVehicleObject.distanceTravelled +=
    detectiveVehicleObject.speedAmount;
  detectiveVehicleObject.engineShudderVal += random(-0.07, 0.07);
  detectiveVehicleObject.engineShudderVal = constrain(
    detectiveVehicleObject.engineShudderVal,
    0.1,
    1.14
  );
  TurnoverMotor(detectiveVehicleObject);
}

function SwitchLanes(car_obj) {
  /*
	This function should do the following: 
	 - move car_obj from one lane to the other.
	 - do the move in a single step without any extra animation.
	 - use Lane_Pos_A and Lane_Pos_B to effect the change.
	 hint: You will need to modify the posX property of car_obj.
	*/
  if (car_obj.posX === Lane_Pos_A) {
    car_obj.posX = Lane_Pos_B;
  } else {
    car_obj.posX = Lane_Pos_A;
  }
}

function CheckCarIsAhead(CarObj_A, CarObj_B) {
  /*
	This function should do the following: 
	 - determine if CarObj_A is in the same lane and less than 200px behind CarObj_B.
	 - do this by comparing the two cars' distanceTravelled properties
	 - if these requirements are met then return the numberPlate property for CarObj_B. Otherwise return false.
	*/
  if (
    CarObj_A.posX === CarObj_B.posX &&
    CarObj_B.distanceTravelled - CarObj_A.distanceTravelled < 200 &&
    CarObj_B.distanceTravelled > CarObj_A.distanceTravelled
  ) {
    return CarObj_B.numberPlate;
  } else {
    return false;
  }
}

//////////////DO NOT CHANGE CODE BELOW THIS LINE//////////////////

var detectiveVehicleObject;

var roadWidth;
var roadLeftEdge;
var Lane_Pos_A;
var Lane_Pos_B;
var carImages = {};

var Car_Array = [
  {
    posX: 500,
    posY: 0,
    distanceTravelled: -200,
    vehicleCategory: "blueCar",
    numberPlate: "MURJAI",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 300,
    posY: 0,
    distanceTravelled: 200,
    vehicleCategory: "greenCar",
    numberPlate: "E5Y9CR",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 600,
    vehicleCategory: "blueCar",
    numberPlate: "KC5H5X",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 300,
    posY: 0,
    distanceTravelled: 1000,
    vehicleCategory: "blueCar",
    numberPlate: "JENC4Z",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 1400,
    vehicleCategory: "greenCar",
    numberPlate: "R32EPV",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 300,
    posY: 0,
    distanceTravelled: 1800,
    vehicleCategory: "greenCar",
    numberPlate: "YIRDNY",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 2200,
    vehicleCategory: "whiteCar",
    numberPlate: "4ELTBE",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 300,
    posY: 0,
    distanceTravelled: 2600,
    vehicleCategory: "blueCar",
    numberPlate: "KX98BI",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 3000,
    vehicleCategory: "blueCar",
    numberPlate: "JO0BK8",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 3400,
    vehicleCategory: "blueCar",
    numberPlate: "YNUU93",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 3800,
    vehicleCategory: "blueCar",
    numberPlate: "O5SD2U",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 4200,
    vehicleCategory: "redCar",
    numberPlate: "TUXJCX",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 4600,
    vehicleCategory: "whiteCar",
    numberPlate: "YLFI9P",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 5000,
    vehicleCategory: "whiteCar",
    numberPlate: "4Y8OCI",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 300,
    posY: 0,
    distanceTravelled: 5400,
    vehicleCategory: "redCar",
    numberPlate: "HAYJIA",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 5800,
    vehicleCategory: "redCar",
    numberPlate: "2YUEVY",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 6200,
    vehicleCategory: "blueCar",
    numberPlate: "U27OYO",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 300,
    posY: 0,
    distanceTravelled: 6600,
    vehicleCategory: "blueCar",
    numberPlate: "7HTSK0",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 300,
    posY: 0,
    distanceTravelled: 7000,
    vehicleCategory: "blueCar",
    numberPlate: "HWDQ2P",
    speedAmount: 2,
    exhaust: [],
  },
  {
    posX: 500,
    posY: 0,
    distanceTravelled: 7400,
    vehicleCategory: "whiteCar",
    numberPlate: "96RNA9",
    speedAmount: 2,
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

  roadWidth = 400;
  roadLeftEdge = 200;
  Lane_Pos_A = 300;
  Lane_Pos_B = 500;

  detectiveVehicleObject = {
    posX: roadLeftEdge + roadWidth / 4,
    posY: 550,
    distanceTravelled: 0,
    speedAmount: 3,
    engineShudderVal: 0,
    vehicleCategory: "detective",
    numberPlate: "5L3UTH",
    exhaust: [],
  };
}

function draw() {
  background(0);

  drawRoad();
  drawCars();

  ////////////////////// HANDLE DETECTIVE /////////////////////////

  MoveVehicle();
  for (var i = 0; i < Car_Array.length; i++) {
    var b2b = CheckCarIsAhead(detectiveVehicleObject, Car_Array[i]);
    if (b2b) SwitchLanes(detectiveVehicleObject);
  }

  //////////////////////HANDLE THE OTHER CARS//////////////////////

  for (var i = 0; i < Car_Array.length; i++) {
    Car_Array[i].distanceTravelled += Car_Array[i].speedAmount;
    Car_Array[i].posY =
      detectiveVehicleObject.posY -
      Car_Array[i].distanceTravelled +
      detectiveVehicleObject.distanceTravelled;
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
      i * 100 + (detectiveVehicleObject.distanceTravelled % 100),
      roadLeftEdge + roadWidth / 2,
      i * 100 + 70 + (detectiveVehicleObject.distanceTravelled % 100)
    );
  }
}

function drawCars() {
  //draw the detective car

  image;
  drawExhaust(detectiveVehicleObject);
  image(
    carImages["detective"],
    detectiveVehicleObject.posX -
      carImages["detective"].width / 2 +
      random(
        -detectiveVehicleObject.engineShudderVal,
        detectiveVehicleObject.engineShudderVal
      ),
    detectiveVehicleObject.posY +
      random(
        -detectiveVehicleObject.engineShudderVal,
        detectiveVehicleObject.engineShudderVal
      )
  );

  //draw all other cars

  for (var i = 0; i < Car_Array.length; i++) {
    if (Car_Array[i].posY < height && Car_Array[i].posY > -height / 2) {
      image(
        carImages[Car_Array[i].vehicleCategory],
        Car_Array[i].posX - carImages[Car_Array[i].vehicleCategory].width / 2,
        Car_Array[i].posY
      );
      TurnoverMotor(Car_Array[i]);

      drawExhaust(Car_Array[i]);
    }
  }
}

function TurnoverMotor(car) {
  car.exhaust.push({
    size: 2,
    x: car.posX,
    y: car.posY + carImages[car.vehicleCategory].height,
  });

  for (var i = car.exhaust.length - 1; i >= 0; i--) {
    car.exhaust[i].y += max(0.75, car.speedAmount / 3);
    if (car.vehicleCategory != "detective")
      car.exhaust[i].y += detectiveVehicleObject.speedAmount - car.speedAmount;
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
