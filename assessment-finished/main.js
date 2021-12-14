const customName = document.getElementById('customname');
const randomize = document.querySelector('.randomize');
const story = document.querySelector('.story');

function randomValueFromArray(array){
  const random = Math.floor(Math.random()*array.length);
  return array[random];
}

//const storyText = 'その日は、とても暑かった。 so :insertx: went for a walk. When they got to :inserty:, they stared in horror for a few moments, then :insertz:. Bob saw the whole thing, but was not surprised — :insertx: weighs 300 pounds, and it was a hot day.';
//const insertX = ['Willy the Goblin', 'Big Daddy', 'Father Christmas'];
//const insertY = ['the soup kitchen', 'Disneyland', 'the White House'];
//const insertZ = ['spontaneously combusted', 'melted into a puddle on the sidewalk', 'turned into a slug and crawled away'];

const storyText = 'その日は、とても暑かった。:insertx:は散歩に出掛けた。:inserty:に着いた。:insertz:体重:insertw:の:insertx:は驚いたが、Bobは驚かなかった。 — :insertx:ではよくあることだった。';
const insertX = ['スヌーピー', 'ミッキーマウス', 'サンタクロース'];
const insertY = ['ディズニーランド', '千駄ヶ谷', '津田塾大学'];
const insertZ = ['混雑していた。', '雪が降っていた。'];
const insertW = ['50kg','110ポンド'];

randomize.addEventListener('click', result);

function result() {
  let newStory = storyText;

  const xItem = randomValueFromArray(insertX);
  const yItem = randomValueFromArray(insertY);
  const zItem = randomValueFromArray(insertZ);
  const wItem = randomValueFromArray(insertW);

  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':insertx:',xItem);
  newStory = newStory.replace(':inserty:',yItem);
  newStory = newStory.replace(':insertz:',zItem);
  newStory = newStory.replace(':insertw:',wItem);

  if (customName.value !== '') {
    const name = customName.value;
    newStory = newStory.replace('Bob', name);
  }

  if (document.getElementById("ja").checked) {
    const weight = `${Math.round(300*0.0714286)} stone`;
    const temperature =  `${Math.round((94-32) * 5 / 9)} centigrade`;
    newStory = newStory.replace('94 fahrenheit', temperature);
    newStory = newStory.replace('300 pounds', weight);
  }

  story.textContent = newStory;
  story.style.visibility = 'visible';
}
