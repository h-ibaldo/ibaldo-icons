"use strict";

const { forwardRef } = require('react');

const UserHead82 = forwardRef(({
  color = 'currentColor',
  size = 24,
  strokeWidth = 1.5,
  className = '',
  ...props
}, ref) => (
  React.createElement('svg', {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: color,
    strokeWidth,
    strokeLinecap: "round",
    strokeLinejoin: "round",
    className: `icon-design ${className}`.trim(),
    ...props
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M16,9.999999999918145h-8c-1.104569499659192,0-2,.895430500340808-2,2v2.155001539269506c0,2.430269595060963,1.104717587730192,4.728772648351878,3.002439214649712,6.246950151620695l1.216691832971264.973353595709341c.505480338679263.4043843246709,1.133536956878743.624694713400459,1.78086767206878.624694713400459h.000002000000677c.64733065180917,0,1.275387212370333-.220310345650432,1.780867527768351-.624694597971029l1.216692132969911-.973353706380294c1.897721867298969-1.518177493839175,3.002439619571305-3.816680698659184,3.002439619571305-6.246950475539052v-2.155001220109625c0-1.104569499659192-.895430500340808-2-2-2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.445556640619543,19.999999999918145h6.554443359380457v-8c0-5.522827148439319-4.47705078125-10-10-10C6.477172851560681,1.999999999918145,2,6.477172851478826,2,11.999999999918145v8h6.554443359369543" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

UserHead82.displayName = 'UserHead82';

module.exports = UserHead82;
module.exports.UserHead82 = UserHead82;
module.exports.default = UserHead82;
