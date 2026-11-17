import { createElement, forwardRef } from 'react';

const Lock4Checked = forwardRef(function Lock4Checked(
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
    createElement('path', {"d":"M10.949462885144385,22.000000000480213H2.949462885141656c-.552284749830505,0-1-.447715250171314-1-1v-7c0-.552284749832324.447715250169495-1,1-1h14.000000000002728c.552284749830505,0,1,.447715250167676,1,1v1","key":"0"}),
    createElement('path', {"d":"M14.949462885144385,13.000000000480213v-6.000005000001693c0-2.761420987728343-2.238574012269964-4.999994999998307-4.999995000001036-4.999994999998307h-.000009999999747c-2.761420987731981,0-4.999994999999217,2.238574012269964-4.999994999999217,4.999994999998307v6.000005000001693","key":"1"}),
    createElement('polyline', {"points":"13.949462885141656 19.000000000480213 16.949462885141656 22.000000000480213 21.949462885141656 17.000000000480213","key":"2"})
  );
});

Lock4Checked.displayName = 'Lock4Checked';

export default Lock4Checked;
export { Lock4Checked };
