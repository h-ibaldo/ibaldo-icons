'use strict';

const { createElement, forwardRef } = require('react');

const XSquareSmall = forwardRef(function XSquareSmall(
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
    createElement('line', {"x1":"9.999999990870492","y1":"14.000000000357431","x2":"13.999999990690412","y2":"10.000000000538421","key":"0"}),
    createElement('line', {"x1":"13.999999990590368","y1":"14.000000000446562","x2":"9.999999990959623","y2":"10.000000000448381","key":"1"}),
    createElement('rect', {"x":"1.999999990779543","y":"2.000000000448381","width":"20","height":"20","rx":"3","ry":"3","key":"2"})
  );
});

XSquareSmall.displayName = 'XSquareSmall';

module.exports = XSquareSmall;
module.exports.XSquareSmall = XSquareSmall;
module.exports.default = XSquareSmall;
