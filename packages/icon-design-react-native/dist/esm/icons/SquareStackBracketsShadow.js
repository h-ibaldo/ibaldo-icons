import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareStackBracketsShadow = forwardRef(function SquareStackBracketsShadow(
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
    createElement(Path, {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L17 2","key":"0"}),
    createElement(Path, {"d":"M20 22L8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L20 6C21.105 6 22 6.895 22 8L22 20C22 21.105 21.105 22 20 22Z","key":"1"}),
    createElement(Path, {"d":"M16 12L18 14L16 16","key":"2"}),
    createElement(Path, {"d":"M12 12L10 14L12 16","key":"3"})
  );
});

SquareStackBracketsShadow.displayName = 'SquareStackBracketsShadow';

export default SquareStackBracketsShadow;
export { SquareStackBracketsShadow };
