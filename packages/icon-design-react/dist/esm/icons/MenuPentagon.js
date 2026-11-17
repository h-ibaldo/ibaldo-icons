import { createElement, forwardRef } from 'react';

const MenuPentagon = forwardRef(function MenuPentagon(
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
    createElement('line', {"x1":"7.000000004900357","y1":"13.999999995256076","x2":"17.000000004900357","y2":"13.999999995256076","key":"0"}),
    createElement('line', {"x1":"7.000000004900357","y1":"9.999999995256076","x2":"17.000000004900357","y2":"9.999999995256076","key":"1"}),
    createElement('line', {"x1":"7.000000004900357","y1":"17.999999995256076","x2":"17.000000004900357","y2":"17.999999995256076","key":"2"}),
    createElement('path', {"d":"M20.000000004900357,21.999999995256076H4.000000004900357c-1.104569499670106,0-2-.895430500338989-2-2v-11.145898033748381c0-1.136316175361571.642007128679325-2.17510553059401,1.658359213490257-2.683281573001295L12.000000004900357,1.999999995256076l8.341640786500648,4.170820393250324c1.016352084809114.508176042407285,1.658359213499352,1.546965397639724,1.658359213499352,2.683281573001295v11.145898033748381c0,1.104569499661011-.895430500340808,2-2,2Z","key":"3"})
  );
});

MenuPentagon.displayName = 'MenuPentagon';

export default MenuPentagon;
export { MenuPentagon };
