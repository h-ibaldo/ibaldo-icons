'use strict';

const { defineComponent, h } = require('vue');

const ListChevronUpDown = defineComponent({
  name: 'ListChevronUpDown',
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
          h('path', {"d":"M13 4L22 4"}),
          h('path', {"d":"M13 12L22 12"}),
          h('path', {"d":"M13 20L22 20"}),
          h('path', {"d":"M9.363 7.363L5.684 4L2 7.363"}),
          h('path', {"d":"M2 17L5.684 20.363L9.363 17"})
        ]
      );
  }
});

module.exports = ListChevronUpDown;
module.exports.ListChevronUpDown = ListChevronUpDown;
module.exports.default = ListChevronUpDown;
