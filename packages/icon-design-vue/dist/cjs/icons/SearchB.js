'use strict';

const { defineComponent, h } = require('vue');

const SearchB = defineComponent({
  name: 'SearchB',
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
          h('circle', {"cx":"9.999999993642632","cy":"9.998779299956368","r":"8"}),
          h('line', {"x1":"15.656860345214227","y1":"15.655639651518868","x2":"21.999999993642632","y2":"21.998779299956368"})
        ]
      );
  }
});

module.exports = SearchB;
module.exports.SearchB = SearchB;
module.exports.default = SearchB;
