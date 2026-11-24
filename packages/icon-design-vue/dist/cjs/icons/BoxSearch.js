'use strict';

const { defineComponent, h } = require('vue');

const BoxSearch = defineComponent({
  name: 'BoxSearch',
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
          h('path', {"d":"M21 17.5C21 19.434 19.434 21 17.5 21C15.566 21 14 19.434 14 17.5C14 15.566 15.566 14 17.5 14C19.434 14 21 15.566 21 17.5Z"}),
          h('path', {"d":"M19.973 19.973L22 22"}),
          h('path', {"d":"M7 4.5L17 9.5"}),
          h('path', {"d":"M2 7L12 12L22 7"}),
          h('path', {"d":"M12 14L12 12"}),
          h('path', {"d":"M12 22L12 21"}),
          h('path', {"d":"M12 22L2 17L2 7L12 2L22 7L22 12"})
        ]
      );
  }
});

module.exports = BoxSearch;
module.exports.BoxSearch = BoxSearch;
module.exports.default = BoxSearch;
