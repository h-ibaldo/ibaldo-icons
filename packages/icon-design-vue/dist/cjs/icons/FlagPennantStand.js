'use strict';

const { defineComponent, h } = require('vue');

const FlagPennantStand = defineComponent({
  name: 'FlagPennantStand',
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
          h('path', {"d":"M6 22L6 1.969L19.949 7.066L6 13"}),
          h('path', {"d":"M2 22L13 22"})
        ]
      );
  }
});

module.exports = FlagPennantStand;
module.exports.FlagPennantStand = FlagPennantStand;
module.exports.default = FlagPennantStand;
