import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ScissorsClosedWide = forwardRef(function ScissorsClosedWide(
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
    createElement(Path, {"d":"M7.598 11.5C6.77 12.938 4.938 13.426 3.5 12.598C2.066 11.77 1.574 9.938 2.402 8.5C3.23 7.066 5.066 6.574 6.5 7.402C7.938 8.23 8.426 10.066 7.598 11.5Z","key":"0"}),
    createElement(Path, {"d":"M8.676 14.961L3.703 12.707L7.535 16","key":"1"}),
    createElement(Path, {"d":"M12.113 11.828L7.535 16L11.402 16L22 11.195L18.754 10.27C16.422 9.602 13.91 10.191 12.113 11.828Z","key":"2"})
  );
});

ScissorsClosedWide.displayName = 'ScissorsClosedWide';

export default ScissorsClosedWide;
export { ScissorsClosedWide };
