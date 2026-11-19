'use strict';

const { defineComponent, h } = require('vue');

const CursorUpRipple = defineComponent({
  name: 'CursorUpRipple',
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
          h('path', {"d":"M10.031 22L10.031 17L6 17.133L12.031 7L18 17.133L14.031 17L14.031 22Z"}),
          h('path', {"d":"M17.285 9C17.422 8.523 17.5 8.02 17.5 7.5C17.5 4.465 15.035 2 12 2C8.961 2 6.5 4.465 6.5 7.5C6.5 8.02 6.578 8.523 6.711 9"})
        ]
      );
  }
});

module.exports = CursorUpRipple;
module.exports.CursorUpRipple = CursorUpRipple;
module.exports.default = CursorUpRipple;
