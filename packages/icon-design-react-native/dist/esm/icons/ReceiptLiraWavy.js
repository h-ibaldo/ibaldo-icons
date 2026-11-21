import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ReceiptLiraWavy = forwardRef(function ReceiptLiraWavy(
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
    createElement(Path, {"d":"M4 22L6 20L8 22L10 20L12 22L14 20L16 22L18 20L20 22L20 2L4 2Z","key":"0"}),
    createElement(Path, {"d":"M10 6L10 16C13.313 16 16 13.313 16 10","key":"1"}),
    createElement(Path, {"d":"M8 9L14 7","key":"2"})
  );
});

ReceiptLiraWavy.displayName = 'ReceiptLiraWavy';

export default ReceiptLiraWavy;
export { ReceiptLiraWavy };
