"use strict";

const { forwardRef } = require('react');

const Music72 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="6.5" cy="17.500000562497462" r="4.499999718749905" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M11,7.999999999998181l2.19722691286006.00000000008913c1.175498978269388.000000000050932,2.324696714518723.34794907981086,3.302770983040318.999998597231752l.000004208150131.000002805429176c.978074268570708.652049517470005,2.127272004889164.999998597219019,3.302770983229493.999998597229933l2.197226912719998.000000000020009V3.999999999998181l-2.197226899499583-.000000000480213c-1.175499225050771-.000000000260115-2.324697191241285-.34794922617948-3.302771585640585-.999998999670424l-.000003000001016-.000002000000677c-.978074394617579-.652049773638282-2.127272361109135-.999998999559466-3.302771586430026-.999998999657691l-2.19722692842879-.000000000190994v16.000001000000339" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

Music72.displayName = 'Music72';

module.exports = Music72;
module.exports.Music72 = Music72;
module.exports.default = Music72;
