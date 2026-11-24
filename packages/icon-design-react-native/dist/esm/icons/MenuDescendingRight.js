import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuDescendingRight = forwardRef(function MenuDescendingRight(
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
    createElement(Path, {"d":"M2 4L22 4","key":"0"}),
    createElement(Path, {"d":"M9 12L22 12","key":"1"}),
    createElement(Path, {"d":"M17 20L22 20","key":"2"})
  );
});

MenuDescendingRight.displayName = 'MenuDescendingRight';

export default MenuDescendingRight;
export { MenuDescendingRight };
