import { createElement, forwardRef } from 'react';

const LinkPersonalHotspotMenu = forwardRef(function LinkPersonalHotspotMenu(
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
    createElement('path', {"d":"M3.684997562779245,12.261657715320325c-1.040466308588293.916259765630457-1.710266113279431,2.242980957038526-1.710266113279431,3.738342285159888,0,2.761413574220569,2.238586425779431,5,5,5h5c2.761413574220569,0,5-2.238586425779431,5-5,0-2.761413574222388-2.238586425779431-5-5-5h-1","key":"0"}),
    createElement('path', {"d":"M20.264465335889327,14.738342286287661c1.040466308670148-.916259765526775,1.710266113481339-2.242980956878455,1.710266113610487-3.738342284999817.000000000260115-2.76141357421875-2.238586425330141-5.000000000201908-4.999999999548891-5.0000000004502l-5-.00000000044929c-2.761413574220569-.000000000248292-5.000000000190994,2.23858642533105-5.000000000451109,4.9999999995498-.000000000249202,2.761413574222388,2.238586425330141,5.000000000200089,4.99999999955071,5.000000000451109l1,.000000000090949","key":"1"}),
    createElement('line', {"x1":"1.974731449499814","y1":"4.010000000390392","x2":"1.974731449499814","y2":"4.000000000388354","key":"2"}),
    createElement('line', {"x1":"5.974731449499814","y1":"4.010000000390392","x2":"5.974731449499814","y2":"4.000000000388354","key":"3"})
  );
});

LinkPersonalHotspotMenu.displayName = 'LinkPersonalHotspotMenu';

export default LinkPersonalHotspotMenu;
export { LinkPersonalHotspotMenu };
