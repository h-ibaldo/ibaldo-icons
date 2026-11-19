'use strict';

const { defineComponent, h } = require('vue');

const HousePentagon = defineComponent({
  name: 'HousePentagon',
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
          h('path', {"d":"M11.350651399779963,2.500528801292603L2.374341435499446,9.699768210253751c-.236643122669193.189794080346473-.374341435319366.476746133219422-.374341435319366.780097019887762v10.520134770700679c0,.552284749828686.447715250169495,1,1,1h18c.552284749830505,0,1-.447715250171314,1-1v-10.51861742273104c0-.304215286410908-.138480516779964-.591887760059763-.376266452700293-.78163703978862L12.6000435117694,2.498988781391745c-.365579069888554-.291726106188435-.884533324049698-.291086435208854-1.249392111989437.001540019900858Z"})
        ]
      );
  }
});

module.exports = HousePentagon;
module.exports.HousePentagon = HousePentagon;
module.exports.default = HousePentagon;
