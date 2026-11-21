'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MobileVolumeNotch = forwardRef(function MobileVolumeNotch(
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
    createElement(Path, {"d":"M15 18L15 20C15 21.105 14.105 22 13 22L5 22C3.895 22 3 21.105 3 20L3 4C3 2.895 3.895 2 5 2L13 2C14.105 2 15 2.895 15 4L15 5","key":"0"}),
    createElement(Path, {"d":"M8 5L10 5","key":"1"}),
    createElement(Path, {"d":"M15 8.922L13 8.922C12.449 8.922 12 9.367 12 9.922L12 12.922C12 13.473 12.449 13.922 13 13.922L15 13.922L18.375 16.621C19.031 17.145 20 16.68 20 15.84L20 7C20 6.164 19.031 5.695 18.375 6.223Z","key":"2"}),
    createElement(Path, {"d":"M21 10L21 13","key":"3"})
  );
});

MobileVolumeNotch.displayName = 'MobileVolumeNotch';

module.exports = MobileVolumeNotch;
module.exports.MobileVolumeNotch = MobileVolumeNotch;
module.exports.default = MobileVolumeNotch;
