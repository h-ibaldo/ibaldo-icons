import { createElement, forwardRef } from 'react';
import Svg, { Circle, G, Line, Path } from 'react-native-svg';

const SquareStackPlusCircleShadow = forwardRef(function SquareStackPlusCircleShadow(
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
    createElement(Path, {"d":"M7.999999993639904,21.998779299956368h-1c-.552284749829596,0-1-.447715250171314-1-1V6.998779299956368c0-.552284749832324.447715250170404-1,1-1h14c.552284749829596,0,1,.447715250167676,1,1v1","key":"0"}),
    createElement(Circle, {"cx":"15.999999993639904","cy":"15.998779299959097","r":"5.999999999998636","key":"1"}),
    createElement(G, {"key":"2"},
      createElement(Line, {"x1":"15.999999993639904","y1":"13.498779299956368","x2":"15.999999993639904","y2":"18.498779299956368","key":"0"}),
      createElement(Line, {"x1":"18.499999993639904","y1":"15.998779299865419","x2":"13.499999993639904","y2":"15.99877930004368","key":"1"})),
    createElement(Path, {"d":"M1.999999993639904,16.998779299956368V2.998779299956368c0-.552284749832324.447715250170404-1,1-1h14","key":"3"})
  );
});

SquareStackPlusCircleShadow.displayName = 'SquareStackPlusCircleShadow';

export default SquareStackPlusCircleShadow;
export { SquareStackPlusCircleShadow };
