import { createElement, forwardRef } from 'react';

const TouchMoveDown = forwardRef(function TouchMoveDown(
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
    createElement('polyline', {"points":"9.025268549155953 18.998782739599847 12.025268549155953 21.998782739599847 15.025268549155953 18.998782739599847","key":"0"}),
    createElement('line', {"x1":"12.025268549155953","y1":"9.998782739599847","x2":"12.025268549155953","y2":"21.998782739599847","key":"1"}),
    createElement('path', {"d":"M15.025268549155953,13.189517602881097c1.791625976560681-1.037841796875,3-2.97119140625,3-5.19073486328125,0-3.313720703125-2.686279296880457-6-6-6-3.313720703130457,0-6,2.686279296875-6,6,0,2.21954345703125,1.208374023439319,4.15289306640625,3,5.19073486328125","key":"2"})
  );
});

TouchMoveDown.displayName = 'TouchMoveDown';

export default TouchMoveDown;
export { TouchMoveDown };
