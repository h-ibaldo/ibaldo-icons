'use strict';

const { defineComponent, h } = require('vue');

const BuildingAnnexSlanted = defineComponent({
  name: 'BuildingAnnexSlanted',
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
          h('path', {"d":"M2 22L2 2L14 2L14 22"}),
          h('path', {"d":"M2 6L6 6"}),
          h('path', {"d":"M2 10L6 10"}),
          h('path', {"d":"M2 14L6 14"}),
          h('path', {"d":"M2 18L6 18"}),
          h('path', {"d":"M18 10L18 10"}),
          h('path', {"d":"M18 14L18 14"}),
          h('path', {"d":"M18 18L18 18"}),
          h('path', {"d":"M18 10L18 10"}),
          h('path', {"d":"M18 14L18 14"}),
          h('path', {"d":"M10 14L10 14"}),
          h('path', {"d":"M10 10L10 10"}),
          h('path', {"d":"M10 6L10 6"}),
          h('path', {"d":"M18 18L18 18"}),
          h('path', {"d":"M22 22L22 7L14 4"}),
          h('path', {"d":"M2 22L22 22"}),
          h('path', {"d":"M10 18L10 22"})
        ]
      );
  }
});

module.exports = BuildingAnnexSlanted;
module.exports.BuildingAnnexSlanted = BuildingAnnexSlanted;
module.exports.default = BuildingAnnexSlanted;
