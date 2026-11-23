'use strict';

const { defineComponent, h } = require('vue');

const UtilityKnife = defineComponent({
  name: 'UtilityKnife',
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
          h('path', {"d":"M21 6L17 2L5 14L9 18Z"}),
          h('path', {"d":"M8.5 17.5L4 22L3 17L5.5 14.5"}),
          h('path', {"d":"M18 9L14 5"}),
          h('path', {"d":"M13 10L14 9"})
        ]
      );
  }
});

module.exports = UtilityKnife;
module.exports.UtilityKnife = UtilityKnife;
module.exports.default = UtilityKnife;
