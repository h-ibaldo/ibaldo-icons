'use strict';

const { defineComponent, h } = require('vue');

const GaugeDrop = defineComponent({
  name: 'GaugeDrop',
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
          h('path', {"d":"M12 6L9.598 11.609C9.227 12.469 9.348 13.461 9.906 14.211C10.953 15.605 13.047 15.605 14.094 14.211C14.652 13.461 14.773 12.469 14.402 11.609Z"}),
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"})
        ]
      );
  }
});

module.exports = GaugeDrop;
module.exports.GaugeDrop = GaugeDrop;
module.exports.default = GaugeDrop;
