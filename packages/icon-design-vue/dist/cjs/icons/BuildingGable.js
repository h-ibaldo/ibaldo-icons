'use strict';

const { defineComponent, h } = require('vue');

const BuildingGable = defineComponent({
  name: 'BuildingGable',
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
          h('path', {"d":"M3 6L3 22L15 22L15 6"}),
          h('path', {"d":"M22 6L2 6"}),
          h('path', {"d":"M7 10L7 10"}),
          h('path', {"d":"M11 10L11 10"}),
          h('path', {"d":"M7 14L7 14"}),
          h('path', {"d":"M11 14L11 14"}),
          h('path', {"d":"M7 18L7 18"}),
          h('path', {"d":"M11 22L11 18"}),
          h('path', {"d":"M15 22L21 22L21 6"}),
          h('path', {"d":"M18 14L18 14"}),
          h('path', {"d":"M18 10L18 10"}),
          h('path', {"d":"M18 18L18 18"}),
          h('path', {"d":"M18 2L6 2"}),
          h('path', {"d":"M3 6L6 2"}),
          h('path', {"d":"M18 2L21 6"}),
          h('path', {"d":"M12 2L15 6"})
        ]
      );
  }
});

module.exports = BuildingGable;
module.exports.BuildingGable = BuildingGable;
module.exports.default = BuildingGable;
