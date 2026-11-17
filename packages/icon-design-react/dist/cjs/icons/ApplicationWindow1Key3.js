'use strict';

const { createElement, forwardRef } = require('react');

const ApplicationWindow1Key3 = forwardRef(function ApplicationWindow1Key3(
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
    createElement('path', {"d":"M22.000000000184627,8.000000000448381v-4c0-1.10456949966192-.89543050033808-2-2-2H4.000000000184627c-1.10456949966192,0-2,.89543050033808-2,2v16c0,1.10456949966283.89543050033808,2,2,2h3","key":"0"}),
    createElement('line', {"x1":"2.000000000184627","y1":"8.000000000448381","x2":"22.000000000184627","y2":"8.000000000448381","key":"1"}),
    createElement('path', {"d":"M18.500000000184627,11.000000000448381c-1.932983398436591,0-3.5,1.567016601563409-3.5,3.5,0,.15557861328125.026123046875.30401611328125.045776367188409.454223632813409l-4.045776367188409,4.045776367186591v3h3v-2h2v-2h2.5c1.932983398438409,0,3.5-1.567016601561591,3.5-3.5,0-1.932983398436591-1.567016601561591-3.5-3.5-3.5Z","key":"2"}),
    createElement('line', {"x1":"5.010000000184846","y1":"5.000000000448381","x2":"5.000000000184627","y2":"5.000000000448381","key":"3"}),
    createElement('line', {"x1":"8.010000000184846","y1":"5.000000000448381","x2":"8.000000000184627","y2":"5.000000000448381","key":"4"}),
    createElement('line', {"x1":"11.010000000184846","y1":"5.000000000448381","x2":"11.000000000184627","y2":"5.000000000448381","key":"5"})
  );
});

ApplicationWindow1Key3.displayName = 'ApplicationWindow1Key3';

module.exports = ApplicationWindow1Key3;
module.exports.ApplicationWindow1Key3 = ApplicationWindow1Key3;
module.exports.default = ApplicationWindow1Key3;
