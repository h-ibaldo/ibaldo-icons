'use strict';

const { defineComponent, h } = require('vue');

const NavigationUpLeft = defineComponent({
  name: 'NavigationUpLeft',
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
          h('path', {"d":"M5.32 4.059L20.336 9.313C21.242 9.629 21.215 10.922 20.293 11.199L14.832 12.836C13.875 13.125 13.125 13.875 12.836 14.832L11.199 20.293C10.922 21.215 9.629 21.242 9.313 20.336L4.059 5.32C3.781 4.535 4.535 3.785 5.32 4.059Z"})
        ]
      );
  }
});

module.exports = NavigationUpLeft;
module.exports.NavigationUpLeft = NavigationUpLeft;
module.exports.default = NavigationUpLeft;
