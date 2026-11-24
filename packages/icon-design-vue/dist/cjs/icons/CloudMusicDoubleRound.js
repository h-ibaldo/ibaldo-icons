'use strict';

const { defineComponent, h } = require('vue');

const CloudMusicDoubleRound = defineComponent({
  name: 'CloudMusicDoubleRound',
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
            h('polyline', {"points":"16 12.999999973497324 9 13.999999973497324 9 20.999999973497324"}),
            h('ellipse', {"cx":"7.5","cy":"20.999999973497324","rx":"1.5","ry":"1"})
          ]),
          h('g', {}, [
            h('line', {"x1":"16","y1":"12.999999973497324","x2":"16","y2":"19.999999973497324"}),
            h('ellipse', {"cx":"14.5","cy":"19.999999973497324","rx":"1.5","ry":"1"})
          ]),
          h('path', {"d":"M20,15.979431125837436c1.209655761720569-.911376953128638,2-2.348022460930224,2-3.979431152340112,0-2.44482421875-1.757019042970569-4.47235107421875-4.075744628909888-4.906860351558862-.438171386709655-2.882202148441138-2.919616699209655-5.093139648441138-5.924255371090112-5.093139648441138-3.004638671869543,0-5.486083984369543,2.2109375-5.924255371090112,5.093139648441138-2.318725585939319.434509277340112-4.075744628909888,2.462036132808862-4.075744628909888,4.906860351558862,0,2.047790527340112,1.237548828130457,3.796447753909888,3,4.5693359375"})
        ]
      );
  }
});

module.exports = CloudMusicDoubleRound;
module.exports.CloudMusicDoubleRound = CloudMusicDoubleRound;
module.exports.default = CloudMusicDoubleRound;
