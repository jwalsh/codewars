const stoch = require('@jwalsh/stochastic');

const  = (dist = 50, avgMpg = 25, gal = 2, varMpg = 0) => {
  let mpg = avgMpg;
  if (varMpg !== 0) {
    mpg = stoch.norm(avgMpg, varMpg, 1)[0];
  }
  let result = false;
  if (gal >=  dist / mpg) {
    result = true;
  }
  return result;
}

console.log(zeroFuel);
