import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ScissorsUp = forwardRef(function ScissorsUp(
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
    createElement(Path, {"d":"M7.602 14.488C9.07 15.32 9.574 17.152 8.727 18.59C7.879 20.023 6.004 20.516 4.535 19.688C3.066 18.859 2.563 17.023 3.41 15.59C4.258 14.152 6.137 13.66 7.602 14.488Z","key":"0"}),
    createElement(Path, {"d":"M16.398 14.488C14.93 15.32 14.426 17.152 15.273 18.59C16.121 20.023 17.996 20.516 19.465 19.688C20.934 18.859 21.438 17.023 20.59 15.59C19.742 14.152 17.863 13.66 16.398 14.488Z","key":"1"}),
    createElement(Path, {"d":"M15.273 18.59L6.07 3","key":"2"}),
    createElement(Path, {"d":"M17.93 3L13.762 10.063","key":"3"}),
    createElement(Path, {"d":"M12 13.043L8.727 18.59","key":"4"})
  );
});

ScissorsUp.displayName = 'ScissorsUp';

export default ScissorsUp;
export { ScissorsUp };
