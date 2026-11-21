import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Voicemail = forwardRef(function Voicemail(
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
    createElement(Path, {"d":"M2 12C2 9.789 3.789 8 6 8C8.211 8 10 9.789 10 12C10 14.211 8.211 16 6 16C3.789 16 2 14.211 2 12Z","key":"0"}),
    createElement(Path, {"d":"M14 12C14 9.789 15.789 8 18 8C20.211 8 22 9.789 22 12C22 14.211 20.211 16 18 16C15.789 16 14 14.211 14 12Z","key":"1"}),
    createElement(Path, {"d":"M6 16L18 16","key":"2"})
  );
});

Voicemail.displayName = 'Voicemail';

export default Voicemail;
export { Voicemail };
