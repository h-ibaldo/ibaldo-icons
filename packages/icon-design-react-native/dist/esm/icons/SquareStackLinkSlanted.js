import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SquareStackLinkSlanted = forwardRef(function SquareStackLinkSlanted(
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
    createElement(Path, {"d":"M17.5 14.5L18.172 13.828C19.277 12.723 19.277 10.934 18.172 9.828C17.066 8.723 15.277 8.723 14.172 9.828L13.5 10.5","key":"0"}),
    createElement(Path, {"d":"M10.5 13.5L9.828 14.172C8.723 15.277 8.723 17.066 9.828 18.172C10.934 19.277 12.723 19.277 13.828 18.172L14.5 17.5","key":"1"}),
    createElement(Path, {"d":"M15 13L13 15","key":"2"}),
    createElement(Path, {"d":"M20 22L8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L20 6C21.105 6 22 6.895 22 8L22 20C22 21.105 21.105 22 20 22Z","key":"3"}),
    createElement(Path, {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L17 2","key":"4"})
  );
});

SquareStackLinkSlanted.displayName = 'SquareStackLinkSlanted';

export default SquareStackLinkSlanted;
export { SquareStackLinkSlanted };
