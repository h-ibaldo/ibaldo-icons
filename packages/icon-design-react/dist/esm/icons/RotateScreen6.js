import { createElement, forwardRef } from 'react';

const RotateScreen6 = forwardRef(function RotateScreen6(
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
    createElement('rect', {"x":"1.974731413605696","y":"9.998779298541194","width":"20","height":"12","rx":"2","ry":"2","transform":"translate(23.949462827211391 31.997558597082389) rotate(180)","key":"0"}),
    createElement('polyline', {"points":"14.974731413605696 5.998779298537556 18.974731413605696 5.998779298537556 18.974731413605696 1.998779298537556","key":"1"}),
    createElement('path', {"d":"M18.895751921416377,5.998779298541194c-1.383911132810681-2.388916015625-3.961547851560681-4-6.921020507810681-4s-5.537109375,1.611083984375-6.921020507808862,4","key":"2"}),
    createElement('polyline', {"points":"21.975222099246821 13.998885135864839 19.975222099246821 13.998885135857563 19.975222099246821 17.997618198463897 21.975222099246821 17.997618198471173","key":"3"})
  );
});

RotateScreen6.displayName = 'RotateScreen6';

export default RotateScreen6;
export { RotateScreen6 };
