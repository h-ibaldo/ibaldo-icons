'use strict';

const { createElement, forwardRef } = require('react');

const SquaresFourGrid1 = forwardRef(function SquaresFourGrid1(
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
    createElement('rect', {"x":"2.000000005000402","y":"2.000000003888999","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement('rect', {"x":"14.000000005000402","y":"2.000000003888999","width":"8","height":"8","rx":"1","ry":"1","key":"1"}),
    createElement('rect', {"x":"2.000000005000402","y":"14.000000003886271","width":"8","height":"8","rx":"1","ry":"1","key":"2"}),
    createElement('rect', {"x":"14.000000005000402","y":"14.000000003886271","width":"8","height":"8","rx":"1","ry":"1","key":"3"})
  );
});

SquaresFourGrid1.displayName = 'SquaresFourGrid1';

module.exports = SquaresFourGrid1;
module.exports.SquaresFourGrid1 = SquaresFourGrid1;
module.exports.default = SquaresFourGrid1;
