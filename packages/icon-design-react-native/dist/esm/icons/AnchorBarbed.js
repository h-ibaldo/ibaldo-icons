import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const AnchorBarbed = forwardRef(function AnchorBarbed(
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
    createElement(Path, {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12","key":"0"}),
    createElement(Path, {"d":"M15 5C15 6.656 13.656 8 12 8C10.344 8 9 6.656 9 5C9 3.344 10.344 2 12 2C13.656 2 15 3.344 15 5Z","key":"1"}),
    createElement(Path, {"d":"M12 8L12 22","key":"2"}),
    createElement(Path, {"d":"M2 12L6 14","key":"3"}),
    createElement(Path, {"d":"M18 14L22 12","key":"4"})
  );
});

AnchorBarbed.displayName = 'AnchorBarbed';

export default AnchorBarbed;
export { AnchorBarbed };
