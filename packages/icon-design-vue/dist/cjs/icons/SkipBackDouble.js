'use strict';

const { defineComponent, h } = require('vue');

const SkipBackDouble = defineComponent({
  name: 'SkipBackDouble',
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
          h('path', {"d":"M22 6.332L22 17.668C22 18.473 21.07 18.918 20.445 18.414L13.359 12.746C12.879 12.363 12.879 11.637 13.359 11.254L20.445 5.586C21.07 5.082 22 5.527 22 6.332Z"}),
          h('path', {"d":"M13 6.332L13 17.668C13 18.473 12.07 18.918 11.445 18.414L4.359 12.746C3.879 12.363 3.879 11.637 4.359 11.254L11.445 5.586C12.07 5.082 13 5.527 13 6.332Z"}),
          h('path', {"d":"M2 5L2 19"})
        ]
      );
  }
});

module.exports = SkipBackDouble;
module.exports.SkipBackDouble = SkipBackDouble;
module.exports.default = SkipBackDouble;
