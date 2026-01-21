$('.grid_item, button').css('border-radius','20px');

$('.header').css('color','#266A82');

$('.input, button').css({
  'border-color':'#F9A268',
  'background-color':'#EBF1F3',
  'border-radius':'100px'
  'font-size':'16px'
  'line-height':'24px'
});

$('.label').css({
  'background-color':'#EBF1F3',
  'color':'#3D4548'
});

document.body.style.backgroundColor = "#EBF1F3";

document.head.appendChild(Object.assign(document.createElement('style'), {
  textContent: `
.green [type="checkbox"]:checked + label::before,
.green [type="checkbox"]:not(:checked) + label::before {
  border: 1px solid #F9A268;
  border-radius: 10px;
  background: #EBF1F3;
}
`
}));
