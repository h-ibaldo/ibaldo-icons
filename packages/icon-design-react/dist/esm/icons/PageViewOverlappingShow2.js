import { createElement, forwardRef } from 'react';

const PageViewOverlappingShow2 = forwardRef(function PageViewOverlappingShow2(
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
    createElement('g', {"key":"0"},
      createElement('rect', {"x":"8.999999999834472","y":"1.999999999843112","width":"13.000000000016371","height":"13","rx":"2.000000000001084","ry":"2.000000000001084","key":"0"}),
      createElement('line', {"x1":"21.99999999973079","y1":"5.99999999955071","x2":"8.999999999699867","y2":"6.000000000134605","key":"1"})),
    createElement('g', {"key":"1"},
      createElement('path', {"d":"M5.999999999859938,9.00000000026921l-2.000000000020009.00000000009004c-1.104569499661011.000000000049113-1.999999999959982.895430500424482-1.999999999909051,2.000000000085493l.000000000400178,9.000000000003638c.000000000049113,1.104569499661011.895430500429939,1.999999999959982,2.00000000008913,1.99999999991087l9.000000000020009-.000000000404725c1.104569499659192-.000000000049113,1.999999999959982-.89543050042812,1.999999999909051-2.00000000008913l-.00000000008913-2","key":"0"}),
      createElement('line', {"x1":"6.000000000040018","y1":"13.00000000026921","x2":"2.000000000010914","y2":"13.000000000448381","key":"1"})),
    createElement('line', {"x1":"5.00999999988926","y1":"10.000000000313776","x2":"4.999999999890861","y2":"10.000000000313776","key":"2"}),
    createElement('line', {"x1":"6.009999999980209","y1":"12.00000000026921","x2":"5.999999999979991","y2":"12.00000000026921","key":"3"}),
    createElement('line', {"x1":"3.009999999980209","y1":"12.000000000403816","x2":"2.999999999979991","y2":"12.000000000403816","key":"4"})
  );
});

PageViewOverlappingShow2.displayName = 'PageViewOverlappingShow2';

export default PageViewOverlappingShow2;
export { PageViewOverlappingShow2 };
