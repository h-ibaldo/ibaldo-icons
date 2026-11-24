import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareStackLinkBracket = forwardRef(function SquareStackLinkBracket(
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
    createElement(Path, {"d":"M8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L18 6C19.105 6 20 6.895 20 8L20 12","key":"0"}),
    createElement(Path, {"d":"M15 19L18 19","key":"1"}),
    createElement(Path, {"d":"M14.5 22L14 22C12.344 22 11 20.656 11 19C11 17.344 12.344 16 14 16L14.5 16","key":"2"}),
    createElement(Path, {"d":"M18.5 16L19 16C20.656 16 22 17.344 22 19C22 20.656 20.656 22 19 22L18.5 22","key":"3"}),
    createElement(Path, {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L14 2","key":"4"})
  );
});

SquareStackLinkBracket.displayName = 'SquareStackLinkBracket';

export default SquareStackLinkBracket;
export { SquareStackLinkBracket };
