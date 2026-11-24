'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const LayoutGridImage = forwardRef(function LayoutGridImage(
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
    createElement(Rect, {"x":"1.999999994000973","y":"1.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M9.999999994000973,5.998779299956368c-2.209138999201969,0-4,1.790861000798031-4,4","key":"1"}),
    createElement(Line, {"x1":"4.999999994000973","y1":"5.008779299956586","x2":"4.999999994000973","y2":"4.998779299956368","key":"2"}),
    createElement(Rect, {"x":"13.999999994000973","y":"1.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"3"}),
    createElement(Path, {"d":"M21.999999994000973,5.998779299956368c-2.209138999201969,0-4,1.790861000798031-4,4","key":"4"}),
    createElement(Line, {"x1":"16.999999994000973","y1":"5.008779299956586","x2":"16.999999994000973","y2":"4.998779299956368","key":"5"}),
    createElement(Rect, {"x":"1.999999994000973","y":"13.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"6"}),
    createElement(Path, {"d":"M9.999999994000973,17.998779299956368c-2.209138999201969,0-4,1.790861000798031-4,4","key":"7"}),
    createElement(Line, {"x1":"4.999999994000973","y1":"17.008779299956586","x2":"4.999999994000973","y2":"16.998779299956368","key":"8"}),
    createElement(Rect, {"x":"13.999999994000973","y":"13.998779299956368","width":"8","height":"8","rx":"1","ry":"1","key":"9"}),
    createElement(Path, {"d":"M21.999999994000973,17.998779299956368c-2.209138999201969,0-4,1.790861000798031-4,4","key":"10"}),
    createElement(Line, {"x1":"16.999999994000973","y1":"17.008779299956586","x2":"16.999999994000973","y2":"16.998779299956368","key":"11"})
  );
});

LayoutGridImage.displayName = 'LayoutGridImage';

module.exports = LayoutGridImage;
module.exports.LayoutGridImage = LayoutGridImage;
module.exports.default = LayoutGridImage;
