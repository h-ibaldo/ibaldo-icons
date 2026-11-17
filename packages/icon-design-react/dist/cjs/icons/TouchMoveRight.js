'use strict';

const { createElement, forwardRef } = require('react');

const TouchMoveRight = forwardRef(function TouchMoveRight(
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
    createElement('polyline', {"points":"19.075805663776919 8.998782737096917 22.075805663656865 11.998782737231522 19.075805663525898 14.998782737096917","key":"0"}),
    createElement('line', {"x1":"10.075805663656865","y1":"11.998782736693101","x2":"22.075805663656865","y2":"11.998782737231522","key":"1"}),
    createElement('path', {"d":"M13.266540526805329,14.998782736834983c-1.037841796958674,1.791625976515206-2.971191406390062,2.999999999865395-5.190734863428588,2.999999999767169-3.313720703110448-.000000000149157-5.999999999879947-2.68627929714421-5.999999999719876-6.00000000026921.000000000149157-3.313720703125,2.686279297138753-5.999999999879947,6.00000000026921-5.99999999973079,2.219543457029431.000000000098225,4.152893066340766,1.208374023623037,5.190734863150283,3.000000000232831","key":"2"})
  );
});

TouchMoveRight.displayName = 'TouchMoveRight';

module.exports = TouchMoveRight;
module.exports.TouchMoveRight = TouchMoveRight;
module.exports.default = TouchMoveRight;
