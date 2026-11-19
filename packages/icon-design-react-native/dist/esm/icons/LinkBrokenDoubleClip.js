import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkBrokenDoubleClip = forwardRef(function LinkBrokenDoubleClip(
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
    createElement(Path, {"d":"M5 8L2 7","key":"0"}),
    createElement(Path, {"d":"M8 5L7 2","key":"1"}),
    createElement(Path, {"d":"M19 16L22 17","key":"2"}),
    createElement(Path, {"d":"M16 19L17 22","key":"3"}),
    createElement(Path, {"d":"M13 17L10.004 19.996C8.344 21.656 5.656 21.656 3.996 19.996C2.34 18.34 2.34 15.656 3.992 13.996L7 10.98","key":"4"}),
    createElement(Path, {"d":"M11 6.98L13.996 3.98C15.656 2.324 18.344 2.324 20.004 3.98L20.004 3.984C21.66 5.637 21.66 8.324 20.008 9.98L17 13","key":"5"}),
    createElement(Path, {"d":"M9 15L15 9","key":"6"})
  );
});

LinkBrokenDoubleClip.displayName = 'LinkBrokenDoubleClip';

export default LinkBrokenDoubleClip;
export { LinkBrokenDoubleClip };
