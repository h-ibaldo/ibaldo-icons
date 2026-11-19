'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MedalStarBanner = forwardRef(function MedalStarBanner(
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
    createElement(Path, {"d":"M12 9L5 6L5 2L19 2L19 6Z","key":"0"}),
    createElement(Path, {"d":"M11.98 11L14.172 14.184L18 15.199L15.527 18.188L15.703 22L11.98 20.664L8.262 22L8.438 18.188L5.965 15.199L9.793 14.184Z","key":"1"})
  );
});

MedalStarBanner.displayName = 'MedalStarBanner';

module.exports = MedalStarBanner;
module.exports.MedalStarBanner = MedalStarBanner;
module.exports.default = MedalStarBanner;
