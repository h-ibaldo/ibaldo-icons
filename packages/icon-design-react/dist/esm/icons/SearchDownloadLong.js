import { createElement, forwardRef } from 'react';

const SearchDownloadLong = forwardRef(function SearchDownloadLong(
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
    createElement('line', {"x1":"15.631591791659957","y1":"15.656860355447861","x2":"21.974731440099276","y2":"22.000000003885361","key":"0"}),
    createElement('polyline', {"points":"6.974731440099276 9.000000003888999 9.974731440099276 12.000000003885361 12.974731440099276 9.000000003888999","key":"1"}),
    createElement('path', {"d":"M5.974731440099276,3.078979496072861c-2.728438709669717,1.580528637314274-4.442236286489788,4.718448611714848-3.899977203018352,8.203643699685927.544041306658983,3.496649751905352,3.469806204519045,6.277350410546205,6.987040553060069,6.666712669000844,4.827046217129464.534360076842859,8.912936649958283-3.230337658791541,8.912936649958283-7.949335860874271,0-3.501673393911915-2.249771264529045-6.477890268022747-5.382719696948698-7.562056525679509-1.282669480189725-.443871643645252-2.617280303051302.55135211968809-2.617280303051302,1.908652024456387v7.653404501223122","key":"2"})
  );
});

SearchDownloadLong.displayName = 'SearchDownloadLong';

export default SearchDownloadLong;
export { SearchDownloadLong };
