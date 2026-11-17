'use strict';

const { createElement, forwardRef } = require('react');

const DragArrowDownRight = forwardRef(function DragArrowDownRight(
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
    createElement('path', {"d":"M1.974731450033687,4.000000000459295v-1c0-.552284749828686.447715250169495-1,1-1h1","key":"0"}),
    createElement('path', {"d":"M3.974731449988212,16.00000000050477h-1c-.55228474984051,0-.999999999944521-.447715250181318-.999999999933607-1.000000000021828l.000000000024556-1.000000000069122","key":"1"}),
    createElement('path', {"d":"M13.974731450033687,2.000000000459295h1c.552284749830505,0,1,.447715250171314,1,1v1","key":"2"}),
    createElement('line', {"x1":"7.974731450033687","y1":"2.000000000459295","x2":"9.974731450033687","y2":"2.000000000459295","key":"3"}),
    createElement('line', {"x1":"1.974731450033687","y1":"8.000000000459295","x2":"1.974731450033687","y2":"10.000000000459295","key":"4"}),
    createElement('polyline', {"points":"6.974731450033687 11.000000000459295 6.974731450033687 7.000000000459295 10.974731450033687 7.000000000459295","key":"5"}),
    createElement('polyline', {"points":"16.974731450033687 13.000000000459295 16.974731450033687 17.000000000459295 12.974731450033687 17.000000000459295","key":"6"}),
    createElement('path', {"d":"M14.974731450033687,8.000000000459295h6c.552284749830505,0,1,.447715250171314,1,1v12c0,.552284749832324-.447715250169495,1-1,1h-12c-.552284749830505,0-1-.447715250167676-1-1v-6","key":"7"}),
    createElement('line', {"x1":"6.974731450033687","y1":"7.000000000459295","x2":"16.974731450033687","y2":"17.000000000459295","key":"8"})
  );
});

DragArrowDownRight.displayName = 'DragArrowDownRight';

module.exports = DragArrowDownRight;
module.exports.DragArrowDownRight = DragArrowDownRight;
module.exports.default = DragArrowDownRight;
