'use strict';

const { createElement, forwardRef } = require('react');

const CloudEyeRound = forwardRef(function CloudEyeRound(
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
    createElement('rect', {"x":"13.999999991272603","y":"16.49999996872134","width":"1.999999992254516","height":"1.999999995336566","rx":".999999001593678","ry":".999999001593678","key":"0"}),
    createElement('path', {"d":"M15,12.999999973497324c-2.98388671875,0-5.524841308599207,1.87042236328125-6.532165527349207,4.5,1.00732421875,2.629577636711474,3.548278808599207,4.5,6.532165527349207,4.5s5.524841308590112-1.870422363288526,6.532165527340112-4.5c-1.00732421875-2.62957763671875-3.548278808590112-4.5-6.532165527340112-4.5Z","key":"1"}),
    createElement('path', {"d":"M22,11.999999973497324c0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.049194335941138,1.235595703119543,3.805725097659888,3,4.577880859360448","key":"2"})
  );
});

CloudEyeRound.displayName = 'CloudEyeRound';

module.exports = CloudEyeRound;
module.exports.CloudEyeRound = CloudEyeRound;
module.exports.default = CloudEyeRound;
