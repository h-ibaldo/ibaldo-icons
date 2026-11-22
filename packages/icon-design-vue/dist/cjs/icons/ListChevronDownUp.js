'use strict';

const { defineComponent, h } = require('vue');

const ListChevronDownUp = defineComponent({
  name: 'ListChevronDownUp',
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
          h('path', {"d":"M2 4L5.684 7.363L9.363 4"}),
          h('path', {"d":"M9.363 20.363L5.684 17L2 20.363"})
        ]
      );
  }
});

module.exports = ListChevronDownUp;
module.exports.ListChevronDownUp = ListChevronDownUp;
module.exports.default = ListChevronDownUp;
