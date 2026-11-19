'use strict';

const { defineComponent, h } = require('vue');

const DocumentStackCodeShadow = defineComponent({
  name: 'DocumentStackCodeShadow',
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
          h('path', {"d":"M8 22C6.895 22 6 21.105 6 20L6 8C6 6.895 6.895 6 8 6L18 6C19.105 6 20 6.895 20 8L20 10"}),
          h('path', {"d":"M2 17L2 4C2 2.895 2.895 2 4 2L14 2"}),
          h('path', {"d":"M17 14L15 20"}),
          h('path', {"d":"M20 15L22 17L20 19"}),
          h('path', {"d":"M12 15L10 17L12 19"})
        ]
      );
  }
});

module.exports = DocumentStackCodeShadow;
module.exports.DocumentStackCodeShadow = DocumentStackCodeShadow;
module.exports.default = DocumentStackCodeShadow;
