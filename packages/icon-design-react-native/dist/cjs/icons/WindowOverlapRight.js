'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { G, Line, Path, Rect } = RNSvg;

const WindowOverlapRight = forwardRef(function WindowOverlapRight(
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
    createElement(G, {"key":"0"},
      createElement(Rect, {"x":"9.000000000140062","y":"2.000000000156888","width":"13.000000000020009","height":"13","rx":"2.000000000000909","ry":"2.000000000000909","key":"0"}),
      createElement(Line, {"x1":"22.00000000026921","y1":"6.00000000044929","x2":"9.000000000240107","y2":"5.999999999865395","key":"1"})),
    createElement(G, {"key":"1"},
      createElement(Path, {"d":"M6.000000000120053,8.99999999973079l-2.000000000010914-.00000000009004c-1.104569499659192-.000000000049113-2.000000000040018.895430500246221-2.00000000008913,1.999999999907232l-.000000000409273,9.000000000003638c-.000000000040018,1.104569499661011.895430500249859,2.000000000040018,1.999999999919964,2.00000000008913l9.000000000009095.000000000405635c1.104569499659192.000000000048203,2.000000000040018-.895430500250768,2.00000000008913-1.999999999911779l.000000000080036-2","key":"0"}),
      createElement(Line, {"x1":"5.999999999939973","y1":"12.99999999973079","x2":"1.999999999919964","y2":"12.999999999551619","key":"1"}))
  );
});

WindowOverlapRight.displayName = 'WindowOverlapRight';

module.exports = WindowOverlapRight;
module.exports.WindowOverlapRight = WindowOverlapRight;
module.exports.default = WindowOverlapRight;
