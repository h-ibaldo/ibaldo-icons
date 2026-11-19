'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Path } = RNSvg;

const LockOpenRound = forwardRef(function LockOpenRound(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, ...props },
  ref
) {
  return createElement(
    Svg,
    {
      ref,
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      ...props
    },
    createElement(Circle, {"cx":"11.974731450040053","cy":"15.000000003885361","r":"7.000000000000001","key":"0"}),
    createElement(Path, {"d":"M16.552612309009419,5.000000003885361c-.772216796869543-1.764404296875-2.528686523430224-3-4.577880859369543-3-2.761413574220569,0-5,2.23858642578125-5,5v3","key":"1"})
  );
});

LockOpenRound.displayName = 'LockOpenRound';

module.exports = LockOpenRound;
module.exports.LockOpenRound = LockOpenRound;
module.exports.default = LockOpenRound;
