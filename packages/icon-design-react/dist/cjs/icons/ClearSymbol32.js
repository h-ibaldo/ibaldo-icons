"use strict";

const { forwardRef } = require('react');

const ClearSymbol32 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M20.066798314910557,20.000000000448381h-11.121044868210447c-.598719247880581,0-1.165948229980131-.268229385055747-1.545838299820389-.730990957164977l-4.925517926340035-6.000000000001819c-.60554893357039-.737647016158007-.60554893357039-1.800371069508401,0-2.538018085666408l4.925517926340035-6.000000000001819c.379890069840258-.46276157210923.947119051939808-.730990957164977,1.545838299820389-.730990957164977h11.121044868210447c1.104569499659192,0,2,.895430500338989,2,2v12c0,1.104569499661011-.895430500340808,2-2,2Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="16.999999990659489" y1="9.000000000584805" x2="10.999999990930519" y2="15.000000000313776" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.999999990790457" y1="9.000000000717591" x2="16.999999990790457" y2="15.00000000018008" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

ClearSymbol32.displayName = 'ClearSymbol32';

module.exports = ClearSymbol32;
module.exports.ClearSymbol32 = ClearSymbol32;
module.exports.default = ClearSymbol32;
