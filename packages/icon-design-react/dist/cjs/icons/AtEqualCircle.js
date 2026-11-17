'use strict';

const { createElement, forwardRef } = require('react');

const AtEqualCircle = forwardRef(function AtEqualCircle(
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
    createElement('circle', {"cx":"7.500000005029506","cy":"7.500000000455202","r":"5.500000000000227","key":"0"}),
    createElement('line', {"x1":"6.000000005029506","y1":"6.000000000451109","x2":"9.000000005029506","y2":"6.000000000451109","key":"1"}),
    createElement('line', {"x1":"6.000000005029506","y1":"9.000000000453838","x2":"9.000000005029506","y2":"9.000000000453838","key":"2"}),
    createElement('path', {"d":"M11.071044926920877,15.204772949672588c.326110839840112,1.595153808595569,1.73736572263806,2.79522705078125,3.428955078108629,2.79522705078125,1.932983398441138,0,3.5-1.567016601560681,3.5-3.5,0-1.691589355467841-1.200073242178405-3.10284423828125-2.795227050768517-3.428955078125","key":"3"}),
    createElement('path', {"d":"M7.147888188630532,15.982238769985997c.688171386720569,3.432006835936591,3.717529296880457,6.017761230467841,7.352111816398974,6.017761230467841","key":"4"}),
    createElement('path', {"d":"M18.000000005029506,14.500000000453838v1.392944335939319c0,.996276855467841.680725097659888,1.919677734375,1.664123535159888,2.079650878904431,1.252990722661707.203857421875,2.335876464840112-.757934570311591,2.335876464840112-1.97259521484375v-1c0-3.730712890625-2.557373046858629-6.85577392578125-6.012145996090112-7.740905761717841","key":"5"}),
    createElement('line', {"x1":"18.000000005029506","y1":"22.000000000453838","x2":"14.000000005029506","y2":"22.000000000453838","key":"6"})
  );
});

AtEqualCircle.displayName = 'AtEqualCircle';

module.exports = AtEqualCircle;
module.exports.AtEqualCircle = AtEqualCircle;
module.exports.default = AtEqualCircle;
