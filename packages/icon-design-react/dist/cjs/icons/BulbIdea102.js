"use strict";

const { forwardRef } = require('react');

const BulbIdea102 = forwardRef(({
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
  }, React.createElement('g', { dangerouslySetInnerHTML: { __html: `<polyline points="9 20.046448520708509 10 22.046448520708509 14 22.046448520708509 15 20.046448520708509" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <polyline points="12.00000180123061 8.046464672617731 10.00000180123061 11.046464672617731 14.00000180123061 11.046464672617731 12.00000180123061 14.046464672617731" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M4,10.046448520708509c0,2.238383736719697.921403608850596,4.259369276038342,2.403789549189241,5.710425533439775.714400042779744.699301459999333,1.153320542231086,1.632282141079486,1.317672212220714,2.618374673069411l.000000573609213.000003441589797c.160731739260882.96437333276117.995110771171312,1.671196351901017,1.97278690208077,1.671196351901017h4.611501525800122c.977676130909458,0,1.812055162819888-.706823019139847,1.97278690208077-1.671196351901017l.000000573609213-.000003441589797c.164351669989628-.986092531989925.60327216944097-1.919073213070078,1.317672212220714-2.618374673069411,1.482385940338645-1.451056257401433,2.403789549189241-3.472041796720077,2.403789549189241-5.710425533439775" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>
  <path d="M20,10.046448520708509c0-4.41827392578125-3.581787109380457-8-8-8-4.418212890630457,0-8,3.58172607421875-8,8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round"/>` } }))
));

BulbIdea102.displayName = 'BulbIdea102';

module.exports = BulbIdea102;
module.exports.BulbIdea102 = BulbIdea102;
module.exports.default = BulbIdea102;
