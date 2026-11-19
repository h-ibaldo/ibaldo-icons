'use strict';

const { defineComponent, h } = require('vue');

const LockSharp = defineComponent({
  name: 'LockSharp',
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
          h('rect', {"x":"5.974731450040053","y":"13.000000000447471","width":"12","height":"9"}),
          h('path', {"d":"M7.974731445079669,13.000000000447471v-7.000003997516615c0-2.209136791556375,1.790859210919734-3.999996002483385,3.999996002479747-3.999996002483385h.000008000000889c2.209136796720486,0,3.999996009799361,1.790859218992409,3.999996002479747,3.999996015711076l-.000000019850631,7.000003984288924"})
        ]
      );
  }
});

module.exports = LockSharp;
module.exports.LockSharp = LockSharp;
module.exports.default = LockSharp;
