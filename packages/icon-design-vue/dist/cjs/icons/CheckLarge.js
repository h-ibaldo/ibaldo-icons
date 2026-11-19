'use strict';

const { defineComponent, h } = require('vue');

const CheckLarge = defineComponent({
  name: 'CheckLarge',
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
          h('polyline', {"points":"1.974731440080177 12.250000003874447 8.974731440080177 19.000000003874447 21.974731440080177 5.000000003874447"})
        ]
      );
  }
});

module.exports = CheckLarge;
module.exports.CheckLarge = CheckLarge;
module.exports.default = CheckLarge;
