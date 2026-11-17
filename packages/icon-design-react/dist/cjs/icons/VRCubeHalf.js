'use strict';

const { createElement, forwardRef } = require('react');

const VRCubeHalf = forwardRef(function VRCubeHalf(
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
    createElement('rect', {"x":"9.000000002679371","y":"2.0000000168111","width":"12.00000000894579","height":"20","rx":"1.999999999998105","ry":"1.999999999998105","key":"0"}),
    createElement('polygon', {"points":"8.999999999599822 11.999999999326974 15 9 9.000000000411092 5.999999999326974 3 8.999999998653948 8.999999999599822 11.999999999326974","key":"1"}),
    createElement('polyline', {"points":"3 8.999999998653948 2.99999999937063 14.999999998653948 8.999999998970452 17.999999999326974 14.99999999937063 15 15 9","key":"2"}),
    createElement('polyline', {"points":"13.000000001149601 1.999999998068233 13.000000001060471 2.999999998068233 17.000000001060471 2.999999998606654 17.000000001149601 1.999999998606654","key":"3"})
  );
});

VRCubeHalf.displayName = 'VRCubeHalf';

module.exports = VRCubeHalf;
module.exports.VRCubeHalf = VRCubeHalf;
module.exports.default = VRCubeHalf;
