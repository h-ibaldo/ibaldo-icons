'use strict';

const { defineComponent, h } = require('vue');

const SkipBackCircle = defineComponent({
  name: 'SkipBackCircle',
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
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M16.281 8.945L16.281 15.055C16.281 15.871 15.359 16.344 14.699 15.871L10.418 12.813C9.859 12.414 9.859 11.586 10.418 11.188L14.699 8.129C15.359 7.656 16.281 8.129 16.281 8.945Z"}),
          h('path', {"d":"M8 8L8 16"})
        ]
      );
  }
});

module.exports = SkipBackCircle;
module.exports.SkipBackCircle = SkipBackCircle;
module.exports.default = SkipBackCircle;
