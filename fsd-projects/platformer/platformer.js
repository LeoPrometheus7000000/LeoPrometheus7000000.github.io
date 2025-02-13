$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    // toggleGrid();


    // TODO 2 - Create Platforms
    createPlatform(500 ,200, 200, 20, "red")
    createPlatform(200, 620, 600, 20, "red")
    createPlatform(900, 550, 300, 20, "red")
    createPlatform(200, 410, 525, 20, "red")
    createPlatform(200, 280, 50, 20,"red")
    createPlatform(700, 100, 50, 20, "red")
    createPlatform(800, 50, 50, 20, "red")
    createPlatform(835, 220, 200, 20, "red")


    // TODO 3 - Create Collectables
    createCollectable("database", 1100, 100, 0, 1)
    createCollectable("steve", 800, 500, 0, 0)
    createCollectable("diamond", 400, 100, 1, 1)


    
    // TODO 4 - Create Cannons
    createCannon("right", 700, 1000)
    createCannon("top", 400, 1500)
    createCannon("top", 500, 1000)
    createCannon("top", 800, 1500)
    createCannon("top", 1000, 1000)
    createCannon("left", 500, 2000)
    createCannon("right", 300, 1000)
    createCannon("left", 150, 2500)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
