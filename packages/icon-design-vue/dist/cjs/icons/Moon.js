'use strict';

const { defineComponent, h } = require('vue');

const Moon = defineComponent({
  name: 'Moon',
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
          h('path', {"d":"M3 11C3 6.945 5.414 3.453 8.883 1.883C8.316 3.141 8 4.531 8 6C8 11.523 12.477 16 18 16C19.469 16 20.859 15.684 22.117 15.117C20.547 18.586 17.055 21 13 21C7.477 21 3 16.523 3 11Z"})
        ]
      );
  }
});

module.exports = Moon;
module.exports.Moon = Moon;
module.exports.default = Moon;
