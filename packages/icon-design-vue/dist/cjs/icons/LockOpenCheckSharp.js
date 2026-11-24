'use strict';

const { defineComponent, h } = require('vue');

const LockOpenCheckSharp = defineComponent({
  name: 'LockOpenCheckSharp',
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
          h('path', {"d":"M3.067167566010539,12.056394887018541v-6.000003997516615c0-2.209136791556375,1.790859210928829-3.999996002483385,3.999996002479747-3.999996002483385h.000008000009984c2.209136796709572,0,3.999996009779352,1.790859218992409,3.999996002479747,3.999996015711076l-.000000019850631,7.000003984288924"}),
          h('polyline', {"points":"16.067167566010539 20.056394887018541 18.067167566010539 22.056394887018541 22.067167566010539 18.056394887018541"}),
          h('polyline', {"points":"13.067167566010539 22.056394887018541 9.067167566010539 22.056394887018541 9.067167566010539 13.056394887018541 21.067167566010539 13.056394887018541 21.067167566010539 15.056394887018541"})
        ]
      );
  }
});

module.exports = LockOpenCheckSharp;
module.exports.LockOpenCheckSharp = LockOpenCheckSharp;
module.exports.default = LockOpenCheckSharp;
