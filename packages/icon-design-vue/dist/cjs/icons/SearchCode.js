'use strict';

const { defineComponent, h } = require('vue');

const SearchCode = defineComponent({
  name: 'SearchCode',
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
          h('path', {"d":"M12 7L10 15"}),
          h('path', {"d":"M15 9L17 11L15 13"}),
          h('path', {"d":"M7 9L5 11L7 13"}),
          h('path', {"d":"M20 11C20 15.973 15.973 20 11 20C6.027 20 2 15.973 2 11C2 6.027 6.027 2 11 2C15.973 2 20 6.027 20 11Z"}),
          h('path', {"d":"M17.363 17.363L22 22"})
        ]
      );
  }
});

module.exports = SearchCode;
module.exports.SearchCode = SearchCode;
module.exports.default = SearchCode;
