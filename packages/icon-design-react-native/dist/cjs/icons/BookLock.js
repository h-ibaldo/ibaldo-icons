'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BookLock = forwardRef(function BookLock(
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
    createElement(Path, {"d":"M19 17L7 17C5.895 17 5 17.895 5 19C5 20.105 5.895 21 7 21L19 21","key":"0"}),
    createElement(Path, {"d":"M19 17L19 3L7 3C5.895 3 5 3.895 5 5","key":"1"}),
    createElement(Path, {"d":"M5 5L5 19","key":"2"}),
    createElement(Path, {"d":"M9.027 10L15.027 10L15.027 14L9.027 14Z","key":"3"}),
    createElement(Path, {"d":"M14.027 10L14.027 8C14.027 6.895 13.129 6 12.027 6C10.922 6 10.027 6.895 10.027 8L10.027 10","key":"4"})
  );
});

BookLock.displayName = 'BookLock';

module.exports = BookLock;
module.exports.BookLock = BookLock;
module.exports.default = BookLock;
