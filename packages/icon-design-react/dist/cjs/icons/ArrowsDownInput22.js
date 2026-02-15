"use strict";

const { forwardRef } = require('react');

const ArrowsDownInput22 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M1.974731449501633,18.000000000480213v2c0,1.104569499661011.895430500340808,2,2,2h16c1.104569499661011,0,2-.895430500338989,2-2v-2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="8.974731449501633 15.000000000480213 11.974731449501633 18.000000000480213 14.974731449501633 15.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.974731449501633 9.000000000480213 18.974731449501633 12.000000000480213 21.974731449501633 9.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.974731449501633,2.000000000479304h-.000002999999197c-1.656852612993134,0-2.999997000000803,1.34314440736307-2.999997000000803,2.999997000002622v7.000002999998287" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.974731449594401 9.000000000345608 4.974731449727187 12.000000000480213 1.974731449594401 9.000000000614818" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M1.974731449279716,2.000000000613909h.000002999999197c1.656852583415457-.000000000134605,2.99999700006083,1.343144407228465,2.999997000135409,2.999996999868017l.000000000312866,7.000002999998287" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.974731449501633" y1="18.000000000480213" x2="11.974731449501633" y2="5.000000000479304" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ArrowsDownInput22.displayName = 'ArrowsDownInput22';

module.exports = ArrowsDownInput22;
module.exports.ArrowsDownInput22 = ArrowsDownInput22;
module.exports.default = ArrowsDownInput22;
