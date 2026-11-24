'use strict';

const { defineComponent, h } = require('vue');

const CloudBanRound = defineComponent({
  name: 'CloudBanRound',
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
          h('g', {}, [
            h('circle', {"cx":"11.999999999998181","cy":"16.999999973497324","r":"4"}),
            h('line', {"x1":"14.828450520832121","y1":"14.171549452657928","x2":"9.17154947916606","y2":"19.828450494329445"})
          ]),
          h('path', {"d":"M19.000000010777512,18.577880832857772c1.764404296875-.77215576170056,3-2.52868652341931,3-4.577880859360448,0-2.44482421875-1.757080078125-4.47235107421875-4.07568359375-4.906860351558862-.438232421875-2.882202148441138-2.919677734375-5.093139648441138-5.92431640625-5.093139648441138s-5.486083984375,2.2109375-5.92431640625,5.093139648441138c-2.318603515625.434509277340112-4.07568359375,2.462036132808862-4.07568359375,4.906860351558862,0,2.049194335941138,1.235595703125,3.805725097659888,3,4.577880859360448"})
        ]
      );
  }
});

module.exports = CloudBanRound;
module.exports.CloudBanRound = CloudBanRound;
module.exports.default = CloudBanRound;
