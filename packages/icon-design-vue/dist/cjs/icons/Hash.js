'use strict';

const { defineComponent, h } = require('vue');

const Hash = defineComponent({
  name: 'Hash',
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
          h('path', {"d":"M11 3L5 21"}),
          h('path', {"d":"M19 3L13 21"}),
          h('path', {"d":"M21 8L5 8"}),
          h('path', {"d":"M19 16L3 16"})
        ]
      );
  }
});

module.exports = Hash;
module.exports.Hash = Hash;
module.exports.default = Hash;
