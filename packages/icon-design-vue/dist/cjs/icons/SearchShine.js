'use strict';

const { defineComponent, h } = require('vue');

const SearchShine = defineComponent({
  name: 'SearchShine',
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
          h('circle', {"cx":"11.025268548872191","cy":"10.99877929993454","r":"9"}),
          h('path', {"d":"M6.025268548282838,10.99877929993454c0-2.761423749325331,2.238576251260383-5.000000000585715,5.000000000589353-5.000000000585715"}),
          h('line', {"x1":"17.389221185583665","y1":"17.36273193665329","x2":"22.025268548872191","y2":"21.99877929993454"})
        ]
      );
  }
});

module.exports = SearchShine;
module.exports.SearchShine = SearchShine;
module.exports.default = SearchShine;
