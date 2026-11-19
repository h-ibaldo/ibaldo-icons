'use strict';

const { defineComponent, h } = require('vue');

const BuildingAnnexDoor = defineComponent({
  name: 'BuildingAnnexDoor',
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
          h('path', {"d":"M16 6L2 6"}),
          h('path', {"d":"M7 10L7 10"}),
          h('path', {"d":"M11 10L11 10"}),
          h('path', {"d":"M7 14L7 14"}),
          h('path', {"d":"M11 14L11 14"}),
          h('path', {"d":"M7 18L7 18"}),
          h('path', {"d":"M11 22L11 18"}),
          h('path', {"d":"M15 22L21 22L21 10"}),
          h('path', {"d":"M18 14L18 14"}),
          h('path', {"d":"M18 18L18 18"}),
          h('path', {"d":"M4 2L14 2"}),
          h('path', {"d":"M15 10L22 10"})
        ]
      );
  }
});

module.exports = BuildingAnnexDoor;
module.exports.BuildingAnnexDoor = BuildingAnnexDoor;
module.exports.default = BuildingAnnexDoor;
