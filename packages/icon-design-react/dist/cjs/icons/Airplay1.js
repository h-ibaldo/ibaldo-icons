'use strict';

const { createElement, forwardRef } = require('react');

const Airplay1 = forwardRef(function Airplay1(
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
    createElement('path', {"d":"M17.999999971900252,14.999996564601133h2c1.104553222648974,0,2-.89544677734375,2-2V4.999996564601133c0-1.10455322265625-.895446777351026-2-2-2H3.999999971900252c-1.104553222659888,0-2,.89544677734375-2,2v8c0,1.10455322265625.895446777340112,2,2,2h2","key":"0"}),
    createElement('path', {"d":"M11.24074336952981,14.885795934025737l-3.825779363240144,4.463409257118656c-.556005705739153.648673323361436-.09509661805896,1.650791373456741.759256602359528,1.650791373456741h7.651558726491203c.854353220429402,0,1.3152623081005-1.002118050095305.759256602370442-1.650791373456741l-3.825779363251058-4.463409257118656c-.399095573189697-.465611502054344-1.119417631529359-.465611502054344-1.51851320472997,0Z","key":"1"})
  );
});

Airplay1.displayName = 'Airplay1';

module.exports = Airplay1;
module.exports.Airplay1 = Airplay1;
module.exports.default = Airplay1;
