import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const MenuSmall = forwardRef(function MenuSmall(
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
    createElement(Line, {"x1":"7","y1":"11.999999999998181","x2":"17","y2":"11.999999999998181","key":"0"}),
    createElement(Line, {"x1":"7","y1":"2.999999999998181","x2":"17","y2":"2.999999999998181","key":"1"}),
    createElement(Line, {"x1":"7","y1":"20.999999999998181","x2":"17","y2":"20.999999999998181","key":"2"})
  );
});

MenuSmall.displayName = 'MenuSmall';

export default MenuSmall;
export { MenuSmall };
