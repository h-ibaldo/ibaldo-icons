'use strict';

const { defineComponent, h } = require('vue');

const SearchBrackets = defineComponent({
  name: 'SearchBrackets',
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
          h('path', {"d":"M13 8L16 11L13 14"}),
          h('path', {"d":"M9 8L6 11L9 14"}),
          h('path', {"d":"M20 11C20 15.973 15.973 20 11 20C6.027 20 2 15.973 2 11C2 6.027 6.027 2 11 2C15.973 2 20 6.027 20 11Z"}),
          h('path', {"d":"M17.363 17.363L22 22"})
        ]
      );
  }
});

module.exports = SearchBrackets;
module.exports.SearchBrackets = SearchBrackets;
module.exports.default = SearchBrackets;
