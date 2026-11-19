'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const BookOpenCover = forwardRef(function BookOpenCover(
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
    createElement(Path, {"d":"M12 7L12 20","key":"0"}),
    createElement(Path, {"d":"M12 20L11.91 19.734C11.367 18.102 9.84 17 8.117 17L6 17C5.449 17 5 16.551 5 16L5 5C5 4.449 5.449 4 6 4L8.117 4C9.84 4 11.367 5.102 11.91 6.734L12 7","key":"1"}),
    createElement(Path, {"d":"M12 20L12.09 19.734C12.633 18.102 14.16 17 15.883 17L18 17C18.551 17 19 16.551 19 16L19 5C19 4.449 18.551 4 18 4L15.883 4C14.16 4 12.633 5.102 12.09 6.734L12 7","key":"2"}),
    createElement(Path, {"d":"M19 6L20 6C21.105 6 22 6.895 22 8L22 18C22 19.105 21.105 20 20 20L4 20C2.895 20 2 19.105 2 18L2 8C2 6.895 2.895 6 4 6L5 6","key":"3"})
  );
});

BookOpenCover.displayName = 'BookOpenCover';

module.exports = BookOpenCover;
module.exports.BookOpenCover = BookOpenCover;
module.exports.default = BookOpenCover;
