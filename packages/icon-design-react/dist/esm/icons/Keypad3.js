import { createElement, forwardRef } from 'react';

const Keypad3 = forwardRef(function Keypad3(
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
    createElement('circle', {"cx":"11.974731449503452","cy":"3.000000000479304","r":"1","key":"0"}),
    createElement('circle', {"cx":"5.974731449503452","cy":"3.000000000479304","r":"1","key":"1"}),
    createElement('circle', {"cx":"17.974731449503452","cy":"3.000000000479304","r":"1","key":"2"}),
    createElement('circle', {"cx":"11.974731449503452","cy":"9.000000000480213","r":"1","key":"3"}),
    createElement('circle', {"cx":"5.974731449503452","cy":"9.000000000480213","r":"1","key":"4"}),
    createElement('circle', {"cx":"17.974731449503452","cy":"9.000000000480213","r":"1","key":"5"}),
    createElement('circle', {"cx":"11.974731449503452","cy":"15.000000000480213","r":"1","key":"6"}),
    createElement('circle', {"cx":"5.974731449503452","cy":"15.000000000480213","r":"1","key":"7"}),
    createElement('circle', {"cx":"17.974731449503452","cy":"15.000000000480213","r":"1","key":"8"}),
    createElement('circle', {"cx":"11.974731449503452","cy":"21.000000000480213","r":"1","key":"9"})
  );
});

Keypad3.displayName = 'Keypad3';

export default Keypad3;
export { Keypad3 };
