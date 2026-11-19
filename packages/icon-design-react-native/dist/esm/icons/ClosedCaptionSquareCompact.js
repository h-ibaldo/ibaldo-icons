import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ClosedCaptionSquareCompact = forwardRef(function ClosedCaptionSquareCompact(
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
    createElement(Path, {"d":"M17 22L7 22C4.238 22 2 19.762 2 17L2 7C2 4.238 4.238 2 7 2L17 2C19.762 2 22 4.238 22 7L22 17C22 19.762 19.762 22 17 22Z","key":"0"}),
    createElement(Path, {"d":"M10 14L9 14C7.895 14 7 13.105 7 12C7 10.895 7.895 10 9 10L10 10","key":"1"}),
    createElement(Path, {"d":"M16 14L15 14C13.895 14 13 13.105 13 12C13 10.895 13.895 10 15 10L16 10","key":"2"})
  );
});

ClosedCaptionSquareCompact.displayName = 'ClosedCaptionSquareCompact';

export default ClosedCaptionSquareCompact;
export { ClosedCaptionSquareCompact };
