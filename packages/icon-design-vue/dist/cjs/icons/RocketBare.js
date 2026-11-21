'use strict';

const { defineComponent, h } = require('vue');

const RocketBare = defineComponent({
  name: 'RocketBare',
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
          h('path', {"d":"M2 20.461L2 22L3.539 22C4.969 22 6.203 20.992 6.48 19.59L7 17L4.41 17.52C3.008 17.797 2 19.031 2 20.461Z"}),
          h('path', {"d":"M12 18L16.074 14.48C19.254 11.59 21.293 7.656 21.824 3.395L22 2L20.605 2.176C16.344 2.707 12.41 4.746 9.52 7.926L6 12Z"}),
          h('path', {"d":"M12 6L18 12"}),
          h('path', {"d":"M17 14L18 18L13 22L12 18"}),
          h('path', {"d":"M10 7L6 6L2 11L6 12"})
        ]
      );
  }
});

module.exports = RocketBare;
module.exports.RocketBare = RocketBare;
module.exports.default = RocketBare;
