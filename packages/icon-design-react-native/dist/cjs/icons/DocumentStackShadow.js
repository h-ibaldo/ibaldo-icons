'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path, Rect } = RNSvg;

const DocumentStackShadow = forwardRef(function DocumentStackShadow(
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
    createElement(Rect, {"x":"7","y":"6","width":"14","height":"16","rx":"1","ry":"1","key":"0"}),
    createElement(Path, {"d":"M16,2H4c-.552284749830505,0-1,.447715250171314-1,1v14","key":"1"}),
    createElement(Line, {"x1":"11","y1":"10","x2":"17","y2":"10","key":"2"}),
    createElement(Line, {"x1":"11","y1":"14","x2":"17","y2":"14","key":"3"}),
    createElement(Line, {"x1":"11","y1":"18","x2":"17","y2":"18","key":"4"})
  );
});

DocumentStackShadow.displayName = 'DocumentStackShadow';

module.exports = DocumentStackShadow;
module.exports.DocumentStackShadow = DocumentStackShadow;
module.exports.default = DocumentStackShadow;
