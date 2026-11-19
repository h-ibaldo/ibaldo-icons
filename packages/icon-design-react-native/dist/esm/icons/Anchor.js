import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Anchor = forwardRef(function Anchor(
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
    createElement(Path, {"d":"M14.5 4.5C14.5 5.883 13.383 7 12 7C10.617 7 9.5 5.883 9.5 4.5C9.5 3.117 10.617 2 12 2C13.383 2 14.5 3.117 14.5 4.5Z","key":"0"}),
    createElement(Path, {"d":"M12 8L12 21","key":"1"}),
    createElement(Path, {"d":"M9 12L15 12","key":"2"}),
    createElement(Path, {"d":"M3.156 14C3.602 18.492 7.391 22 12 22C16.609 22 20.398 18.492 20.844 14","key":"3"}),
    createElement(Path, {"d":"M19 15L21 13L22 16","key":"4"}),
    createElement(Path, {"d":"M5 15L3 13L2 16","key":"5"})
  );
});

Anchor.displayName = 'Anchor';

export default Anchor;
export { Anchor };
