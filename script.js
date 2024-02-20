'use strict';
const rgbRadio = document.querySelector('#rgb');
const rgbBtn = document.querySelector('#btn_rgb');
const rgbCode = document.querySelector('#rgb-code');
const hexRadio = document.querySelector('#hex');
const hexBtn = document.querySelector('#btn_hex');
const hexCode = document.querySelector('#hex-code');

// bgcolor
const bgColor = color => {
  document.querySelector('body').style.backgroundColor = color;
};
// nah rgb
const nahRgb = () => {
  return Math.floor(Math.random() * 256);
};

// pole hex
const hexZnaky = new Array(
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'A',
  'B',
  'C',
  'D',
  'E',
  'F'
);

// radios
const radios = document.querySelectorAll('input[name="colorSelect"]');

const checker = () => {
  // viditelnost
  if (rgbRadio.checked === true) {
    rgbBtn.classList.remove('hidden');
    rgbCode.classList.remove('hidden');
    hexBtn.classList.add('hidden');
    hexCode.classList.add('hidden');
    hexCode.textContent = "#......"
  } else if (hexRadio.checked === true) {
    rgbBtn.classList.add('hidden');
    rgbCode.classList.add('hidden');
    hexBtn.classList.remove('hidden');
    hexCode.classList.remove('hidden');
    rgbCode.textContent = "RGB(x,y,z)"
  }
};

// forEach pro radios
radios.forEach(radio => radio.addEventListener('click', checker));

// rgb
rgbBtn.addEventListener('click', () => {
  let rgb = `rgb(${nahRgb()}, ${nahRgb()}, ${nahRgb()})`;
  rgbCode.textContent = rgb;
  bgColor(rgb);
});

// hex
hexBtn.addEventListener("click", () => {
  let hex = "#"
  for (let i = 0; i < 6; i++) {
    let index = Math.floor(Math.random()*hexZnaky.length)
    hex +=  hexZnaky[index]
  }
  hexCode.textContent = hex
  bgColor(hex)

})



