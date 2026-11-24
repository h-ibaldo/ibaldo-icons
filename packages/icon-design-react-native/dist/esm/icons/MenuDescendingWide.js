import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MenuDescendingWide = forwardRef(function MenuDescendingWide(
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
    createElement(Path, {"d":"M2 12L15 12","key":"1"}),
    createElement(Path, {"d":"M2 20L7 20","key":"2"})
  );
});

MenuDescendingWide.displayName = 'MenuDescendingWide';

export default MenuDescendingWide;
export { MenuDescendingWide };
