'use strict';

const { createElement, forwardRef } = require('react');

const CloudRefreshCornerRound = forwardRef(function CloudRefreshCornerRound(
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
    createElement('polyline', {"points":"12.000000000140062 21.999999973537342 12 18.999999973537342 15 18.999999973408194","key":"0"}),
    createElement('path', {"d":"M12.422119140619543,18.999999973497324c.772216796880457,1.764404296860448,2.528686523441138,3,4.577880859380457,3,2.761413574220569,0,5-2.238586425788526,5-5,0-2.76141357421875-2.238586425779431-5-5-5-2.049194335939319,0-3.8056640625,1.235595703110448-4.577880859380457,3","key":"1"}),
    createElement('path', {"d":"M21.559753417970569,9.999999973497324c-.653015136720569-1.486328125-1.995178222659888-2.599487304698414-3.635498046880457-2.906860351558862-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.761413574211474,2.238525390619543,5,5,5h2","key":"2"})
  );
});

CloudRefreshCornerRound.displayName = 'CloudRefreshCornerRound';

module.exports = CloudRefreshCornerRound;
module.exports.CloudRefreshCornerRound = CloudRefreshCornerRound;
module.exports.default = CloudRefreshCornerRound;
