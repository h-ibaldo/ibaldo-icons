import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkRaysBoxy = forwardRef(function LinkRaysBoxy(
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
    createElement(Path, {"d":"M12.5 14L11 14C9.344 14 8 12.656 8 11L8 6C8 4.344 9.344 3 11 3L13 3C14.656 3 16 4.344 16 6L16 7","key":"0"}),
    createElement(Path, {"d":"M11.5 10L13 10C14.656 10 16 11.344 16 13L16 18C16 19.656 14.656 21 13 21L11 21C9.344 21 8 19.656 8 18L8 17","key":"1"}),
    createElement(Path, {"d":"M4 10L2 9","key":"2"}),
    createElement(Path, {"d":"M4 14L2 15","key":"3"}),
    createElement(Path, {"d":"M20 10L22 9","key":"4"}),
    createElement(Path, {"d":"M20 14L22 15","key":"5"})
  );
});

LinkRaysBoxy.displayName = 'LinkRaysBoxy';

export default LinkRaysBoxy;
export { LinkRaysBoxy };
