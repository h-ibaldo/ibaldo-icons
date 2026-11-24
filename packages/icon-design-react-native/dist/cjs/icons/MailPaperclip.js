'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MailPaperclip = forwardRef(function MailPaperclip(
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
    createElement(Path, {"d":"M18 22L12 22C9.789 22 8 20.211 8 18C8 15.789 9.789 14 12 14L20 14C21.105 14 22 14.895 22 16C22 17.105 21.105 18 20 18L14 18","key":"0"}),
    createElement(Path, {"d":"M4 16L3 16C2.449 16 2 15.551 2 15L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 10","key":"1"}),
    createElement(Path, {"d":"M3.109 3L11.332 10.398C11.711 10.738 12.289 10.738 12.668 10.398L20.887 3","key":"2"})
  );
});

MailPaperclip.displayName = 'MailPaperclip';

module.exports = MailPaperclip;
module.exports.MailPaperclip = MailPaperclip;
module.exports.default = MailPaperclip;
