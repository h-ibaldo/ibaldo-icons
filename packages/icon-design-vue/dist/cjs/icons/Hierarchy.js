'use strict';

const { defineComponent, h } = require('vue');

const Hierarchy = defineComponent({
  name: 'Hierarchy',
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
          h('path', {"d":"M14 2L14 8L10 8L10 2Z"}),
          h('path', {"d":"M20 16L20 22L16 22L16 16Z"}),
          h('path', {"d":"M8 16L8 22L4 22L4 16Z"}),
          h('path', {"d":"M12 11L12 8"}),
          h('path', {"d":"M18 16L18 13.723C18 13.289 17.723 12.906 17.316 12.773L12 11"}),
          h('path', {"d":"M6 16L6 13.723C6 13.289 6.277 12.906 6.684 12.773L12 11"})
        ]
      );
  }
});

module.exports = Hierarchy;
module.exports.Hierarchy = Hierarchy;
module.exports.default = Hierarchy;
