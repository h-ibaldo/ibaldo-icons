'use strict';

const { defineComponent, h } = require('vue');

const Pilcrow = defineComponent({
  name: 'Pilcrow',
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
          h('path', {"d":"M13 22L13 2L11.5 2C8.461 2 6 4.461 6 7.5C6 10.539 8.461 13 11.5 13L13 13"}),
          h('path', {"d":"M17 2L17 22.102"})
        ]
      );
  }
});

module.exports = Pilcrow;
module.exports.Pilcrow = Pilcrow;
module.exports.default = Pilcrow;
