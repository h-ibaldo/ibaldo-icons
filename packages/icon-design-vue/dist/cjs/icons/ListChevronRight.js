'use strict';

const { defineComponent, h } = require('vue');

const ListChevronRight = defineComponent({
  name: 'ListChevronRight',
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
          h('path', {"d":"M11 4L21 4"}),
          h('path', {"d":"M11 12L21 12"}),
          h('path', {"d":"M11 20L21 20"}),
          h('path', {"d":"M3 16.484L7.242 12.242L3 8"})
        ]
      );
  }
});

module.exports = ListChevronRight;
module.exports.ListChevronRight = ListChevronRight;
module.exports.default = ListChevronRight;
