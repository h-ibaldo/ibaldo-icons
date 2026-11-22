'use strict';

const { defineComponent, h } = require('vue');

const UserClock = defineComponent({
  name: 'UserClock',
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
          h('path', {"d":"M3 22L3 19C3 15.688 5.688 13 9 13L10 13"}),
          h('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"}),
          h('path', {"d":"M17 15L17 17L19 17"})
        ]
      );
  }
});

module.exports = UserClock;
module.exports.UserClock = UserClock;
module.exports.default = UserClock;
