'use strict';

const { createElement, forwardRef } = require('react');

const EnvelopeMailArrowUp3 = forwardRef(function EnvelopeMailArrowUp3(
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
    createElement('path', {"d":"M22.000000000224645,9.032754076844867v11.999999999101419c0,.552284749828686-.447715250170404,1-1,1H3.000000000224645c-.552284749829596,0-1-.447715250171314-1-1v-11.999999999101419","key":"0"}),
    createElement('path', {"d":"M2.000000000224645,9.032754075946286l9.42653765563864,6.598576358948776c.344320151391003.2410241059697.802604537329898.2410241059697,1.146924688720901,0l9.426537655640459-6.598576358948776","key":"1"}),
    createElement('line', {"x1":"22.000000000224645","y1":"9.032754075946286","x2":"19.000000000224645","y2":"6.932778490005148","key":"2"}),
    createElement('line', {"x1":"5.000000000224645","y1":"6.932778490005148","x2":"2.000000000224645","y2":"9.032754075946286","key":"3"}),
    createElement('polyline', {"points":"16.000000000224645 4.832802904074924 12.000000000224645 2.032754075946286 8.000000000224645 4.832802904074924","key":"4"}),
    createElement('line', {"x1":"12.000000000224645","y1":"2.032754075946286","x2":"12.000000000224645","y2":"9.032754075946286","key":"5"})
  );
});

EnvelopeMailArrowUp3.displayName = 'EnvelopeMailArrowUp3';

module.exports = EnvelopeMailArrowUp3;
module.exports.EnvelopeMailArrowUp3 = EnvelopeMailArrowUp3;
module.exports.default = EnvelopeMailArrowUp3;
