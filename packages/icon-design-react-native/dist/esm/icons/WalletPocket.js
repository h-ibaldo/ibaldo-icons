import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const WalletPocket = forwardRef(function WalletPocket(
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
    createElement(Path, {"d":"M5 4L19 4C20.656 4 22 5.344 22 7L22 17C22 18.656 20.656 20 19 20L5 20C3.344 20 2 18.656 2 17L2 7C2 5.344 3.344 4 5 4Z","key":"0"}),
    createElement(Path, {"d":"M2 13L7.5 13C8.328 13 9 13.672 9 14.5C9 15.328 9.672 16 10.5 16L13.5 16C14.328 16 15 15.328 15 14.5C15 13.672 15.672 13 16.5 13L22 13","key":"1"}),
    createElement(Path, {"d":"M5 13L5 9C5 7.895 5.895 7 7 7L17 7C18.105 7 19 7.895 19 9L19 13","key":"2"}),
    createElement(Path, {"d":"M5 13L5 12C5 10.895 5.895 10 7 10L17 10C18.105 10 19 10.895 19 12L19 13","key":"3"})
  );
});

WalletPocket.displayName = 'WalletPocket';

export default WalletPocket;
export { WalletPocket };
