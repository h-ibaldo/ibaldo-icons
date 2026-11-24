import { createElement, forwardRef } from 'react';

const TouchTapTwoFingers = forwardRef(function TouchTapTwoFingers(
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
    createElement('circle', {"cx":"6.974731413245536","cy":"13.998779298537556","r":"5","key":"0"}),
    createElement('path', {"d":"M11.974731413245536,6.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625","key":"1"}),
    createElement('circle', {"cx":"16.974731413245536","cy":"13.998779298537556","r":"5","key":"2"}),
    createElement('path', {"d":"M21.974731413245536,6.516418458693806c-1.430297851558862-.9576416015625-3.1494140625-1.51763916015625-5-1.51763916015625s-3.569702148439319.55999755859375-5,1.51763916015625","key":"3"})
  );
});

TouchTapTwoFingers.displayName = 'TouchTapTwoFingers';

export default TouchTapTwoFingers;
export { TouchTapTwoFingers };
