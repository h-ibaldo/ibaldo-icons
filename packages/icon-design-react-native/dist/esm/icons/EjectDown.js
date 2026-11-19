import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const EjectDown = forwardRef(function EjectDown(
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
    createElement(Path, {"d":"M4.918 8L19.082 8C20.32 8 21.063 9.371 20.391 10.41L13.309 21.293C12.691 22.234 11.309 22.234 10.691 21.293L3.609 10.41C2.938 9.371 3.68 8 4.918 8Z","key":"0"}),
    createElement(Path, {"d":"M4 2L20 2","key":"1"})
  );
});

EjectDown.displayName = 'EjectDown';

export default EjectDown;
export { EjectDown };
