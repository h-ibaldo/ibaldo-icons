import { createElement, forwardRef } from 'react';

const SwitchKnobButton2 = forwardRef(function SwitchKnobButton2(
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
    createElement('circle', {"cx":"11.99999997708619","cy":"11.997562035419833","r":"10","key":"0"}),
    createElement('line', {"x1":"19.071067788796427","y1":"4.926494223393092","x2":"14.828427101776469","y2":"9.169134910611319","key":"1"})
  );
});

SwitchKnobButton2.displayName = 'SwitchKnobButton2';

export default SwitchKnobButton2;
export { SwitchKnobButton2 };
