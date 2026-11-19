'use strict';

const { defineComponent, h } = require('vue');

const PollChat = defineComponent({
  name: 'PollChat',
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
          h('line', {"x1":"6","y1":"14.000000000689397","x2":"6.00000000036016","y2":"9.000000000598448"}),
          h('line', {"x1":"14","y1":"14.000000001045919","x2":"14.000000000130967","y2":"12.000000000689397"}),
          h('line', {"x1":"18","y1":"14.000000001227818","x2":"18.000000000211003","y2":"10.000000000689397"}),
          h('line', {"x1":"10","y1":"14.000000000867658","x2":"10.000000000531145","y2":"6.000000000598448"}),
          h('path', {"d":"M22.000000000560249,5.000000001082299l-.000000000589353,9.999999999552529c-.000000000090949,1.656854249478783-1.34314575064127,2.999999999901775-3.000000000130967,2.999999999829015l-12.999997031949533-.000000000582077-4.000002968079571,3.999999999938154.000000000760338-16.999999999679858c.000000000080036-1.656854249489697,1.343145750648546-2.999999999930878,3.000000000149157-2.999999999858119l13.999999999959982.00000000062937c1.656854249509706.00000000007276,2.999999999959982,1.343145750663098,2.999999999879947,3.000000000170985Z"})
        ]
      );
  }
});

module.exports = PollChat;
module.exports.PollChat = PollChat;
module.exports.default = PollChat;
