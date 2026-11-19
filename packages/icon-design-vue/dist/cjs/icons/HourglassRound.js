'use strict';

const { defineComponent, h } = require('vue');

const HourglassRound = defineComponent({
  name: 'HourglassRound',
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
          h('path', {"d":"M6 2L18 2C18.555 2 19 2.445 19 3L19 3.102C19 4.957 18.262 6.738 16.949 8.051L14.414 10.586C13.633 11.367 13.633 12.633 14.414 13.414L16.949 15.949C18.262 17.262 19 19.043 19 20.898L19 21C19 21.555 18.555 22 18 22L6 22C5.445 22 5 21.555 5 21L5 20.898C5 19.043 5.738 17.262 7.051 15.949L9.586 13.414C10.367 12.633 10.367 11.367 9.586 10.586L7.051 8.051C5.738 6.738 5 4.957 5 3.102L5 3C5 2.445 5.445 2 6 2Z"})
        ]
      );
  }
});

module.exports = HourglassRound;
module.exports.HourglassRound = HourglassRound;
module.exports.default = HourglassRound;
