'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Ellipse, Path } = RNSvg;

const MusicNoteFlagRound = forwardRef(function MusicNoteFlagRound(
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
    createElement(Ellipse, {"cx":"8","cy":"18.499999999998181","rx":"4","ry":"3.5","key":"0"}),
    createElement(Path, {"d":"M12,6.999999999998181l8,2v-1.876894374379845c0-1.835470567519224-1.249189494539678-3.435402999260987-3.029857499859645-3.88057000057961l-4.970142500140355-1.242535625040546v16","key":"1"})
  );
});

MusicNoteFlagRound.displayName = 'MusicNoteFlagRound';

module.exports = MusicNoteFlagRound;
module.exports.MusicNoteFlagRound = MusicNoteFlagRound;
module.exports.default = MusicNoteFlagRound;
