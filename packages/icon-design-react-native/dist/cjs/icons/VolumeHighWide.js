'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const VolumeHighWide = forwardRef(function VolumeHighWide(
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
    createElement(Path, {"d":"M15.457 16.914C17.262 16.012 18.5 14.152 18.5 12C18.5 9.848 17.262 7.988 15.457 7.086","key":"0"}),
    createElement(Path, {"d":"M17.023 20.043C19.969 18.566 22 15.523 22 12C22 8.477 19.969 5.434 17.023 3.957","key":"1"}),
    createElement(Path, {"d":"M14 13.707C14.594 13.359 15 12.734 15 12C15 11.266 14.594 10.641 14 10.293","key":"2"}),
    createElement(Path, {"d":"M2 10L2 14C2 14.555 2.445 15 3 15L5 15L9.293 19.293C9.922 19.922 11 19.477 11 18.586L11 5.414C11 4.523 9.922 4.078 9.293 4.707L5 9L3 9C2.445 9 2 9.445 2 10Z","key":"3"})
  );
});

VolumeHighWide.displayName = 'VolumeHighWide';

module.exports = VolumeHighWide;
module.exports.VolumeHighWide = VolumeHighWide;
module.exports.default = VolumeHighWide;
