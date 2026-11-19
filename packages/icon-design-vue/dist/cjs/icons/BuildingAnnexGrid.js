'use strict';

const { defineComponent, h } = require('vue');

const BuildingAnnexGrid = defineComponent({
  name: 'BuildingAnnexGrid',
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
          h('path', {"d":"M16 3L2 3L2 22L16 22Z"}),
          h('path', {"d":"M16 22L22 22L22 8L16 8"}),
          h('path', {"d":"M7 8L6 8L6 7L7 7Z"}),
          h('path', {"d":"M12 8L11 8L11 7L12 7Z"}),
          h('path', {"d":"M7 13L6 13L6 12L7 12Z"}),
          h('path', {"d":"M12 13L11 13L11 12L12 12Z"}),
          h('path', {"d":"M7 18L6 18L6 17L7 17Z"}),
          h('path', {"d":"M12 18L11 18L11 17L12 17Z"}),
          h('path', {"d":"M18 13L17 13L17 12L18 12Z"}),
          h('path', {"d":"M18 18L17 18L17 17L18 17Z"})
        ]
      );
  }
});

module.exports = BuildingAnnexGrid;
module.exports.BuildingAnnexGrid = BuildingAnnexGrid;
module.exports.default = BuildingAnnexGrid;
