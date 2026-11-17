'use strict';

const { createElement, forwardRef } = require('react');

const AddSquare = forwardRef(function AddSquare(
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
    createElement('rect', {"x":"1.974731445219732","y":"2.0000000004502","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"11.974731445219732","y1":"7.0000000004502","x2":"11.974731445219732","y2":"17.0000000004502","key":"1"}),
    createElement('line', {"x1":"16.974731445219732","y1":"12.0000000004502","x2":"6.974731445219732","y2":"12.0000000004502","key":"2"})
  );
});

AddSquare.displayName = 'AddSquare';

module.exports = AddSquare;
module.exports.AddSquare = AddSquare;
module.exports.default = AddSquare;
