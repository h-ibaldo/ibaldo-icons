'use strict';

const { defineComponent, h } = require('vue');

const MailClock = defineComponent({
  name: 'MailClock',
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
          h('path', {"d":"M22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17Z"}),
          h('path', {"d":"M17 15L17 17L19 18"}),
          h('path', {"d":"M9 16L3 16C2.449 16 2 15.551 2 15L2 3C2 2.449 2.449 2 3 2L21 2C21.551 2 22 2.449 22 3L22 11"}),
          h('path', {"d":"M2.332 2.266L11.375 9.5C11.742 9.793 12.258 9.793 12.625 9.5L21.668 2.266"})
        ]
      );
  }
});

module.exports = MailClock;
module.exports.MailClock = MailClock;
module.exports.default = MailClock;
