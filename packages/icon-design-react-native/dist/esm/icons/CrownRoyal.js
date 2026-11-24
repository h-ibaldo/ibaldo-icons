import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CrownRoyal = forwardRef(function CrownRoyal(
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
    createElement(Path, {"d":"M9.09 8.129C8.738 8.051 8.375 8 8 8C5.238 8 3 10.238 3 13C3 15.051 4.234 16.805 6 17.578L6 19L18 19L18 17.578C19.766 16.805 21 15.051 21 13C21 10.238 18.762 8 16 8C15.625 8 15.262 8.051 14.91 8.129","key":"0"}),
    createElement(Path, {"d":"M13 3C13 3.551 12.555 4 12 4C11.445 4 11 3.551 11 3C11 2.449 11.445 2 12 2C12.555 2 13 2.449 13 3Z","key":"1"}),
    createElement(Path, {"d":"M6 22L18 22","key":"2"}),
    createElement(Path, {"d":"M16.926 14C16.973 13.676 17 13.34 17 13C17 9.688 14.762 7 12 7C9.238 7 7 9.688 7 13C7 13.34 7.027 13.676 7.074 14","key":"3"})
  );
});

CrownRoyal.displayName = 'CrownRoyal';

export default CrownRoyal;
export { CrownRoyal };
