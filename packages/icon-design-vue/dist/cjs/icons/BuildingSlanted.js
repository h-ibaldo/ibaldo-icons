'use strict';

const { defineComponent, h } = require('vue');

const BuildingSlanted = defineComponent({
  name: 'BuildingSlanted',
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
          h('path', {"d":"M20 6L4 2L4 22L20 22Z"}),
          h('path', {"d":"M8 9L8 18"}),
          h('path', {"d":"M12 9L12 14"}),
          h('path', {"d":"M12 18L12 22"}),
          h('path', {"d":"M16 9L16 18"})
        ]
      );
  }
});

module.exports = BuildingSlanted;
module.exports.BuildingSlanted = BuildingSlanted;
module.exports.default = BuildingSlanted;
