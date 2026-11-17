'use strict';

const { createElement, forwardRef } = require('react');

const DoorSquareEnter = forwardRef(function DoorSquareEnter(
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
    createElement('line', {"x1":"7.974731450043691","y1":"8.000000000481123","x2":"7.974731450043691","y2":"10.000000000481123","key":"0"}),
    createElement('rect', {"x":"1.974731450043691","y":"2.000000000479304","width":"20","height":"20","rx":"3","ry":"3","key":"1"}),
    createElement('polyline', {"points":"3.283752446137441 21.476379395012373 11.974731450043691 17.000000000481123 11.974731450043691 2.000000000481123","key":"2"})
  );
});

DoorSquareEnter.displayName = 'DoorSquareEnter';

module.exports = DoorSquareEnter;
module.exports.DoorSquareEnter = DoorSquareEnter;
module.exports.default = DoorSquareEnter;
