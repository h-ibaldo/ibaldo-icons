import { createElement, forwardRef } from 'react';

const BookInformation4 = forwardRef(function BookInformation4(
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
    createElement('line', {"x1":"20","y1":"16.999999999989086","x2":"20","y2":"22","key":"0"}),
    createElement('path', {"d":"M3,19.499997499999154V4.500000011859811c0-1.380711873469409,1.11928812386941-2.499999998348358,2.499999997340637-2.499999999610736l14.500000001758963-.00000001133867c.552284750179751-.000000000499313,1.0000000009004.447715249810244,1.0000000009004,1v12.999999999089596c0,.552284749832324-.447715250169495,1-1,1H5.499997499999154c-1.380710493858714,0-2.499997499999154,1.119287006131344-2.499997499999154,2.499997499991878v.000005000008969c0,1.380710493860533,1.119287006128616,2.49999749998824,2.499997499990059,2.49999749998824h15.500002500009941","key":"1"}),
    createElement('line', {"x1":"7","y1":"2","x2":"7","y2":"16.999999999989086","key":"2"}),
    createElement('line', {"x1":"14","y1":"5.989999999999782","x2":"14","y2":"6","key":"3"}),
    createElement('polyline', {"points":"14 13 14 9 13 9","key":"4"})
  );
});

BookInformation4.displayName = 'BookInformation4';

export default BookInformation4;
export { BookInformation4 };
