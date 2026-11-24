'use strict';

const { defineComponent, h } = require('vue');

const ImageHills = defineComponent({
  name: 'ImageHills',
  props: {
    size: { type: [Number, String], default: 24 },
    color: { type: String, default: 'currentColor' },
    strokeWidth: { type: [Number, String], default: 1.5 }
  },
  setup(props) {
    return () =>
      h(
        'svg',
        {
          xmlns: 'http://www.w3.org/2000/svg',
          width: props.size,
          height: props.size,
          viewBox: '0 0 24 24',
          fill: 'none',
          stroke: props.color,
          'stroke-width': props.strokeWidth,
          'stroke-linecap': 'round',
          'stroke-linejoin': 'round',
          class: 'icon-design'
        },
        [
          h('rect', {"x":"1.999999993269739","y":"2.998779299956368","width":"20","height":"18","rx":"1","ry":"1"}),
          h('path', {"d":"M21.999999993269739,16.998779299956368l-4.392665331550234-6.58899799732535c-.776369216850071-1.164553825281473-2.478055215178756-1.191993237254792-3.29156753109055-.053075994987012l-3.315767137359217,4.642073992312362-2.451389735069824-2.4513897350771c-.831601915040665-.831601915040665-2.197759123679134-.769631634419056-2.950656121569409.133844763044181l-3.597954143360766,4.31754497203292"})
        ]
      );
  }
});

module.exports = ImageHills;
module.exports.ImageHills = ImageHills;
module.exports.default = ImageHills;
