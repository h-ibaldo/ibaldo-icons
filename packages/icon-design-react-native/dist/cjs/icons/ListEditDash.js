'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const ListEditDash = forwardRef(function ListEditDash(
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
    createElement(Path, {"d":"M20.414 12.414L20.586 12.586C21.367 13.367 21.367 14.633 20.586 15.414L14 22L11 22L11 19L17.586 12.414C18.367 11.633 19.633 11.633 20.414 12.414Z","key":"0"}),
    createElement(Path, {"d":"M8 4L14.5 4","key":"1"}),
    createElement(Path, {"d":"M8 9L14.5 9","key":"2"}),
    createElement(Path, {"d":"M3 4L4 4","key":"3"}),
    createElement(Path, {"d":"M3 9L4 9","key":"4"}),
    createElement(Path, {"d":"M8 14L10 14","key":"5"}),
    createElement(Path, {"d":"M3 14L4 14","key":"6"}),
    createElement(Path, {"d":"M16 14L19 17","key":"7"})
  );
});

ListEditDash.displayName = 'ListEditDash';

module.exports = ListEditDash;
module.exports.ListEditDash = ListEditDash;
module.exports.default = ListEditDash;
