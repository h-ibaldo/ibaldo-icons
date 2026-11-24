import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkArrowUpRound = forwardRef(function LinkArrowUpRound(
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
    createElement(Path, {"d":"M11 13.762C9.797 14.566 9 15.941 9 17.5C9 19.984 11.016 22 13.5 22L17.5 22C19.984 22 22 19.984 22 17.5C22 15.188 20.246 13.301 18 13.051","key":"0"}),
    createElement(Path, {"d":"M13 18.238C14.203 17.434 15 16.059 15 14.5C15 12.016 12.984 10 10.5 10L6.5 10C4.016 10 2 12.016 2 14.5C2 16.813 3.754 18.699 6 18.949","key":"1"}),
    createElement(Path, {"d":"M22 5L19 2L16 5","key":"2"}),
    createElement(Path, {"d":"M19 8L19 2","key":"3"})
  );
});

LinkArrowUpRound.displayName = 'LinkArrowUpRound';

export default LinkArrowUpRound;
export { LinkArrowUpRound };
