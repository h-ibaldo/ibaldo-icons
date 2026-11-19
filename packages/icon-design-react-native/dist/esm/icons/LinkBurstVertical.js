import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkBurstVertical = forwardRef(function LinkBurstVertical(
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
    createElement(Path, {"d":"M12 14C10.344 14 9 12.656 9 11L9 6C9 4.344 10.344 3 12 3C13.656 3 15 4.344 15 6L15 8","key":"0"}),
    createElement(Path, {"d":"M12 10C13.656 10 15 12.344 15 14L15 18C15 19.656 13.656 21 12 21C10.344 21 9 19.656 9 18L9 16","key":"1"}),
    createElement(Path, {"d":"M4 12L2 12","key":"2"}),
    createElement(Path, {"d":"M5.172 8.414L3.758 7","key":"3"}),
    createElement(Path, {"d":"M3.758 17L5.172 15.586","key":"4"}),
    createElement(Path, {"d":"M20.172 12L22.172 12","key":"5"}),
    createElement(Path, {"d":"M19 8.414L20.414 7","key":"6"}),
    createElement(Path, {"d":"M20.414 17L19 15.586","key":"7"})
  );
});

LinkBurstVertical.displayName = 'LinkBurstVertical';

export default LinkBurstVertical;
export { LinkBurstVertical };
