"use strict";

const { forwardRef } = require('react');

const ApplicationWindow2Shield2 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M22.00000000018008,12.000000000456566l-1.486121811349221-.000000000002728c-.987124927421974-.000000000003638-1.952163394720628-.292190137377474-2.773500981120378-.839748528309428l-1.7403772075304-1.160251471687843-1.7403772075304,1.160251471687843c-.82133758639975.547558390931954-1.786376053700224.83974852830579-2.77350098109855.839748528309428l-1.486121811371049.000000000002728v3.291796067502219c0,2.272632350724052,1.284014257369563,4.350211061183472,3.316718427009619,5.366563145999862l2.683281572990381,1.341640786497919,2.683281572999476-1.341640786497919c2.032704169630961-1.01635208481639,3.316718427000524-3.09393079527581,3.316718427000524-5.366563145999862v-3.291796067502219Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="5.010000000180298" y1="5.000000000448381" x2="5.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="8.010000000180298" y1="5.000000000448381" x2="8.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="11.010000000180298" y1="5.000000000448381" x2="11.00000000018008" y2="5.000000000448381" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M9.00000000018008,22.000000000456566l-5,.000000000002728c-1.104569499659192,0-2-.89543050033717-2-2V4.000000000456566c0-1.104569499661011.895430500340808-1.999999999997272,2-1.999999999997272l16-.000000000002728c1.104569499659192,0,2,.895430500338989,2,2v3.999999999991815" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ApplicationWindow2Shield2.displayName = 'ApplicationWindow2Shield2';

module.exports = ApplicationWindow2Shield2;
module.exports.ApplicationWindow2Shield2 = ApplicationWindow2Shield2;
module.exports.default = ApplicationWindow2Shield2;
