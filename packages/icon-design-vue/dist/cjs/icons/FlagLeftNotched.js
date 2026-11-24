'use strict';

const { defineComponent, h } = require('vue');

const FlagLeftNotched = defineComponent({
  name: 'FlagLeftNotched',
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
          h('path', {"d":"M20 22.031L20 2L4 2L9.117 7.117L4.102 12.133L20.023 12.133"})
        ]
      );
  }
});

module.exports = FlagLeftNotched;
module.exports.FlagLeftNotched = FlagLeftNotched;
module.exports.default = FlagLeftNotched;
