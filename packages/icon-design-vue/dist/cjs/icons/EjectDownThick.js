'use strict';

const { defineComponent, h } = require('vue');

const EjectDownThick = defineComponent({
  name: 'EjectDownThick',
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
          h('path', {"d":"M19.652 11L4.348 11C3.199 11 2.598 12.359 3.367 13.207L10.871 21.5C11.477 22.168 12.523 22.168 13.125 21.5L20.633 13.207C21.402 12.359 20.801 11 19.652 11Z"}),
          h('path', {"d":"M3 3L3 5C3 5.551 3.449 6 4 6L20 6C20.551 6 21 5.551 21 5L21 3C21 2.449 20.551 2 20 2L4 2C3.449 2 3 2.449 3 3Z"})
        ]
      );
  }
});

module.exports = EjectDownThick;
module.exports.EjectDownThick = EjectDownThick;
module.exports.default = EjectDownThick;
