'use strict';

const { createElement, forwardRef } = require('react');

const AddCircle = forwardRef(function AddCircle(
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
    createElement('line', {"x1":"11.974731445219732","y1":"8.0000000004502","x2":"11.974731445219732","y2":"16.0000000004502","key":"0"}),
    createElement('line', {"x1":"15.974731445219732","y1":"12.0000000004502","x2":"7.974731445219732","y2":"12.0000000004502","key":"1"}),
    createElement('circle', {"cx":"11.974731445219732","cy":"12.000000000446562","r":"10","key":"2"})
  );
});

AddCircle.displayName = 'AddCircle';

module.exports = AddCircle;
module.exports.AddCircle = AddCircle;
module.exports.default = AddCircle;
