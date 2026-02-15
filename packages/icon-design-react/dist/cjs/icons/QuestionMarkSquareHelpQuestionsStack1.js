"use strict";

const { forwardRef } = require('react');

const QuestionMarkSquareHelpQuestionsStack1 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<rect x="2.000000000224645" y="2.032754075946286" width="16" height="16" rx="3" ry="3" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M22.000000000224645,9.032754075946286v10c0,1.656854249489697-1.343145750510303,3-3,3h-10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <g>
    <path d="M8.000000000224645,8.032754075946286v-.000002000000677c0-1.104568403690791.895429604908713-1.999997999999323,1.999998000000232-1.999997999999323h.000004000004992c1.104568395079696,0,1.99999799998659.895429604897799,1.999997999990228,1.999997999977495v.00000300001193c.000000000002728.640288606449758-.25435365854446,1.254352658561402-.707106074086369,1.707105074099672l-1.292893925909084,1.292893925910903" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
    <line x1="10.000000000224645" y1="14.042754075946505" x2="10.000000000224645" y2="14.032754075946286" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  </g>` } }))
));

QuestionMarkSquareHelpQuestionsStack1.displayName = 'QuestionMarkSquareHelpQuestionsStack1';

module.exports = QuestionMarkSquareHelpQuestionsStack1;
module.exports.QuestionMarkSquareHelpQuestionsStack1 = QuestionMarkSquareHelpQuestionsStack1;
module.exports.default = QuestionMarkSquareHelpQuestionsStack1;
