'use strict';

const { defineComponent, h } = require('vue');

const BuildingCityIsometric = defineComponent({
  name: 'BuildingCityIsometric',
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
          h('path', {"d":"M7 20L12 22L17 20"}),
          h('path', {"d":"M7 4L12 6L17 4"}),
          h('path', {"d":"M17 4L12 2L7 4"}),
          h('path', {"d":"M7 11L2 9L2 18L7 20"}),
          h('path', {"d":"M7 20L7 4"}),
          h('path', {"d":"M17 20L17 4"}),
          h('path', {"d":"M12 22L12 6"}),
          h('path', {"d":"M7 7L2 9"}),
          h('path', {"d":"M17 11L22 9L22 18L17 20"}),
          h('path', {"d":"M17 7L22 9"})
        ]
      );
  }
});

module.exports = BuildingCityIsometric;
module.exports.BuildingCityIsometric = BuildingCityIsometric;
module.exports.default = BuildingCityIsometric;
