'use strict';

const { defineComponent, h } = require('vue');

const Pipette = defineComponent({
  name: 'Pipette',
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
          h('path', {"d":"M15 13L10 8C9.449 7.449 9.449 6.551 10 6C10.551 5.449 11.449 5.449 12 6L13 7L17 3C18.105 1.895 19.895 1.895 21 3C22.105 4.105 22.105 5.895 21 7L17 11L18 12C18.551 12.551 18.551 13.449 18 14C17.449 14.551 16.551 14.551 16 14L15 13L7 21L2 22L3 17L11 9"}),
          h('path', {"d":"M5 15L13 15"})
        ]
      );
  }
});

module.exports = Pipette;
module.exports.Pipette = Pipette;
module.exports.default = Pipette;
