import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkDotsClip = forwardRef(function LinkDotsClip(
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
    createElement(Path, {"d":"M8 16L16 8","key":"0"}),
    createElement(Path, {"d":"M11 6L13.5 3.5C15.434 1.566 18.566 1.566 20.5 3.5C22.434 5.434 22.434 8.566 20.5 10.5L18 13","key":"1"}),
    createElement(Path, {"d":"M13 18L10.5 20.5C8.566 22.434 5.434 22.434 3.5 20.5C1.566 18.566 1.566 15.434 3.5 13.5L6 11","key":"2"}),
    createElement(Path, {"d":"M3 3L3 3","key":"3"}),
    createElement(Path, {"d":"M7 3L7 3","key":"4"})
  );
});

LinkDotsClip.displayName = 'LinkDotsClip';

export default LinkDotsClip;
export { LinkDotsClip };
