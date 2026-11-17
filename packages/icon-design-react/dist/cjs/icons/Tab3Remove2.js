'use strict';

const { createElement, forwardRef } = require('react');

const Tab3Remove2 = forwardRef(function Tab3Remove2(
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
    createElement('line', {"x1":"15.025268532079281","y1":"13.99877930112325","x2":"9.025268532079281","y2":"13.99877930112325","key":"0"}),
    createElement('polygon', {"points":"22.025268532079281 21.99877930112325 2.025268532079281 21.99877930112325 2.025268532079281 1.99877930112325 10.025268532079281 1.99877930112325 13.025268532079281 5.99877930112325 22.025268532079281 5.99877930112325 22.025268532079281 21.99877930112325","key":"1"}),
    createElement('polyline', {"points":"15.025268532079281 1.99877930112325 22.025268532079281 1.99877930112325 22.025268532079281 5.99877930112325","key":"2"})
  );
});

Tab3Remove2.displayName = 'Tab3Remove2';

module.exports = Tab3Remove2;
module.exports.Tab3Remove2 = Tab3Remove2;
module.exports.default = Tab3Remove2;
