'use strict';

const { createElement, forwardRef } = require('react');

const Bell5Z = forwardRef(function Bell5Z(
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
    createElement('line', {"x1":"19.974731449503452","y1":"17.000000000480213","x2":"3.974731449503452","y2":"17.000000000480213","key":"0"}),
    createElement('path', {"d":"M17.974731449503452,17.000000000480213v-8.000006000002031c0-3.313705185279105-2.686288814724321-5.999993999997969-5.999993999999788-5.999993999997969h-.000012000000424c-3.313705185275467,0-5.999993999999788,2.686288814718864-5.999993999999788,5.999993999997969v8.000006000002031","key":"1"}),
    createElement('line', {"x1":"9.974731449503452","y1":"21.000000000480213","x2":"13.974731449503452","y2":"21.000000000480213","key":"2"}),
    createElement('polyline', {"points":"9.974731449503452 8.000000000480213 13.974731449503452 8.000000000480213 9.974731449503452 13.000000000480213 13.974731449503452 13.000000000480213","key":"3"})
  );
});

Bell5Z.displayName = 'Bell5Z';

module.exports = Bell5Z;
module.exports.Bell5Z = Bell5Z;
module.exports.default = Bell5Z;
