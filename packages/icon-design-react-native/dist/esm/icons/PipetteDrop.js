import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const PipetteDrop = forwardRef(function PipetteDrop(
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
    createElement(Path, {"d":"M17 11L12 6C11.449 5.449 11.449 4.551 12 4C12.551 3.449 13.449 3.449 14 4L15 5L17 3C18.105 1.895 19.895 1.895 21 3C22.105 4.105 22.105 5.895 21 7L19 9L20 10C20.551 10.551 20.551 11.449 20 12C19.449 12.551 18.551 12.551 18 12L17 11L12 16L7 17L8 12L13 7","key":"0"}),
    createElement(Path, {"d":"M8 12L16 12","key":"1"}),
    createElement(Path, {"d":"M7 17L5.648 18.352C4.797 19.203 4.938 20.625 5.941 21.293C6.582 21.723 7.418 21.723 8.059 21.293C9.063 20.625 9.203 19.203 8.352 18.352Z","key":"2"})
  );
});

PipetteDrop.displayName = 'PipetteDrop';

export default PipetteDrop;
export { PipetteDrop };
