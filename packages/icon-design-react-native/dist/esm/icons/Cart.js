import { createElement, forwardRef } from 'react';
import Svg, { Path } from 'react-native-svg';

const Cart = forwardRef(function Cart(
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
    createElement(Path, {"d":"M19 18L5.813 18C4.773 18 4.254 16.746 4.988 16.012L6 15","key":"0"}),
    createElement(Path, {"d":"M6 15L20 14L22 5L5.254 5","key":"1"}),
    createElement(Path, {"d":"M2 2L5 3L6 15","key":"2"}),
    createElement(Path, {"d":"M4 19.945C4 18.871 4.871 18 5.945 18C7.023 18 7.895 18.871 7.895 19.945C7.895 21.023 7.023 21.895 5.945 21.895C4.871 21.895 4 21.023 4 19.945Z","key":"3"}),
    createElement(Path, {"d":"M17 19.945C17 18.871 17.871 18 18.945 18C20.023 18 20.895 18.871 20.895 19.945C20.895 21.023 20.023 21.895 18.945 21.895C17.871 21.895 17 21.023 17 19.945Z","key":"4"})
  );
});

Cart.displayName = 'Cart';

export default Cart;
export { Cart };
