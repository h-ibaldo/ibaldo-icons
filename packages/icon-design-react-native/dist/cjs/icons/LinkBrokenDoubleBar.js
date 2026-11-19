'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkBrokenDoubleBar = forwardRef(function LinkBrokenDoubleBar(
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
    createElement(Path, {"d":"M20.758 3.246L20.754 3.242C19.098 1.586 16.414 1.586 14.758 3.242L13 5C11.344 6.656 11.344 9.34 13 10.996L13.004 11C14.66 12.656 17.344 12.656 19 11L20.758 9.242C22.414 7.586 22.414 4.902 20.758 3.246Z","key":"0"}),
    createElement(Path, {"d":"M11 13.004L10.996 13C9.34 11.344 6.656 11.344 5 13L3.242 14.758C1.586 16.414 1.586 19.098 3.242 20.754L3.246 20.758C4.902 22.414 7.586 22.414 9.242 20.758L11 19C12.656 17.344 12.656 14.66 11 13.004Z","key":"1"}),
    createElement(Path, {"d":"M16 8L8 16","key":"2"}),
    createElement(Path, {"d":"M8 5L7 2","key":"3"}),
    createElement(Path, {"d":"M17 22L16 19","key":"4"}),
    createElement(Path, {"d":"M5 8L2 7","key":"5"}),
    createElement(Path, {"d":"M22 17L19 16","key":"6"})
  );
});

LinkBrokenDoubleBar.displayName = 'LinkBrokenDoubleBar';

module.exports = LinkBrokenDoubleBar;
module.exports.LinkBrokenDoubleBar = LinkBrokenDoubleBar;
module.exports.default = LinkBrokenDoubleBar;
