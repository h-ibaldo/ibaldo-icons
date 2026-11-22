'use strict';

const { defineComponent, h } = require('vue');

const HeartBrokenWide = defineComponent({
  name: 'HeartBrokenWide',
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
          h('path', {"d":"M20.09 6.078C18.098 4.434 15.129 4.73 13.301 6.559L11.949 7.906L10.602 6.559C8.773 4.73 5.805 4.434 3.809 6.078C1.523 7.969 1.402 11.359 3.449 13.406C4.449 14.406 5.527 15.32 6.676 16.141L11.949 19.906L17.223 16.141C18.371 15.32 19.453 14.406 20.449 13.406C22.496 11.359 22.375 7.969 20.09 6.078Z"}),
          h('path', {"d":"M11.949 7.906L10 10L15 11L12 15"})
        ]
      );
  }
});

module.exports = HeartBrokenWide;
module.exports.HeartBrokenWide = HeartBrokenWide;
module.exports.default = HeartBrokenWide;
