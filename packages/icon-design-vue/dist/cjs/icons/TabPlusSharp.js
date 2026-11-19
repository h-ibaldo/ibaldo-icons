'use strict';

const { defineComponent, h } = require('vue');

const TabPlusSharp = defineComponent({
  name: 'TabPlusSharp',
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
          h('polyline', {"points":"13.12453666833062 21.998782737328838 2.025268554200011 21.998782737328838 2.025268554200011 1.998782737328838 10.025268554200011 1.998782737328838 13.025268554200011 5.998782737328838 22.025268554200011 5.998782737328838 22.025268554200011 12.872867879995283"}),
          h('polyline', {"points":"15.025268554200011 1.998782737328838 22.025268554200011 1.998782737328838 22.025268554200011 5.998782737328838"}),
          h('line', {"x1":"19.025268554189097","y1":"21.998782737328838","x2":"19.025268554189097","y2":"15.998782737328838"}),
          h('line', {"x1":"16.025268554200011","y1":"18.998782737328838","x2":"22.025268554200011","y2":"18.998782737328838"})
        ]
      );
  }
});

module.exports = TabPlusSharp;
module.exports.TabPlusSharp = TabPlusSharp;
module.exports.default = TabPlusSharp;
