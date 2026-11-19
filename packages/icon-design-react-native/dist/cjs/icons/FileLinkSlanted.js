'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const FileLinkSlanted = forwardRef(function FileLinkSlanted(
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
    createElement(Path, {"d":"M17 9L17 6.828C17 6.297 16.789 5.789 16.414 5.414L13.586 2.586C13.211 2.211 12.703 2 12.172 2L4 2C2.895 2 2 2.895 2 4L2 19C2 20.105 2.895 21 4 21L9 21","key":"0"}),
    createElement(Path, {"d":"M12 2L12 6C12 6.555 12.445 7 13 7L17 7","key":"1"}),
    createElement(Path, {"d":"M20.5 17.5L21.172 16.828C22.277 15.723 22.277 13.934 21.172 12.828C20.066 11.723 18.277 11.723 17.172 12.828L16.5 13.5","key":"2"}),
    createElement(Path, {"d":"M13.5 16.5L12.828 17.172C11.723 18.277 11.723 20.066 12.828 21.172C13.934 22.277 15.723 22.277 16.828 21.172L17.5 20.5","key":"3"}),
    createElement(Path, {"d":"M18 16L16 18","key":"4"})
  );
});

FileLinkSlanted.displayName = 'FileLinkSlanted';

module.exports = FileLinkSlanted;
module.exports.FileLinkSlanted = FileLinkSlanted;
module.exports.default = FileLinkSlanted;
