'use strict';

const { defineComponent, h } = require('vue');

const DocumentChecklistCheck = defineComponent({
  name: 'DocumentChecklistCheck',
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
          h('path', {"d":"M16 19L18 21L21.5 16.5"}),
          h('path', {"d":"M13 22L4 22C2.895 22 2 21.105 2 20L2 4C2 2.895 2.895 2 4 2L18 2C19.105 2 20 2.895 20 4L20 13"}),
          h('path', {"d":"M16 7L12 7"}),
          h('path', {"d":"M16 12L12 12"}),
          h('path', {"d":"M13 17L12 17"}),
          h('path', {"d":"M6 7L7 8L9 6"}),
          h('path', {"d":"M6 12L7 13L9 11"}),
          h('path', {"d":"M6 17L7 18L9 16"})
        ]
      );
  }
});

module.exports = DocumentChecklistCheck;
module.exports.DocumentChecklistCheck = DocumentChecklistCheck;
module.exports.default = DocumentChecklistCheck;
