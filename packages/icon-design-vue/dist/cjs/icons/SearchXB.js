'use strict';

const { defineComponent, h } = require('vue');

const SearchXB = defineComponent({
  name: 'SearchXB',
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
          h('circle', {"cx":"10.000000018382707","cy":"9.99877930438015","r":"8"}),
          h('line', {"x1":"15.656860369943388","y1":"15.65563965594265","x2":"22.000000018382707","y2":"21.99877930438015"}),
          h('line', {"x1":"12.000000018382707","y1":"7.99877930438015","x2":"8.000000018382707","y2":"11.99877930438015"}),
          h('line', {"x1":"8.000000018382707","y1":"7.99877930438015","x2":"12.000000018382707","y2":"11.99877930438015"})
        ]
      );
  }
});

module.exports = SearchXB;
module.exports.SearchXB = SearchXB;
module.exports.default = SearchXB;
