import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PointerShine = forwardRef(function PointerShine(
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
    createElement(Path, {"d":"M11 2L11 4","key":"0"}),
    createElement(Path, {"d":"M2 11L4 11","key":"1"}),
    createElement(Path, {"d":"M4.637 4.637L6.051 6.051","key":"2"}),
    createElement(Path, {"d":"M4.637 17.363L6.051 15.949","key":"3"}),
    createElement(Path, {"d":"M15.949 6.051L17.363 4.637","key":"4"}),
    createElement(Path, {"d":"M10.316 10.949L13.863 21.582C14.004 22.004 14.582 22.047 14.781 21.648L17.07 17.07L21.648 14.781C22.047 14.582 22.004 14.004 21.582 13.859L10.949 10.316C10.559 10.184 10.184 10.559 10.316 10.949Z","key":"5"})
  );
});

PointerShine.displayName = 'PointerShine';

export default PointerShine;
export { PointerShine };
