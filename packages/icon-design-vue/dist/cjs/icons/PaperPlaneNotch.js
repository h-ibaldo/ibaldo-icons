'use strict';

const { defineComponent, h } = require('vue');

const PaperPlaneNotch = defineComponent({
  name: 'PaperPlaneNotch',
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
          h('path', {"d":"M20.207 11.09L4.617 4.074C3.781 3.699 2.922 4.555 3.297 5.391L6.051 11.594C6.164 11.852 6.164 12.148 6.051 12.406L3.297 18.609C2.922 19.445 3.781 20.301 4.617 19.926L20.207 12.91C20.992 12.559 20.992 11.441 20.207 11.09Z"}),
          h('path', {"d":"M11.793 12L6.23 12"})
        ]
      );
  }
});

module.exports = PaperPlaneNotch;
module.exports.PaperPlaneNotch = PaperPlaneNotch;
module.exports.default = PaperPlaneNotch;
