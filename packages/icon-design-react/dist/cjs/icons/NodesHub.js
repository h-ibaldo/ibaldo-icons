'use strict';

const { createElement, forwardRef } = require('react');

const NodesHub = forwardRef(function NodesHub(
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
    createElement('path', {"d":"M7 6L10 9","key":"0"}),
    createElement('path', {"d":"M17 6L14 9","key":"1"}),
    createElement('path', {"d":"M18 13L14 12","key":"2"}),
    createElement('path', {"d":"M6 14L10 12","key":"3"}),
    createElement('path', {"d":"M12 18L12 13","key":"4"}),
    createElement('path', {"d":"M3 5C3 3.895 3.895 3 5 3C6.105 3 7 3.895 7 5C7 6.105 6.105 7 5 7C3.895 7 3 6.105 3 5Z","key":"5"}),
    createElement('path', {"d":"M9.5 10.5C9.5 9.121 10.621 8 12 8C13.379 8 14.5 9.121 14.5 10.5C14.5 11.879 13.379 13 12 13C10.621 13 9.5 11.879 9.5 10.5Z","key":"6"}),
    createElement('path', {"d":"M17 5C17 3.895 17.895 3 19 3C20.105 3 21 3.895 21 5C21 6.105 20.105 7 19 7C17.895 7 17 6.105 17 5Z","key":"7"}),
    createElement('path', {"d":"M18 14C18 12.895 18.895 12 20 12C21.105 12 22 12.895 22 14C22 15.105 21.105 16 20 16C18.895 16 18 15.105 18 14Z","key":"8"}),
    createElement('path', {"d":"M10 20C10 18.895 10.895 18 12 18C13.105 18 14 18.895 14 20C14 21.105 13.105 22 12 22C10.895 22 10 21.105 10 20Z","key":"9"}),
    createElement('path', {"d":"M2 15C2 13.895 2.895 13 4 13C5.105 13 6 13.895 6 15C6 16.105 5.105 17 4 17C2.895 17 2 16.105 2 15Z","key":"10"})
  );
});

NodesHub.displayName = 'NodesHub';

module.exports = NodesHub;
module.exports.NodesHub = NodesHub;
module.exports.default = NodesHub;
