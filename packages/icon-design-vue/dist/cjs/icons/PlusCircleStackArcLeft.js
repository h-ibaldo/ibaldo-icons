'use strict';

const { defineComponent, h } = require('vue');

const PlusCircleStackArcLeft = defineComponent({
  name: 'PlusCircleStackArcLeft',
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
          h('path', {"d":"M22 12C22 15.867 18.867 19 15 19C11.133 19 8 15.867 8 12C8 8.133 11.133 5 15 5C18.867 5 22 8.133 22 12Z"}),
          h('path', {"d":"M4.059 5C2.762 7.023 2 9.422 2 12C2 14.578 2.762 16.977 4.059 19"}),
          h('path', {"d":"M15 9L15 15"}),
          h('path', {"d":"M18 12L12 12"})
        ]
      );
  }
});

module.exports = PlusCircleStackArcLeft;
module.exports.PlusCircleStackArcLeft = PlusCircleStackArcLeft;
module.exports.default = PlusCircleStackArcLeft;
