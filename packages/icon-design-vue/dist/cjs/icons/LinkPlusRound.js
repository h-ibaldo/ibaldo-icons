'use strict';

const { defineComponent, h } = require('vue');

const LinkPlusRound = defineComponent({
  name: 'LinkPlusRound',
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
          h('path', {"d":"M13 6.762C14.203 7.566 15 8.941 15 10.5C15 12.984 12.984 15 10.5 15L6.5 15C4.016 15 2 12.984 2 10.5C2 8.188 3.754 6.301 6 6.051"}),
          h('path', {"d":"M11 11.238C9.797 10.434 9 9.059 9 7.5C9 5.016 11.016 3 13.5 3L17.5 3C19.984 3 22 5.016 22 7.5C22 9.813 20.246 11.699 18 11.949"}),
          h('path', {"d":"M19 16L19 22"}),
          h('path', {"d":"M22 19L16 19"})
        ]
      );
  }
});

module.exports = LinkPlusRound;
module.exports.LinkPlusRound = LinkPlusRound;
module.exports.default = LinkPlusRound;
