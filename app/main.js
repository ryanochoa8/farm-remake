class App {
  constructor() {
    this.controller = {
      plantController: new PlantController()
    }
  }
}
window["app"] = new App()