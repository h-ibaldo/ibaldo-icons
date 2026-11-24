'use strict';

const { defineComponent, h } = require('vue');

const BuildingAnnex = defineComponent({
  name: 'BuildingAnnex',
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
          h('path', {"d":"M14 2L2 2L2 22L14 22Z"}),
          h('path', {"d":"M14 22L22 22L22 7L14 7"}),
          h('path', {"d":"M6 7L6 7"}),
          h('path', {"d":"M10 7L10 7"}),
          h('path', {"d":"M6 12L6 12"}),
          h('path', {"d":"M10 12L10 12"}),
          h('path', {"d":"M6 17L6 17"}),
          h('path', {"d":"M10 17L10 17"}),
          h('path', {"d":"M18 12L18 12"}),
          h('path', {"d":"M18 17L18 17"})
        ]
      );
  }
});

module.exports = BuildingAnnex;
module.exports.BuildingAnnex = BuildingAnnex;
module.exports.default = BuildingAnnex;
