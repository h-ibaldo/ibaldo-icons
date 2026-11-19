'use strict';

const { defineComponent, h } = require('vue');

const ArrowDivergeSix = defineComponent({
  name: 'ArrowDivergeSix',
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
          h('path', {"d":"M10 4L12 2L14 4"}),
          h('path', {"d":"M12 7L12 2"}),
          h('path', {"d":"M14 20L12 22L10 20"}),
          h('path', {"d":"M12 17L12 22"}),
          h('path', {"d":"M4.074 9.73L3.34 7L6.074 6.27"}),
          h('path', {"d":"M7.668 9.5L3.34 7"}),
          h('path', {"d":"M19.926 14.27L20.66 17L17.926 17.73"}),
          h('path', {"d":"M16.332 14.5L20.66 17"}),
          h('path', {"d":"M6.074 17.73L3.34 17L4.074 14.27"}),
          h('path', {"d":"M7.668 14.5L3.34 17"}),
          h('path', {"d":"M17.926 6.27L20.66 7L19.926 9.73"}),
          h('path', {"d":"M16.332 9.5L20.66 7"}),
          h('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z"})
        ]
      );
  }
});

module.exports = ArrowDivergeSix;
module.exports.ArrowDivergeSix = ArrowDivergeSix;
module.exports.default = ArrowDivergeSix;
