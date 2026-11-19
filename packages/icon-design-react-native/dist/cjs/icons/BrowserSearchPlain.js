'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Circle, Line, Path } = RNSvg;

const BrowserSearchPlain = forwardRef(function BrowserSearchPlain(
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
    createElement(Path, {"d":"M10.999999976269464,21.998779299956368H3.999999976220352c-1.104569499661011,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500338989-2,2-2h16c1.104569499659192,0,2,.895430500338989,2,2v7","key":"0"}),
    createElement(Circle, {"cx":"15.999999976220352","cy":"15.998779300000933","r":"4.000000000000455","key":"1"}),
    createElement(Line, {"x1":"18.82843015213075","y1":"18.827209475653945","x2":"21.999999976489562","y2":"21.998779299730813","key":"2"}),
    createElement(Line, {"x1":"6.00999997622057","y1":"5.998779299956368","x2":"5.999999976220352","y2":"5.998779299956368","key":"3"}),
    createElement(Line, {"x1":"9.00999997622057","y1":"5.998779299956368","x2":"8.999999976220352","y2":"5.998779299956368","key":"4"}),
    createElement(Line, {"x1":"17.999999976220352","y1":"5.998779299956368","x2":"11.999999976220352","y2":"5.998779299956368","key":"5"})
  );
});

BrowserSearchPlain.displayName = 'BrowserSearchPlain';

module.exports = BrowserSearchPlain;
module.exports.BrowserSearchPlain = BrowserSearchPlain;
module.exports.default = BrowserSearchPlain;
