import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PercentDiamond = forwardRef(function PercentDiamond(
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
    createElement(Path, {"d":"M9 15L15 9","key":"0"}),
    createElement(Path, {"d":"M9 9.5C9 9.223 9.223 9 9.5 9C9.777 9 10 9.223 10 9.5C10 9.777 9.777 10 9.5 10C9.223 10 9 9.777 9 9.5Z","key":"1"}),
    createElement(Path, {"d":"M14 14.5C14 14.223 14.223 14 14.5 14C14.777 14 15 14.223 15 14.5C15 14.777 14.777 15 14.5 15C14.223 15 14 14.777 14 14.5Z","key":"2"}),
    createElement(Path, {"d":"M14.121 3.121L20.879 9.879C22.051 11.051 22.051 12.949 20.879 14.121L14.121 20.879C12.949 22.051 11.051 22.051 9.879 20.879L3.121 14.121C1.949 12.949 1.949 11.051 3.121 9.879L9.879 3.121C11.051 1.949 12.949 1.949 14.121 3.121Z","key":"3"})
  );
});

PercentDiamond.displayName = 'PercentDiamond';

export default PercentDiamond;
export { PercentDiamond };
