import { createElement, forwardRef } from 'react';

const Lock4Close = forwardRef(function Lock4Close(
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
    createElement('path', {"d":"M13.067167566010539,22.056394887018541H4.067167566010539c-.552284749830505,0-1-.447715250169495-1-1v-7c0-.552284749830505.447715250169495-1,1-1h14c.552284749829596,0,1,.447715250169495,1,1h0","key":"0"}),
    createElement('path', {"d":"M16.067167566010539,13.056394887018541v-6.000004999998055c0-2.761420987731981-2.238574012270874-4.999995000001945-4.999994999991031-4.999995000001945h-.000009999999747c-2.761420987739257,0-4.999995000009221,2.238574012269964-4.999995000009221,4.999995000001945v6.000004999998055","key":"1"}),
    createElement('line', {"x1":"17.067167566149692","y1":"22.056394891864329","x2":"21.067167565870477","y2":"18.056394887018541","key":"2"}),
    createElement('line', {"x1":"17.067167566010539","y1":"18.056394887193164","x2":"21.067167566010539","y2":"22.05639489168243","key":"3"})
  );
});

Lock4Close.displayName = 'Lock4Close';

export default Lock4Close;
export { Lock4Close };
