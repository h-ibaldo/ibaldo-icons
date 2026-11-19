'use strict';

const { defineComponent, h } = require('vue');

const LinkPlusCircleRound = defineComponent({
  name: 'LinkPlusCircleRound',
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
          h('path', {"d":"M19 9.445C20.191 8.754 21 7.477 21 6C21 3.793 19.211 2 17 2L12 2C9.789 2 8 3.793 8 6C8 7.859 9.277 9.414 11 9.859"}),
          h('path', {"d":"M12 17C12 14.238 14.238 12 17 12C19.762 12 22 14.238 22 17C22 19.762 19.762 22 17 22C14.238 22 12 19.762 12 17Z"}),
          h('path', {"d":"M17 15L17 19"}),
          h('path', {"d":"M19 17L15 17"}),
          h('path', {"d":"M4 6.555C2.809 7.246 2 8.523 2 10C2 12.207 3.789 14 6 14L9 14"}),
          h('path', {"d":"M14.859 9C14.496 7.602 13.402 6.504 12 6.141"})
        ]
      );
  }
});

module.exports = LinkPlusCircleRound;
module.exports.LinkPlusCircleRound = LinkPlusCircleRound;
module.exports.default = LinkPlusCircleRound;
