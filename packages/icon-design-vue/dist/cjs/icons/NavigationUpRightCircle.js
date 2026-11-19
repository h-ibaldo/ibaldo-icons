'use strict';

const { defineComponent, h } = require('vue');

const NavigationUpRightCircle = defineComponent({
  name: 'NavigationUpRightCircle',
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
          h('path', {"d":"M22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12Z"}),
          h('path', {"d":"M7.551 9.93L14.625 8.16C15.359 7.98 16.023 8.641 15.84 9.375L14.07 16.449C13.844 17.352 12.621 17.484 12.203 16.652L10.734 13.711C10.637 13.52 10.48 13.363 10.289 13.266L7.348 11.793C6.516 11.379 6.652 10.156 7.551 9.93Z"})
        ]
      );
  }
});

module.exports = NavigationUpRightCircle;
module.exports.NavigationUpRightCircle = NavigationUpRightCircle;
module.exports.default = NavigationUpRightCircle;
