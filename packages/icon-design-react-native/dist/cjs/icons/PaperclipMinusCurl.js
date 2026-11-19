'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaperclipMinusCurl = forwardRef(function PaperclipMinusCurl(
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
    createElement(Path, {"d":"M3 4L8 4","key":"0"}),
    createElement(Path, {"d":"M11.242 19.758L10.242 20.758C8.586 22.414 5.898 22.414 4.242 20.758C2.586 19.102 2.586 16.414 4.242 14.758L13.758 5.242C15.414 3.586 18.102 3.586 19.758 5.242C21.414 6.898 21.414 9.586 19.758 11.242L15.5 15.5C14.672 16.328 13.328 16.328 12.5 15.5C11.672 14.672 11.672 13.328 12.5 12.5L16 9","key":"1"})
  );
});

PaperclipMinusCurl.displayName = 'PaperclipMinusCurl';

module.exports = PaperclipMinusCurl;
module.exports.PaperclipMinusCurl = PaperclipMinusCurl;
module.exports.default = PaperclipMinusCurl;
