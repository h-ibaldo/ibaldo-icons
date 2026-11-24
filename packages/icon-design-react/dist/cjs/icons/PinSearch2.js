'use strict';

const { createElement, forwardRef } = require('react');

const PinSearch2 = forwardRef(function PinSearch2(
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
    createElement('circle', {"cx":"17.99999997652958","cy":"14.998779299956368","r":"4","key":"0"}),
    createElement('line', {"x1":"15.171569800750149","y1":"17.827209475737618","x2":"10.999999976489562","y2":"21.998779299956368","key":"1"}),
    createElement('path', {"d":"M6.999999976489562,1.998779299956368C4.238586402268993,1.998779299956368,1.999999976489562,4.237365725737618,1.999999976489562,6.998779299956368c0,1.93841552734375.679626464840112,3.81549072265625,1.920532226560681,5.3046875l3.079467773439319,3.6953125,3.079467773441138-3.6953125c1.24090576171875-1.48919677734375,1.920532226558862-3.36627197265625,1.920532226558862-5.3046875,0-2.76141357421875-2.238586425779431-5-5-5Z","key":"2"}),
    createElement('circle', {"cx":"6.999999976489562","cy":"6.998779299956368","r":"1","key":"3"})
  );
});

PinSearch2.displayName = 'PinSearch2';

module.exports = PinSearch2;
module.exports.PinSearch2 = PinSearch2;
module.exports.default = PinSearch2;
