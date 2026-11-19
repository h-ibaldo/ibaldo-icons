'use strict';

const { defineComponent, h } = require('vue');

const NavigationDownLeftCircle = defineComponent({
  name: 'NavigationDownLeftCircle',
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
          h('path', {"d":"M16.449 14.07L9.375 15.84C8.641 16.02 7.977 15.359 8.16 14.625L9.93 7.551C10.156 6.648 11.379 6.516 11.797 7.348L13.266 10.289C13.363 10.48 13.52 10.637 13.711 10.734L16.652 12.207C17.484 12.621 17.348 13.844 16.449 14.07Z"})
        ]
      );
  }
});

module.exports = NavigationDownLeftCircle;
module.exports.NavigationDownLeftCircle = NavigationDownLeftCircle;
module.exports.default = NavigationDownLeftCircle;
