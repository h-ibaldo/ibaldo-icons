import { createElement, forwardRef } from 'react';

const VrHeadsetUser = forwardRef(function VrHeadsetUser(
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
    createElement('line', {"x1":"11.999999999210559","y1":"6.999999999643478","x2":"11.999999999210559","y2":"2.999999999643478","key":"0"}),
    createElement('path', {"d":"M16.999999999210559,12.999999999643478l-.885829085109435,2.214572712771769c-.672920855711709,1.682302139270178-2.302273059820436,2.785427287228231-4.114167914891368,2.785427287228231h-.000006000000212c-1.811894855069113,0-3.441247059179659-1.103125147958053-4.114167914889549-2.785427287228231l-.885829085109435-2.214572712771769","key":"1"}),
    createElement('rect', {"x":"4.999999999210559","y":"6.999999999643478","width":"14","height":"6","rx":"2","ry":"2","key":"2"}),
    createElement('path', {"d":"M17.947998046089197,7.249206542612228c-.3701171875-2.95849609375-2.88916015625-5.24920654296875-5.947998046878638-5.24920654296875-3.058837890621362,0-5.577880859371362,2.29071044921875-5.947998046871362,5.24920654296875","key":"3"}),
    createElement('path', {"d":"M21.999999999210559,21.999999999643478c0-2.0491943359375-1.235595703121362-3.8056640625-3-4.577880859375","key":"4"}),
    createElement('path', {"d":"M4.999999999210559,17.422119140268478c-1.764404296871362.772216796875-3,2.5286865234375-3,4.577880859375","key":"5"})
  );
});

VrHeadsetUser.displayName = 'VrHeadsetUser';

export default VrHeadsetUser;
export { VrHeadsetUser };
