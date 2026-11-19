import { createElement, forwardRef } from 'react';
import Svg, { Circle, G, Line, Path } from 'react-native-svg';

const FolderMinusCircle = forwardRef(function FolderMinusCircle(
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
    createElement(Path, {"d":"M8.999999978690539,20.999999999998181H3.999999978690539c-1.104569499661011,0-2-.895430500340808-2-2V4.999999999998181c0-1.104569499659192.895430500338989-2,2-2h3.92963058965961c.668705935499929,0,1.293168239900297.334201833509724,1.66409989927979.890598573469106l.812536328739952,1.218802852130466c.370931659730559.556396740470518.995393964910363.890598574049363,1.664099901030568.890598573470925l7.929633082540022-.000000006919436c1.104569510369402-.000000000960426,2.000000035499397.8954304782892,2.000000091109541,1.999999988667696l.000000100710167,2.000000019181243","key":"0"}),
    createElement(G, {"key":"1"},
      createElement(Circle, {"cx":"16.999999978690539","cy":"16.999999999998181","r":"5","key":"0"}),
      createElement(Line, {"x1":"18.999999978690539","y1":"16.999999995057806","x2":"14.999999978690539","y2":"16.999999995237886","key":"1"}))
  );
});

FolderMinusCircle.displayName = 'FolderMinusCircle';

export default FolderMinusCircle;
export { FolderMinusCircle };
