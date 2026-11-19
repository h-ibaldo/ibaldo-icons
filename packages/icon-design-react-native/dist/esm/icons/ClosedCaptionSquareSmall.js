import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClosedCaptionSquareSmall = forwardRef(function ClosedCaptionSquareSmall(
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
    createElement(Path, {"d":"M10 14C8.895 14 8 13.105 8 12C8 10.895 8.895 10 10 10","key":"0"}),
    createElement(Path, {"d":"M15 14C13.895 14 13 13.105 13 12C13 10.895 13.895 10 15 10","key":"1"}),
    createElement(Path, {"d":"M16 20L8 20C5.789 20 4 18.211 4 16L4 8C4 5.789 5.789 4 8 4L16 4C18.211 4 20 5.789 20 8L20 16C20 18.211 18.211 20 16 20Z","key":"2"})
  );
});

ClosedCaptionSquareSmall.displayName = 'ClosedCaptionSquareSmall';

export default ClosedCaptionSquareSmall;
export { ClosedCaptionSquareSmall };
