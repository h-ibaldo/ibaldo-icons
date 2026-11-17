'use strict';

const { createElement, forwardRef } = require('react');

const WebsitePortalFilm = forwardRef(function WebsitePortalFilm(
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
    createElement('path', {"d":"M22,8.999999999998181V3.999999999998181c0-1.104569499661011-.895430500338989-2-2-2H4c-1.104569499670106,0-2,.895430500338989-2,2v16c0,1.104569499664649.895430500329894,2,2,2h2.000000003630703","key":"0"}),
    createElement('line', {"x1":"5.035268549516331","y1":"4.998782739598028","x2":"5.025268549516113","y2":"4.998782739598028","key":"1"}),
    createElement('line', {"x1":"8.035268549516331","y1":"4.998782739598028","x2":"8.025268549516113","y2":"4.998782739598028","key":"2"}),
    createElement('line', {"x1":"19.000000003630703","y1":"4.999999999998181","x2":"11.000000003630703","y2":"4.999999999998181","key":"3"}),
    createElement('line', {"x1":"2.000000003630703","y1":"7.999999999998181","x2":"22.000000003630703","y2":"7.999999999998181","key":"4"}),
    createElement('rect', {"x":"9.025268549516113","y":"11.998782739598028","width":"13","height":"10","key":"5"}),
    createElement('line', {"x1":"12.025268549516113","y1":"14.988782739597809","x2":"12.025268549516113","y2":"14.998782739598028","key":"6"}),
    createElement('line', {"x1":"12.025268549516113","y1":"20.988782739597809","x2":"12.025268549516113","y2":"21.998782739598028","key":"7"}),
    createElement('line', {"x1":"19.025268549516113","y1":"14.988782739597809","x2":"19.025268549516113","y2":"14.998782739598028","key":"8"}),
    createElement('line', {"x1":"12.025268549516113","y1":"17.988782739597809","x2":"12.025268549516113","y2":"17.998782739598028","key":"9"}),
    createElement('line', {"x1":"19.025268549516113","y1":"17.988782739597809","x2":"19.025268549516113","y2":"17.998782739598028","key":"10"}),
    createElement('line', {"x1":"19.025268549516113","y1":"20.988782739597809","x2":"19.025268549516113","y2":"21.998782739598028","key":"11"})
  );
});

WebsitePortalFilm.displayName = 'WebsitePortalFilm';

module.exports = WebsitePortalFilm;
module.exports.WebsitePortalFilm = WebsitePortalFilm;
module.exports.default = WebsitePortalFilm;
