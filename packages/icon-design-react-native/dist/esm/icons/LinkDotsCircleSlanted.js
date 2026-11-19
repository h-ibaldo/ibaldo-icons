import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkDotsCircleSlanted = forwardRef(function LinkDotsCircleSlanted(
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
    createElement(Path, {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z","key":"0"}),
    createElement(Path, {"d":"M8.199 10.27C9.176 11.246 10.758 11.246 11.734 10.27L15.266 6.734C16.246 5.758 16.246 4.172 15.266 3.199L14.801 2.73C13.828 1.754 12.242 1.754 11.266 2.734L9.5 4.5","key":"1"}),
    createElement(Path, {"d":"M9.766 7.73C8.789 6.754 7.207 6.754 6.23 7.73L2.699 11.266C1.719 12.242 1.719 13.828 2.699 14.801L3.164 15.27C4.137 16.246 5.723 16.246 6.699 15.266L8.465 13.5","key":"2"}),
    createElement(Path, {"d":"M15.5 17L15.5 17","key":"3"}),
    createElement(Path, {"d":"M18.5 17L18.5 17","key":"4"})
  );
});

LinkDotsCircleSlanted.displayName = 'LinkDotsCircleSlanted';

export default LinkDotsCircleSlanted;
export { LinkDotsCircleSlanted };
