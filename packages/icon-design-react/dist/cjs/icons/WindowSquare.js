'use strict';

const { createElement, forwardRef } = require('react');

const WindowSquare = forwardRef(function WindowSquare(
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
    createElement('rect', {"x":"1.898925794721436","y":"1.99877930292314","width":"20","height":"20","rx":"3","ry":"3","key":"0"}),
    createElement('rect', {"x":"6.898925794721436","y":"6.99877930292314","width":"10","height":"10","rx":"1","ry":"1","key":"1"}),
    createElement('line', {"x1":"6.898925794721436","y1":"10.99877930292314","x2":"16.898925794721436","y2":"10.99877930292314","key":"2"})
  );
});

WindowSquare.displayName = 'WindowSquare';

module.exports = WindowSquare;
module.exports.WindowSquare = WindowSquare;
module.exports.default = WindowSquare;
