'use strict';

const { defineComponent, h } = require('vue');

const BuildingCityAntenna = defineComponent({
  name: 'BuildingCityAntenna',
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
          h('path', {"d":"M8 11L3 11L3 22L8 22"}),
          h('path', {"d":"M13 2L13 5"}),
          h('path', {"d":"M15 22L22 22L22 13L15 10Z"}),
          h('path', {"d":"M15 22L8 22L8 5L18 5L18 11.285"})
        ]
      );
  }
});

module.exports = BuildingCityAntenna;
module.exports.BuildingCityAntenna = BuildingCityAntenna;
module.exports.default = BuildingCityAntenna;
