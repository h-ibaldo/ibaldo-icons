'use strict';

const { createElement, forwardRef } = require('react');

const Form6 = forwardRef(function Form6(
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
    createElement('rect', {"x":"10.000000005000402","y":"6.000000003886271","width":"9","height":"4","rx":"1","ry":"1","key":"0"}),
    createElement('rect', {"x":"2.000000005000402","y":"2.000000003886271","width":"20","height":"19.999999999997272","rx":"1","ry":"1","key":"1"}),
    createElement('line', {"x1":"5.000000005000402","y1":"8.000000003886271","x2":"7.000000005000402","y2":"8.000000003886271","key":"2"}),
    createElement('rect', {"x":"10.000000005000402","y":"14.000000003886271","width":"9","height":"4","rx":"1","ry":"1","key":"3"}),
    createElement('line', {"x1":"5.000000005000402","y1":"16.000000003886271","x2":"7.000000005000402","y2":"16.000000003886271","key":"4"})
  );
});

Form6.displayName = 'Form6';

module.exports = Form6;
module.exports.Form6 = Form6;
module.exports.default = Form6;
