import { createElement, forwardRef } from 'react';

const Keypad2 = forwardRef(function Keypad2(
  { color = 'currentColor', size = 24, strokeWidth = 1.5, className = '', ...props },
  ref
) {
  return createElement(
    'svg',
    {
      ref,
      xmlns: 'http://www.w3.org/2000/svg',
      width: size,
      height: size,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: color,
      strokeWidth,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
      className: ('icon-design ' + className).trim(),
      ...props
    },
    createElement('rect', {"x":"1.974731449281407","y":"1.999999995004515","width":"4.000000000222045","height":"2.000000011421378","rx":".999999003351011","ry":".999999003351011","key":"0"}),
    createElement('rect', {"x":"9.974731449503452","y":"1.999999995004515","width":"4","height":"2.000000011421378","rx":".99999900335101","ry":".99999900335101","key":"1"}),
    createElement('rect', {"x":"17.974731449503452","y":"1.999999995004515","width":"3.999999999777955","height":"2.000000011421378","rx":".99999900335101","ry":".99999900335101","key":"2"}),
    createElement('rect', {"x":"1.974731449281407","y":"7.999999998657941","width":"4.000000000222045","height":"2.000000004116345","rx":".9999990007972","ry":".9999990007972","key":"3"}),
    createElement('rect', {"x":"9.974731449503452","y":"7.999999998657941","width":"4","height":"2.000000004116345","rx":".999999000797199","ry":".999999000797199","key":"4"}),
    createElement('rect', {"x":"17.974731449503452","y":"7.999999998657941","width":"3.999999999777955","height":"2.000000004116345","rx":".999999000797197","ry":".999999000797197","key":"5"}),
    createElement('rect', {"x":"1.974731449281407","y":"13.999999991440205","width":"4.000000000222045","height":"2.000000018551816","rx":".999999009935805","ry":".999999009935805","key":"6"}),
    createElement('rect', {"x":"9.974731449503452","y":"13.999999991440205","width":"4","height":"2.000000018551816","rx":".999999009935804","ry":".999999009935804","key":"7"}),
    createElement('rect', {"x":"9.974731449503452","y":"19.999999991673036","width":"4","height":"2.000000018086155","rx":".999999007898534","ry":".999999007898534","key":"8"}),
    createElement('rect', {"x":"17.974731449503452","y":"13.999999991440205","width":"3.999999999777955","height":"2.000000018551816","rx":".999999009935803","ry":".999999009935803","key":"9"})
  );
});

Keypad2.displayName = 'Keypad2';

export default Keypad2;
export { Keypad2 };
