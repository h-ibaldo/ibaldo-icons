import { createElement, forwardRef } from 'react';

const TrayUpload = forwardRef(function TrayUpload(
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
    createElement('polyline', {"points":"6.974731449729006 7.000000000258296 11.974731449954561 2.000000000479304 16.974731449729006 7.000000000705768","key":"0"}),
    createElement('line', {"x1":"11.974731449368846","y1":"15.000000000480213","x2":"11.974731449954561","y2":"2.000000000479304","key":"1"}),
    createElement('path', {"d":"M21.974731449550745,11.000000000927685l-.000000000361979,8c-.00000000007276,1.656854249494245-1.343145750642179,2.999999999942702-3.000000000135515,2.999999999865395l-14-.000000000625732c-1.656854249490607-.000000000076398-2.999999999937245-1.34314575064127-2.999999999864485-3.000000000134605l.000000000361979-8","key":"2"})
  );
});

TrayUpload.displayName = 'TrayUpload';

export default TrayUpload;
export { TrayUpload };
