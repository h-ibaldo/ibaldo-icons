'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const WindowListXCircle = forwardRef(function WindowListXCircle(
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
    createElement(Path, {"d":"M9.999999994000973,21.998779299956368H3.999999994000973c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v6","key":"0"}),
    createElement(Line, {"x1":"1.999999994000973","y1":"7.998779299956368","x2":"21.999999994000973","y2":"7.998779299956368","key":"1"}),
    createElement(Line, {"x1":"17.999999998859494","y1":"14.99877929995273","x2":"14.999999998859494","y2":"17.99877929995273","key":"2"}),
    createElement(Line, {"x1":"14.99999999891952","y1":"14.998779299883608","x2":"17.999999998790372","y2":"17.998779300018214","key":"3"}),
    createElement(Circle, {"cx":"16.499999994010068","cy":"16.498779299955459","r":"5.499999999999545","key":"4"}),
    createElement(Line, {"x1":"8.999999994000973","y1":"16.998779299945454","x2":"11.025207513530404","y2":"16.998779299945454","key":"5"}),
    createElement(Line, {"x1":"12.257324212750973","y1":"12.998779299945454","x2":"8.999999994000973","y2":"12.998779299945454","key":"6"}),
    createElement(Line, {"x1":"5.989999993998936","y1":"12.998779299956368","x2":"5.999999994000973","y2":"12.998779299956368","key":"7"}),
    createElement(Line, {"x1":"5.989999993998936","y1":"16.998779299956368","x2":"5.999999994000973","y2":"16.998779299956368","key":"8"}),
    createElement(Line, {"x1":"5.010000004900576","y1":"4.999999995256076","x2":"5.000000004900357","y2":"4.999999995256076","key":"9"}),
    createElement(Line, {"x1":"8.010000004900576","y1":"4.999999995256076","x2":"8.000000004900357","y2":"4.999999995256076","key":"10"}),
    createElement(Line, {"x1":"11.010000004900576","y1":"4.999999995256076","x2":"11.000000004900357","y2":"4.999999995256076","key":"11"})
  );
});

WindowListXCircle.displayName = 'WindowListXCircle';

module.exports = WindowListXCircle;
module.exports.WindowListXCircle = WindowListXCircle;
module.exports.default = WindowListXCircle;
