'use strict';

function makeShare(value = 1) {

  return function(number ) {
    value = number / Math.round(value);

    return value;
  };
}

const share = makeShare();

console.log(share(2));
console.log(share(1));
console.log(share(7));
console.log(share(70));
console.log(share(2));


