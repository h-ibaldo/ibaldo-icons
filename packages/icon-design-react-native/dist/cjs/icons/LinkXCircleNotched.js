'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkXCircleNotched = forwardRef(function LinkXCircleNotched(
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
    createElement(Path, {"d":"M7 14L14 7","key":"0"}),
    createElement(Path, {"d":"M17.965 8.035C19.344 6.652 19.344 4.418 17.965 3.035C16.586 1.652 14.344 1.652 12.965 3.035L11.5 4.5C10.121 5.883 10.121 8.121 11.5 9.5","key":"1"}),
    createElement(Path, {"d":"M9.5 11.5C8.117 10.117 5.883 10.117 4.5 11.5L3.035 12.965C1.656 14.344 1.656 16.586 3.035 17.965C4.414 19.344 6.656 19.344 8.035 17.965","key":"2"}),
    createElement(Path, {"d":"M22 16.5C22 19.535 19.539 22 16.5 22C13.461 22 11 19.535 11 16.5C11 13.465 13.461 11 16.5 11C19.539 11 22 13.465 22 16.5Z","key":"3"}),
    createElement(Path, {"d":"M18 15L15 18","key":"4"}),
    createElement(Path, {"d":"M15 15L18 18","key":"5"})
  );
});

LinkXCircleNotched.displayName = 'LinkXCircleNotched';

module.exports = LinkXCircleNotched;
module.exports.LinkXCircleNotched = LinkXCircleNotched;
module.exports.default = LinkXCircleNotched;
