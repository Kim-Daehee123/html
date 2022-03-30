// for (let i = 9; i < 14; i++) {
//   console.log(`-- ${i} 단 --`);
//   for (let j = 1; j < 10; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }

// function gugudan(n) {
//   console.log(`-- ${n} 단 --`);
//   for (let i = 1; i < 10; i++) {
//     console.log(`${n} * ${i} = ${n * i}`);
//   }
// }
// gugudan(9);

function gugudan(n1, n2) {
  for (let i = n1; i <= n2; i++) {
    console.log(`-- ${i} 단 --`);
    for (let j = 1; j < 10; j++) {
      console.log(`${i} * ${j} = ${n1 * j}`);
    }
  }
}

gugudan(4, 5);
