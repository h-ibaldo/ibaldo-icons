'use strict';

const { defineComponent, h } = require('vue');

const ButtonPill = defineComponent({
  name: 'ButtonPill',
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
          h('rect', {"x":"1.999999995180133","y":"6.999999996999868","width":"20","height":"10.000000007293337","rx":"4.999995005749084","ry":"4.999995005749084"})
        ]
      );
  }
});

module.exports = ButtonPill;
module.exports.ButtonPill = ButtonPill;
module.exports.default = ButtonPill;
