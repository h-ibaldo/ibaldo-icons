'use strict';

const { defineComponent, h } = require('vue');

const BuildingCity = defineComponent({
  name: 'BuildingCity',
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
          h('path', {"d":"M10 22L17 22L17 2L8 2L8 7"}),
          h('path', {"d":"M17 22L22 22L22 12L17 12"}),
          h('path', {"d":"M10 7L2 10L2 22L10 22Z"})
        ]
      );
  }
});

module.exports = BuildingCity;
module.exports.BuildingCity = BuildingCity;
module.exports.default = BuildingCity;
