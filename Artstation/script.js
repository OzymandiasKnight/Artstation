document.addEventListener("DOMContentLoaded", () => {

    var video_players = document.getElementsByClassName("video_player");
    for (let i=0; i < video_players.length; i++) {
        console.log("a");
        video_player = video_players[i];
        const videoControls = document.createElement("div");
        videoControls.className = "video_controls";


        const playButton = document.createElement("img");
        playButton.src = "icons/play.svg";
        playButton.className = "control_play";
        playButton.hidden = false;


        const pauseButton = document.createElement("img");
        pauseButton.src = "icons/pause.svg";
        pauseButton.className = "control_play";
        pauseButton.hidden = true;

        const replayButton = document.createElement("img");
        replayButton.src = "icons/replay.svg";
        replayButton.className = "control_play";
        replayButton.hidden = true;

        video_player.appendChild(videoControls);
        videoControls.appendChild(playButton);
        videoControls.appendChild(pauseButton);
        videoControls.appendChild(replayButton);

        const video = video_player.getElementsByClassName("video")[0];
        playButton.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                playButton.hidden = true;
                pauseButton.hidden = false;
                replayButton.hidden = true;
            }
        });
        pauseButton.addEventListener("click", () => {
            if (!video.paused) {
                video.pause();
                playButton.hidden = false;
                replayButton.hidden = true;
                pauseButton.hidden = true; 
            }
        });

        replayButton.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                playButton.hidden = true;
                pauseButton.hidden = false;
                replayButton.hidden = true;
            }
        });

        video.addEventListener("ended", () => {
            playButton.hidden = true;
            pauseButton.hidden = true;
            replayButton.hidden = false;
        });
    };

});