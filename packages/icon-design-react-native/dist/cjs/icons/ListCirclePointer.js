'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListCirclePointer = forwardRef(function ListCirclePointer(
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
    createElement(Path, {"d":"M8 8L16 8","key":"0"}),
    createElement(Path, {"d":"M8 11L16 11","key":"1"}),
    createElement(Path, {"d":"M8 14L11 14","key":"2"}),
    createElement(Path, {"d":"M14.52 15.152L16.688 21.66C16.824 22.063 17.371 22.125 17.59 21.758L19.152 19.156L21.758 17.59C22.125 17.371 22.063 16.824 21.66 16.688L15.152 14.52C14.762 14.391 14.391 14.762 14.52 15.152Z","key":"3"}),
    createElement(Path, {"d":"M22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22","key":"4"})
  );
});

ListCirclePointer.displayName = 'ListCirclePointer';

module.exports = ListCirclePointer;
module.exports.ListCirclePointer = ListCirclePointer;
module.exports.default = ListCirclePointer;
