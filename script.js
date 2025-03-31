
function generate_videos_frames() {
    var video_players = document.getElementsByClassName("video_player");
    for (let i=0; i < video_players.length; i++) {
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
};

document.addEventListener("DOMContentLoaded", () => {
    generate_videos_frames();
    var type_switch = document.getElementById("type_switch");
    var selection_image = document.getElementById("selection_image");
    selection_image.classList.add("hidden");

    type_switch.addEventListener("click", () => {
        var selection_video = document.getElementById("selection_video");
        selection_image.classList.toggle("hidden");
        selection_video.classList.toggle("hidden");
        type_switch.children[0].classList.toggle("type_tab");
        type_switch.children[1].classList.toggle("type_tab");

    });

});