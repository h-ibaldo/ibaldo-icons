import { createElement, forwardRef } from 'react';

const Folder10 = forwardRef(function Folder10(
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
    createElement('path', {"d":"M21.000000098529199,8.999999999998181l-.00000010201984-2.000000102010745c-.000000056339559-1.104569459828781-.895430540178495-1.999999897989255-2-1.999999897989255h-7.171573639139751c-.530432513129199,0-1.03913993085007-.210713311089421-1.414212610339746-.585785485600354l-.828430144190861-.828429028808387c-.375072679489676-.375072174501838-.883780097208728-.585785485591259-1.414212610339746-.585785485591259h-4.171570971189794c-1.104569499659192,0-2,.895430500340808-2,2v14c0,1.104569499659192.895430500340808,2,2,2h15.999999978690539c1.104569499659192,0,2-.895430500340808,2-2v-8c0-1.104569499659192-.895430500340808-2-2-2h-12c-1.104569499659192,0-2,.895430500340808-2,2v8c0,1.104568395088791-.895429611209693,1.999998000001142-1.999998000001142,1.999998000001142","key":"0"}),
    createElement('rect', {"x":"10","y":"12.999999999998181","width":"5","height":"2","key":"1"})
  );
});

Folder10.displayName = 'Folder10';

export default Folder10;
export { Folder10 };
