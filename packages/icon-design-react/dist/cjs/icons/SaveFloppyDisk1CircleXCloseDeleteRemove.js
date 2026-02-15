"use strict";

const { forwardRef } = require('react');

const SaveFloppyDisk1CircleXCloseDeleteRemove = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<circle cx="16.449462882717398" cy="16.500000002904017" r="5.499999997576424" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="17.949462885140747" y1="15.000000000476575" x2="14.949462885140747" y2="18.000000000476575" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <line x1="14.949462885209869" y1="15.000000000411092" x2="17.949462885069806" y2="18.000000000545697" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M21.949462885140747,9.000000000480213l-.000000000190994-1.171572875358834c-.000000000020009-.530432979616307-.210713680729896-1.039140805351053-.585786437559364-1.414213562220539l-3.82842712458114-3.828427124917653c-.375072756918598-.375072756956797-.883780582769759-.585786437713978-1.414213562509758-.58578643769215l-12.171572875609854.000000000549335c-1.104569499650097.000000000047294-1.999999999959982.895430500426301-1.999999999909051,2.000000000087311l.000000000718501,16.000000000003638c.000000000061846,1.104569499661011.895430500429939,1.999999999956344,2.000000000101863,1.999999999909051l4.999999999539796-.000000000811269" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="15.949462885140747 2.000000000480213 15.949462885140747 8.000000000480213 5.949462885140747 8.000000000480213 5.949462885140747 2.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="7.949462885140747 14.000000000480213 5.949462885140747 14.000000000480213 5.949462885140747 22.000000000480213" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

SaveFloppyDisk1CircleXCloseDeleteRemove.displayName = 'SaveFloppyDisk1CircleXCloseDeleteRemove';

module.exports = SaveFloppyDisk1CircleXCloseDeleteRemove;
module.exports.SaveFloppyDisk1CircleXCloseDeleteRemove = SaveFloppyDisk1CircleXCloseDeleteRemove;
module.exports.default = SaveFloppyDisk1CircleXCloseDeleteRemove;
