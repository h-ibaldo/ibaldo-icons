import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkSquareWide = forwardRef(function LinkSquareWide(
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
    createElement(Path, {"d":"M16.5 11.5L17.086 10.914C17.867 10.133 17.867 8.867 17.086 8.086L15.914 6.914C15.133 6.133 13.867 6.133 13.086 6.914L10.828 9.172C9.723 10.277 9.723 12.066 10.828 13.172","key":"1"}),
    createElement(Path, {"d":"M7.5 12.5L6.914 13.086C6.133 13.867 6.133 15.133 6.914 15.914L8.086 17.086C8.867 17.867 10.133 17.867 10.914 17.086L13.172 14.828C14.277 13.723 14.277 11.934 13.172 10.828","key":"2"})
  );
});

LinkSquareWide.displayName = 'LinkSquareWide';

export default LinkSquareWide;
export { LinkSquareWide };
