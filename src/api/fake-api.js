async function doSomethingDifficult() {
  console.debug('I am working really hard...');

  return new Promise((resolve) => {
    setTimeout(() => {
      console.debug("I'm done!");
      resolve();
    }, 3000);
  });
}

async function doSomethingElseMoreDifficult() {
  console.debug('I am working really hard...');

  return new Promise((resolve) => {
    setTimeout(() => {
      console.debug("I'm done!");
      resolve();
    }, 5000);
  });
}

export {
  doSomethingDifficult,
  doSomethingElseMoreDifficult,
};
