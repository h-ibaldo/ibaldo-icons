'use strict';

const { defineComponent, h } = require('vue');

const AntennaSides = defineComponent({
  name: 'AntennaSides',
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
          h('path', {"d":"M16.242640686859886,4.828427124806694c2.343145750430267,2.343145750328404,2.343145750510303,6.142135623809736.000000000190994,8.485281374240003"}),
          h('path', {"d":"M7.757359312810877,13.313708499235872c-2.343145750430267-2.343145750324766-2.343145750521217-6.142135623806098-.000000000190994-8.485281374236365"}),
          h('path', {"d":"M19.071067811539251,1.999999999998181c3.905242917389842,3.905242917211581,3.905242917531723,10.236892706343497.000000000320142,14.1421356237297"}),
          h('path', {"d":"M4.928932188129693,16.142135624048024c-3.905242917389842-3.905242917211581-3.905242917529904-10.236892706347135-.000000000320142-14.142135623733338"}),
          h('circle', {"cx":"11.999999999829015","cy":"9.071067812181354","r":"2"}),
          h('line', {"x1":"8.999999999829015","y1":"21.999999999998181","x2":"11.999999999829015","y2":"11.071067812024921"}),
          h('line', {"x1":"15.000000000080036","y1":"21.999999999932697","x2":"11.999999999588908","y2":"11.071067812090405"}),
          h('line', {"x1":"18","y1":"21.999999999998181","x2":"6","y2":"21.999999999998181"})
        ]
      );
  }
});

module.exports = AntennaSides;
module.exports.AntennaSides = AntennaSides;
module.exports.default = AntennaSides;
