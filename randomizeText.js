// randomizeText.js

function randomizeText(textArray) {
  // Get a random index from the array
  const randomIndex = Math.floor(Math.random() * textArray.length);

  // Get the text container element
  const textContainer = document.getElementById('textContainer');

  // Set the text of the container element to the text at the random index
  textContainer.textContent = textArray[randomIndex];
}

// Example usage:
const textOptions = ['wanna have mentally ill sex? -gwen','man I wish Emplemon was a femboy -lili','I dont like the hue of your skin. -nick','im not gay but maaaan that video is enticing -tommy','i like saying slurs -gwen','Special ed fetish -gwen','travis youre my favorite femboy -tommy','YEAH! KEEP THOSE AUTISM LEVELS UP! -alex','GAY 2 YEAR OLD -lili','dromio and juliet -tommy','youre my favorite femboy, Travis -tommy','Minnesota is where midgets go to get washed -brandon','trans people belong in ohio -brandon','what Monday is it?? its Tuesday! -travis','jerma is like- the only straight person -travis','what fart should I shit -alex','I wanna conceive your firstborn -gwen','youre in the drivers seat, covered in babies -brandon','I wonder if there is a picture of the top of Mt. Everest -travis','I dont have hand-eye coordination, you do -lili','elon musk is a cute little kitty -lili','just gamble once -alex','racist furry femboy roleplay -alex','bro got the squidward ass pussy -alex','can I walk on the steamdeck? -lili','are you the voice actor for my penis? -gwen','OUTDATED INFO IM XI/XEY -brandon','plump boys -brandon','is jerma a top or a bottom - green','my mom feeds me rocks -alex','bark like a man! -lili','how yo balls so good at acting? -alex','Im gonna beatbox with your nuts -pix','travis, can you tell me to die? -lili','Im gonna baljeet on these bitches -alex','helen keller pussy go craazyy -lili','smash or pass, helen keller? -gwen','human rights are virus rights -tommy','there should be a flash game, where its just like- tickling my meow meow dreams feet! -shplorf'];
randomizeText(textOptions);
// The text in the textContainer element will now be one of 'apple', 'banana', or 'orange' randomly.
