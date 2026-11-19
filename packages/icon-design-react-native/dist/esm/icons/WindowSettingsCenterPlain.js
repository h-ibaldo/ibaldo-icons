import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WindowSettingsCenterPlain = forwardRef(function WindowSettingsCenterPlain(
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
    createElement(Path, {"d":"M19 22L5 22C3.344 22 2 20.656 2 19L2 5C2 3.344 3.344 2 5 2L19 2C20.656 2 22 3.344 22 5L22 19C22 20.656 20.656 22 19 22Z","key":"0"}),
    createElement(Path, {"d":"M2 8L22 8","key":"1"}),
    createElement(Path, {"d":"M15 15C15 13.344 13.656 12 12 12C10.344 12 9 13.344 9 15C9 16.656 10.344 18 12 18C13.656 18 15 16.656 15 15Z","key":"2"}),
    createElement(Path, {"d":"M12 11L12 12","key":"3"}),
    createElement(Path, {"d":"M12 18L12 19","key":"4"}),
    createElement(Path, {"d":"M8.535 13L9.402 13.5","key":"5"}),
    createElement(Path, {"d":"M14.598 16.5L15.465 17","key":"6"}),
    createElement(Path, {"d":"M8.535 17L9.402 16.5","key":"7"}),
    createElement(Path, {"d":"M14.598 13.5L15.465 13","key":"8"})
  );
});

WindowSettingsCenterPlain.displayName = 'WindowSettingsCenterPlain';

export default WindowSettingsCenterPlain;
export { WindowSettingsCenterPlain };
