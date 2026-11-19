import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const GlobeGridCursor = forwardRef(function GlobeGridCursor(
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
    createElement(Path, {"d":"M21.289 15.305L19.199 16.797L22 19.602L19.602 22L16.801 19.199L15.305 21.289C15.102 21.578 14.652 21.504 14.555 21.164L12.02 12.543C11.922 12.223 12.223 11.922 12.547 12.02L21.164 14.551C21.504 14.652 21.578 15.102 21.289 15.305Z","key":"0"}),
    createElement(Path, {"d":"M12 9L12 2","key":"1"}),
    createElement(Path, {"d":"M21.797 10C20.871 5.438 16.836 2 12 2C6.477 2 2 6.477 2 12C2 17.188 5.945 21.445 11 21.949","key":"2"}),
    createElement(Path, {"d":"M16.898 10C16.438 5.438 14.418 2 12 2C9.238 2 7 6.477 7 12C7 16.84 8.719 20.871 11 21.801","key":"3"}),
    createElement(Path, {"d":"M2.461 9L21.535 9","key":"4"}),
    createElement(Path, {"d":"M9 15L2.465 15","key":"5"})
  );
});

GlobeGridCursor.displayName = 'GlobeGridCursor';

export default GlobeGridCursor;
export { GlobeGridCursor };
