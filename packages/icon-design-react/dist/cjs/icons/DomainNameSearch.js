'use strict';

const { createElement, forwardRef } = require('react');

const DomainNameSearch = forwardRef(function DomainNameSearch(
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
    createElement('polyline', {"points":"22.025268549509747 21.998782739598028 22.025268549509747 16.998782739598028 20.025268549509747 18.998782739598028 18.025268549509747 16.998782739598028 18.025268549509747 21.998782739598028","key":"0"}),
    createElement('rect', {"x":"11.025268549509747","y":"16.998782739598028","width":"4","height":"5","rx":"1","ry":"1","key":"1"}),
    createElement('path', {"d":"M8.025268549509747,16.998782739598028h-2c-.552284749829596,0-1,.447715250171314-1,1v3c0,.552284749832324.447715250170404,1,1,1h2","key":"2"}),
    createElement('line', {"x1":"2.035268549509965","y1":"21.998782739598028","x2":"2.025268549509747","y2":"21.998782739598028","key":"3"}),
    createElement('circle', {"cx":"11.661307518687636","cy":"6.998782739598937","r":"4.999999999997951","key":"4"}),
    createElement('line', {"x1":"18.025268549509747","y1":"13.36274377013433","x2":"15.196841424700324","y2":"10.534316645453146","key":"5"})
  );
});

DomainNameSearch.displayName = 'DomainNameSearch';

module.exports = DomainNameSearch;
module.exports.DomainNameSearch = DomainNameSearch;
module.exports.default = DomainNameSearch;
