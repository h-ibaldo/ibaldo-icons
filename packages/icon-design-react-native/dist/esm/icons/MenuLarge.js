import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const MenuLarge = forwardRef(function MenuLarge(
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
    createElement(Line, {"x1":"2","y1":"12.000000078527592","x2":"22","y2":"12.000000078527592","key":"0"}),
    createElement(Line, {"x1":"2","y1":"3.000000078527592","x2":"22","y2":"3.000000078527592","key":"1"}),
    createElement(Line, {"x1":"2","y1":"21.000000078527592","x2":"22","y2":"21.000000078527592","key":"2"})
  );
});

MenuLarge.displayName = 'MenuLarge';

export default MenuLarge;
export { MenuLarge };
