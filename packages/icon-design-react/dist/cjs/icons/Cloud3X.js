'use strict';

const { createElement, forwardRef } = require('react');

const Cloud3X = forwardRef(function Cloud3X(
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
    createElement('path', {"d":"M17.924255372912739,9.093139648438409c-.438171386720569-2.882202148440228-2.919616699220569-5.093139648440228-5.924255371101026-5.093139648440228-3.004638671869543,0-5.486083984369543,2.2109375-5.924255371090112,5.093139648440228-2.318725585939319.434509277339203-4.075744628909888,2.462036132809772-4.075744628909888,4.906860351559772,0,2.761413574209655,2.238525390630457,5,5,5h10c2.761474609380457,0,5-2.238586425790345,5-5,0-2.44482421875-1.75701904296875-4.472351074220569-4.075744628898974-4.906860351559772Z","key":"0"}),
    createElement('line', {"x1":"10.000000001811713","y1":"10.999999973497324","x2":"14.000000001811713","y2":"14.999999973497324","key":"1"}),
    createElement('line', {"x1":"14.000000001720764","y1":"10.999999973408194","x2":"10.000000001902663","y2":"14.999999973588274","key":"2"})
  );
});

Cloud3X.displayName = 'Cloud3X';

module.exports = Cloud3X;
module.exports.Cloud3X = Cloud3X;
module.exports.default = Cloud3X;
