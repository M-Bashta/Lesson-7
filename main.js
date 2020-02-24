function show(data) {
	console.log(data);
}

function Robot() {

	var message = 'Я Robot – я просто працюю';

	this.setRobotMessage = function(amount) {
		message = amount;
	}

	this.getRobotMessage = function() {
		return message;
	}

	this.work = function() {
		show(message);
	}
}

var robot = new Robot();
robot.work();
/// CoffeRobot

var coffeRobot = new CoffeRobot();

function CoffeRobot() {
	Robot.call(this);
}

coffeRobot.setRobotMessage('Я CoffeRobot – я варю каву');
coffeRobot.work();
/// RobotDancer

var robotDancer = new RobotDancer();

function RobotDancer() {
	Robot.call(this);
}

robotDancer.setRobotMessage('Я RobotDancer – я просто танцюю');
robotDancer.work();

/// RobotCoocker

var robotCoocker = new RobotCoocker();

function RobotCoocker() {
	Robot.call(this);
}

robotCoocker.setRobotMessage('Я RobotCoocker – я просто готую');
robotCoocker.work();



/////////////////////////PROTOTYPE
function show(data) {
	console.log(data);
}

function Robot() {
	this.message = 'Я Robot – я просто працюю';
}

Robot.prototype.setRobotMessage = function(amount) {
		this.message = amount;
}

Robot.prototype.getRobotMessage = function() {
		return this.message;
}

Robot.prototype.work = function() {
		show(this.message);
}

var robot = new Robot();
robot.work();

/// CoffeRobot

function CoffeRobot() {};

CoffeRobot.prototype = Object.create(Robot.prototype);
CoffeRobot.prototype.constructor = CoffeRobot;


var coffeRobot = new CoffeRobot();
coffeRobot.setRobotMessage('Я CoffeRobot – я варю каву');
coffeRobot.work();

/// RobotDancer


function RobotDancer() {};

RobotDancer.prototype = Object.create(Robot.prototype);
RobotDancer.prototype.constructor = RobotDancer;

var robotDancer = new RobotDancer();
robotDancer.setRobotMessage('Я RobotDancer – я просто танцюю');
robotDancer.work();

/// RobotCoocker



function RobotCoocker() {};

RobotCoocker.prototype = Object.create(Robot.prototype);
RobotCoocker.prototype.constructor = RobotCoocker;

var robotCoocker = new RobotCoocker();
robotCoocker.setRobotMessage('Я RobotCoocker – я просто готую');
robotCoocker.work();

