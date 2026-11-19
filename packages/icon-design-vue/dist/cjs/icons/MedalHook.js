'use strict';

const { defineComponent, h } = require('vue');

const MedalHook = defineComponent({
  name: 'MedalHook',
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
          h('path', {"d":"M18 16C18 19.313 15.313 22 12 22C8.688 22 6 19.313 6 16C6 12.688 8.688 10 12 10C15.313 10 18 12.688 18 16Z"}),
          h('path', {"d":"M8 7L5 7C4.449 7 4 6.555 4 6L4 3C4 2.445 4.449 2 5 2L19 2C19.551 2 20 2.445 20 3L20 6C20 6.555 19.551 7 19 7L15 7L12 10"})
        ]
      );
  }
});

module.exports = MedalHook;
module.exports.MedalHook = MedalHook;
module.exports.default = MedalHook;
