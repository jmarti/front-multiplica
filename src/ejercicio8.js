var talk = talky;
var cat = {
  speak: talk,
  sound: 'miau'
}
var dog = {
  speak: cat.speak,
  sound: 'wof'
}
function talky() {
  console.log(this.sound);
}

module.exports = {
    cat: cat,
    dog: dog
};
