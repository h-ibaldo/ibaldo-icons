'use strict';

const { defineComponent, h } = require('vue');

const BugX = defineComponent({
  name: 'BugX',
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
          h('path', {"d":"M6 15C6 11.133 8.688 8 12 8C15.313 8 18 11.133 18 15C18 18.867 15.313 22 12 22C8.688 22 6 18.867 6 15Z"}),
          h('path', {"d":"M8.133 9.648C8.047 9.281 8 8.898 8 8.5C8 6.016 9.789 4 12 4C14.211 4 16 6.016 16 8.5C16 8.898 15.953 9.281 15.867 9.648"}),
          h('path', {"d":"M15 5L18 2"}),
          h('path', {"d":"M9 5L6 2"}),
          h('path', {"d":"M18 12L21 11L21 8"}),
          h('path', {"d":"M18 18L21 19L21 22"}),
          h('path', {"d":"M18 15L22 15"}),
          h('path', {"d":"M6 12L3 11L3 8"}),
          h('path', {"d":"M6 18L3 19L3 22"}),
          h('path', {"d":"M6 15L2 15"}),
          h('path', {"d":"M14.852 12L9.148 17.699"}),
          h('path', {"d":"M14.852 17.699L9.148 12"})
        ]
      );
  }
});

module.exports = BugX;
module.exports.BugX = BugX;
module.exports.default = BugX;
