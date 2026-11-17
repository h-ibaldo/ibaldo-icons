'use strict';

const { createElement, forwardRef } = require('react');

const Cloud3Minus1 = forwardRef(function Cloud3Minus1(
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
    createElement('path', {"d":"M17.924255383692071,9.093139648438409c-.438171386720569-2.882202148440228-2.919616699220569-5.093139648440228-5.924255371090112-5.093139648440228-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371101026,5.093139648440228-2.318725585930224.434509277339203-4.075744628898974,2.462036132809772-4.075744628898974,4.906860351559772,0,2.761413574209655,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425790345,5-5,0-2.44482421875-1.757019042970569-4.472351074220569-4.075744628909888-4.906860351559772Z","key":"0"}),
    createElement('line', {"x1":"9.000000000001819","y1":"11.999999973497324","x2":"15.000000000001819","y2":"11.999999973497324","key":"1"})
  );
});

Cloud3Minus1.displayName = 'Cloud3Minus1';

module.exports = Cloud3Minus1;
module.exports.Cloud3Minus1 = Cloud3Minus1;
module.exports.default = Cloud3Minus1;
