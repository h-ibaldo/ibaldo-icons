'use strict';

const { createElement, forwardRef } = require('react');

const LaptopBagFlat = forwardRef(function LaptopBagFlat(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('path', {"d":"M7.000000003161404,6.998782736171052h-2c-.552284749828686,0-1,.447715250171314-1,1v9c0,.552284749832324.447715250171314,1,1,1h14c.552284749830505,0,1-.447715250167676,1-1","key":"0"}),
    createElement('line', {"x1":"2.000000003161404","y1":"21.998782736171052","x2":"22.000000003161404","y2":"21.998782736171052","key":"1"}),
    createElement('rect', {"x":"11.000000003161404","y":"5.998782736171052","width":"11","height":"7","rx":"1","ry":"1","key":"2"}),
    createElement('path', {"d":"M14.000000003161404,7.998782736171052v-2.999999999992724c0-1.104569499661011.895430500331713-2.000000000007276,2-2.000000000007276h1c1.104569499661011,0,1.999999999979991.895430500335351,1.999999999979991,1.999999999996362l.000000000020009,3.000000000003638","key":"3"})
  );
});

LaptopBagFlat.displayName = 'LaptopBagFlat';

module.exports = LaptopBagFlat;
module.exports.LaptopBagFlat = LaptopBagFlat;
module.exports.default = LaptopBagFlat;
