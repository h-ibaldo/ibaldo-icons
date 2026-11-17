'use strict';

const { createElement, forwardRef } = require('react');

const AtXCircle = forwardRef(function AtXCircle(
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
    createElement('circle', {"cx":"8.025268553107708","cy":"7.999999999315378","r":"5.999999997576083","key":"0"}),
    createElement('path', {"d":"M11.530334468650835,16.286071774235097c.611083984369543,1.022216796875,1.717407226558862,1.713928222654431,2.994934082029431,1.713928222654431,1.932983398439319,0,3.5-1.567016601561591,3.5-3.5,0-1.277526855467841-.691711425779431-2.383850097654431-1.713928222659888-2.994934082029431","key":"1"}),
    createElement('path', {"d":"M7.450500484270378,16.971008297671688c1.022338867189319,2.92633056640625,3.799682617189319,5.028991699217841,7.074768066409888,5.028991699217841","key":"2"}),
    createElement('path', {"d":"M18.025268550680266,14.499999996889528v1.5c0,1.104553222657159.895446777340112,2,2,2s2-.895446777342841,2-2v-1.5c0-3.275085449217841-2.102661132810681-6.052429199217841-5.028991699220569-7.074768066404431","key":"3"}),
    createElement('line', {"x1":"14.525268550680266","y1":"21.999999996889528","x2":"18.025268550680266","y2":"21.999999996889528","key":"4"}),
    createElement('line', {"x1":"10.025268016490372","y1":"6.000000001741682","x2":"6.025268555529692","y2":"10.000000001741682","key":"5"}),
    createElement('line', {"x1":"6.025268555529692","y1":"6.000000001741682","x2":"10.025268555529692","y2":"10.000000001741682","key":"6"})
  );
});

AtXCircle.displayName = 'AtXCircle';

module.exports = AtXCircle;
module.exports.AtXCircle = AtXCircle;
module.exports.default = AtXCircle;
