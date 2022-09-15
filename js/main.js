class Game {
    constructor(){
        this.player = null; // will store an instance of the class Player
        this.obstacles = [];  // will store instances of a class
    }
    start(){
        console.log('starting game....')
        this.player = new Player(); 
        this.attachEventListeners();

        this.obstacle = new Obstacle;
//move obstacles
        setInterval(() => {
        this.obstacles.forEach((obstacleInstance) => {
        obstacleInstance.moveDown()
        });
        }, 60);
//create new obstacles
        setInterval(() => {
        const newObstacle = new Obstacle();
        this.obstacles.push(newObstacle)
        },3000)
        

    }
    attachEventListeners(){
        document.addEventListener("keydown", (event) => {
            console.log('press keys'+ event.key)
            if(event.key === "ArrowLeft"){
                this.player.moveLeft()
            } else if(event.key ==="ArrowRight"){
                this.player.moveRight()
            }
        })
    }
}

class Player {
    constructor(){
        this.positionX = 50;
        this.positionY = 0;
        this.width = 20;
        this.height = 10;
        this.domElement = null
        this.createDomElement();
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement('div');

        // set id and css
        this.domElement.id = "player";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        // append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement)
    }
    moveLeft(){
        this.positionX--;
        this.domElement.style.left = this.positionX + "vw";

    }
    moveRight(){
        this.positionX++;
        this.domElement.style.left = this.positionX + "vw";

    }
}
class Obstacle {
    constructor(){
        this.positionX = 50;
        this.positionY = 90;
        this.width = 10;
        this.height = 10;
        this.domElement = null   
        
        this.createDomElement();
    }
    moveDown(){
        this.positionY--
        this.domElement.style.bottom = this.positionY +"vh"
    }
    createDomElement(){
        // create dom element
        this.domElement = document.createElement('div');

        // set id and css
        this.domElement.className = "obstacle";
        this.domElement.style.width = this.width + "vw";
        this.domElement.style.height = this.height + "vh";
        this.domElement.style.bottom = this.positionY + "vh";
        this.domElement.style.left = this.positionX + "vw";

        // append to the dom
        const boardElm = document.getElementById("board");
        boardElm.appendChild(this.domElement)
    }
}

const game = new Game();
game.start();

