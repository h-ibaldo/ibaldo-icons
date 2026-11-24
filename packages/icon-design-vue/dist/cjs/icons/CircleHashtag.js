'use strict';

const { defineComponent, h } = require('vue');

const CircleHashtag = defineComponent({
  name: 'CircleHashtag',
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
          h('path', {"d":"M16 22L17 14"}),
          h('path', {"d":"M20 22L21 14"}),
          h('path', {"d":"M15 16L22 16"}),
          h('path', {"d":"M15 20L22 20"}),
          h('path', {"d":"M21.797 10C20.871 5.438 16.836 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22"})
        ]
      );
  }
});

module.exports = CircleHashtag;
module.exports.CircleHashtag = CircleHashtag;
module.exports.default = CircleHashtag;
