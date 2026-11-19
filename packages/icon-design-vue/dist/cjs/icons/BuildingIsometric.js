'use strict';

const { defineComponent, h } = require('vue');

const BuildingIsometric = defineComponent({
  name: 'BuildingIsometric',
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
          h('path', {"d":"M3 6L12 10L21 6L12 2Z"}),
          h('path', {"d":"M3 6L3 18L12 22L21 18L21 6"}),
          h('path', {"d":"M18 11L18 11"}),
          h('path', {"d":"M18 15L18 15"}),
          h('path', {"d":"M15 13L15 13"}),
          h('path', {"d":"M12 22L12 10"}),
          h('path', {"d":"M15 17L15 17"}),
          h('path', {"d":"M6 11L6 11"}),
          h('path', {"d":"M6 15L6 15"}),
          h('path', {"d":"M9 13L9 13"}),
          h('path', {"d":"M9 17L9 17"})
        ]
      );
  }
});

module.exports = BuildingIsometric;
module.exports.BuildingIsometric = BuildingIsometric;
module.exports.default = BuildingIsometric;
