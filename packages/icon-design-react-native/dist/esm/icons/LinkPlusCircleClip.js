import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkPlusCircleClip = forwardRef(function LinkPlusCircleClip(
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
    createElement(Path, {"d":"M13 10L14.965 8.035C16.344 6.656 16.344 4.414 14.965 3.035C13.586 1.656 11.344 1.656 9.965 3.035L8 5","key":"0"}),
    createElement(Path, {"d":"M5 8L3.035 9.965C1.656 11.348 1.656 13.586 3.035 14.965C4.414 16.348 6.656 16.348 8.035 14.965L10 13","key":"1"}),
    createElement(Path, {"d":"M11 7L7 11","key":"2"}),
    createElement(Path, {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z","key":"3"}),
    createElement(Path, {"d":"M17 15L17 19","key":"4"}),
    createElement(Path, {"d":"M19 17L15 17","key":"5"})
  );
});

LinkPlusCircleClip.displayName = 'LinkPlusCircleClip';

export default LinkPlusCircleClip;
export { LinkPlusCircleClip };
