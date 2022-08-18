//AIzaSyClIrqovzArCLjqFj9e9eGy21YNBpPlFD8

//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=thor&key=[YOUR_API_KEY]

const api_key = "AIzaSyClIrqovzArCLjqFj9e9eGy21YNBpPlFD8";
// async sea(){
    
//     let res = await fetch(url);
//     let data = await res.json();
//     console.log(data);
// }

let search = async () =>{
    try {
        let query = document.getElementById("query").value;
        let url = `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&q=${query}&key=${api_key}`;
        
        let res = await fetch(url);
        
        let data = await res.json();
        append(data.items);

        console.log(data);
    } catch (err) {
        console.log(err);
    }
};


//append

let append = (data) =>{
    let container = document.getElementById("results");

    data.forEach(({id: {videoId}, snippet: {title, thumbnails} }) =>{
        // console.log(videoId);
        // console.log(title);
        let div = document.createElement("div");

        // let img = document.createElement("img");
        // img.src =thumbnails.default.url;

        let iframe = document.createElement("iframe");
        iframe.src = `https://www.youtube.com/embed/${videoId}`;
        iframe.allow = "fullscreen";

        let h3 = document.createElement("h3");
        h3.innerText = title;

        div.append(iframe,h3);

        let video = {
            title,
            videoId,
        };
        div.onclick = () =>{
            playVideo(video);
        };

        container.append(div);
    })
}

let playVideo = (video) =>{
   
    localStorage.setItem("video", JSON.stringify(video))
    window.location.href = "video.html";

}

/*
<iframe width="560" height="315" 
src="https://www.youtube.com/embed/7lar2-cNj3Y"    //video ID
title="YouTube video player" 
frameborder="0" 
allow="accelerometer;
 autoplay; clipboard-write; 
 encrypted-media; gyroscope; 
 picture-in-picture" allowfullscreen></iframe>
*/