'use strict';

const { createElement, forwardRef } = require('react');

const XSquareCompact = forwardRef(function XSquareCompact(
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
    createElement('rect', {"x":"3.999999990779543","y":"4.000000000448381","width":"16","height":"16","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"9.999999990870492","y1":"14.000000000357431","x2":"13.999999990690412","y2":"10.000000000538421","key":"1"}),
    createElement('line', {"x1":"13.999999990590368","y1":"14.000000000446562","x2":"9.999999990959623","y2":"10.000000000448381","key":"2"})
  );
});

XSquareCompact.displayName = 'XSquareCompact';

module.exports = XSquareCompact;
module.exports.XSquareCompact = XSquareCompact;
module.exports.default = XSquareCompact;
