'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const LinkArrowUpSlanted = forwardRef(function LinkArrowUpSlanted(
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
    createElement(Path, {"d":"M13 19.004L14.758 20.762C16.414 22.414 19.098 22.414 20.754 20.762L20.758 20.758C22.414 19.102 22.414 16.414 20.758 14.762L15.996 10C14.344 8.344 11.656 8.344 10.004 10L9.996 10.004","key":"0"}),
    createElement(Path, {"d":"M11 5.004L9.242 3.242C7.586 1.59 4.902 1.59 3.246 3.242L3.242 3.246C1.586 4.902 1.586 7.59 3.242 9.242L8.004 14.004C9.656 15.66 12.344 15.66 13.996 14.004L14.004 14","key":"1"}),
    createElement(Path, {"d":"M22.004 4L20.004 2L18.004 4","key":"2"}),
    createElement(Path, {"d":"M20.004 8L20.004 2","key":"3"})
  );
});

LinkArrowUpSlanted.displayName = 'LinkArrowUpSlanted';

module.exports = LinkArrowUpSlanted;
module.exports.LinkArrowUpSlanted = LinkArrowUpSlanted;
module.exports.default = LinkArrowUpSlanted;
