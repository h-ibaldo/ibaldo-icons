import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkCircleArrowLeftClip = forwardRef(function LinkCircleArrowLeftClip(
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
    createElement(Path, {"d":"M15 13L16.5 11.5C17.605 10.395 17.605 8.605 16.5 7.5C15.395 6.395 13.605 6.395 12.5 7.5L11 9","key":"0"}),
    createElement(Path, {"d":"M9 11L7.5 12.5C6.395 13.605 6.395 15.395 7.5 16.5C8.605 17.605 10.395 17.605 11.5 16.5L13 15","key":"1"}),
    createElement(Path, {"d":"M18 18L16 20L18 22","key":"2"}),
    createElement(Path, {"d":"M22 20L16 20","key":"3"}),
    createElement(Path, {"d":"M12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 13.047 21.84 14.055 21.539 15","key":"4"}),
    createElement(Path, {"d":"M13 11L11 13","key":"5"})
  );
});

LinkCircleArrowLeftClip.displayName = 'LinkCircleArrowLeftClip';

export default LinkCircleArrowLeftClip;
export { LinkCircleArrowLeftClip };
