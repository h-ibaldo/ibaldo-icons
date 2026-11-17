'use strict';

const { createElement, forwardRef } = require('react');

const TabPlusCenterStriped = forwardRef(function TabPlusCenterStriped(
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
    createElement('path', {"d":"M20.025268532079281,21.99877930112325H4.025268532079281c-1.104569499659192,0-2-.895430500338989-2-2V3.99877930112325c0-1.104569499661011.895430500340808-2,2-2h2c.62951460666045,0,1.222291236001183.296388314665819,1.600000000000364.799999999999272l2.100000000000364,2.799999999999272c.1888543820005.251805842668546.485242696669957.400000000001455.799999999999272.400000000001455h9.5c1.104569499661011,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500338989,2-2,2Z","key":"0"}),
    createElement('path', {"d":"M6.025268532079281,1.99877930112325h6c.62951460666045,0,1.222291236001183.296388314665819,1.600000000000364.799999999999272l2.399999999999636,3.200000000000728","key":"1"}),
    createElement('path', {"d":"M12.025268532079281,1.99877930112325h6c.62951460666045,0,1.222291236001183.296388314665819,1.600000000000364.799999999999272l1.800000000001091,2.400000000001455c.389466384398474.51928851253615.599999999998545,1.150889359324538.599999999998545,1.799999999999272v1","key":"2"}),
    createElement('line', {"x1":"12.025268532079281","y1":"10.99877930112325","x2":"12.025268532079281","y2":"17.99877930112325","key":"3"}),
    createElement('line', {"x1":"15.525268532079281","y1":"14.49877930112325","x2":"8.525268532079281","y2":"14.49877930112325","key":"4"})
  );
});

TabPlusCenterStriped.displayName = 'TabPlusCenterStriped';

module.exports = TabPlusCenterStriped;
module.exports.TabPlusCenterStriped = TabPlusCenterStriped;
module.exports.default = TabPlusCenterStriped;
