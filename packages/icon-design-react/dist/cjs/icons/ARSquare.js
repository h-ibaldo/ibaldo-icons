'use strict';

const { createElement, forwardRef } = require('react');

const ARSquare = forwardRef(function ARSquare(
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
    createElement('polyline', {"points":"9.999999977098923 16.999996563434252 9.999999977098923 6.999996563434252 5.999999977098923 6.999996563434252 5.999999977098923 16.999996563434252","key":"0"}),
    createElement('line', {"x1":"5.999999977098923","y1":"12.999996563434252","x2":"9.999999977098923","y2":"12.999996563434252","key":"1"}),
    createElement('polyline', {"points":"13.999999977098923 11.999996563434252 17.999999977098923 14.999996563434252 17.999999977098923 16.999996563434252","key":"2"}),
    createElement('polyline', {"points":"13.999999977098923 16.999996563434252 13.999999977098923 6.999996563434252 17.999999977098923 6.999996563434252 17.999999977098923 11.999996563434252 13.999999977098923 11.999996563434252","key":"3"}),
    createElement('rect', {"x":"1.999999977098923","y":"2.999996563434252","width":"20","height":"18","rx":"2","ry":"2","key":"4"})
  );
});

ARSquare.displayName = 'ARSquare';

module.exports = ARSquare;
module.exports.ARSquare = ARSquare;
module.exports.default = ARSquare;
