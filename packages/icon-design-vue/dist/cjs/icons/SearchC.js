'use strict';

const { defineComponent, h } = require('vue');

const SearchC = defineComponent({
  name: 'SearchC',
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
          h('circle', {"cx":"9.000000014042598","cy":"8.998779305395146","r":"7.000000000000001"}),
          h('line', {"x1":"22.000000014042598","y1":"21.998779305395146","x2":"14.000000014042598","y2":"13.998779305395146"})
        ]
      );
  }
});

module.exports = SearchC;
module.exports.SearchC = SearchC;
module.exports.default = SearchC;
