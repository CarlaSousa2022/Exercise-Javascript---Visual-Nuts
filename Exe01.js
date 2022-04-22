const limit = 500;

for (var contador = 1; contador <= limit; contador++) {
  if (contador % 3 == 0 && contador % 5 == 0) {
    console.log("Visual Nuts");
    continue;
  }
  if (contador % 3 == 0) {
    console.log("Visual");
    continue;
  }
  if (contador % 5 == 0) {
    console.log("Nuts");
    continue;
  }
  console.log(contador);
}
