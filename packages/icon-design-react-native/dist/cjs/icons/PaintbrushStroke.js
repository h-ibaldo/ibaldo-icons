'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Path } = RNSvg;

const PaintbrushStroke = forwardRef(function PaintbrushStroke(
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
    createElement(Path, {"d":"M8 9L5.723 11.277C3.574 13.426 3.293 16.813 5.063 19.285C6.277 20.988 8.242 22 10.336 22L15 22L14.16 20.906C13.152 19.59 13.273 17.727 14.449 16.551L15 16","key":"0"}),
    createElement(Path, {"d":"M19 2C20.656 2 22 3.344 22 5C22 6.656 20.656 8 19 8L16 11L19 14L16 17L7 8L10 5L13 8L16 5C16 3.344 17.344 2 19 2Z","key":"1"}),
    createElement(Path, {"d":"M3.98 14.691C6.898 14.406 7.586 15.332 9 17C10.309 18.543 11.82 19.008 13.492 18.59","key":"2"})
  );
});

PaintbrushStroke.displayName = 'PaintbrushStroke';

module.exports = PaintbrushStroke;
module.exports.PaintbrushStroke = PaintbrushStroke;
module.exports.default = PaintbrushStroke;
