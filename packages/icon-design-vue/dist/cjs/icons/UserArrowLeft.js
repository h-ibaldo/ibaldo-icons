'use strict';

const { defineComponent, h } = require('vue');

const UserArrowLeft = defineComponent({
  name: 'UserArrowLeft',
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
          h('path', {"d":"M7 6C7 3.789 8.789 2 11 2C13.211 2 15 3.789 15 6C15 8.211 13.211 10 11 10C8.789 10 7 8.211 7 6Z"}),
          h('path', {"d":"M3 22L3 19C3 15.688 5.688 13 9 13L13 13C13.801 13 14.563 13.156 15.262 13.441"}),
          h('path', {"d":"M21 19L14 19"}),
          h('path', {"d":"M17 16L14 19L17 22"})
        ]
      );
  }
});

module.exports = UserArrowLeft;
module.exports.UserArrowLeft = UserArrowLeft;
module.exports.default = UserArrowLeft;
