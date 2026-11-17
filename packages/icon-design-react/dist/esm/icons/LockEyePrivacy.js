import { createElement, forwardRef } from 'react';

const LockEyePrivacy = forwardRef(function LockEyePrivacy(
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
    createElement('polyline', {"points":"10.067167566010539 22.056394884595647 5.067167566010539 22.056394884595647 5.067167566010539 13.056394884595647 17.067167566010539 13.056394884595647","key":"0"}),
    createElement('path', {"d":"M7.067167561050155,13.056394884595647v-7.000003997516615c0-2.209136791556375,1.790859210919734-3.999996002483385,3.999996002479747-3.999996002483385h.00000799999998c2.209136796719577,0,3.99999600980027,1.790859218992409,3.999996002480657,3.999996015711076l-.000000019850631,7.000003984288924","key":"1"}),
    createElement('line', {"x1":"16.067167566010539","y1":"19.06639488701876","x2":"16.067167566010539","y2":"19.056394887018541","key":"2"}),
    createElement('path', {"d":"M16.067167566010539,16.056394887018541c-1.861755371090112,0-3.412475585940228,1.2777099609375-3.858581542970569,3,.446105957030341,1.72222900390625,1.996826171880457,3,3.858581542970569,3,1.861755371099207,0,3.412475585939319-1.27777099609375,3.858581542969659-3-.446105957030341-1.7222900390625-1.996826171870453-3-3.858581542969659-3Z","key":"3"})
  );
});

LockEyePrivacy.displayName = 'LockEyePrivacy';

export default LockEyePrivacy;
export { LockEyePrivacy };
