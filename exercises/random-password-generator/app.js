function passwordGenerator(length) {
    let t = [];
    for (let i = 0; i < length; i++) {
      let x = Math.floor(Math.random() * (122 - 33) + 33);
      let y = t.join('').split(x).length - 1;
      (x === t[i] && i % 4 !== 0 || y > Math.floor(length/5)) ? t.push(x+1) : t.push(x);
    }
    return String.fromCharCode(...t);
  }
  
  console.log(passwordGenerator(16))