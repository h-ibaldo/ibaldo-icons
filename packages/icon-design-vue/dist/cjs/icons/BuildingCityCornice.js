'use strict';

const { defineComponent, h } = require('vue');

const BuildingCityCornice = defineComponent({
  name: 'BuildingCityCornice',
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
          h('path', {"d":"M8 5L8 7"}),
          h('path', {"d":"M18 5L7 5"}),
          h('path', {"d":"M16 2L9 2"}),
          h('path', {"d":"M10 22L17 22L17 5"}),
          h('path', {"d":"M22 10L17 10"}),
          h('path', {"d":"M17 22L21 22L21 10"}),
          h('path', {"d":"M3 13L3 22L10 22L10 13"}),
          h('path', {"d":"M11 13L2 13"}),
          h('path', {"d":"M10 10L3 10"})
        ]
      );
  }
});

module.exports = BuildingCityCornice;
module.exports.BuildingCityCornice = BuildingCityCornice;
module.exports.default = BuildingCityCornice;
