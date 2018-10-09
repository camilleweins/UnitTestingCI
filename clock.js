function countdown(t, callback){
  console.log("Countdown started")
  setTimeout(function(){
    console.log('Countdown done!');
    callback();
  }, t);
}

module.exports = {
  countdown: countdown
}
