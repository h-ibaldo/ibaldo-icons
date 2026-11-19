import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkPlusRound = forwardRef(function LinkPlusRound(
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
    createElement(Path, {"d":"M13 6.762C14.203 7.566 15 8.941 15 10.5C15 12.984 12.984 15 10.5 15L6.5 15C4.016 15 2 12.984 2 10.5C2 8.188 3.754 6.301 6 6.051","key":"0"}),
    createElement(Path, {"d":"M11 11.238C9.797 10.434 9 9.059 9 7.5C9 5.016 11.016 3 13.5 3L17.5 3C19.984 3 22 5.016 22 7.5C22 9.813 20.246 11.699 18 11.949","key":"1"}),
    createElement(Path, {"d":"M19 16L19 22","key":"2"}),
    createElement(Path, {"d":"M22 19L16 19","key":"3"})
  );
});

LinkPlusRound.displayName = 'LinkPlusRound';

export default LinkPlusRound;
export { LinkPlusRound };
