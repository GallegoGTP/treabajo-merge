
let img1=document.getElementById("img1");
let img2=document.getElementById("img2");
let img3=document.getElementById("img3");


let url="https://api.spotify.com/v1/artists/66ArjpKRgw8vYBf9yhktto/top-tracks?country=US";

let token="BQAYkOrVZkwrz9jCV5C3LItniX3_s8NxKVXmMvoRiJ9PoclJJ8pJ0Ynao7PqwNZkMTV3KEz7Jk9o0RNkI3YGslDE6E2H-PQSgy3wpCGHCFdA4A8UZ-nQPN5kexHyUSx6JFAIJ2OaDgwUTdCiYyDRuBHggISAPho";

let objetoAjax = new XMLHttpRequest();

objetoAjax.open('GET',url,true);

objetoAjax.setRequestHeader('Authorization',token);

objetoAjax.onload=function(){
    let respuesta=JASON.parse(this.responseText);
    console.log(respuesta.tracks[0].album.images[0].url);
    img1.src=respuesta.tracks[0].album.images[0].url;
    img2.src=respuesta.tracks[0].album.images[1].url;
    img3.src=respuesta.tracks[0].album.images[2].url;

};



