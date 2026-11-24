'use strict';

const { createElement, forwardRef } = require('react');

const AlertSquareSmall = forwardRef(function AlertSquareSmall(
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
    createElement('rect', {"x":"3.974731450040053","y":"4.000000000479304","width":"16","height":"16","rx":"3","ry":"3","key":"0"}),
    createElement('line', {"x1":"11.974731450040053","y1":"15.010000000480431","x2":"11.974731450040053","y2":"15.000000000479304","key":"1"}),
    createElement('line', {"x1":"11.974731450040053","y1":"9.000000000479304","x2":"11.974731450040053","y2":"12.000000000479304","key":"2"})
  );
});

AlertSquareSmall.displayName = 'AlertSquareSmall';

module.exports = AlertSquareSmall;
module.exports.AlertSquareSmall = AlertSquareSmall;
module.exports.default = AlertSquareSmall;
