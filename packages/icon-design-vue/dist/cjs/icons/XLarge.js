'use strict';

const { defineComponent, h } = require('vue');

const XLarge = defineComponent({
  name: 'XLarge',
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
          h('line', {"x1":"1.999999990790457","y1":"22.000000000897671","x2":"21.999999990790457","y2":"2.000000000897671"}),
          h('line', {"x1":"21.999999990799552","y1":"22.000000001345143","x2":"1.999999991699951","y2":"2.000000000448381"})
        ]
      );
  }
});

module.exports = XLarge;
module.exports.XLarge = XLarge;
module.exports.default = XLarge;
