'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { G, Line, Path } = RNSvg;

const SquareStackPlusShadow = forwardRef(function SquareStackPlusShadow(
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
    createElement(Path, {"d":"M11.999999994010068,18.998779299956368h-5c-.552284749830505,0-1-.447715250171314-1-1V6.998779299956368c0-.552284749832324.447715250169495-1,1-1h11c.552284749830505,0,1,.447715250167676,1,1v5","key":"0"}),
    createElement(Path, {"d":"M1.999999994010068,13.998779299956368V2.998779299956368c0-.552284749832324.447715250169495-1,1-1h11","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Line, {"x1":"18.999999994010068","y1":"15.998779299956368","x2":"18.999999994010068","y2":"21.998779299956368","key":"0"}),
      createElement(Line, {"x1":"21.999999994010068","y1":"18.998779299865419","x2":"15.999999994010068","y2":"18.99877930004368","key":"1"}))
  );
});

SquareStackPlusShadow.displayName = 'SquareStackPlusShadow';

module.exports = SquareStackPlusShadow;
module.exports.SquareStackPlusShadow = SquareStackPlusShadow;
module.exports.default = SquareStackPlusShadow;
