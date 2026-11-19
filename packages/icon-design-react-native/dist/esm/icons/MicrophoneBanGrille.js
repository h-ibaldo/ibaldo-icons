import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const MicrophoneBanGrille = forwardRef(function MicrophoneBanGrille(
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
    createElement(Path, {"d":"M7 18L7 21","key":"0"}),
    createElement(Path, {"d":"M5 8L2 8","key":"1"}),
    createElement(Path, {"d":"M5 12L2 12","key":"2"}),
    createElement(Path, {"d":"M12 8L9 8","key":"3"}),
    createElement(Path, {"d":"M9.5 12L9 12","key":"4"}),
    createElement(Path, {"d":"M2 22L12 22","key":"5"}),
    createElement(Path, {"d":"M12 8L12 6.781C12 4.141 9.859 2 7.219 2L6.781 2C4.141 2 2 4.141 2 6.781L2 13.219C2 15.859 4.141 18 6.781 18L7.219 18C7.852 18 8.449 17.871 9 17.648","key":"6"}),
    createElement(Path, {"d":"M22 15C22 12.238 19.762 10 17 10C14.238 10 12 12.238 12 15C12 17.762 14.238 20 17 20C19.762 20 22 17.762 22 15Z","key":"7"}),
    createElement(Path, {"d":"M13.465 18.535L20.535 11.465","key":"8"})
  );
});

MicrophoneBanGrille.displayName = 'MicrophoneBanGrille';

export default MicrophoneBanGrille;
export { MicrophoneBanGrille };
