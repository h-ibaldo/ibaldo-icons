import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const LinkBrokenBurstSlanted = forwardRef(function LinkBrokenBurstSlanted(
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
    createElement(Path, {"d":"M4 9L2 9","key":"0"}),
    createElement(Path, {"d":"M5.465 5.465L4.051 4.051","key":"1"}),
    createElement(Path, {"d":"M9 4L9 2","key":"2"}),
    createElement(Path, {"d":"M20 15L22 15","key":"3"}),
    createElement(Path, {"d":"M18.535 18.535L19.949 19.949","key":"4"}),
    createElement(Path, {"d":"M15 20L15 22","key":"5"}),
    createElement(Path, {"d":"M12 6L14.762 3.242C16.414 1.59 19.102 1.59 20.758 3.242L20.762 3.246C22.414 4.902 22.414 7.59 20.762 9.242L18 12","key":"6"}),
    createElement(Path, {"d":"M12 18L9.242 20.762C7.59 22.414 4.902 22.414 3.246 20.762L3.242 20.758C1.59 19.102 1.59 16.414 3.242 14.762L6 12","key":"7"})
  );
});

LinkBrokenBurstSlanted.displayName = 'LinkBrokenBurstSlanted';

export default LinkBrokenBurstSlanted;
export { LinkBrokenBurstSlanted };
