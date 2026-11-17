'use strict';

const { createElement, forwardRef } = require('react');

const Cloud3UploadAlt2 = forwardRef(function Cloud3UploadAlt2(
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
    createElement('polyline', {"points":"8.999999987390765 11.999999999998181 11.999999987390765 8.999999999998181 14.999999987390765 11.999999999998181","key":"0"}),
    createElement('line', {"x1":"11.999999987390765","y1":"14.999999999998181","x2":"11.999999987390765","y2":"8.999999999998181","key":"1"}),
    createElement('path', {"d":"M17.924255372901825,9.093139648428405c-.438171386720569-2.882202148430224-2.919616699220569-5.093139648430224-5.924255371090112-5.093139648430224-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371090112,5.093139648430224-2.318725585939319.434509277349207-4.075744628909888,2.462036132819776-4.075744628909888,4.906860351569776,0,2.761413574209655,2.238525390619543,5,5,5h10c2.761474609369543,0,5-2.238586425790345,5-5,0-2.44482421875-1.75701904296875-4.472351074220569-4.075744628909888-4.906860351569776Z","key":"2"})
  );
});

Cloud3UploadAlt2.displayName = 'Cloud3UploadAlt2';

module.exports = Cloud3UploadAlt2;
module.exports.Cloud3UploadAlt2 = Cloud3UploadAlt2;
module.exports.default = Cloud3UploadAlt2;
