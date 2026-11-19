'use strict';

const { defineComponent, h } = require('vue');

const ArrowConvergeSix = defineComponent({
  name: 'ArrowConvergeSix',
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
          h('path', {"d":"M14 5L12 7L10 5"}),
          h('path', {"d":"M12 2L12 7"}),
          h('path', {"d":"M10 19L12 17L14 19"}),
          h('path', {"d":"M12 22L12 17"}),
          h('path', {"d":"M6.938 6.77L7.668 9.5L4.938 10.23"}),
          h('path', {"d":"M3.34 7L7.668 9.5"}),
          h('path', {"d":"M17.063 17.23L16.332 14.5L19.063 13.77"}),
          h('path', {"d":"M20.66 17L16.332 14.5"}),
          h('path', {"d":"M4.938 13.77L7.668 14.5L6.938 17.23"}),
          h('path', {"d":"M3.34 17L7.668 14.5"}),
          h('path', {"d":"M19.063 10.23L16.332 9.5L17.063 6.77"}),
          h('path', {"d":"M20.66 7L16.332 9.5"}),
          h('path', {"d":"M12 11C11.445 11 11 11.449 11 12C11 12.551 11.445 13 12 13C12.555 13 13 12.551 13 12C13 11.449 12.555 11 12 11Z"})
        ]
      );
  }
});

module.exports = ArrowConvergeSix;
module.exports.ArrowConvergeSix = ArrowConvergeSix;
module.exports.default = ArrowConvergeSix;
