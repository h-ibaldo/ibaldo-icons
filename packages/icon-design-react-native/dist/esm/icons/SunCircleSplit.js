import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const SunCircleSplit = forwardRef(function SunCircleSplit(
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
    createElement(Path, {"d":"M19.133 5C17.316 3.152 14.793 2 12 2C9.203 2 6.676 3.152 4.863 5","key":"0"}),
    createElement(Path, {"d":"M2.367 9.332C1.676 11.832 1.945 14.59 3.344 17.012C4.746 19.43 7.004 21.043 9.512 21.688","key":"1"}),
    createElement(Path, {"d":"M21.633 9.332C22.324 11.832 22.055 14.59 20.656 17.012C19.254 19.43 16.996 21.043 14.488 21.688","key":"2"}),
    createElement(Path, {"d":"M14 12C14 10.895 13.105 10 12 10C10.895 10 10 10.895 10 12C10 13.105 10.895 14 12 14C13.105 14 14 13.105 14 12Z","key":"3"}),
    createElement(Path, {"d":"M12 6L12 7","key":"4"}),
    createElement(Path, {"d":"M12 17L12 18","key":"5"}),
    createElement(Path, {"d":"M6 12L7 12","key":"6"}),
    createElement(Path, {"d":"M17 12L18 12","key":"7"}),
    createElement(Path, {"d":"M7.758 7.758L8.465 8.465","key":"8"}),
    createElement(Path, {"d":"M15.535 15.535L16.242 16.242","key":"9"}),
    createElement(Path, {"d":"M7.758 16.242L8.465 15.535","key":"10"}),
    createElement(Path, {"d":"M15.535 8.465L16.242 7.758","key":"11"})
  );
});

SunCircleSplit.displayName = 'SunCircleSplit';

export default SunCircleSplit;
export { SunCircleSplit };
