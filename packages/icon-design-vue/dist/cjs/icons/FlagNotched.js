'use strict';

const { defineComponent, h } = require('vue');

const FlagNotched = defineComponent({
  name: 'FlagNotched',
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
          h('path', {"d":"M4 22L4 1.969L20 1.969L14.883 7.086L19.898 12.102L3.977 12.102"})
        ]
      );
  }
});

module.exports = FlagNotched;
module.exports.FlagNotched = FlagNotched;
module.exports.default = FlagNotched;
