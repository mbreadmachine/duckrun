import { Application, Assets, Container, Sprite } from 'pixi.js';

async function runGame() {
  const app = new Application();
  await app.init({ background: '#1099bb', resizeTo: window });
  document.getElementById("pixi-container").appendChild(app.canvas);

  const container = new Container();
  app.stage.addChild(container);

  const texture = await Assets.load('./assets/bunny.png');
  const bunny = new Sprite(texture);
  container.addChild(bunny);

  container.x = app.screen.width / 2;
  container.y = app.screen.height / 2;
  container.pivot.x = container.width / 2;
  container.pivot.y = container.height;

  // variables

  const groundY = -300
  const groundPos = (app.screen.height / 2) - groundY
  const baseAddedHeight = 15
  const jumpSpeed = 0.8

  let jump = false
  let onGround = true
  let addedHeight = baseAddedHeight

  // game logic

  container.y = groundPos

  document.addEventListener("keydown", (key) => {
    if (key.key == " ") {
      jump = true
    }
  })

  document.addEventListener("keyup", (key) => {
    if (key.key == " ") {
      jump = false
    }
  })

  document.addEventListener("mousedown", (mouse) => {
    if (mouse.button == 0) {
      jump = true
    }
  })

  document.addEventListener("mouseup", (mouse) => {
    if (mouse.button == 0) {
      jump = false
    }
  })

  document.addEventListener("touchstart", (mouse) => {
      jump = true
  })

  document.addEventListener("touchend", (mouse) => {
      jump = false
  })

  document.addEventListener("stopgamenow", () => {
    app.destroy(true, true)
  })

  app.ticker.add(() => {
    if (jump && onGround) {
      onGround = false
    }
    if (!onGround) {
      container.y -= addedHeight * app.ticker.deltaTime
      addedHeight -= jumpSpeed
      if (addedHeight < 0) {
        if (container.y >= groundPos) {
          onGround = true;
          addedHeight = baseAddedHeight;
          container.y = groundPos;
        }
      }

    }
  })
};

export default runGame