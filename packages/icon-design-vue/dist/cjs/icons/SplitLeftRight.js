'use strict';

const { defineComponent, h } = require('vue');

const SplitLeftRight = defineComponent({
  name: 'SplitLeftRight',
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
          h('path', {"d":"M2 2L6 2C7.105 2 8 2.895 8 4L8 20C8 21.105 7.105 22 6 22L2 22"}),
          h('path', {"d":"M22 22L18 22C16.895 22 16 21.105 16 20L16 4C16 2.895 16.895 2 18 2L22 2"}),
          h('path', {"d":"M12 2L12 4"}),
          h('path', {"d":"M12 8L12 10"}),
          h('path', {"d":"M12 14L12 16"}),
          h('path', {"d":"M12 20L12 22"})
        ]
      );
  }
});

module.exports = SplitLeftRight;
module.exports.SplitLeftRight = SplitLeftRight;
module.exports.default = SplitLeftRight;
