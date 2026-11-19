'use strict';

const { createElement, forwardRef } = require('react');
const RNSvg = require('react-native-svg');
const Svg = RNSvg.default || RNSvg.Svg;
const { Line, Path } = RNSvg;

const WindowFastPlain = forwardRef(function WindowFastPlain(
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
    createElement(Path, {"d":"M14.999999993642632,21.998779299956368l5.00000000044929-.00000000026921c1.104569499661011-.000000000050932,1.999999999959982-.895430500429939,1.99999999991087-2.000000000090949l-.00000000072032-16.000000000090949c-.000000000049113-1.104569499661011-.895430500420844-1.999999999959982-2.00000000008913-1.999999999909051l-15.99999999963984.000000000721229c-1.104569499661011.000000000046384-1.999999999959982.895430500425391-1.99999999991087,2.000000000086402l.00000000036016,5.999999999552529","key":"0"}),
    createElement(Line, {"x1":"21.999999993642632","y1":"6.998779299956368","x2":"1.999999993642632","y2":"6.998779299956368","key":"1"}),
    createElement(Line, {"x1":"10.999999993642632","y1":"21.998779299956368","x2":"5.999999993642632","y2":"21.998779299956368","key":"2"}),
    createElement(Line, {"x1":"10.999999993642632","y1":"17.998779299956368","x2":"3.999999993642632","y2":"17.998779299956368","key":"3"}),
    createElement(Line, {"x1":"10.999999993642632","y1":"13.998779299956368","x2":"1.999999993642632","y2":"13.998779299956368","key":"4"})
  );
});

WindowFastPlain.displayName = 'WindowFastPlain';

module.exports = WindowFastPlain;
module.exports.WindowFastPlain = WindowFastPlain;
module.exports.default = WindowFastPlain;
