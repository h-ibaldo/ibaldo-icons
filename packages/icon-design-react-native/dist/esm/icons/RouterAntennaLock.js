import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const RouterAntennaLock = forwardRef(function RouterAntennaLock(
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
    createElement(Path, {"d":"M7 15L7 3","key":"0"}),
    createElement(Path, {"d":"M5 15L19 15C20.656 15 22 16.344 22 18C22 19.656 20.656 21 19 21L5 21C3.344 21 2 19.656 2 18C2 16.344 3.344 15 5 15Z","key":"1"}),
    createElement(Path, {"d":"M19 18L18 18","key":"2"}),
    createElement(Path, {"d":"M15 18L14 18","key":"3"}),
    createElement(Path, {"d":"M11 18L10 18","key":"4"}),
    createElement(Path, {"d":"M16.5 6L10.5 6L10.5 11L16.5 11Z","key":"5"}),
    createElement(Path, {"d":"M13.5 2C12.176 2 11.102 3.074 11.102 4.398L11.102 6L15.898 6L15.898 4.398C15.898 3.074 14.824 2 13.5 2Z","key":"6"})
  );
});

RouterAntennaLock.displayName = 'RouterAntennaLock';

export default RouterAntennaLock;
export { RouterAntennaLock };
