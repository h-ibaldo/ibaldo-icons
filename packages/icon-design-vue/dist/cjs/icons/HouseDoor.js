'use strict';

const { defineComponent, h } = require('vue');

const HouseDoor = defineComponent({
  name: 'HouseDoor',
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
          h('polygon', {"points":"11.999999999239662 3.000000000842192 1.999999999239662 13.000000000842192 4.999999999239662 13.000000000842192 4.999999999239662 21.000000000842192 9.999999999239662 21.000000000842192 9.999999999239662 16.000000000842192 13.999999999239662 16.000000000842192 13.999999999239662 21.000000000842192 18.999999999239662 21.000000000842192 18.999999999239662 13.000000000842192 21.999999999239662 13.000000000842192 11.999999999239662 3.000000000842192"})
        ]
      );
  }
});

module.exports = HouseDoor;
module.exports.HouseDoor = HouseDoor;
module.exports.default = HouseDoor;
