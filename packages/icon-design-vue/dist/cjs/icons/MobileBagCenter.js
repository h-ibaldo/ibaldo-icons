'use strict';

const { defineComponent, h } = require('vue');

const MobileBagCenter = defineComponent({
  name: 'MobileBagCenter',
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
          h('path', {"d":"M2.999999988971467,21.998779300212846V3.998779300212846c0-1.104569499661011.895430500340808-2,2-2h14c1.104569499661011,0,2,.895430500338989,2,2v18"}),
          h('polyline', {"points":"7.000004463861842 1.998778300212507 8.999999988971467 3.998778966883037 14.999999745192326 3.998779966883376 16.999999988971467 1.998778966883037"}),
          h('rect', {"x":"6.999999988971467","y":"11.998778300212507","width":"10","height":"7","rx":"1","ry":"1"}),
          h('path', {"d":"M13.999999988971467,13.998779300212846v-3.000003000001016c0-1.10456839509061-.895429604908713-1.999997999999323-1.999998000008418-1.999997999999323h-.00000399999044c-1.10456839509061,0-1.999998000001142.895429604908713-1.999998000001142,1.999997999999323v3.000003000001016"})
        ]
      );
  }
});

module.exports = MobileBagCenter;
module.exports.MobileBagCenter = MobileBagCenter;
module.exports.default = MobileBagCenter;
