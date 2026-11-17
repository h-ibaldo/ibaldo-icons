'use strict';

const { createElement, forwardRef } = require('react');

const Burst = forwardRef(function Burst(
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
    createElement('polyline', {"points":"21.99999999981992 8.999999999012289 22 20.999999999012289 8 20.99999999919055","key":"0"}),
    createElement('polyline', {"points":"18.99999999945976 5.999999998386556 18.99999999963984 17.999999998382918 4.99999999963984 17.999999998561179","key":"1"}),
    createElement('rect', {"x":"2.000000002654815","y":"2.999999998606654","width":"14.00000000027012","height":"11.999999999641659","transform":"translate(18.000000005554021 17.999999996880696) rotate(-180)","key":"2"})
  );
});

Burst.displayName = 'Burst';

module.exports = Burst;
module.exports.Burst = Burst;
module.exports.default = Burst;
