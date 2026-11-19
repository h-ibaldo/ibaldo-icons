'use strict';

const { defineComponent, h } = require('vue');

const LockOpenCheckRound = defineComponent({
  name: 'LockOpenCheckRound',
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
          h('polyline', {"points":"8.949462885142566 15.331108250880789 10.949462885142566 17.331108244550705 14.949462885142566 13.331108244732604"}),
          h('circle', {"cx":"11.949462885142566","cy":"15.000000000480213","r":"7.000000000000001"}),
          h('path', {"d":"M16.527343744112841,5.000000000480213c-.772216796869543-1.764404296875-2.528686523430224-3-4.577880859369543-3-2.761413574221478,0-5,2.23858642578125-5,5v3"})
        ]
      );
  }
});

module.exports = LockOpenCheckRound;
module.exports.LockOpenCheckRound = LockOpenCheckRound;
module.exports.default = LockOpenCheckRound;
