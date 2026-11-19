'use strict';

const { defineComponent, h } = require('vue');

const SearchCheckC = defineComponent({
  name: 'SearchCheckC',
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
          h('circle', {"cx":"8.999999993264282","cy":"8.998779299956368","r":"7.000000000000001"}),
          h('line', {"x1":"21.999999993264282","y1":"21.998779299956368","x2":"13.999999993264282","y2":"13.998779299956368"}),
          h('polyline', {"points":"6.749999993264282 8.998779299956368 8.249999993264282 10.498779299956368 11.249999993264282 7.498779299956368"})
        ]
      );
  }
});

module.exports = SearchCheckC;
module.exports.SearchCheckC = SearchCheckC;
module.exports.default = SearchCheckC;
