'use strict';

const { createElement, forwardRef } = require('react');

const Keypad = forwardRef(function Keypad(
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
    createElement('rect', {"x":"1.974731449503452","y":"2.000000000479304","width":"4","height":"2","key":"0"}),
    createElement('rect', {"x":"9.974731449503452","y":"2.000000000479304","width":"4","height":"2","key":"1"}),
    createElement('rect', {"x":"17.974731449503452","y":"2.000000000479304","width":"4","height":"2","key":"2"}),
    createElement('rect', {"x":"1.974731449503452","y":"8.000000000480213","width":"4","height":"2","key":"3"}),
    createElement('rect', {"x":"9.974731449503452","y":"8.000000000480213","width":"4","height":"2","key":"4"}),
    createElement('rect', {"x":"17.974731449503452","y":"8.000000000480213","width":"4","height":"2","key":"5"}),
    createElement('rect', {"x":"1.974731449503452","y":"14.000000000480213","width":"4","height":"2","key":"6"}),
    createElement('rect', {"x":"9.974731449503452","y":"14.000000000480213","width":"4","height":"2","key":"7"}),
    createElement('rect', {"x":"9.974731449503452","y":"20.000000000480213","width":"4","height":"2","key":"8"}),
    createElement('rect', {"x":"17.974731449503452","y":"14.000000000480213","width":"4","height":"2","key":"9"})
  );
});

Keypad.displayName = 'Keypad';

module.exports = Keypad;
module.exports.Keypad = Keypad;
module.exports.default = Keypad;
