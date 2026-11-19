'use strict';

const { defineComponent, h } = require('vue');

const SunShortDense = defineComponent({
  name: 'SunShortDense',
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
          h('circle', {"cx":"12","cy":"12.000000005924448","r":"4"}),
          h('line', {"x1":"12","y1":"21.000000005924448","x2":"12","y2":"22.000000005924448"}),
          h('line', {"x1":"12","y1":"2.000000005924448","x2":"12","y2":"3.000000005924448"}),
          h('line', {"x1":"3","y1":"12.000000005924448","x2":"2","y2":"12.000000005924448"}),
          h('line', {"x1":"22","y1":"12.000000005924448","x2":"21","y2":"12.000000005924448"}),
          h('line', {"x1":"16.499999999881766","y1":"19.794228640052097","x2":"16.999999999870852","y2":"20.660254043843452"}),
          h('line', {"x1":"7.000000000129148","y1":"3.339745968005445","x2":"7.500000000116415","y2":"4.205771371798619"}),
          h('line', {"x1":"4.205771365872351","y1":"16.500000005808033","x2":"3.339745962080997","y2":"17.0000000057953"}),
          h('line', {"x1":"20.660254037919003","y1":"7.000000006053597","x2":"19.794228634127649","y2":"7.500000006042683"}),
          h('line', {"x1":"19.794228633923922","y1":"16.500000006159098","x2":"20.660254037693448","y2":"17.000000006184564"}),
          h('line', {"x1":"3.339745962304733","y1":"7.000000005666152","x2":"4.205771366074259","y2":"7.500000005691618"}),
          h('line', {"x1":"7.49999999976535","y1":"19.794228639850189","x2":"6.999999999739885","y2":"20.660254043619716"}),
          h('line', {"x1":"17.000000000258296","y1":"3.339745968231","x2":"16.50000000023465","y2":"4.205771371998708"})
        ]
      );
  }
});

module.exports = SunShortDense;
module.exports.SunShortDense = SunShortDense;
module.exports.default = SunShortDense;
