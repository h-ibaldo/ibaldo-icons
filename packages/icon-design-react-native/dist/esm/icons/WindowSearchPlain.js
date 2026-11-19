import { createElement, forwardRef } from 'react';
import Svg, { Circle, Line, Path } from 'react-native-svg';

const WindowSearchPlain = forwardRef(function WindowSearchPlain(
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
    createElement(Path, {"d":"M10.999999976140316,21.998779299956368H3.999999976089384c-1.104569499659192,0-2-.895430500338989-2-2V3.998779299956368c0-1.104569499661011.895430500340808-2,2-2h16c1.104569499661011,0,2,.895430500338989,2,2v7","key":"0"}),
    createElement(Line, {"x1":"1.999999976089384","y1":"6.998779299956368","x2":"21.999999976089384","y2":"6.998779299956368","key":"1"}),
    createElement(Circle, {"cx":"15.999999976089384","cy":"15.998779300000933","r":"4.000000000000455","key":"2"}),
    createElement(Line, {"x1":"18.828430151999783","y1":"18.827209475653945","x2":"21.999999976360414","y2":"21.998779299730813","key":"3"})
  );
});

WindowSearchPlain.displayName = 'WindowSearchPlain';

export default WindowSearchPlain;
export { WindowSearchPlain };
