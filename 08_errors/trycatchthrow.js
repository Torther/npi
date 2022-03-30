class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  const regex=/^abc$/;   //TODO 请自行百度，并且填进去。
  if(regex.test(result)){
      return result;
  }
  throw new InputError("Invalid ID card: " + result);
}



for (;;) {
    try {
      let dir = promptDirection("your ID card?");
      console.log("You ID card ", dir);
      break;
    } catch (e) {
      if (e instanceof InputError) {
        console.log("Not a valid ID card. Try again.");
      } else {
        throw e;
      }
    }
  }