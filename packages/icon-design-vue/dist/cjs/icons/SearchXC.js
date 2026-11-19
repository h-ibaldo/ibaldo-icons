'use strict';

const { defineComponent, h } = require('vue');

const SearchXC = defineComponent({
  name: 'SearchXC',
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
          h('circle', {"cx":"9.000000018382707","cy":"8.99877930438015","r":"7.000000000000001"}),
          h('line', {"x1":"22.000000018382707","y1":"21.99877930438015","x2":"14.000000018382707","y2":"13.99877930438015"}),
          h('line', {"x1":"7.000000018382707","y1":"10.99877930438015","x2":"11.000000018382707","y2":"6.99877930438015"}),
          h('line', {"x1":"11.000000018202627","y1":"10.998779304562049","x2":"7.000000018562787","y2":"6.998779304201889"})
        ]
      );
  }
});

module.exports = SearchXC;
module.exports.SearchXC = SearchXC;
module.exports.default = SearchXC;
