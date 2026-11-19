import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Microphone = forwardRef(function Microphone(
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
    createElement(Path, {"d":"M12 14C9.789 14 8 12.211 8 10L8 6C8 3.789 9.789 2 12 2C14.211 2 16 3.789 16 6L16 10C16 12.211 14.211 14 12 14Z","key":"0"}),
    createElement(Path, {"d":"M12 18L12 22","key":"1"}),
    createElement(Path, {"d":"M16 22L8 22","key":"2"}),
    createElement(Path, {"d":"M5.773 15C7.234 16.828 9.477 18 12 18C14.523 18 16.766 16.828 18.227 15","key":"3"})
  );
});

Microphone.displayName = 'Microphone';

export default Microphone;
export { Microphone };
