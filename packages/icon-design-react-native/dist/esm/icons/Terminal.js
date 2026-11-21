import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Terminal = forwardRef(function Terminal(
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
    createElement(Path, {"d":"M4 6L10 12L4 18","key":"0"}),
    createElement(Path, {"d":"M12 18L20 18","key":"1"})
  );
});

Terminal.displayName = 'Terminal';

export default Terminal;
export { Terminal };
