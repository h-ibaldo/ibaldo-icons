'use strict';

const { defineComponent, h } = require('vue');

const CommandCircle = defineComponent({
  name: 'CommandCircle',
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
          h('path', {"d":"M10.332 15.332L10.332 8.668C10.332 7.746 9.586 7 8.668 7C7.746 7 7 7.746 7 8.668C7 9.586 7.746 10.332 8.668 10.332L15.332 10.332C16.254 10.332 17 9.586 17 8.668C17 7.746 16.254 7 15.332 7C14.414 7 13.668 7.746 13.668 8.668L13.668 15.332C13.668 16.254 14.414 17 15.332 17C16.254 17 17 16.254 17 15.332C17 14.414 16.254 13.668 15.332 13.668L8.668 13.668C7.746 13.668 7 14.414 7 15.332C7 16.254 7.746 17 8.668 17C9.586 17 10.332 16.254 10.332 15.332Z"}),
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"})
        ]
      );
  }
});

module.exports = CommandCircle;
module.exports.CommandCircle = CommandCircle;
module.exports.default = CommandCircle;
