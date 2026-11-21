'use strict';

const { defineComponent, h } = require('vue');

const CrosshairCorners = defineComponent({
  name: 'CrosshairCorners',
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
          h('path', {"d":"M12 2L12 9"}),
          h('path', {"d":"M12 15L12 22"}),
          h('path', {"d":"M22 12L15 12"}),
          h('path', {"d":"M9 12L2 12"}),
          h('path', {"d":"M12 9L15 12L12 15L9 12Z"}),
          h('path', {"d":"M16 5L19 5L19 8"}),
          h('path', {"d":"M8 19L5 19L5 16"}),
          h('path', {"d":"M5 8L5 5L8 5"}),
          h('path', {"d":"M19 16L19 19L16 19"})
        ]
      );
  }
});

module.exports = CrosshairCorners;
module.exports.CrosshairCorners = CrosshairCorners;
module.exports.default = CrosshairCorners;
