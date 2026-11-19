import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkMinusRound = forwardRef(function LinkMinusRound(
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
    createElement(Path, {"d":"M13 7.762C14.203 8.566 15 9.941 15 11.5C15 13.984 12.984 16 10.5 16L6.5 16C4.016 16 2 13.984 2 11.5C2 9.188 3.754 7.301 6 7.051","key":"0"}),
    createElement(Path, {"d":"M11 12.238C9.797 11.434 9 10.059 9 8.5C9 6.016 11.016 4 13.5 4L17.5 4C19.984 4 22 6.016 22 8.5C22 10.813 20.246 12.699 18 12.949","key":"1"}),
    createElement(Path, {"d":"M22 20L16 20","key":"2"})
  );
});

LinkMinusRound.displayName = 'LinkMinusRound';

export default LinkMinusRound;
export { LinkMinusRound };
