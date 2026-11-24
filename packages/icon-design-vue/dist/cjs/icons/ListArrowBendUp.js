'use strict';

const { defineComponent, h } = require('vue');

const ListArrowBendUp = defineComponent({
  name: 'ListArrowBendUp',
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
          h('path', {"d":"M16.918 22L2 22"}),
          h('path', {"d":"M17 14L2 14"}),
          h('path', {"d":"M22 22L22 9C22 7.344 20.656 6 19 6L13 6"}),
          h('path', {"d":"M9 6L2 6"}),
          h('path', {"d":"M17 10L13 6L17 2"})
        ]
      );
  }
});

module.exports = ListArrowBendUp;
module.exports.ListArrowBendUp = ListArrowBendUp;
module.exports.default = ListArrowBendUp;
