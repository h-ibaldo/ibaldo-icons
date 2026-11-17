'use strict';

const { createElement, forwardRef } = require('react');

const ArrowsUpOutput2 = forwardRef(function ArrowsUpOutput2(
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
    createElement('path', {"d":"M1.974731449505271,18.000000000480213v2c0,1.104569499661011.895430500338989,2,2,2h16c1.104569499661011,0,2-.895430500338989,2-2v-2","key":"0"}),
    createElement('polyline', {"points":"14.974731449505271 5.000000000479304 11.974731449505271 2.000000000479304 8.974731449505271 5.000000000479304","key":"1"}),
    createElement('polyline', {"points":"4.974731449636238 14.000000000345608 1.974731449505271 11.000000000480213 4.974731449363389 8.000000000345608","key":"2"}),
    createElement('line', {"x1":"11.974731449505271","y1":"15.000000000480213","x2":"11.974731449505271","y2":"2.000000000479304","key":"3"}),
    createElement('path', {"d":"M1.974731449505271,11.000000000345608h3.999999999610736c1.104569499588251,0,1.999999999909051.895430500240764,2,1.999999999843567l.000000000389264,5.000000000156433","key":"4"}),
    createElement('polyline', {"points":"18.974731449196042 14.000000000345608 21.974731449196042 11.000000000345608 18.974731449196042 8.000000000345608","key":"5"}),
    createElement('path', {"d":"M21.974731449196042,11.000000000211003l-3.999999999610736.000000000178261c-1.104569499599165.000000000050932-1.999999999869033.895430500333532-1.999999999909051,1.999999999934516l-.000000000170985,5.000000000156433","key":"6"})
  );
});

ArrowsUpOutput2.displayName = 'ArrowsUpOutput2';

module.exports = ArrowsUpOutput2;
module.exports.ArrowsUpOutput2 = ArrowsUpOutput2;
module.exports.default = ArrowsUpOutput2;
