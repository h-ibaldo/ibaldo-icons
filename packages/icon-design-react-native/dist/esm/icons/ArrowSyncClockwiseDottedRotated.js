import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ArrowSyncClockwiseDottedRotated = forwardRef(function ArrowSyncClockwiseDottedRotated(
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
    createElement(Path, {"d":"M20 12L20 12","key":"0"}),
    createElement(Path, {"d":"M20 12L20 12","key":"1"}),
    createElement(Path, {"d":"M19.191 8.492L19.191 8.492","key":"2"}),
    createElement(Path, {"d":"M16.926 5.695L16.926 5.695","key":"3"}),
    createElement(Path, {"d":"M19.309 15.254L19.309 15.254","key":"4"}),
    createElement(Path, {"d":"M13 22L11 20L13 18","key":"5"}),
    createElement(Path, {"d":"M12 20C15.262 20 18.059 18.047 19.305 15.25","key":"6"}),
    createElement(Path, {"d":"M4 12L4 12","key":"7"}),
    createElement(Path, {"d":"M4 12L4 12","key":"8"}),
    createElement(Path, {"d":"M4.809 15.508L4.809 15.508","key":"9"}),
    createElement(Path, {"d":"M7.074 18.305L7.074 18.305","key":"10"}),
    createElement(Path, {"d":"M4.691 8.746L4.691 8.746","key":"11"}),
    createElement(Path, {"d":"M11 2L13 4L11 6","key":"12"}),
    createElement(Path, {"d":"M12 4C8.738 4 5.941 5.953 4.695 8.75","key":"13"})
  );
});

ArrowSyncClockwiseDottedRotated.displayName = 'ArrowSyncClockwiseDottedRotated';

export default ArrowSyncClockwiseDottedRotated;
export { ArrowSyncClockwiseDottedRotated };
