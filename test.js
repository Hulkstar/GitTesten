class VideoPlayer {
  constructor() {
    this.status = "stopped";
  }
  play() {
    if (this.status === "playing") {
      console.log("Spielt schon");
      return;
    } else if (this.status === "stopped") {
      console.log("Video abspielen");
      this.status = "playing";
    }
  }
  stop() {
    if (this.status === "playing") {
      console.log("Video stoppen");
      this.status = "stopped";
    } else if (this.status === "stopped") {
      console.log("Schon gestoppt");
      return;
    }
  }
}
const videoPlayer = new VideoPlayer();
videoPlayer.play();
videoPlayer.play(); // Spielt schon
videoPlayer.stop();
videoPlayer.stop(); // Schon gestoppt
videoPlayer.play();
videoPlayer.stop();
