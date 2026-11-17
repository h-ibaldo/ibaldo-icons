'use strict';

const { createElement, forwardRef } = require('react');

const BasketGrid = forwardRef(function BasketGrid(
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
    createElement('path', {"d":"M19.152872911619852,20.999999999998181H4.847127088380148c-.488839152929359,0-.906029262130687-.353413042506872-.986393923829382-.835601012695406l-1.666666666671517-10c-.101588617679226-.609531706086273.368454486701012-1.164398987304594.986393923840296-1.164398987304594h17.639079156560911c.617939437139285,0,1.087982541519523.554867281218321.986393923840296,1.164398987304594l-1.666666666671517,10c-.080364661698695.482187970188534-.497554770900024.835601012695406-.986393923829382.835601012695406Z","key":"0"}),
    createElement('line', {"x1":"3","y1":"14.999999999998181","x2":"21","y2":"14.999999999998181","key":"1"}),
    createElement('line', {"x1":"9","y1":"8.999999999998181","x2":"9","y2":"20.999999999998181","key":"2"}),
    createElement('line', {"x1":"15","y1":"8.999999999998181","x2":"15","y2":"20.999999999998181","key":"3"}),
    createElement('line', {"x1":"9","y1":"2.999999999998181","x2":"5","y2":"8.999999999998181","key":"4"}),
    createElement('line', {"x1":"14.99999999981992","y1":"3.00000000008913","x2":"19.00000000018008","y2":"8.999999999907232","key":"5"})
  );
});

BasketGrid.displayName = 'BasketGrid';

module.exports = BasketGrid;
module.exports.BasketGrid = BasketGrid;
module.exports.default = BasketGrid;
