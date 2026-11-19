'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListCursor = forwardRef(function ListCursor(
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
    createElement(Path, {"d":"M21.07 13.203L10.219 9.59C9.832 9.457 9.457 9.832 9.59 10.223L13.203 21.066C13.332 21.457 13.848 21.531 14.086 21.199L15.871 18.699L19.172 22L22 19.172L18.699 15.871L21.203 14.086C21.535 13.848 21.457 13.332 21.07 13.203Z","key":"0"}),
    createElement(Path, {"d":"M1.617 2L17 2","key":"1"}),
    createElement(Path, {"d":"M1.617 6L17 6","key":"2"}),
    createElement(Path, {"d":"M1.617 10L6 10","key":"3"}),
    createElement(Path, {"d":"M1.617 14L7 14","key":"4"})
  );
});

ListCursor.displayName = 'ListCursor';

module.exports = ListCursor;
module.exports.ListCursor = ListCursor;
module.exports.default = ListCursor;
