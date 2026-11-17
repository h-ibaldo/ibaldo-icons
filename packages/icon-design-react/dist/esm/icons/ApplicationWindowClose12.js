import { createElement, forwardRef } from 'react';

const ApplicationWindowClose12 = forwardRef(function ApplicationWindowClose12(
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
    createElement('path', {"d":"M12.025268553292335,21.99877930339062h-7c-1.656854249498792,0-3-1.343145750510303-3-3V4.99877930339062c0-1.656854249493335,1.343145750501208-3,3-3h14c1.656854249491516,0,3,1.343145750506665,3,3v7","key":"0"}),
    createElement('line', {"x1":"2.025268553292335","y1":"7.99877930339062","x2":"22.025268553292335","y2":"7.99877930339062","key":"1"}),
    createElement('line', {"x1":"22.025268553292335","y1":"21.99877930339062","x2":"16.025268553292335","y2":"15.99877930339062","key":"2"}),
    createElement('line', {"x1":"22.025268553292335","y1":"15.99877930339062","x2":"16.025268553292335","y2":"21.99877930339062","key":"3"})
  );
});

ApplicationWindowClose12.displayName = 'ApplicationWindowClose12';

export default ApplicationWindowClose12;
export { ApplicationWindowClose12 };
