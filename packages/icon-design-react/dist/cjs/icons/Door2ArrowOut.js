'use strict';

const { createElement, forwardRef } = require('react');

const Door2ArrowOut = forwardRef(function Door2ArrowOut(
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
    createElement('polygon', {"points":"21.974731450043691 19.000000000481123 11.974731450043691 22.000000000481123 11.974731450043691 2.000000000481123 21.974731450043691 5.000000000481123 21.974731450043691 19.000000000481123","key":"0"}),
    createElement('line', {"x1":"15.974731450043691","y1":"10.000000000481123","x2":"15.974731450043691","y2":"14.000000000481123","key":"1"}),
    createElement('polyline', {"points":"5.974731450043691 7.000000000479304 5.974731450041872 4.000000000481123 8.974731450043691 4.000000000481123","key":"2"}),
    createElement('polyline', {"points":"8.974731450043691 20.000000000481123 5.974731450041872 20.000000000481123 5.974731450041872 17.000000000479304","key":"3"}),
    createElement('polyline', {"points":"3.974731450043691 14.000000000481123 1.974731450043691 12.000000000481123 3.974731450043691 10.000000000481123","key":"4"}),
    createElement('line', {"x1":"8.974731450043691","y1":"12.000000000481123","x2":"1.974731450043691","y2":"12.000000000481123","key":"5"})
  );
});

Door2ArrowOut.displayName = 'Door2ArrowOut';

module.exports = Door2ArrowOut;
module.exports.Door2ArrowOut = Door2ArrowOut;
module.exports.default = Door2ArrowOut;
