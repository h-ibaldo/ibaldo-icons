'use strict';

const { defineComponent, h } = require('vue');

const LinkMinusRound = defineComponent({
  name: 'LinkMinusRound',
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
          h('path', {"d":"M13 7.762C14.203 8.566 15 9.941 15 11.5C15 13.984 12.984 16 10.5 16L6.5 16C4.016 16 2 13.984 2 11.5C2 9.188 3.754 7.301 6 7.051"}),
          h('path', {"d":"M11 12.238C9.797 11.434 9 10.059 9 8.5C9 6.016 11.016 4 13.5 4L17.5 4C19.984 4 22 6.016 22 8.5C22 10.813 20.246 12.699 18 12.949"}),
          h('path', {"d":"M22 20L16 20"})
        ]
      );
  }
});

module.exports = LinkMinusRound;
module.exports.LinkMinusRound = LinkMinusRound;
module.exports.default = LinkMinusRound;
