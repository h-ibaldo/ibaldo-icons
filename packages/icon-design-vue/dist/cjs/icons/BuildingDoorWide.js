'use strict';

const { defineComponent, h } = require('vue');

const BuildingDoorWide = defineComponent({
  name: 'BuildingDoorWide',
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
          h('path', {"d":"M4 6L4 22L20 22L20 6"}),
          h('path', {"d":"M22 6L2 6"}),
          h('path', {"d":"M8 10L8 10"}),
          h('path', {"d":"M12 10L12 10"}),
          h('path', {"d":"M8 14L8 14"}),
          h('path', {"d":"M12 14L12 14"}),
          h('path', {"d":"M8 18L8 18"}),
          h('path', {"d":"M12 22L12 18"}),
          h('path', {"d":"M16 10L16 10"}),
          h('path', {"d":"M16 14L16 14"}),
          h('path', {"d":"M16 18L16 18"}),
          h('path', {"d":"M7 2L17 2"})
        ]
      );
  }
});

module.exports = BuildingDoorWide;
module.exports.BuildingDoorWide = BuildingDoorWide;
module.exports.default = BuildingDoorWide;
