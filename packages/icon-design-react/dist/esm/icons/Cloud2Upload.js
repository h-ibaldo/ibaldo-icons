import { createElement, forwardRef } from 'react';

const Cloud2Upload = forwardRef(function Cloud2Upload(
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
    createElement('polyline', {"points":"16.000000000021828 4.999999973508238 19.000000000021828 1.999999973508238 22.000000000021828 4.999999973508238","key":"0"}),
    createElement('line', {"x1":"19.000000000021828","y1":"7.999999973508238","x2":"19.000000000021828","y2":"1.999999973508238","key":"1"}),
    createElement('path', {"d":"M18.000000000021828,15.050415039047948v-.550415039049767c0-1.932983398450233-1.5670166015625-3.5-3.5-3.5-.25775146484375,0-.50738525390625.031860351549767-.749267578125.084716796860448-.59576416015625-1.787414550770336-2.2630615234375-3.084716796860448-4.250732421875-3.084716796860448-2.48529052734375,0-4.5,2.014709472659888-4.5,4.5v.775512695299767c-1.7437744140625.619873046890461-3,2.268005371110121-3,4.224487304700233,0,2.485290527340112,2.01470947265625,4.5,4.5,4.5h11c1.9329833984375,0,3.5-1.567016601559772,3.5-3.5,0-1.76171875-1.30596923828125-3.205078125-3-3.449584960950233Z","key":"2"})
  );
});

Cloud2Upload.displayName = 'Cloud2Upload';

export default Cloud2Upload;
export { Cloud2Upload };
