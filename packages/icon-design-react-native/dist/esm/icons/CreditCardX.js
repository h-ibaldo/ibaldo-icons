import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const CreditCardX = forwardRef(function CreditCardX(
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
    createElement(Path, {"d":"M13 19L4 19C2.895 19 2 18.105 2 17L2 7C2 5.895 2.895 5 4 5L20 5C21.105 5 22 5.895 22 7L22 12","key":"0"}),
    createElement(Path, {"d":"M2 9L22 9","key":"1"}),
    createElement(Path, {"d":"M17 16L21 20","key":"2"}),
    createElement(Path, {"d":"M21 16L17 20","key":"3"})
  );
});

CreditCardX.displayName = 'CreditCardX';

export default CreditCardX;
export { CreditCardX };
