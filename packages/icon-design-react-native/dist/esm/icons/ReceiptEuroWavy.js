import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const ReceiptEuroWavy = forwardRef(function ReceiptEuroWavy(
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
    createElement(Path, {"d":"M16.102 14C15.379 15.215 14.234 16 12.945 16C10.766 16 9 13.762 9 11C9 8.238 10.766 6 12.945 6C13.832 6 14.652 6.371 15.313 7","key":"1"}),
    createElement(Path, {"d":"M13 11L8 11","key":"2"})
  );
});

ReceiptEuroWavy.displayName = 'ReceiptEuroWavy';

export default ReceiptEuroWavy;
export { ReceiptEuroWavy };
