'use strict';

const { createElement, forwardRef } = require('react');

const Cloud2Close = forwardRef(function Cloud2Close(
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
    createElement('line', {"x1":"22.000000000020009","y1":"2.999999973508238","x2":"18.000000000020009","y2":"6.999999973508238","key":"0"}),
    createElement('line', {"x1":"18.000000000020009","y1":"2.999999973508238","x2":"22.000000000109139","y2":"6.999999973508238","key":"1"}),
    createElement('path', {"d":"M18.000000000029104,15.050415039047948v-.550415039049767c0-1.932983398450233-1.567016601569776-3.5-3.5-3.5-.257751464849207,0-.507385253909888.031860351549767-.749267578128638.084716796860448-.595764160159888-1.787414550770336-2.263061523441138-3.084716796860448-4.250732421871362-3.084716796860448-2.485290527349207,0-4.5,2.014709472659888-4.5,4.5v.775512695299767c-1.743774414069776.619873046890461-3,2.268005371110121-3,4.224487304700233,0,2.485290527340112,2.014709472650793,4.5,4.5,4.5h11c1.932983398430224,0,3.5-1.567016601559772,3.5-3.5,0-1.76171875-1.305969238288526-3.205078125-3-3.449584960950233Z","key":"2"})
  );
});

Cloud2Close.displayName = 'Cloud2Close';

module.exports = Cloud2Close;
module.exports.Cloud2Close = Cloud2Close;
module.exports.default = Cloud2Close;
