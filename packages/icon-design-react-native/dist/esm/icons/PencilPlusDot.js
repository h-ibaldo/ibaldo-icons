import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PencilPlusDot = forwardRef(function PencilPlusDot(
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
    createElement(Path, {"d":"M17 19C17 17.895 17.895 17 19 17C20.105 17 21 17.895 21 19C21 20.105 20.105 21 19 21C17.895 21 17 20.105 17 19Z","key":"0"}),
    createElement(Path, {"d":"M4.5 2L4.5 7","key":"1"}),
    createElement(Path, {"d":"M7 4.5L2 4.5","key":"2"}),
    createElement(Path, {"d":"M21.121 4.637L19.363 2.879C18.191 1.707 16.293 1.707 15.121 2.879L3 15L2 22L9 21L21.121 8.879C22.293 7.707 22.293 5.809 21.121 4.637Z","key":"3"}),
    createElement(Path, {"d":"M14 4L20 10","key":"4"}),
    createElement(Path, {"d":"M12 6L18 12","key":"5"}),
    createElement(Path, {"d":"M3.973 21.719C3.848 20.84 3.16 20.152 2.281 20.027","key":"6"}),
    createElement(Path, {"d":"M7 17L15 9","key":"7"})
  );
});

PencilPlusDot.displayName = 'PencilPlusDot';

export default PencilPlusDot;
export { PencilPlusDot };
