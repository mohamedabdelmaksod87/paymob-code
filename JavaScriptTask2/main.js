function createLetter(size) {
  let character = "#";
  let letter = "";
  for (let i = 1; i <= size; i++) {
    if (i < size) {
      letter += `${character}\n`;
    } else {
      letter += `${character.repeat(size)}`;
    }
  }
  return letter;
}

function solution(N) {
  if (N >= 1 && N <= 100) {
    const letter = createLetter(N);
    for (let i = 1; i <= N; i++) {
      if (i < N) {
        console.log(`${letter}\n`);
      } else {
        for (let i = 1; i <= N; i++) {
          if (i < N) {
            console.log(`#${" ".repeat(N)}`.repeat(N));
          } else {
            console.log(`${"#".repeat(N)} `.repeat(N));
          }
        }
      }
    }
  } else {
    console.log("Invalid Input Number");
  }
}

solution(5);
