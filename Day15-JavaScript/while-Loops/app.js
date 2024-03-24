let i=1;
while(i<=5){
    console.log(i);
    i++;
}

// guess favorite movie

let guess=prompt('guess my favorite movie');
const favmovie='avtar';
while((guess!=favmovie) && (guess!='quit')){
    guess=prompt('wrong guess. please try again');
}
if(guess==favmovie){
    console.log('congrats!!');
}
else{
    console.log('you quit');
}