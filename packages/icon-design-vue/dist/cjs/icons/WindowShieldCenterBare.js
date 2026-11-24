'use strict';

const { defineComponent, h } = require('vue');

const WindowShieldCenterBare = defineComponent({
  name: 'WindowShieldCenterBare',
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
          h('path', {"d":"M17.00000000018008,12.000000000448381l-5-2-5,2v.000003999999535c0,2.415859811970222,1.470833530609525,4.588329412246821,3.713903049630972,5.485557219858492l1.286096950369028.514438780147429,1.286096950369028-.514438780144701c2.243069519021446-.897227807611671,3.713903049630972-3.069697407890999,3.713903049630972-5.485557219861221v-.000003999999535Z"}),
          h('rect', {"x":"2.00000000018008","y":"2.000000000457931","width":"20","height":"20","rx":"2.000000000000023","ry":"2.000000000000023"}),
          h('line', {"x1":"5.010000000180298","y1":"5.000000000448381","x2":"5.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"8.010000000180298","y1":"5.000000000448381","x2":"8.00000000018008","y2":"5.000000000448381"}),
          h('line', {"x1":"11.010000000180298","y1":"5.000000000448381","x2":"11.00000000018008","y2":"5.000000000448381"})
        ]
      );
  }
});

module.exports = WindowShieldCenterBare;
module.exports.WindowShieldCenterBare = WindowShieldCenterBare;
module.exports.default = WindowShieldCenterBare;
