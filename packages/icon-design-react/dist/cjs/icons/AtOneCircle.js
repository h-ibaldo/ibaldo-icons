'use strict';

const { createElement, forwardRef } = require('react');

const AtOneCircle = forwardRef(function AtOneCircle(
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
    createElement('polyline', {"points":"7.000000005029506 6.000000000459295 7.999998926939952 6.000000000459295 8.000000005029506 10.000000000459295","key":"0"}),
    createElement('circle', {"cx":"8.000000002607521","cy":"7.999999998033445","r":"5.999999997576765","key":"1"}),
    createElement('path', {"d":"M11.505065918159744,16.286071772953619c.611083984360448,1.022216796875,1.717407226549767,1.713928222655341,2.994934082020336,1.713928222655341,1.932983398439319,0,3.5-1.5670166015625,3.5-3.5,0-1.277526855469659-.691711425770336-2.383850097655341-1.713928222659888-2.994934082030341","key":"2"}),
    createElement('path', {"d":"M7.425231933770192,16.9710082963893c1.022338867189319,2.926330566407159,3.799682617189319,5.028991699219659,7.074768066409888,5.028991699219659","key":"3"}),
    createElement('path', {"d":"M18.00000000018008,14.49999999560896v1.5c0,1.104553222655341.895446777340112,2,2,2s2-.895446777344659,2-2v-1.5c0-3.275085449219659-2.102661132810681-6.052429199219659-5.028991699220569-7.074768066405341","key":"4"}),
    createElement('line', {"x1":"14.50000000018008","y1":"21.99999999560896","x2":"18.00000000018008","y2":"21.99999999560896","key":"5"})
  );
});

AtOneCircle.displayName = 'AtOneCircle';

module.exports = AtOneCircle;
module.exports.AtOneCircle = AtOneCircle;
module.exports.default = AtOneCircle;
