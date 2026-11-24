'use strict';

const { createElement, forwardRef } = require('react');

const TouchSwipeUpSquare = forwardRef(function TouchSwipeUpSquare(
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
    createElement('polyline', {"points":"8.99999999845204 4.998779298828595 11.99999999845204 1.998779298828595 14.99999999845204 4.998779298828595","key":"0"}),
    createElement('line', {"x1":"11.99999999845204","y1":"9.998779298828595","x2":"11.99999999845204","y2":"1.998779298828595","key":"1"}),
    createElement('circle', {"cx":"11.99999999845204","cy":"13.998779298828595","r":"4","key":"2"}),
    createElement('path', {"d":"M6.999999998713974,1.998779298828595h-3c-1.104569499661011,0-2,.895430500338989-2,2v16c0,1.104569499661011.895430500338989,2,2,2h16c1.104569499659192,0,2-.895430500338989,2-2V3.998779298828595c0-1.104569499661011-.895430500340808-2-2-2h-3","key":"3"})
  );
});

TouchSwipeUpSquare.displayName = 'TouchSwipeUpSquare';

module.exports = TouchSwipeUpSquare;
module.exports.TouchSwipeUpSquare = TouchSwipeUpSquare;
module.exports.default = TouchSwipeUpSquare;
