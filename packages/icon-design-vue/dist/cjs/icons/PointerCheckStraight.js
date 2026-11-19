'use strict';

const { defineComponent, h } = require('vue');

const PointerCheckStraight = defineComponent({
  name: 'PointerCheckStraight',
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
          h('path', {"d":"M2 4.355L2 19.586C2 20.477 3.078 20.922 3.707 20.293L8 16L14.023 16C14.926 16 15.367 14.906 14.719 14.281L3.695 3.637C3.059 3.023 2 3.473 2 4.355Z"}),
          h('path', {"d":"M14 6L16.5 8.5L21 4"})
        ]
      );
  }
});

module.exports = PointerCheckStraight;
module.exports.PointerCheckStraight = PointerCheckStraight;
module.exports.default = PointerCheckStraight;
