'use strict';

const { defineComponent, h } = require('vue');

const FullscreenCorners = defineComponent({
  name: 'FullscreenCorners',
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
          h('path', {"d":"M2 7L2 2L7 2"}),
          h('path', {"d":"M22 17L22 22L17 22"}),
          h('path', {"d":"M7 22L2 22L2 17"}),
          h('path', {"d":"M17 2L22 2L22 7"})
        ]
      );
  }
});

module.exports = FullscreenCorners;
module.exports.FullscreenCorners = FullscreenCorners;
module.exports.default = FullscreenCorners;
