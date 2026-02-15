"use strict";

const { forwardRef } = require('react');

const Faq = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M2.949462885139837,16.000000000480213V7.000000000480213c0-.552284749832324.447715250170404-1,1-1h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.949462885139837" y1="12.000000000480213" x2="2.949462885139837" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M8.949462885139837,16.000000000480213l.909950371899868-9.099503719022323c.051120179750797-.511201797438844.481285742050204-.900496280977677.995037190210496-.900496280977677h1.190024875779272c.513751448160292,0,.943917010460609.389294483538833.995037190210496.900496280977677l.909950371899868,9.099503719022323" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <rect x="16.949462885139837" y="6.000000000480213" width="4" height="10" rx="1" ry="1" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.949462885139837" y1="18.000000000480213" x2="20.949462885139837" y2="19.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="13.549438471080066" y1="12.000000000480213" x2="9.349487299199609" y2="12.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Faq.displayName = 'Faq';

module.exports = Faq;
module.exports.Faq = Faq;
module.exports.default = Faq;
