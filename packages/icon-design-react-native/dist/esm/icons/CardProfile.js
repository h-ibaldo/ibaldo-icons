import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CardProfile = forwardRef(function CardProfile(
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
    createElement(Path, {"d":"M20 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L20 2C21.105 2 22 2.895 22 4L22 20C22 21.105 21.105 22 20 22Z","key":"0"}),
    createElement(Path, {"d":"M2 13L22 13","key":"1"}),
    createElement(Path, {"d":"M10 7.5C10 6.117 8.883 5 7.5 5C6.117 5 5 6.117 5 7.5C5 8.883 6.117 10 7.5 10C8.883 10 10 8.883 10 7.5Z","key":"2"}),
    createElement(Path, {"d":"M14 6L18 6","key":"3"}),
    createElement(Path, {"d":"M14 9L18 9","key":"4"})
  );
});

CardProfile.displayName = 'CardProfile';

export default CardProfile;
export { CardProfile };
