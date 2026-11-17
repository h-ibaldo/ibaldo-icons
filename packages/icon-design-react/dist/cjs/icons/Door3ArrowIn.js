'use strict';

const { createElement, forwardRef } = require('react');

const Door3ArrowIn = forwardRef(function Door3ArrowIn(
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
    createElement('path', {"d":"M15.974731450043691,15.731182180869837v1.268817819611286c0,.552284749828686-.447715250166766,1-1,1h-4","key":"0"}),
    createElement('path', {"d":"M1.974731450043691,18.000000000481123V3.000000000479304c0-.552284749830505.447715250171314-1,1-1h12c.552284749833234,0,1,.447715250169495,1,1v.731182180390533","key":"1"}),
    createElement('path', {"d":"M1.974731450043691,18.000000000481123l8.296930766973674,3.68752478532133c.330643698467611.146952754875201.703069233026326-.095076577726104.703069233026326-.456905774311053V6.324936545025594c0-.197594358243805-.116366760470555-.376655104755628-.296930766972764-.456905774311053L2.413085942231191,2.194824219231123","key":"2"}),
    createElement('polyline', {"points":"17.974731449505271 12.731182180783435 14.974731449770843 9.731182180509677 17.974731450043691 6.731182180783435","key":"3"}),
    createElement('line', {"x1":"21.974731450043691","y1":"9.731182181229087","x2":"14.974731449770843","y2":"9.731182180509677","key":"4"})
  );
});

Door3ArrowIn.displayName = 'Door3ArrowIn';

module.exports = Door3ArrowIn;
module.exports.Door3ArrowIn = Door3ArrowIn;
module.exports.default = Door3ArrowIn;
