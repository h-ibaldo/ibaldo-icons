"use strict";

const { forwardRef } = require('react');

const SwitchToggleButton3OnFilledStripes2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="1.999999977099833" y="5.999996563434252" width="20" height="11.999999999998181" rx="3.000000000000995" ry="3.000000000000995" transform="translate(23.999999953120756 23.999993127945594) rotate(-180)" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M15.999999976560503,17.999996563790774l-1-.000000000090949c-1.656854249489697-.000000000145519-2.999999999879947-1.343145750775875-2.99999999973079-3.00000000026921l.00000000054024-5.999999999996362c.000000000150976-1.656854249493335,1.343145750770418-2.999999999879947,3.000000000271029-2.99999999973079l1,.000000000090949" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="7.999999977098923" y1="5.999996563434252" x2="1.999999977098923" y2="11.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999977098923" y1="5.999996563434252" x2="2.14019773101063" y2="15.859798809528002" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999977098923" y1="9.999996563434252" x2="4.14019773101063" y2="17.859798809528002" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.999999977098923" y1="13.999996563434252" x2="7.999999977098923" y2="17.999996563434252" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SwitchToggleButton3OnFilledStripes2.displayName = 'SwitchToggleButton3OnFilledStripes2';

module.exports = SwitchToggleButton3OnFilledStripes2;
module.exports.SwitchToggleButton3OnFilledStripes2 = SwitchToggleButton3OnFilledStripes2;
module.exports.default = SwitchToggleButton3OnFilledStripes2;
