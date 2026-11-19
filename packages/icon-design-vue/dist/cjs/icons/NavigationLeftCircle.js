'use strict';

const { defineComponent, h } = require('vue');

const NavigationLeftCircle = defineComponent({
  name: 'NavigationLeftCircle',
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
          h('path', {"d":"M2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 6.477 17.523 2 12 2C6.477 2 2 6.477 2 12Z"}),
          h('path', {"d":"M13.68 7.391L7.43 11.145C6.781 11.531 6.781 12.469 7.43 12.859L13.68 16.609C14.48 17.086 15.438 16.316 15.145 15.438L14.105 12.316C14.035 12.113 14.035 11.887 14.105 11.684L15.145 8.566C15.438 7.684 14.48 6.914 13.68 7.391Z"})
        ]
      );
  }
});

module.exports = NavigationLeftCircle;
module.exports.NavigationLeftCircle = NavigationLeftCircle;
module.exports.default = NavigationLeftCircle;
