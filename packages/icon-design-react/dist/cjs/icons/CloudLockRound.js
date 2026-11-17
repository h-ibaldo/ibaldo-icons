'use strict';

const { createElement, forwardRef } = require('react');

const CloudLockRound = forwardRef(function CloudLockRound(
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
    createElement('rect', {"x":"8.000000000001819","y":"15.999999973497324","width":"8","height":"6","key":"0"}),
    createElement('path', {"d":"M9.000000000001819,15.999999973497324v-2.000002999999197c0-1.656852592650466,1.343144407359432-2.999997000000803,2.999997000000803-2.999997000000803h.000005999998393c1.656852592641371,0,2.999997000000803,1.343144407350337,2.999997000000803,2.999997000000803v2.000002999999197","key":"1"}),
    createElement('path', {"d":"M19.000000000001819,16.577880832857772c1.764404296869543-.77215576170056,3-2.52868652341931,3-4.577880859360448,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.049194335941138,1.235595703119543,3.805725097659888,3,4.577880859360448","key":"2"})
  );
});

CloudLockRound.displayName = 'CloudLockRound';

module.exports = CloudLockRound;
module.exports.CloudLockRound = CloudLockRound;
module.exports.default = CloudLockRound;
