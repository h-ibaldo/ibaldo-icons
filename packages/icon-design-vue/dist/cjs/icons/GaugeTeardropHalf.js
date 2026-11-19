'use strict';

const { defineComponent, h } = require('vue');

const GaugeTeardropHalf = defineComponent({
  name: 'GaugeTeardropHalf',
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
          h('path', {"d":"M16.344 9.563L14.141 17.113C13.859 18.066 13.066 18.781 12.09 18.957C10.664 19.215 9.301 18.27 9.043 16.844C8.867 15.867 9.254 14.875 10.051 14.277Z"}),
          h('path', {"d":"M19 16L20.938 16C21.457 16 21.887 15.605 21.941 15.09C22.043 14.16 22.016 13.188 21.84 12.199C21.07 7.863 17.398 4.48 13.02 4.051C7.039 3.461 2 8.141 2 14C2 14.371 2.02 14.738 2.063 15.102C2.117 15.613 2.547 16 3.063 16L5 16"})
        ]
      );
  }
});

module.exports = GaugeTeardropHalf;
module.exports.GaugeTeardropHalf = GaugeTeardropHalf;
module.exports.default = GaugeTeardropHalf;
