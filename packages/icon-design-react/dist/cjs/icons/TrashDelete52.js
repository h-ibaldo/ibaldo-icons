"use strict";

const { forwardRef } = require('react');

const TrashDelete52 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<path d="M16.820342258510209,21.000000001481567H7.230194833020505c-.481215070100006,0-.894189766620912-.342738556617405-.982872186930763-.815711464949345L3.247322646089742,4.184288536532222c-.115390052329531-.615413612431439.356734200109713-1.184288535050655.982872186939858-1.184288535050655h15.590147425480609c.626137986819231,0,1.098262239260293.568874922619216.982872186930763,1.184288535050655l-3,16c-.08868242031167.47297290833194-.501657116830756.815711464949345-.982872186930763.815711464949345Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="10.025268545770814" y1="21.000000001481567" x2="9.025268545770814" y2="3.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.025268545770814" y1="21.000000001481567" x2="15.025268545770814" y2="3.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="4.150268545770814" y1="9.000000001481567" x2="19.900268545770814" y2="9.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="18.775268545770814" y1="15.000000001481567" x2="5.275268545770814" y2="15.000000001481567" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

TrashDelete52.displayName = 'TrashDelete52';

module.exports = TrashDelete52;
module.exports.TrashDelete52 = TrashDelete52;
module.exports.default = TrashDelete52;
