'use strict';

const { defineComponent, h } = require('vue');

const CloudUnlockRound = defineComponent({
  name: 'CloudUnlockRound',
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
          h('rect', {"x":"8","y":"15.999999973497324","width":"8","height":"6"}),
          h('path', {"d":"M19,16.577880832857772c1.764404296869543-.77215576170056,3-2.52868652341931,3-4.577880859360448,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386720569-2.882202148441138-2.919616699220569-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671880457,0-5.486083984380457,2.2109375-5.924255371099207,5.093139648441138-2.318725585930224.434509277340112-4.075744628900793,2.462036132808862-4.075744628900793,4.906860351558862,0,2.049194335941138,1.235595703119543,3.805725097659888,3,4.577880859360448"}),
          h('path', {"d":"M14.221435546869543,11.999999973497324c-.549133300779431-.60955810546875-1.33642578125-1-2.221435546869543-1-1.656860351560681,0-3,1.343139648441138-3,3v2"})
        ]
      );
  }
});

module.exports = CloudUnlockRound;
module.exports.CloudUnlockRound = CloudUnlockRound;
module.exports.default = CloudUnlockRound;
