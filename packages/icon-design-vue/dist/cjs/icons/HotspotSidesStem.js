'use strict';

const { defineComponent, h } = require('vue');

const HotspotSidesStem = defineComponent({
  name: 'HotspotSidesStem',
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
          h('path', {"d":"M16.217372136532504,7.757359313263805c2.343145750431177,2.343145750326585,2.343145750511212,6.142135623807917.000000000189175,8.485281374238184"}),
          h('path', {"d":"M7.732090762481675,16.242640687691164c-2.343145750429358-2.343145750324766-2.343145750519398-6.142135623806098-.000000000189175-8.485281374236365"}),
          h('path', {"d":"M19.045799261213688,4.928932188454382c3.905242917388932,3.905242917211581,3.905242917528994,10.236892706344406.000000000320142,14.142135623728791"}),
          h('path', {"d":"M4.90366363780231,19.071067812503316c-3.905242917388932-3.905242917211581-3.905242917528994-10.236892706347135-.000000000320142-14.142135623731519"}),
          h('circle', {"cx":"11.974731449501633","cy":"12.000000000636646","r":"2"}),
          h('line', {"x1":"11.974731449501633","y1":"22.000000000476575","x2":"11.974731449501633","y2":"14.000000000480213"})
        ]
      );
  }
});

module.exports = HotspotSidesStem;
module.exports.HotspotSidesStem = HotspotSidesStem;
module.exports.default = HotspotSidesStem;
