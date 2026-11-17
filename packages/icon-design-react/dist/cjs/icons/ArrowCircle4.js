'use strict';

const { createElement, forwardRef } = require('react');

const ArrowCircle4 = forwardRef(function ArrowCircle4(
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
    createElement('polyline', {"points":"4 2 4.000000000130058 6.000000000320142 8.000000000440195 6.000000000178261","key":"0"}),
    createElement('path', {"d":"M2.050476074219659,11.000000000320142c-.032653808600116.328979492180224-.050476074219659.662414550779431-.050476074219659,1,0,5.522827148430224,4.477172851559772,10,10,10,5.522827148430224,0,10-4.477172851569776,10-10,0-5.522827148441138-4.477172851569776-10-10-10-3.268432617190228,0-6.16162109375,1.5751953125-7.986389160159888,4","key":"1"})
  );
});

ArrowCircle4.displayName = 'ArrowCircle4';

module.exports = ArrowCircle4;
module.exports.ArrowCircle4 = ArrowCircle4;
module.exports.default = ArrowCircle4;
