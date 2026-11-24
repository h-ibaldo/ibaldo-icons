import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const VolumeMedium = forwardRef(function VolumeMedium(
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
    createElement(Path, {"d":"M16.828 14.828C17.551 14.105 18 13.105 18 12C18 10.895 17.551 9.895 16.828 9.172","key":"0"}),
    createElement(Path, {"d":"M18.949 16.949C20.215 15.684 21 13.934 21 12C21 10.066 20.215 8.316 18.949 7.051","key":"1"}),
    createElement(Path, {"d":"M4 10L4 14C4 14.555 4.449 15 5 15L7 15L12.348 19.586C12.996 20.141 14 19.68 14 18.824L14 5.176C14 4.32 12.996 3.859 12.348 4.414L7 9L5 9C4.449 9 4 9.445 4 10Z","key":"2"})
  );
});

VolumeMedium.displayName = 'VolumeMedium';

export default VolumeMedium;
export { VolumeMedium };
