'use strict';

const { defineComponent, h } = require('vue');

const UserCircleWide = defineComponent({
  name: 'UserCircleWide',
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
          h('path', {"d":"M8.5 9.5C8.5 7.566 10.066 6 12 6C13.934 6 15.5 7.566 15.5 9.5C15.5 11.434 13.934 13 12 13C10.066 13 8.5 11.434 8.5 9.5Z"}),
          h('path', {"d":"M2 12C2 6.477 6.477 2 12 2C17.523 2 22 6.477 22 12C22 17.523 17.523 22 12 22C6.477 22 2 17.523 2 12Z"}),
          h('path', {"d":"M5.047 19.188C5.449 15.703 8.41 13 12 13C15.59 13 18.551 15.703 18.953 19.188"})
        ]
      );
  }
});

module.exports = UserCircleWide;
module.exports.UserCircleWide = UserCircleWide;
module.exports.default = UserCircleWide;
