import { createElement, forwardRef } from 'react';
import Svg, { Line } from 'react-native-svg';

const MenuTwoLines = forwardRef(function MenuTwoLines(
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
    createElement(Line, {"x1":"2","y1":"8.000000078527592","x2":"22","y2":"8.000000078527592","key":"0"}),
    createElement(Line, {"x1":"2","y1":"16.000000078527592","x2":"22","y2":"16.000000078527592","key":"1"})
  );
});

MenuTwoLines.displayName = 'MenuTwoLines';

export default MenuTwoLines;
export { MenuTwoLines };
