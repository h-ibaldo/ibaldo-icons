'use strict';

const { createElement, forwardRef } = require('react');

const ReplaceCircles = forwardRef(function ReplaceCircles(
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
    createElement('circle', {"cx":"4.949462884867444","cy":"5.000000000826731","r":"3.000000000274472","key":"0"}),
    createElement('circle', {"cx":"18.949462885429057","cy":"19.000000000130967","r":"2.999999999650655","key":"1"}),
    createElement('polyline', {"points":"21.679561208527957 10.41638982463337 19.558240865013431 12.537710168242484 17.436920521407956 10.416389824727958","key":"2"}),
    createElement('path', {"d":"M6.123212022582265,17.487457636849285c1.785505044258571,1.785505044175807,4.204531843924997,2.546041890927881,6.53335764426447,2.290716956948017","key":"3"}),
    createElement('path', {"d":"M19.747317696577738,12.3486333366709c.143674223250855-2.21665718924487-.61621524801194-4.480702271885093-2.31039717526437-6.174884199062944","key":"4"}),
    createElement('polyline', {"points":"2.049967948266385 13.41421356234423 4.171288291967358 11.292893218927929 6.292608635386387 13.41421356263163","key":"5"}),
    createElement('path', {"d":"M17.606317134842357,6.343145751528937c-1.785505044094862-1.785505044339516-4.204531843697623-2.546041891306231-6.533357644058015-2.290716957533732","key":"6"}),
    createElement('path', {"d":"M3.982211460388498,11.481970050481323c-.143674223452763,2.216657189233956.616215247610853,4.480702271943301,2.310397174708669,6.174884199270309","key":"7"})
  );
});

ReplaceCircles.displayName = 'ReplaceCircles';

module.exports = ReplaceCircles;
module.exports.ReplaceCircles = ReplaceCircles;
module.exports.default = ReplaceCircles;
