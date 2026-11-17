'use strict';

const { createElement, forwardRef } = require('react');

const Keypad5 = forwardRef(function Keypad5(
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
    createElement('rect', {"x":"2.974731449503452","y":"2.000000000478394","width":"6","height":"4.999999999998181","rx":"1.999999999998181","ry":"1.999999999998181","key":"0"}),
    createElement('rect', {"x":"8.974731449503452","y":"2.000000000478394","width":"6","height":"4.999999999998181","rx":"1.999999999998181","ry":"1.999999999998181","key":"1"}),
    createElement('rect', {"x":"14.974731449503452","y":"2.000000000478394","width":"6","height":"4.999999999998181","rx":"1.999999999998181","ry":"1.999999999998181","key":"2"}),
    createElement('rect', {"x":"2.974731449503452","y":"7.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"3"}),
    createElement('rect', {"x":"8.974731449503452","y":"7.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"4"}),
    createElement('rect', {"x":"14.974731449503452","y":"7.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"5"}),
    createElement('rect', {"x":"2.974731449503452","y":"12.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"6"}),
    createElement('rect', {"x":"8.974731449503452","y":"12.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"7"}),
    createElement('rect', {"x":"8.974731449503452","y":"17.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"8"}),
    createElement('rect', {"x":"14.974731449503452","y":"12.000000000480213","width":"6","height":"5","rx":"2","ry":"2","key":"9"})
  );
});

Keypad5.displayName = 'Keypad5';

module.exports = Keypad5;
module.exports.Keypad5 = Keypad5;
module.exports.default = Keypad5;
