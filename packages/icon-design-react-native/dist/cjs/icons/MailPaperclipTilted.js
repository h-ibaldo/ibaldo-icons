'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const MailPaperclipTilted = forwardRef(function MailPaperclipTilted(
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
    createElement(Path, {"d":"M8 16L3 16C2.449 16 2 15.551 2 15L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 9","key":"0"}),
    createElement(Path, {"d":"M3.109 3L11.332 10.398C11.711 10.738 12.289 10.738 12.668 10.398L20.887 3","key":"1"}),
    createElement(Path, {"d":"M16 13L11.828 17.172C10.723 18.277 10.723 20.066 11.828 21.172C12.934 22.277 14.723 22.277 15.828 21.172L21.586 15.414C22.137 14.863 22.137 13.965 21.586 13.414C21.035 12.863 20.137 12.863 19.586 13.414L15 18","key":"2"})
  );
});

MailPaperclipTilted.displayName = 'MailPaperclipTilted';

module.exports = MailPaperclipTilted;
module.exports.MailPaperclipTilted = MailPaperclipTilted;
module.exports.default = MailPaperclipTilted;
