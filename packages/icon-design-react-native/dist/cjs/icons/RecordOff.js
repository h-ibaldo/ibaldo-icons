'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const RecordOff = forwardRef(function RecordOff(
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
    createElement(Path, {"d":"M20 4L4 20","key":"0"}),
    createElement(Path, {"d":"M6.344 17.656C7.789 19.105 9.789 20 12 20C16.418 20 20 16.418 20 12C20 9.789 19.105 7.789 17.656 6.344","key":"1"}),
    createElement(Path, {"d":"M13.789 4.207C13.215 4.078 12.617 4 12 4C7.582 4 4 7.582 4 12C4 12.617 4.074 13.215 4.211 13.793","key":"2"})
  );
});

RecordOff.displayName = 'RecordOff';

module.exports = RecordOff;
module.exports.RecordOff = RecordOff;
module.exports.default = RecordOff;
