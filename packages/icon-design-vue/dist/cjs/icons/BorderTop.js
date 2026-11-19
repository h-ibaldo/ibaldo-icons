'use strict';

const { defineComponent, h } = require('vue');

const BorderTop = defineComponent({
  name: 'BorderTop',
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
          h('path', {"d":"M22 22L22 22"}),
          h('path', {"d":"M22 17L22 17"}),
          h('path', {"d":"M22 12L22 12"}),
          h('path', {"d":"M22 7L22 7"}),
          h('path', {"d":"M2 2L22 2"}),
          h('path', {"d":"M2 22L2 22"}),
          h('path', {"d":"M7 22L7 22"}),
          h('path', {"d":"M12 22L12 22"}),
          h('path', {"d":"M17 22L17 22"}),
          h('path', {"d":"M7 12L7 12"}),
          h('path', {"d":"M12 12L12 12"}),
          h('path', {"d":"M17 12L17 12"}),
          h('path', {"d":"M2 17L2 17"}),
          h('path', {"d":"M2 12L2 12"}),
          h('path', {"d":"M2 7L2 7"}),
          h('path', {"d":"M12 17L12 17"}),
          h('path', {"d":"M12 7L12 7"})
        ]
      );
  }
});

module.exports = BorderTop;
module.exports.BorderTop = BorderTop;
module.exports.default = BorderTop;
