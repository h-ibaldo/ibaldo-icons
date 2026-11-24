'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const LayoutContinuous = forwardRef(function LayoutContinuous(
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
    createElement(Line, {"x1":"6.999999994000973","y1":"1.998779299956368","x2":"16.999999994000973","y2":"1.998779299956368","key":"0"}),
    createElement(Line, {"x1":"6.999999994000973","y1":"5.998779299956368","x2":"16.999999994000973","y2":"5.998779299956368","key":"1"}),
    createElement(Path, {"d":"M2.999999994000973,1.998779299956368v7c0,.552284749828686.447715250169495,1,1,1h16c.552284749828686,0,1-.447715250171314,1-1V1.998779299956368","key":"2"}),
    createElement(Line, {"x1":"16.999999993819074","y1":"21.998779300181923","x2":"6.999999993819074","y2":"21.998779299730813","key":"3"}),
    createElement(Line, {"x1":"16.999999994000973","y1":"17.998779300181923","x2":"6.999999994000973","y2":"17.998779299730813","key":"4"}),
    createElement(Path, {"d":"M20.999999993819074,21.998779300360184l.000000000320142-7c.000000000021828-.552284749832324-.447715250129477-1.000000000021828-.999999999959982-1.000000000042746l-16-.000000000721229c-.552284749828686-.000000000025466-1.00000000001819.44771525012402-1.000000000040018.999999999956344l-.000000000320142,7","key":"5"})
  );
});

LayoutContinuous.displayName = 'LayoutContinuous';

module.exports = LayoutContinuous;
module.exports.LayoutContinuous = LayoutContinuous;
module.exports.default = LayoutContinuous;
