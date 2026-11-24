'use strict';

const { defineComponent, h } = require('vue');

const FlagStand = defineComponent({
  name: 'FlagStand',
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
          h('path', {"d":"M6 22L6 1.969L20 1.969L19.898 12.102L5.977 12.102"}),
          h('path', {"d":"M2 22L13 22"})
        ]
      );
  }
});

module.exports = FlagStand;
module.exports.FlagStand = FlagStand;
module.exports.default = FlagStand;
