'use strict';

const { createElement, forwardRef } = require('react');

const EnvelopeMailArrowUp2 = forwardRef(function EnvelopeMailArrowUp2(
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
    createElement('polyline', {"points":"22.000000000224645 9.032754076844867 22.000000000224645 22.032754075946286 2.000000000224645 22.032754075946286 2.000000000224645 9.032754076844867","key":"0"}),
    createElement('polyline', {"points":"21.999999999821739 9.032754077747086 12.000000000633008 2.032754075946286 1.999999999821739 9.032754075946286","key":"1"}),
    createElement('polyline', {"points":"15.000000000224645 9.032754075946286 12.00000000063028 7.032754075946286 9.000000000224645 9.032754075946286","key":"2"}),
    createElement('line', {"x1":"12.000000000224645","y1":"12.032754075946286","x2":"12.000000000224645","y2":"7.032754075946286","key":"3"}),
    createElement('polyline', {"points":"6.000000000224645 12.832802904074924 12.000000000224645 17.032754075946286 18.000000000224645 12.832802904074924","key":"4"})
  );
});

EnvelopeMailArrowUp2.displayName = 'EnvelopeMailArrowUp2';

module.exports = EnvelopeMailArrowUp2;
module.exports.EnvelopeMailArrowUp2 = EnvelopeMailArrowUp2;
module.exports.default = EnvelopeMailArrowUp2;
