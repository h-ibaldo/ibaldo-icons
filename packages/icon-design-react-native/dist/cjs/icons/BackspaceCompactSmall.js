'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const BackspaceCompactSmall = forwardRef(function BackspaceCompactSmall(
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
    createElement(Path, {"d":"M20.066798314908738,19.000000000448381h-12.042401496102684c-.605486311487766,0-1.178376379437395-.274299335983414-1.55802236839736-.745979944521423l-4.024396828022873-5c-.589303508790181-.732163767607744-.589303508790181-1.7758763433485,0-2.508040110958973l4.024396828022873-5c.379645988959965-.471680608538009.952536056909594-.745979944519604,1.55802236839736-.745979944519604h12.042401496102684c1.104569499657373,0,2,.895430500338989,2,2v10c0,1.104569499661011-.895430500342627,2-2,2Z","key":"0"}),
    createElement(Line, {"x1":"15.999999990888682","y1":"10.000000000448381","x2":"11.999999990888682","y2":"14.000000000448381","key":"1"}),
    createElement(Line, {"x1":"11.999999990786819","y1":"10.000000000538421","x2":"15.999999990968718","y2":"14.00000000035925","key":"2"})
  );
});

BackspaceCompactSmall.displayName = 'BackspaceCompactSmall';

module.exports = BackspaceCompactSmall;
module.exports.BackspaceCompactSmall = BackspaceCompactSmall;
module.exports.default = BackspaceCompactSmall;
