import React from "react";

export function YouTubeVideoListcomp()
{
    return(
    [
        {title:'Elden ring  PARODY', youtubeurl:'https://www.youtube.com/embed/LSyRf8rAjTs', width:560, height : 315 },
        {title:'Elden ring  PARODY2', youtubeurl:'https://www.youtube.com/embed/Fq_76bhHXwA', width:560, height : 315 },
        {title:'Elden ring  PARODY3', youtubeurl:'https://www.youtube.com/embed/0MKRDRgKVKE', width:560, height : 315 },
        {title:'Elden ring  PARODY4', youtubeurl:'https://www.youtube.com/embed/zMi-1wDMUic', width:560, height : 315 }
    ]

        
    );
}
export function GetYouTubeVideos(){
    let YouTubeVideo = YouTubeVideoListcomp()
    return(
        YouTubeVideo.map(v => <YouTubeVideoComp title={v.title} youtubeurl={v.youtubeurl} width={v.width} height={v.height}> </YouTubeVideoComp>)
    )
}
export function YouTubeVideoComp(props){
    return(
        <>
        <h1>{props.title}</h1>
        <iframe width={props.width} height={props.width} src= {props.youtubeurl} title={props.title} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </>
    )
}