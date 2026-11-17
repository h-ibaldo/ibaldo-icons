'use strict';

const { createElement, forwardRef } = require('react');

const DiagramTreeIndent = forwardRef(function DiagramTreeIndent(
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
    createElement('rect', {"x":"2.949462885142566","y":"2.000000000480213","width":"8","height":"4","key":"0"}),
    createElement('rect', {"x":"12.949462885142566","y":"10.000000000480213","width":"8","height":"4","key":"1"}),
    createElement('rect', {"x":"12.949462885142566","y":"18.000000000480213","width":"8","height":"4","key":"2"}),
    createElement('polyline', {"points":"6.949462885142566 6.000000000480213 6.949462885142566 20.000000000480213 12.949462885142566 20.000000000480213","key":"3"}),
    createElement('line', {"x1":"6.949462885142566","y1":"12.000000000480213","x2":"12.949462885142566","y2":"12.000000000480213","key":"4"})
  );
});

DiagramTreeIndent.displayName = 'DiagramTreeIndent';

module.exports = DiagramTreeIndent;
module.exports.DiagramTreeIndent = DiagramTreeIndent;
module.exports.default = DiagramTreeIndent;
