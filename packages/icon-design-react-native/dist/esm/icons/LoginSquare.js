import { createElement, forwardRef } from 'react';
import Svg, { Line, Polyline, Rect } from 'react-native-svg';

const LoginSquare = forwardRef(function LoginSquare(
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
    createElement(Polyline, {"points":"10.067167566010539 9.43296768574146 13.067167566010539 12.43296768574146 10.067167566010539 15.43296768574146","key":"0"}),
    createElement(Line, {"x1":"2.067167566010539","y1":"12.43296768574146","x2":"13.067167566010539","y2":"12.43296768574146","key":"1"}),
    createElement(Rect, {"x":"2.067167566010539","y":"2.43296768574146","width":"20","height":"20","rx":"1","ry":"1","key":"2"})
  );
});

LoginSquare.displayName = 'LoginSquare';

export default LoginSquare;
export { LoginSquare };
